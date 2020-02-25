<template>
  <div>
    <el-steps :active="active" finish-status="success" >
      <el-step title="基本信息"></el-step>
      <el-step title="课程图片"></el-step>
      <el-step title="课程营销"></el-step>
      <el-step title="课程计划"></el-step>
      <el-step title="教师信息"></el-step>
      <el-step title="发布课程"></el-step>
    </el-steps>
  </div>
</template>
<script>

  export default {
    props: ['active'],
    data() {
      return {

      }
    },
    methods: {

    },
    mounted(){

    }
  }
</script>
<style scoped>


</style>
