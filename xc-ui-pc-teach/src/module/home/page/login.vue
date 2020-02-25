<template>
  <div>
    <el-row class="container">
    <p-head></p-head>
    <div id="body">
      <div class="g-center login-page" @keyup.enter="login">
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
      </div>

    </div>
    </el-row>
  </div>
</template>
<script>
import PHead from '@/base/components/head.vue';
import utilApi from '../../../common/utils';
import * as loginApi from '../api/home';
export default {
	components:{
		PHead
	},
  data() {
    return {
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
      }
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
                  //跳转到首页
                  this.$router.push({ path: '/'})
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
    }
  },
  mounted() {

  }
}
</script>
<style scoped>
  .login-form{width: 400px;margin:13% auto 0;}
</style>
