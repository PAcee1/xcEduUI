<template>
  <div>
    <div id="list" class="uploader-list"></div>
    <div id="wrapper">
      <div class="uploader-container">
        <div :id="id"  limitSize="1" :ext="ext"></div>
        <el-button style="margin-bottom:5px;float:left;" size="medium" :loading="uploadLoading" type="success" @click="start">开始上传</el-button>

      </div>
    </div>
    <span class="el-upload__tip">{{tip}}</span>
    <div class="file-list">
      <ul class="el-upload-list el-upload-list&#45;&#45;text">
        <li v-for="file in fileList" :class="['el-upload-list__item', 'is-' + file.status]" :key="file.id">
          <a class="el-upload-list__item-name">
            <i class="el-icon-document"></i>{{file.name}}
          </a>
          <label class="el-upload-list__item-status-label">
            <i :class="{'el-icon-upload-success': true,'el-icon-circle-check': listType === 'text',
          'el-icon-check': ['picture-card', 'picture'].indexOf(listType) > -1}"></i>
          </label>
          <i class="el-icon-close"  @click="removeFile(file)"></i>
          <el-progress
            v-if="file.status === 'uploading'"
            :type="listType === 'picture-card' ? 'circle' : 'line'"
            :stroke-width="listType === 'picture-card' ? 6 : 2"
            :percentage="file.percentage">
          </el-progress>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>

import $ from '../../../../static/plugins/jquery/dist/jquery.js'
import webuploader from '../../../../static/plugins/webuploader/dist/webuploader.js'

