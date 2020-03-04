<template>
  <div>
    我是身体？？
    <div>名称：{{name}}</div>
  </div>
</template>
<script>
  export default {
    layout: 'test',
    asyncData() {
      // 在这里可以请求服务端接口，然后渲染数据
      // 注意，这里是服务端了，所以不能使用 this.name = xxx
      return {
        name :'pace'
      }
    },
    data() {
      return {
        name : ''
      }
    },
    methods: {
      getUser(){
        // 调用接口
        this.name = 'Pacee1'
      }
    },
    mounted() {
      //this.getUser();
    },
  }
</script>
<style>
</style>