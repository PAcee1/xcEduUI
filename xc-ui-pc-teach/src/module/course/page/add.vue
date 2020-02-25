<template >
  <div>
   <!--<el-button type="primary" @click="handleAdd">新增</el-button>-->
    <!--新增界面-->
   <!-- <el-dialog title="新增课程" :visible.sync="addFormVisible" :close-on-click-modal="false" >-->
      <el-form   :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm" >
        <el-form-item label="课程名称" prop="name">
          <el-input v-model="addForm.name" auto-complete="off" ></el-input>
        </el-form-item>
        <el-form-item label="作者" prop="author">
          <el-input  v-model="addForm.author" ></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-radio-group v-model="addForm.status">
            <el-radio class="radio" :label="0">未发布</el-radio>
            <el-radio class="radio" :label="1">已发布</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="创建时间">
          <el-date-picker type="datetime" placeholder="选择日期" v-model="addForm.createtime"></el-date-picker>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
          <el-button @click="go_back">返回</el-button>
        <el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交</el-button>
      </div>
    <!--</el-dialog>-->
  </div>
</template>
<script>
  import * as courseApi from '../api/course';
  import utilApi from '../../../common/utils';
export default {
  data() {
    return {
      goback_params:{
        page:this.$route.query.page,
        name:this.$route.query.name
      },
      addLoading: false,//加载效果标记
      addFormVisible: false,//新增界面是否显示
      //新增界面数据
      addForm: {
        name: '',
        status: 0,
        createtime: new Date(),
        author: ''
      },
      addFormRules: {
        name: [
          { required: true, message: '请输入课程名称', trigger: 'blur' }
        ],
        author: [
          { required: true, message: '请输入课程名称', trigger: 'blur' }
        ]
      },

    }
  },
  methods: {
    go_back: function () {
      this.$router.push({ path: '/course/list', query:{
        page: this.goback_params.page,
        name: this.goback_params.name}})
    },
    //显示新增界面
    handleAdd: function () {
//        console.log(this.$refs);
      this.addFormVisible = true;
      this.addForm = {
          name: '',
          status: 0,
          createtime: new Date(),
          author: ''
      }
    },
    //新增
    addSubmit: function () {
      this.$refs.addForm.validate((valid) => {
        if (valid) {
          this.$confirm('确认提交吗？', '提示', {}).then(() => {
            this.addLoading = true;
            //NProgress.start();
            let para = Object.assign({}, this.addForm);
            //console.log(para.createtime)
            courseApi.addCourse(para).then((res) => {
              this.addLoading = false;
              //NProgress.done();
              this.$message({
                message: '提交成功',
                type: 'success'
              });
              this.$refs['addForm'].resetFields();
              this.go_back();
            });
          });
        }
      });
    }
  }
}
</script>
<style scoped>


</style>
