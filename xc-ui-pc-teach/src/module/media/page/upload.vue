<template>
<div><br/>
  操作步骤：<br/>
  1、点击“选择文件”，选择要上传的文件<br/>
  2、点击“开始上传”，开始上传文件<br/>
  3、如需重新上传请重复上边的步骤。<br/><br/>

  <div id="uploader" class="wu-example">
    <div class="btns" style="float:left;padding-right: 20px">
      <div id="picker">选择文件</div>
    </div>
    <div id="ctlBtn" class="webuploader-pick" @click="upload()">开始上传</div>

  </div>
  <!--用来存放文件信息-->
  <div id="thelist" class="uploader-list" >
    <div v-if="uploadFile.id" :id='uploadFile.id'><span>{{uploadFile.name}}</span>&nbsp;<span class='percentage'>{{percentage}}%</span></div>

  </div>
</div>
</template>
<script>
  import $ from '../../../../static/plugins/jquery/dist/jquery.js'
  import webuploader from '../../../../static/plugins/webuploader/dist/webuploader.js'
  import '../../../../static/css/webuploader/webuploader.css'
  export default{
    data(){
      return{
        uploader:{},
        uploadFile:{},
        percentage:0,
        fileMd5:''
      }
    },
    methods:{
      //开始上传
      upload(){
        if(this.uploadFile && this.uploadFile.id){
          this.uploader.upload(this.uploadFile.id);
        }else{
          alert("请选择文件");
        }
      }
    },
    mounted(){
//      var fileMd5;
//      var uploadFile;
      WebUploader.Uploader.register({
          "before-send-file":"beforeSendFile",
          "before-send":"beforeSend",
          "after-send-file":"afterSendFile"
        },{
          beforeSendFile:function(file) {
            // 创建一个deffered,用于通知是否完成操作
            var deferred = WebUploader.Deferred();
            // 计算文件的唯一标识，用于断点续传
            (new WebUploader.Uploader()).md5File(file, 0, 100*1024*1024)
              .then(function(val) {

                this.fileMd5 = val;
                this.uploadFile = file;
//                alert(this.fileMd5 )
                //向服务端请求注册上传文件
                $.ajax(
                  {
                    type:"POST",
                    url:"/api/media/upload/register",
                    data:{
                      // 文件唯一表示
                      fileMd5:this.fileMd5,
                      fileName: file.name,
                      fileSize:file.size,
                      mimetype:file.type,
                      fileExt:file.ext
                    },
                    dataType:"json",
                    success:function(response) {
                      if(response.success) {
                        //alert('上传文件注册成功开始上传');
                        deferred.resolve();
                      } else {
                        alert(response.message);
                        deferred.reject();
                      }
                    }
                  }
                );
              }.bind(this));

            return deferred.promise();
          }.bind(this),
          beforeSend:function(block) {
            var deferred = WebUploader.Deferred();
            // 每次上传分块前校验分块，如果已存在分块则不再上传，达到断点续传的目的
            $.ajax(
              {
                type:"POST",
                url:"/api/media/upload/checkchunk",
                data:{
                  // 文件唯一表示
                  fileMd5:this.fileMd5,
                  // 当前分块下标
                  chunk:block.chunk,
                  // 当前分块大小
                  chunkSize:block.end-block.start
                },
                dataType:"json",
                success:function(response) {
                  if(response.ifExist) {
                    // 分块存在，跳过该分块
                    deferred.reject();
                  } else {
                    // 分块不存在或不完整，重新发送
                    deferred.resolve();
                  }
                }
              }
            );
            //构建fileMd5参数，上传分块时带上fileMd5
            this.uploader.options.formData.fileMd5 = this.fileMd5;
            this.uploader.options.formData.chunk = block.chunk;
            return deferred.promise();
          }.bind(this),
          afterSendFile:function(file) {
            // 合并分块
            $.ajax(
              {
                type:"POST",
                url:"/api/media/upload/mergechunks",
                data:{
                  fileMd5:this.fileMd5,
                  fileName: file.name,
                  fileSize:file.size,
                  mimetype:file.type,
                  fileExt:file.ext
                },
                success:function(response){
                  //在这里解析合并成功结果
                  if(response && response.success){
                      alert("上传成功")
                  }else{
                      alert("上传失败")
                  }
                }
              }
            );
          }.bind(this)
        }
      );
      // 创建uploader对象，配置参数
      this.uploader = WebUploader.create(
        {
          swf:"/static/plugins/webuploader/dist/Uploader.swf",//上传文件的flash文件，浏览器不支持h5时启动flash
          server:"/api/media/upload/uploadchunk",//上传分块的服务端地址，注意跨域问题
          fileVal:"file",//文件上传域的name
          pick:"#picker",//指定选择文件的按钮容器
          auto:false,//手动触发上传
          disableGlobalDnd:true,//禁掉整个页面的拖拽功能
          chunked:true,// 是否分块上传
          chunkSize:1*1024*1024, // 分块大小（默认5M）
          threads:3, // 开启多个线程（默认3个）
          prepareNextFile:true// 允许在文件传输时提前把下一个文件准备好
        }
      );

      // 将文件添加到队列
      this.uploader.on("fileQueued", function(file) {
          this.uploadFile = file;
          this.percentage = 0;

        }.bind(this)
      );
      //选择文件后触发
      this.uploader.on("beforeFileQueued", function(file) {
//     this.uploader.removeFile(file)
        //重置uploader
        this.uploader.reset()
        this.percentage = 0;
      }.bind(this));

      // 监控上传进度
      // percentage:代表上传文件的百分比
      this.uploader.on("uploadProgress", function(file, percentage) {
          this.percentage = Math.ceil(percentage * 100);
      }.bind(this));
      //上传失败触发
      this.uploader.on("uploadError", function(file,reason) {
        console.log(reason)
        alert("上传文件失败");
      });
      //上传成功触发
      this.uploader.on("uploadSuccess", function(file,response ) {
        console.log(response)
//        alert("上传文件成功！");
      });
      //每个分块上传请求后触发
      this.uploader.on( 'uploadAccept', function( file, response ) {
          if(!(response && response.success)){//分块上传失败，返回false
              return false;
          }
      });

    }
  }

</script>
<style scoped>


</style>
