<template>
  <div>
    <el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
      <el-form-item label="课程名称" prop="name">
        <el-input v-model="editForm.name" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="作者" prop="author">
        <el-input v-model="editForm.author"></el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-radio-group v-model="editForm.status">
          <el-radio class="radio" :label="0">未发布</el-radio>
          <el-radio class="radio" :label="1">已发布</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="创建时间">
        <el-date-picker type="datetime" placeholder="选择日期" v-model="editForm.createtime"></el-date-picker>
      </el-form-item>

    </el-form>
    <div slot="footer" class="dialog-footer">
        <el-button @click="go_back">返回</el-button>
      <el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
    </div>
  </div>
</template>
<script>
  import * as courseApi from '../api/course';
  import utilApi from '../../../common/utils';
  export default {
    data() {
      return {
        editLoading: false,
        goback_params: {
          page: this.$route.query.page,
          name: this.$route.query.name
        },
        editForm: {
          name: '',
          status: 0,
          createtime: new Date(),
          author: ''
        },
        editFormRules: {
          name: [
            {required: true, message: '请输入课程名称', trigger: 'blur'}
          ],
          author: [
            {required: true, message: '请输入课程名称', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      go_back: function () {
        this.$router.push({ path: '/course/list', query:{
          page: this.goback_params.page,
          name: this.goback_params.name}})
      },
      editSubmit: function () {
        this.$refs.editForm.validate((valid) => {
          if (valid) {
            this.$confirm('确认提交吗？', '提示', {}).then(() => {
              this.editLoading = true;
              //NProgress.start();
              let para = Object.assign({}, this.editForm);
              courseApi.editCourse(para).then((res) => {
                this.editLoading = false;
                //NProgress.done();
                this.$message({
                  message: '提交成功',
                  type: 'success'
                });
                this.$refs['editForm'].resetFields();
                this.go_back();
              });
            });
          }
        });
      }
    },
    mounted(){
      //根据id查询课程
//    let row = {
//      name: 'abc',
//      status: 1,
//      createtime: new Date(),
//      author: 'fdfd'
//    }
      let id = this.$route.query.id;
      console.log("id=" + id)
      let para = {id: id};
      courseApi.getCourseById(para).then((res) => {
        //console.log(res.courses[0]);
        this.editForm = Object.assign({}, res.courses[0]);
      });

    }
  }
</script>
<style scoped>


</style>
