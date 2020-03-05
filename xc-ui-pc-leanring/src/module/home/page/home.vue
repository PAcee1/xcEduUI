<template>
<div>
  <p-head></p-head>
  <div class="personal-header" style="background-image: url(static/images/asset-banner.png);"></div>
  <!-- 页面 -->
  <div class="container">
    <div class="personal-nav pull-left">
      <div class="nav nav-stacked text-left">
        <div class="title">个人中心</div>
        <div class="my-ico">
          <img src="/static/images/asset-myimg.jpg" alt="">
          <p>梦醒时分</p>
        </div>
        <div class="item">

          <li> <router-link class="mui-tab-item glyphicon glyphicon-tower" :to="{path:'/'}">&nbsp;&nbsp;我的课程<i class="pull-right">></i> </router-link></li>
          <li> <router-link class="mui-tab-item glyphicon glyphicon-tower" :to="{path:'/order'}">&nbsp;&nbsp;我的订单<i class="pull-right">></i> </router-link></li>
          <li><a href="#" class="glyphicon glyphicon-envelope">&nbsp;&nbsp;我的消息<i class="pull-right">></i></a></li>
          <li><a href="#" class="glyphicon glyphicon-heart">&nbsp;&nbsp;我的收藏<i class="pull-right">></i></a> </li>
          <li><router-link class="mui-tab-item glyphicon glyphicon-tower" :to="{path:'/setting'}">&nbsp;&nbsp;个人设置<i class="pull-right">></i></router-link></li>
          <!--<li><a href="#" class="glyphicon glyphicon-log-out"> 退出<i class="pull-right">></i></a></li>-->
        </div>
      </div>
    </div>
    <div class="personal-content pull-right">
      <router-view></router-view>
       <course-list></course-list>
    </div>
  </div>

  <p-foot></p-foot>
</div>
</template>

<script>
  import PHead from '@/base/components/head.vue';
  import PFoot from '@/base/components/foot.vue';
//  import courseList from '@/module/course/page/course_list.vue';

//  import $ from  './../../../../static/plugins/jquery/dist/jquery.js'
//  import './../../../../static/plugins/bootstrap/dist/js/bootstrap.js'
  export default {
    components:{
      PHead,
      PFoot
    },
    data() {
      return {

      }
    },
    methods: {

    },
    mounted() {
      //跳转到我的课程
      //this.$router.push({ path: '/course'})

      $(function() {
        $('.aft').hover(function() {
          if (!$(this).hasClass('ac')) {
            $(this).find('ul').html($('#listcont').html())
            $(this).addClass('ac')
          } else {
            $(this).find('ul').text('')
            $(this).removeClass('ac')
          }
        })
      })


      $(function() {
        $(window).scroll(function() {
          console.log($(this)[0].scrollY)
          if ($(this)[0].scrollY > 235) {
            $('.personal-nav').css({
              'position': 'fixed',
              'top': 10
            });
          } else if ($(this)[0].scrollY <= 155) {
            $('.personal-nav').css({
              'position': 'relative',
              'top': -70
            });
          };
        })
      })
    }
  }

</script>

<style>
  @import './../../../../static/plugins/normalize-css/normalize.css';
  /*@import './../../../../static/plugins/bootstrap/dist/css/bootstrap.css';*/
  @import './../../../../static/css/page-learing-personal.css';

</style>
