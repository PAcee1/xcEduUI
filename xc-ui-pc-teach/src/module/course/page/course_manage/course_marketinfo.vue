<template>
  <div>
    <el-form :model="courseMarketForm" label-width="110px" :rules="courseMarketFormRules" ref="courseMarketForm">
      <el-form-item label="课程价格" prop="charge">
        <b v-for="charge in chargeList">
          <el-radio v-model="courseMarketForm.charge" :label="charge.sdId" >{{charge.sdName}}</el-radio>
          &nbsp;&nbsp;
        </b>
        <br/>
        金额（元）：<el-input :disabled="this.courseMarketForm.charge == '203002'?false:true" v-model="courseMarketForm.price" ></el-input>
      </el-form-item>
      <el-form-item label="课程有效期" prop="expires">
        <b v-for="valid in validList">
          <el-radio v-model="courseMarketForm.valid" :label="valid.sdId" >{{valid.sdName}}</el-radio>&nbsp;&nbsp;
        </b>
        <br/>
        开始时间：
        <el-date-picker :disabled="this.courseMarketForm.valid == '204002'?false:true"  type="date" placeholder="选择日期" v-model="courseMarketForm.startTime"></el-date-picker>
        结束时间：
        <el-date-picker :disabled="this.courseMarketForm.valid == '204002'?false:true"  type="date" placeholder="选择日期" v-model="courseMarketForm.endTime"></el-date-picker>
      </el-form-item>
      <el-form-item label="服务咨询QQ" prop="qq">
        <el-input v-model="courseMarketForm.qq" ></el-input>
      </el-form-item>

    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click.native="save" >提交</el-button>
    </div>
  </div>
</template>
<script>
  import * as courseApi from '../../api/course';
  import utilApi from '../../../../common/utils';
  import * as systemApi from '../../../../base/api/system';
  export default {
    data() {
      return {
        active: 1,
        dotype:'',
        courseid:'',
        chargeList:[],
        validList:[],
        price_tag:false,
        expires_tag:false,
        courseMarketForm: {
          id:'',
          charge:'',
          valid:'',
          price:'',
          expires: '',
          startTime: '',
          endTime: '',
          users: '',
          expiration:[],
          courseid:this.courseid
        },
        courseMarketFormRules: {
          free: [
            {required: true, message: '请选择收费规则', trigger: 'blur'}
          ],
          valid: [
            {required: true, message: '请选择有效期', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      save: function () {
        this.$refs.courseMarketForm.validate((valid) => {
          if (valid) {
            this.$confirm('确认提交吗？', '提示', {}).then(() => {
              courseApi.updateCourseMarket(this.courseid,this.courseMarketForm).then((res) => {
               this.editLoading = false;
               if(res.success){
                 this.$message.success('提交成功');
                 if(this.dotype == '1'){
                   //跳转到课程图片
                   this.$router.push({ path: '/course/add/plan/3/1/'+this.courseid})
                 }
               }else{
                 this.$message.error('提交失败');
               }
               });
            });
          }
        });
      }
    },
    mounted(){
        //操作类型
      this.dotype = this.$route.params.dotype;
      //课程id
      this.courseid = this.$route.params.courseid;

      this.courseMarketForm.id = this.courseid;
      //查询字典
      systemApi.sys_getDictionary('203').then((res) => {
        this.chargeList = res.dvalue;
      });
      systemApi.sys_getDictionary('204').then((res) => {
        this.validList = res.dvalue;
      });

      //获取课程营销信息
      courseApi.getCourseMarketById(this.courseid).then((res) => {
         //console.log(res);
        if(res && res.id){
           this.courseMarketForm = res;
        }
      });
    }
  }
</script>
<style scoped>


</style>
