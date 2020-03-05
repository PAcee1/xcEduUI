<template>
  <div class="personal-content">
    <div class="only-setting">
      <div class="title">个人设置</div>
      <div class="portrait">
        <img src="/static/images/asset-myimg.jpg" alt="">
        <span>梦醒时分 </span> <span class="ch">修改昵称 ></span>
      </div>
      <div class="title">账户设置</div>
      <div class="account">
        <div class="item">
          <div class="ico" style="background-position: 3px 10px"></div>
          <div>
            <p><em>手机</em>已绑定（0086 138****9685）</p>
            <p>您可以享受手机相关的安全及提醒服务</p>
          </div>
          <input type="submit" class="submit" value="修改手机">
        </div>
        <div class="item">
          <div class="ico" style="background-position: -41px 10px"></div>
          <div>
            <p><em>密码</em>已绑定（0086 138****9685）</p>
            <p>您可以享受手机相关的安全及提醒服务</p>
          </div>
          <input type="submit" class="submit" value="修改密码">
        </div>
        <div class="item">
          <div class="ico" style="background-position: -84px 10px"></div>
          <div>
            <p><em>邮箱</em>已绑定（0086 138****9685）</p>
            <p>您可以享受手机相关的安全及提醒服务</p>
          </div>
          <input type="submit" class="submit" value="修改邮箱">
        </div>
      </div>
      <div class="title">社交账户 <span> 绑定第三方账号，可以直接登录，还可以将内容同步到以下平台，与更多的好友分享</span></div>
      <div class="social">
        <div class="item">
          <div class="ico" style="background-position: -120px 10px"></div>
          <div>
            <p><em>QQ </em>已绑定（0086 138****9685）</p>
            <p>您可以享受手机相关的安全及提醒服务</p>
          </div>
          <input type="submit" class="submit" value="添加绑定">

        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    components: {},
    data() {
      return {}
    },
    methods: {},
    mounted() {

    }
  }

</script>

<style>
  @import './../../../../static/css/page-learing-personal-mail.css';

</style>
