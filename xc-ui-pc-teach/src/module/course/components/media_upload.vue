<template>
  <div>
    <div id="uploader">
      <!-- 创建用于拖拽的区域 -->
     <!-- <div id="dndArea"></div>-->
      <!-- 用于选择文件 -->
      <div id="filePicker">选择文件</div>
      <!-- 用于显示文件列表 -->
      <div id="fileList"></div>
      <el-button type="primary" :disabled="upload_disabled">开始上传</el-button>{{progress}}%
    </div>
  </div>
</template>
<script>

import $ from '../../../../static/plugins/jquery/dist/jquery.js'
import webuploader from '../../../../static/plugins/webuploader/dist/webuploader.js'

export default {

    data() {
      return {
        uploader:{},
        progress:0,
        upload_disabled:true,
        id:'ddd'
      }
    },
    methods: {
//开始上传
      upload(fileId){
        this.uploader.upload(fileId);
      }
    },
    mounted(){
// 监听分块上传的时间点，断点续传
      var fileMd5;
      WebUploader.Uploader.register({
          "before-send-file":"beforeSendFile",
          "before-send":"beforeSend",
          "after-send-file":"afterSendFile"
        },{
          beforeSendFile:function(file) {
            // 创建一个deffered,用于通知是否完成操作
            var deferred = WebUploader.Deferred();
            // 计算文件的唯一标识，用于断点续传和妙传
            (new WebUploader.Uploader()).md5File(file, 0, 100*1024*1024)
              .progress(function(percentage){
                //$("#"+file.id).find("span.state").text("正在获取文件信息...");
              })
              .then(function(val) {
                fileMd5 = val;

                alert(fileMd5 )
                //向服务端请求注册 上传文件

                // 状态改为已完成
                //deferred.resolve();
              });
//                //向formData中放数据，每次上传分块都传这两个参数
//                this.owner.options.formData.fileName = file.name;
//                this.owner.options.formData.fileSize = file.size;
            //生产新的deferred对象防止外部修改状态
            return deferred.promise();
          },
          beforeSend:function(block) {
            var deferred = WebUploader.Deferred();

            // 支持断点续传，发送到后台判断是否已经上传过
            $.ajax(
              {
                type:"POST",
                url:"/coursemedia/video/checkchunk",
                data:{
                  // 文件唯一表示
                  fileMd5:fileMd5,
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


            // 发送文件md5字符串到后台
            this.owner.options.formData.fileMd5 = fileMd5;
            return deferred.promise();
          },
          afterSendFile:function() {
            // 通知合并分块
            $.ajax(
              {
                type:"POST",
                url:"/coursemedia/video/mergechunks",
                data:{
                  fileMd5:fileMd5
                },
                success:function(response){

                }
              }
            );
          }
        }
      );
      // 上传基本配置
      var uploader = WebUploader.create(
        {
          swf:"/static/plugins/webuploader/dist/Uploader.swf",
          server:"/coursemedia/video/upload",
          fileVal:"file",//文件上传域的name
          pick:"#filePicker",
          auto:false,//手动决定开始上传
          //dnd:"#dndArea",
          disableGlobalDnd:true,
          paste:"#uploader",

          // 分块上传设置
          // 是否分块
          chunked:true,
          // 每块文件大小（默认5M）
          chunkSize:1*1024*1024,
          // 开启几个并发线程（默认3个）
          threads:3,
          // 在上传当前文件时，准备好下一个文件
          prepareNextFile:true
        }
      );
     this.uploader = uploader;

      // 生成缩略图和上传进度
      uploader.on("fileQueued", function(file) {

          // 把文件信息追加到fileList的div中
          $("#fileList").append("<div id='" + file.id + "'><img/><span>" + file.name + "</span>" +
            "</div>");
          alert(this.upload);
          this.upload_disabled = false;
          // 制作缩略图
          // error：不是图片，则有error
          // src:代表生成缩略图的地址
//            uploader.makeThumb(file, function(error, src) {
//                if (error) {
//                    $("#" + file.id).find("img").replaceWith("<span>无法预览&nbsp;</span>");
//                } else {
//                    $("#" + file.id).find("img").attr("src", src);
//                }
//            });
        }
      );
      uploader.on("beforeFileQueued", function(file) {

        var files = uploader.getFiles();
        if(files ){
          if(files.length>0){
            alert("一次只允许上传一个文件");
            return false;
          }
        }
      });

      // 监控上传进度
      // percentage:代表上传文件的百分比
      uploader.on("uploadProgress", function(file, percentage) {
        //$("#" + file.id).find("span.percentage").text(Math.round(percentage * 100) + "%");
        this.progress = percentage;
      });
      uploader.on("uploadError", function(file,reason) {
        console.log(reason)
        alert("fail");
      });
      uploader.on("uploadSuccess", function(file,response ) {
        console.log(response)
        alert("success");
      });


    }
  }
</script>
<style >
  @import url('../../../../static/css/webuploader/webuploader.css');
  #dndArea {
    width: 200px;
    height: 100px;
    border-color: red;
    border-style: dashed;
  }
  .webuploader-pick{
    padding: 1px 20px;
    background: #409eff;
  }

</style>
