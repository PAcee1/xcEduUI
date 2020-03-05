<template>
  <!--头部导航-->
  <header>
    <div class="learingHeader">
      <nav class="navbar">
        <div class="">
          <div class="logo"><img src="/static/images/asset-logoIco.png" width="100%" alt=""></div>
          <div class="nav-list">
            <ul class="nav navbar-nav">
              <li ><a href="http://www.xuecheng.com/">首页</a></li>
              <li><a href="http://www.xuecheng.com/course/search">课程</a></li>
              <li><a href="#">职业规划</a></li>
              <li></li>
            </ul>
          </div>

          <div class="sign-in">
            <!-- 未登录 -->
            <!-- <a href="#">登录 </a> <span> | </span> <a href="#"> 注册</a>-->
            <!-- 登录 -->
           <!-- <a href="#" class="personal"><span class="personalIco"></span>消息</a>
            <a href="#" class="personal">购物车</a>-->
            <router-link :to="{path: '/'}">我的学习</router-link>
            <a href="javascript:;" @click="logout" v-if="logined == true">退出</a>
            <a href="javascript:;" @click="showlogin" v-if="logined == false">登陆|注册</a>

          </div>
          <div class="starch">
            <div><input type="text" class="input-search" v-model="keyword" @keyup.enter="search"  placeholder="输入查询关键词"></div>
            <div class="searchword"><a @click="search">搜索</a> </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>
<script type="text/javascript">

  import utilApi from '../../common/utils'
  import * as loginApi from '../../module/home/api/home'
  export default {
    components:{

    },
    data() {
      return {
        keyword:'',
        LoginFormVisible:false,
        logined:false
      }
    },
    methods: {
      search() {
        if (this.keyword === '') {
          window.location = "http://www.xuecheng.com/course/search"
        } else {
          let keyword = encodeURIComponent(this.keyword)
          window.location = "http://www.xuecheng.com/course/search?keyword="+keyword
        }
      },
      //退出登录
      logout: function () {
        this.$confirm('确认退出吗?', '提示', {
        }).then(() => {
          //跳转到统一登陆
          this.$router.push({ path: '/logout'})
        }).catch(() => {

        });
      },
      refresh_user:function(){
        let activeUser= utilApi.getActiveUser();

        if(activeUser){
          this.logined = true
          this.user = activeUser;
          //console.log(this.user.username)
        }else{
          //this.showlogin()
        }
      },
      showlogin:function(){
        this.returnUrl = window.location;
        this.LoginFormVisible = true;
      }
    },
    mounted() {
      this.refresh_user()

    }
  }
</script>
<style >
  @import './../../../static/plugins/normalize-css/normalize.css';
  /*@import './../../../static/plugins/bootstrap/dist/css/bootstrap.css';*/
  @import './../../../static/css/page-header.css';
</style>
