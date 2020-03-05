<template>
  <div>
  <div v-if="this.codeUrl!=''">
    订单号：{{orderNumber}} 支付金额：￥{{money}}元
    <qriously :value="codeUrl" :size="338" />
  </div>
  <div v-else-if="success && this.tradeState">
    订单号：{{orderNumber}}，支付状态：
    <span v-if="this.tradeState=='SUCCESS'">已支付</span>
      <span v-else-if="this.tradeState=='REFUND'">转入退款</span>
      <span v-else-if="this.tradeState=='CLOSED'">已关闭</span>
      <span v-else-if="this.tradeState=='REVOKED'">已撤销</span>
      <span v-else-if="this.tradeState=='USERPAYING'">支付中</span>
      <span v-else-if="this.tradeState=='PAYERROR'">支付关闭</span>
  </div>
    <div v-else="">

    </div>
  </div>
</template>

<script>
 import * as orderApi from '../api/order'
 import utilApi from '../../../common/utils';
  export default {
    components: {},
    data() {
      return {
        codeUrl: '',
        orderNumber:'',
        money:'',
        tradeState:'',
        success:true
      }
    },

    methods: {

    },
    created(){
        //获取订单号
      let orderNumber = this.$route.params.orderNumber
      let params = {}
      params.orderNumber = orderNumber
      orderApi.pay_createWeixinQrcode(params).then((res)=>{
        console.log(res)
        if(res.success){
//            alert(res.success)
            this.tradeState = res.tradeState;
            if(res.codeUrl){
              this.codeUrl = res.codeUrl
              this.orderNumber = res.orderNumber
              this.money = res.money
            }

        }else{
            //操作出现异常
            this.success = false;
        }
      })

    },
    mounted() {




    }
  }

</script>

<style>
  @import './../../../../static/css/page-learing-personal-allclass.css';

</style>

