<template>
  <div>
    <p-head></p-head>
    <!--主体内容-->
    <div class="container">
      <div class="learing-pay">
        <div class="tit">
          <div v-if="order.status =='401001'">订单将在 {{order.endTime | formatDate}} 自动取消，请尽快完成支付</div>
          <div class="info">
            <p><span>订单号：{{orderNumber}}</span>
              <span>支付金额：<em>￥ {{order.price}}</em></span>
              <span v-if="order.status=='401001'">订单状态：未支付 </span>
              <span v-if="order.status=='401002'">订单状态：已支付 </span>
              <span v-if="order.status=='401003'">订单状态：已取消 </span>
            </p>
<!--            <p><span>订单详情 <i class="	glyphicon glyphicon-download"></i></span></p>-->
          </div>

        </div>
        <div class="pay-list">
          <div class="top"><span>课程名称</span><span>小计(元)</span></div>
          <div class="row" v-for="orderDetail in orderDetails">
            <p><span v-if="courseMap&&courseMap.courseBase">{{courseMap.courseBase.name}}</span><span>{{orderDetail.itemPrice}}</span></p>
            <!--<p><span>Python爬虫：脚本爬虫和Scrapy框架</span><span>2000</span></p>-->
          </div>
        </div>
        <div v-if="order.status =='401001'">
        <div class="tit">选择支付方式</div>
        <div class="pay-method">
          <!--<span  class="weixin"><router-link :to="'/weixinpay/'+this.orderNumber" target="_blank">微信扫码</router-link></span>-->

          <span href="#" class="weixin" @click="weixinpay">微信支付</span>
          <span href="#" class="zfb">支 付 宝</span>

          <!--<p><a class="go-pay">我的订单列表</a></p>-->
        </div>
        <el-dialog
          title="微信扫码"
          :visible.sync="weixinpayVisible"
          width="380px">
            订单号：{{orderNumber}} 支付金额：￥{{money}}元
            <qriously :value="codeUrl" :size="338" />
            <el-button type="primary"  @click="query_weixinpay">我已经完成支付</el-button>
        </el-dialog>
        </div>
        <div class="pay-method">
        <p><router-link to="/order" class="go-pay">我的订单列表</router-link></p>
        </div>
      </div>
    </div>
    <p-foot></p-foot>
  </div>
</template>

<script>
 import PHead from '@/base/components/head.vue';
 import PFoot from '@/base/components/foot.vue';
 import * as orderApi from '../api/order'
 import utilApi from '../../../common/utils';
  export default {
    components:{
      PHead,
      PFoot
    },
    data() {
      return {
        codeUrl: '',
        orderNumber:'',
        order:{},
        orderDetails:[],
        courseMap:{},
        itemIdList:[],
        itemId:'',
        money:'',
        weixinpayVisible: false
      }
    },

    methods: {
      weixinpay(){
        let params = {}
        params.orderNumber = this.orderNumber
        orderApi.pay_createWeixinQrcode(params).then((res)=>{
          console.log(res)
          if(res.success){
//            alert(res.success)
            if(res.codeUrl){
              this.codeUrl = res.codeUrl
              this.orderNumber = res.orderNumber
              this.money = res.money
              this.weixinpayVisible = true
            }else{
              this.$message.success("此订单已支付,请刷新页面！")
            }
          }else{
            this.$message.error("生成支付二维码失败，请刷新页面重试或与客服联系！")
          }
        })
      },
      query_weixinpay(){
        let params = {
          orderNumber:this.orderNumber
        }
        orderApi.pay_queryWeixinPayStatus(params).then((res)=>{
          console.log(res)
          if(res.success){
            if(res.xcOrdersPay && res.xcOrdersPay.status=='402002'){
              this.$message.success("支付成功！")
              //查询订单信息
              this.query_order(this.orderNumber)
            }else{
              this.$message.error("还未支付完成，请扫码支付！")
            }
          }else{
            this.$message.error("查询支付结果失败，请刷新页面重试！")
          }
        })
      },
      query_order(orderNumber){
        //获取订单信息
        orderApi.order_findById(orderNumber).then((res)=>{
          if(res.success){
            this.order = res.xcOrders
            try {
              this.orderDetails = JSON.parse(res.xcOrders.details)
              this.orderDetails.forEach((detail,index)=>{
                  this.itemId = detail.itemId
                }
              )
            } catch (e) {
            }
            if(this.itemId){
              //取出商品信息
              orderApi.course_view(this.itemId).then((res)=>{
                if(res){
                  this.courseMap =res;
                }
              })
            }

          }
        })
      }
    },
    created(){
    //获取订单号
      this.orderNumber = this.$route.params.orderNumber
      this.query_order(this.orderNumber)

    },
    mounted() {




    }
  }

</script>

<style>
  @import './../../../../static/css/page-learing-pay.css';

</style>

