<template>
  <div>

        <el-row class="container" style="width: 470px">

          <div id="body">
            <div class="g-center login-page" @keyup.enter="login">
              <el-tabs v-model="activeName" >
                <el-tab-pane label="用户登陆" name="login">
              <el-form :model="loginForm" label-width="80px" :rules="loginRules" ref="loginForm" class="login-form">
                <el-form-item label="账号" prop="username">
                  <el-input v-model="loginForm.username" auto-complete="off" ></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                  <el-input v-model="loginForm.password" auto-complete="off" ></el-input>
                </el-form-item>
                <el-form-item >
                  <el-button type="primary"  @click.native="login" :loading="editLoading">登陆</el-button>
                  <el-button type="primary"  @click="resetForm('loginForm')">重置</el-button>
                </el-form-item>
              </el-form>
                </el-tab-pane>
                <el-tab-pane label="用户注册" name="register">
                  建设中..
                </el-tab-pane>
              </el-tabs>
            </div>

        </div>

        </el-row>


  </div>
</template>
<script>

import utilApi from '~/api/utils';
import * as loginApi from '~/api/login';

import Vue from 'vue'
export default {
	components:{

	},
  data() {
    return {
      activeName: 'login',
      editLoading: false,
      loginForm: {
        username:'',
        password: ''
      },
      loginRules: {
        username: [
          {required: true, message: '请输入账号', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ]
      },
      user:{
        userid:'',
        username: '',
        userimg: ''
      },
      logined:false,
      returnUrl:''
    }
  },
  methods: {
    login: function () {

        this.$refs.loginForm.validate((valid) => {
          if (valid) {

              this.editLoading = true;

              let para = Object.assign({}, this.loginForm);

              loginApi.login(para).then((res) => {
                this.editLoading = false;
                if(res.success){
                  this.$message('登陆成功');
                  //刷新 当前页面
                  window.location.reload()
                 // alert(this.returnUrl)
                  //console.log(this.returnUrl)
//                  let returnUrl = window.location
////                                    alert(returnUrl)
//                  if(returnUrl!='undefined' && returnUrl!=''){
//                    //跳转到首页
//                    window.location.href = returnUrl;
//                  }else{
//                    window.location.href = 'http://www.xuecheng.com/'
//                  }

                }else{
                    if(res.message){
                      this.$message.error(res.message);
                    }else{
                      this.$message.error('登陆失败');
                    }
                }
              },
                (res) => {
                  this.editLoading = false;
                });


          }
        });

    },

    resetForm:function(formName){
      this.$refs[formName].resetFields();
    },
    refresh_user:function(){
      let activeUser= utilApi.getActiveUser();

      if(activeUser){
        this.logined = true
        this.user = activeUser;
        //console.log(this.user.username)
      }else{
        this.showlogin()
      }
    },
    showlogin:function(){
       this.LoginFormVisible = true;
    }
  },
  created() {
    // var this_ = this;
    //bus.$on('childa-message', this.showlogin(this_));


  },
  mounted() {
    this.refresh_user()
//    Vue.prototype.loginwin = this;
    if( this.$route.query &&  this.$route.query.returnUrl){

      let returnUrl =  Base64.decode(this.$route.query.returnUrl)
      //alert(returnUrl)
      this.returnUrl = returnUrl;
      //alert(this.returnUrl)
    }
    /*bus.$on('childa-message', function(data) {
      console.log("aaaaaaaaaaaaa"+data)
      alert(this.LoginFormVisible)
      this.LoginFormVisible = true
      alert(this.LoginFormVisible)
    });*/



  }
}
</script>
<style scoped>
  .login-form{width: 400px;margin:5% auto 0;}
</style>
