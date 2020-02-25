<template>
  <div>
    <el-upload
      action="/api/filesystem/upload"
      list-type="picture-card"
      :before-upload="setuploaddata"
      :on-success="handleSuccess"
      :file-list="fileList"
      :limit="picmax"
      :on-exceed="rejectupload"
      :before-remove="handleRemove"
      :data="uploadval">
      <i class="el-icon-plus"></i>
    </el-upload>
  </div>
</template>
<script>
  import * as sysConfig from '@/../config/sysConfig';
  import * as courseApi from '../../api/course';
  import utilApi from '../../../../common/utils';
  import * as systemApi from '../../../../base/api/system';
  export default {
    data() {
      return {
        picmax:1,//最大上传文件的数量
        courseid:'',
        dialogImageUrl: '',
        dialogVisible: false,
        fileList:[],
        uploadval:{filetag:"course"},//上传提交的额外的数据 ，将uploadval转成key/value提交给服务器
        imgUrl:sysConfig.imgUrl
      }
    },
    methods: {
      //超出文件上传个数提示信息
      rejectupload(){
        this.$message.error("最多上传"+this.picmax+"个图片");
      },
      //在上传前设置上传请求的数据
      setuploaddata(){

      },
      //删除图片
      handleRemove(file, fileList) {
        console.log(file)
        //调用服务端去删除课程图片信息，如果返回false，前端停止删除
        //异步调用
        return new Promise((resolve,rejct)=>{
          courseApi.deleteCoursePic(this.courseid).then(res=>{
            if(res.success){

                //成功
              resolve()
            }else{
              this.$message.error("删除失败");
                //失败
              rejct()
            }

          })
        })

      },
      //上传成功的钩子方法
      handleSuccess(response, file, fileList){
        console.log(response)
//        alert('上传成功')
        //调用课程管理的保存图片接口，将图片信息保存到课程管理数据库course_pic中
        //从response得到新的图片文件的地址
        if(response.success){
          let fileId = response.fileSystem.fileId;
          courseApi.addCoursePic(this.courseid,fileId).then(res=>{
              if(res.success){
                  this.$message.success("上传图片")
              }else{
                this.$message.error(res.message)
              }

          })
        }

      },
      //上传失败执行的钩子方法
      handleError(err, file, fileList){
        this.$message.error('上传失败');
        //清空文件队列
        this.fileList = []
      },
      //promise 有三种状态:
      //进行中pending
      //执行成功 resolve
      //执行失败 reject
      testPromise(i){

          return new Promise((resolve,reject)=>{
              if(i<2){
                  //成功了
                resolve('成功了');
              }else{
                  //失败了
                reject('失败了');
              }

          })
      }
    },
    mounted(){
      //课程id
      this.courseid = this.$route.params.courseid;
      //查询课程
      courseApi.findCoursePicList(this.courseid).then(res=>{
          if(res && res.pic){
              let imgUrl = this.imgUrl+res.pic;
              //将图片地址设置到
            this.fileList.push({name:'pic',url:imgUrl,fileId:res.pic})
          }

      })
      //测试调用promise方法，then中写的成功后的回调方法，
//      this.testPromise(3).then(res=>{
//          alert(res)
//      }).catch(res=>{//catch就是执行失败的回调方法
//          alert("失败了。。。。。")
//          alert(res)
//      })
    }
  }
</script>
<style>

</style>
