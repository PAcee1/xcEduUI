<template>
  <div>
    <p-head></p-head>

    <login-form></login-form>

    <p-foot></p-foot>
  </div>
</template>
<script>
import PHead from '@/base/components/head.vue';
import PFoot from '@/base/components/foot.vue';
import loginForm from '@/base/components/loginForm.vue';
import utilApi from '../../../common/utils';
export default {
	components:{
		PHead,
    PFoot,
    loginForm
	},
  data() {
    return {

    }
  },
  methods: {

  },
  mounted() {

  }
}
</script>
<style scoped>
  .login-form{width: 400px;margin:5% auto 0;}
</style>
