<template>
  <div>
    <p-head></p-head>
    <div class="note-release-success">
      <!--<p class="ico"><img src="/static/images/page-success.png" alt=""></p>-->
      <p class="title" >对不起，您没有此操作的访问权限！</p>
      <!--<p class="info"></p>-->
      <p class="button"><a href="http://www.xuecheng.com" class="active">返回首页</a><router-link :to="{path: '/login',query: {returnUrl: this.returnUrl}}">重新登陆</router-link></p>
    </div>

    <p-foot></p-foot>
  </div>
</template>
<script>
import PHead from '@/base/components/head.vue';
import PFoot from '@/base/components/foot.vue';
import utilApi from '../../../common/utils';
export default {
	components:{
		PHead,
    PFoot
	},
  data() {
    return {
      returnUrl:''
    }
  },
  methods: {

  },
  mounted() {
    let returnUrl = this.$route.query.returnUrl
    this.returnUrl = returnUrl
  }
}
</script>
<style scoped>
  @import './../../../../static/css/page-learing-note-release-success.css';
  .login-form{width: 400px;margin:5% auto 0;}
</style>
