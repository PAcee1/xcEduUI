<template>
  <div class="allclass-content">
    <div class="top-title"><span class="active" id="all">全部课程</span> <span id="wait">待付款</span> <span
      id="succ">已完成</span><span id="outs">已关闭</span></div>
    <div class="nav">
      <div><span class="col-md-6">课程信息</span><span class="col-md-4"><em>订单金额</em><em>实付款</em><em>交易状态</em></span><span
        class="col-md-2">交易操作</span></div>
    </div>
    <div class="content">
      <div class="all show">
        <div class="allclass-cont">
          <div class="content">
            <div class="item" v-for="order in orderList">
              <div class="time-orderid"><span>{{order.startTime| formatDate}}</span> 订单号：{{order.orderNumber}}</div>
              <div class="item-content">
                <div class="item-left col-lg-2"><img v-if="courseMap[order.xcOrdersDetails[0].itemId] && courseMap[order.xcOrdersDetails[0].itemId].pic" :src="'http://img.xuecheng.com/'+JSON.parse(courseMap[order.xcOrdersDetails[0].itemId].pic)[0]" width="100%" alt="" ></div>
                <div class="item-cent col-lg-4">
                  <div class="title" v-for="orderDetail in order.xcOrdersDetails" v-if="courseMap[orderDetail.itemId] && courseMap[orderDetail.itemId].name">{{courseMap[orderDetail.itemId].name}}</div>
                  <!--<div class="star-show">
                    <div class="score"><i></i></div>
                  </div>-->
                  <!--<div class="text">课程打分 <em>4.9星</em></div>-->
                 <!-- <div class="cont">有效日期：2016.12.13-2016.09.15</div>-->
                </div>

                <div class="col-lg-4 lab-info">
                  <span>{{order.initialPrice}}</span><span>{{order.price}}</span><span v-if="order.status == '401001'">待支付</span><span v-if="order.status == '401002'">已完成</span><span v-if="order.status == '401003'">已取消</span>
                </div>
                <div class="item-rit col-lg-2" v-if="order.status == '401001'">

                  <router-link :to="'/pay/'+order.orderNumber" target="_blank">去 支 付 </router-link>
                  <a href="#">取消订单</a>
                </div>
                <div class="item-rit col-lg-2" v-if="order.status != '401001'">
                  <br/>
                  <router-link :to="'/pay/'+order.orderNumber" target="_blank">查看</router-link>

                </div>
              </div>
            </div>
            <!--<div class="item">
              <div class="time-orderid"><span>2017-06-23</span> 订单号：889890269027</div>
              <div class="item-content">
                <div class="item-left col-lg-2"><img src="/static/images/widget-dem.png" width="100%" alt=""></div>
                <div class="item-cent col-lg-4">
                  <div class="title">程序设计语言</div>
                  <div class="star-show">
                    <div class="score"><i></i></div>
                  </div>
                  <div class="text">课程打分 <em>4.9星</em></div>
                  <div class="cont">有效日期：2016.12.13-2016.09.15</div>
                </div>
                <div class="col-lg-4 lab-info">
                  <span>$1000</span><span>$1000</span><span>待支付</span>
                </div>
                <div class="item-rit col-lg-2">
                  <a href="#" class="">去 支 付 </a>
                  <a href="#">取消订单</a>
                </div>
              </div>
            </div>-->


            <div class="page-item"><span>首页</span><span>上一页</span><span
              class="active">1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>下一页</span><span>尾页</span>
            </div>
          </div>

        </div>
      </div>
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
          page:1,
          size: 20,
          orderList:[],
          courseMap:{},
          testMap:{

          }
      }
    },
    filters: {
      formatDate(time) {
        var date = new Date(time);
        return utilApi.formatDate(date, 'yyyy-MM-dd hh:mm');
      }
    },
    methods: {
        getCoursePic(id){//4028e58161bcf7f40161bcf8b77c0000
            return JSON.parse(courseMap[id].pic)[0]
        },
      findCourseByIds(){
//根据课程id取课程信息
        let course_ids =''
        this.orderList.forEach(function (value) {
          console.log(value);
          let xcOrdersDetails = value.xcOrdersDetails;
          xcOrdersDetails.forEach(function(val){
            let course_id = val.itemId;
            course_ids+=course_id+','
          })

        });
        console.log(course_ids)
        orderApi.course_findByIds(course_ids).then((res)=>{
          console.log(res)
          if(res){
//            let courseMap = Object.assign({}, res.data);
            this.courseMap =res;
            console.log(this.courseMap)
//            alert(JSON.parse(this.courseMap['id4028e58161bcf7f40161bcf8b77c0000'].pic)[0])
          }
        })
      }
    },
    created(){

      let params = {}

      orderApi.order_list(this.page,this.size,params).then((res)=>{
        console.log(res)
        if(res.success){
          this.orderList = res.queryResult.list;
          console.log(this.orderList)
          this.findCourseByIds()

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