export default{
  name: 'fileUpload',
  props: {
    id: {
      type: String,
      default: function(){
        return "filePicker";
      }
    },
    //上传提示
    tip: {
      type: String,
      default: function(){
        return "";
      }
    },
    //文件后缀名限制
    ext: {
      type: String,
      default: function(){
        return "jpg,jpeg,png,pdf,mp4,avi.mp3";
      }
    },
    //分片大小设置
    chunkSize: {
      type: Number,
      default: function(){
        return 1*1024*1024;
      }
    },
    //分片上传重试次数
    chunkRetry: {
      type: Number,
      default: function(){
        return 1;
      }
    },
    //是否自动上传
    auto: {
      type: Boolean,
      default: function(){
        return false;
      }
    },
    //上传文件大小限制
    sizeLimit: {
      type: Number,
      default: function(){
        return 500*1024*1024;
      }
    },
    //上传文件数量限制
    countLimit: {
      type: Number,
      default: function(){
        return 1;
      }
    }
  },
  data(){
    return{
      appId: 'media_course',
      checkUrl: '/media/video/checkchunk',
      uploadUrl:'/media/video/upload',
      mergeUrl: '/media/video/mergechunks',
      previewName: '选择文件',
      fileMd5: '',
      fileSize: 0,
      fileName: '',
      chunk: 0,
      uploader: '',
      fileList: [],
      listType: 'text',
      percentage: 0,
      fileObject: {
        id: '',
        name: '',
        ext: '',
        type: '',
        status: '',
        percentage: 0,
        url: ''
      },
      uploadLoading: false,
      stopBtn: true
    }
  },
  methods: {
    /**
     * 获取当前上传列表中的文件
     * @returns {Array|*}
     */
    getFileList: function(){
      return this.fileList;
    },
    //绑定事件
    wul_init: function() {
      //提示只能选择一个文件
      this.uploader.on('filesQueued', function (files) {
        let fileId = files[0].id;
        if (files.length > 1) {
          this.$message({
            message: '请选择一张文件',
            type: 'error'
          });
          for (var i = 0; i < files.length; i++) {
            this.uploader.cancelFile(files[i]);
          }
          this.uploader.reset();
          this.fileMd5 = "";
          this.fileSize = 0;
          this.fileName = "";
          this.chunk = 0;    //当前切片数
        }else{
          if( this.fileList.length >= this.countLimit ){
            this.$message({
              message: '已经达到上传文件限制数量',
              type: 'error'
            });
          }else{
            //此时往需要上传的文件列表中添加文件
            let file = {
             // uid: new Date() + this.tempIndex++,
              id:fileId,
              name: files[0].name,
              type: files[0].type,
              ext: files[0].ext,
              status: "ready",
              percentage: 0
            }
            console.log(file)
            this.fileObject = file;
            this.fileList.push(this.fileObject);
          }
        }
      }.bind(this));

      //文件校验格式和大小
      this.uploader.on('error', function (type) {
        if (type == 'Q_EXCEED_SIZE_LIMIT') {
          this.$message({
            message: '文件超过指定大小',
            type: 'error'
          });
        }
        if (type == 'Q_TYPE_DENIED') {
          this.$message({
            message: '文件格式错误，请选择文件',
            type: 'error'
          });
        }
        if (type == 'F_EXCEED_SIZE') {
          this.$message({
            message: "文件超过" + this.sizeLimit / 1024 / 1024 + "M",
            type: 'error'
          });
        }
      }.bind(this));

      //上传进度
      this.uploader.on('uploadProgress', function (file, percentage) {
        this.percentage = Math.trunc(percentage * 100);
        this.fileObject.status = "uploading";
        this.fileObject.percentage = this.percentage;
        console.log(this.fileObject.percentage);
      }.bind(this));

      //每次切片上传完成之后的判断
      this.uploader.on('uploadAccept', function (object, ret) {
        if (ret.responseCode != 0) {
//          this.uploader.cancelFile(this.uploader.getFiles()[0].id);
        }
      });

      this.uploader.on('uploadBeforeSend', function(object, data, headers) {
        console.log(data);
      });
    },


    start: function(){
      var files = this.uploader.getFiles()
      if(files[0] != null) {
        //console.log(this.uploader.getFiles()[0].id)
        this.uploader.upload(this.uploader.getFiles()[0].id);
        this.uploadLoading = true;
        this.stopBtn = false;
      } else {
        this.$message({
          message: "请选择上传文件",
          type: 'error'
        });
      }
     // console.log(this.uploader.getFiles())
    },

    stop: function(){
      this.uploader.cancelFile(this.uploader.getFiles()[0].id);
    },
    removeFile: function(file){
      //console.log(this.fileList)
      //console.log(this.uploader.getFiles())
      this.fileList.splice(this.fileList.indexOf(file), 1);//删除成员变量中的文件
      this.uploader.removeFile(file.id,true)//删除webuploader中队列中的文件
      //console.log(this.fileList)
      //console.log(this.uploader.getFiles())
    }
  },
  mounted(){
    WebUploader.Uploader.register({
      "before-send-file": "beforeSendFile",
      "before-send": "beforeSend",
      "after-send-file": "afterSendFile",
    }, {
      beforeSendFile: function (file) {
        var deferred = WebUploader.Deferred();
        this.uploader.md5File(file) .progress(function(percentage){
          //$("#"+file.id).find("span.state").text("正在获取文件信息...");
        }).then(function (val) {
          this.fileMd5 = val;
          this.fileSize = file.size;
          this.fileName = file.name;
          //var timestamp = Date.parse(new Date()) / 1000;
          //var signParam = "{chunkSize=" + this.chunkSize + ", fileMd5=" + this.fileMd5 + ", size=" + this.fileSize + ", timestamp=" + timestamp + "}";
          //var sign = Base64.encode(CryptoJS.HmacSHA1(signParam, this.securityKey));
          // 获取断点续传位置
          $.ajax({
            type: "POST",
            // 测试
            url: "/media/video/uploadregister",
            data: {
              // 文件大小
              fileSize: this.fileSize,
              // 文件唯一标记
              fileMd5: this.fileMd5,
              fileName:this.fileName,
              fileType:this.type,
              // 切片大小
              //chunkSize: this.chunkSize,
              // 签名
              //sign: sign,
              // 应用分配id
              //appId: this.appId,
              // 当前时间戳
              //timestamp: timestamp
            },
            dataType: "json",

            error: function (XMLHttpRequest, textStatus, errorThrown) {
              this.$message({
                message: "上传失败，请删除文件后重新上传",
                type: 'error'
              });
              this.uploadLoading = false;
              this.stopBtn = true;
            }.bind(this),
            success: function (response) {
              if(response.success) {
                //$("#" + file.id).find("span.state").text("成功获取文件信息"+fileMd5);
                //alert('上传文件注册成功开始上传');
                deferred.resolve();
//
              } else {
                alert(response.message);
                this.uploader.cancelFile(file);    //取消文件上传
                this.uploadLoading = false;
                this.stopBtn = true;
                deferred.reject();
              }
//              if (response.responseCode == 0) { // 切片获取成功
//                this.chunk = response.chunk;
//                deferred.resolve();
//              } else { // 切片获取失败,请求成功
//                this.uploader.cancelFile(file);    //取消文件上传
//                this.$message({
//                  message: "切片检查失败,请联系管理员",
//                  type: 'error'
//                });
//                deferred.resolve();
//                this.uploadLoading = false;
//                this.stopBtn = true;
//              }
            }.bind(this)
          });
          return deferred.promise();
        }.bind(this));
        return deferred.promise();
      }.bind(this),
      beforeSend: function (block) {
        var deferred = WebUploader.Deferred();



        if (block.chunk < this.chunk) {
          return deferred.reject();
        }
        this.uploader.md5File(block.blob).then(function (chunkMd5) {
          var timestamp = Date.parse(new Date()) / 1000;
          var signParam = '{chunk=' + block.chunk + ', chunkMd5=' + chunkMd5 + ', chunkSize=' + this.chunkSize + ', fileMd5=' + this.fileMd5 + ', size=' + this.fileSize + ', timestamp=' + timestamp + '}';
         // var signTemp = CryptoJS.HmacSHA1(signParam, this.securityKey);
         // var sign = Base64.encode(signTemp);    //获取sign值
          this.uploader.options.formData = {
            'timestamp': timestamp,
            'appId': this.appId,
            'chunk': block.chunk,
            'chunkSize': this.chunkSize,
            'fileMd5': this.fileMd5,
            'chunkMd5': chunkMd5,
            'size': this.fileSize
            //'sign': sign
          };
          deferred.resolve();
        }.bind(this))
        return deferred.promise();
      }.bind(this),
      afterSendFile: function (file) {
        var timestamp = Date.parse(new Date()) / 1000;
        var signParam = "{chunkSize=" + this.chunkSize + ", fileMd5=" + this.fileMd5 + ", fileName=" + file.name + ", size=" + this.fileSize + ", timestamp=" + timestamp + "}";
        //var sign = Base64.encode(CryptoJS.HmacSHA1(signParam, this.securityKey));
        // 如果分块上传成功，则通知后台合并分块
        $.ajax({
          type: "POST",
          url: this.mergeUrl,
          data: {
            appId: this.appId,
            fileMd5: this.fileMd5,
            fileName: file.name,
            chunkSize: this.chunkSize,
            //sign: sign,
            size: this.fileSize,
            timestamp: timestamp
          },
          success: function (response) {
            if (response.success) {
              this.fileObject.status = "success";
              this.fileObject.percentage = 100;
              this.$message({
                message: "上传成功",
                type: 'success'
              });
              //通知父组件上传成功
              this.$emit("upload_success",this.fileMd5)

              //this.fileObject.url = response.filePath;
            } else {
              this.fileObject.status = "exception";
              this.$message({
                message: "上传文件失败原因:" + response.message,
                type: 'error'
              });
            }
            this.uploadLoading = false;
            this.stopBtn = true;
            this.uploader.reset();
            this.fileMd5 = "";
            this.fileSize = 0;
            this.fileName = "";
            this.chunk = 0;    //当前切片数
          }.bind(this)
        });
      }.bind(this)
    });
    this.uploader = WebUploader.create({
      // swf文件路径
      swf: '../../../../static/plugins/webuploader/dist/Uploader.swf',
      // 文件接收服务端。
      server: this.uploadUrl,
      // 定义选择按钮
      pick: {
        "id": "#" + this.id,
        "innerHTML": "选择文件"
      },
      // 自动上传
      auto: this.auto,
      // 禁止浏览器打开文件
      disableGlobalDnd: true,
      // 添加截图功能
      paste: '#wrapper',
      // 定义拖动面板
      dnd: '#wrapper',
      // 分片上传
      chunked: true,
      // 分片大小为1M
      chunkSize: this.chunkSize,
      // 分片上传失败重试次数
      chunkRetry: this.chunkRetry,
      // 图片不做压缩
      compress: false,
      // 队列设置10个,为了选择多个文件的时候能提示
      //fileNumLimit: 1,
      // 提前准备好下一个文件
      prepareNextFile: true,
      // 限制单个文件大小
      fileSingleSizeLimit: this.sizeLimit,
      //线程数
      threads : 3,
      // 限制格式
      accept: {
        title: "access",
        extensions: this.ext
      }
    });
    this.wul_init();
  }
}
</script>
<style >
  /* ----------------Reset Css--------------------- */
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, figcaption, figure, footer, header, hgroup, menu, nav, section, summary,
  time, mark, audio, video, input  {
    margin: 0;
    padding: 0;
    border: none;
    outline: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  html, body, form, fieldset, p, div, h1, h2, h3, h4, h5, h6 {
    -webkit-text-size-adjust: none;
  }

  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    font-family: arial, sans-serif;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after, q:before, q:after {
    content: '';
    content: none;
  }

  ins {
    text-decoration: none;
  }

  del {
    text-decoration: line-through;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* ------------ */
  #wrapper {
    width: 100%;
    margin: 0 auto;
    height: 45px;
  }

  .img-preview {
    width: 160px;
    height: 90px;
    margin-top: 1em;
    border: 1px solid #ccc;
  }

  .cropper-wraper {
    position: relative;
  }

  .upload-btn {
    background: #ffffff;
    border: 1px solid #cfcfcf;
    color: #565656;
    padding: 10px 18px;
    display: inline-block;
    border-radius: 3px;
    margin-left: 10px;
    cursor: pointer;
    font-size: 14px;

    position: absolute;
    right: 1em;
    bottom: 2em;
  }
  .upload-btn:hover {
    background: #f0f0f0;
  }
  .uploader-container{
    width: 100%;
    font-size: 100%;
  }

  .webuploader-container {
    position: relative;
    width: 100px;
    height: 21px;
    float: left;
  }
  .webuploader-element-invisible {
    position: absolute !important;
    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
    clip: rect(1px,1px,1px,1px);
  }
  .webuploader-pick {
    position: relative;
    display: inline-block;
    cursor: pointer;
    background: #00b7ee;
    padding: 0px 20px;

    color: #fff;
    text-align: center;
    border-radius: 3px;
    overflow: hidden;
  }
  .webuploader-pick-hover {
    background: #00a2d4;
  }

  .webuploader-pick-disable {
    opacity: 0.6;
    pointer-events:none;
  }
  .file-list{
    width: 100%;
  }
  .el-button--medium {
    padding: 12px 20px;
  }

</style>
