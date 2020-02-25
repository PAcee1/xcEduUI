<template>
  <div>
    <div id="list" class="uploader-list"></div>
    <div id="wrapper">
      <div class="uploader-container">
        <div :id="id"  limitSize="1" :ext="ext"></div>
        <el-button style="margin-bottom:5px;float:left;" size="small" :loading="uploadLoading" type="success" @click="start">上传到服务器</el-button>
        <el-button style="margin-left: 20px;margin-bottom:10px;float:left;" :disabled="stopBtn" size="small" type="danger" @click="stop">暂停上传</el-button>
      </div>
    </div>
    <div class="el-upload__tip">{{tip}}</div>
    <div class="file-list">
      <ul class="el-upload-list el-upload-list&#45;&#45;text">
        <li v-for="file in fileList" :class="['el-upload-list__item', 'is-' + file.status]" :key="file">
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
        return 100*1024*1024;
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
      checkUrl: '/media/course/video/checkchunk',
      uploadUrl:'/media/course/video/upload',
      mergeUrl: '/media/course/video/mergechunks',
      previewName: '选择文件',
      wul_fileMd5: '',
      wul_size: 0,
      wul_fileName: '',
      wul_chunk: 0,
      wul_uploader: '',
      fileList: [],
      listType: 'text',
      percentage: 0,
      fileObject: {
        uid: '',
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
      this.wul_uploader.on('filesQueued', function (files) {
        if (files.length > 1) {
          this.$message({
            message: '请选择一张图片',
            type: 'error'
          });
          for (var i = 0; i < files.length; i++) {
            this.wul_uploader.cancelFile(files[i]);
          }
          this.wul_uploader.reset();
          this.wul_fileMd5 = "";
          this.wul_size = 0;
          this.wul_fileName = "";
          this.wul_chunk = 0;    //当前切片数
        }else{
          if( this.fileList.length == this.countLimit ){
            this.$message({
              message: '已经达到上传文件限制数量',
              type: 'error'
            });
          }else{
            //此时往需要上传的文件列表中添加文件
            let file = {
              uid: Date.now() + this.tempIndex++,
              name: files[0].name,
              type: files[0].type,
              ext: files[0].ext,
              status: "ready",
              percentage: 0
            }
            this.fileObject = file;
            this.fileList.push(this.fileObject);
          }
        }
      }.bind(this));

      //文件校验格式和大小
      this.wul_uploader.on('error', function (type) {
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
      this.wul_uploader.on('uploadProgress', function (file, percentage) {
        this.percentage = percentage * 100;
        this.fileObject.status = "uploading";
        this.fileObject.percentage = this.percentage;
        console.log(this.fileObject.percentage);
      }.bind(this));

      //每次切片上传完成之后的判断
      this.wul_uploader.on('uploadAccept', function (object, ret) {
        if (ret.responseCode != 0) {
          this.wul_uploader.cancelFile(this.wul_uploader.getFiles()[0].id);
        }
      });

      this.wul_uploader.on('uploadBeforeSend', function(object, data, headers) {
        console.log(data);
      });
    },

    option: function(key, val) {
      this.wul_uploader.option(key, val);
      var options = this.wul_uploader.options;
      this.wul_uploader.destroy();    //注销uploader
      this.wul_uploader = WebUploader.create(options);
      this.wul_init();
    },
    start: function(){
      if(this.wul_uploader.getFiles()[0] != null) {
        this.wul_uploader.upload(this.wul_uploader.getFiles()[0].id);
        this.uploadLoading = true;
        this.stopBtn = false;
      } else {
        this.$message({
          message: "请选择上传文件",
          type: 'error'
        });
      }
    },
    stop: function(){
      this.wul_uploader.cancelFile(this.wul_uploader.getFiles()[0].id);
    },
    removeFile: function(file){
      this.fileList.splice(this.fileList.indexOf(file), 1);
    },
    change: function(){
      this.option('accept', {
        title: 'Images',
        extensions: 'gif,jpg,jpeg,bmp,png'
      });
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
        this.wul_uploader.md5File(file).then(function (val) {
          this.wul_fileMd5 = val;
          this.wul_size = file.size;
          this.wul_fileName = file.name;
          var timestamp = Date.parse(new Date()) / 1000;
          var signParam = "{chunkSize=" + this.chunkSize + ", fileMd5=" + this.wul_fileMd5 + ", size=" + this.wul_size + ", timestamp=" + timestamp + "}";
          //var sign = Base64.encode(CryptoJS.HmacSHA1(signParam, this.securityKey));
          // 获取断点续传位置
          $.ajax({
            type: "POST",
            // 测试
            url: this.checkUrl,
            data: {
              // 文件大小
              size: this.wul_size,
              // 文件唯一标记
              fileMd5: this.wul_fileMd5,
              // 切片大小
              chunkSize: this.chunkSize,
              // 签名
              //sign: sign,
              // 应用分配id
              appId: this.appId,
              // 当前时间戳
              timestamp: timestamp
            },
            dataType: "json",
            // 上传失败
            error: function (XMLHttpRequest, textStatus, errorThrown) {
              this.$message({
                message: "上传失败...",
                type: 'error'
              });
              this.uploadLoading = false;
              this.stopBtn = true;
            }.bind(this),
            success: function (response) {
              if (response.responseCode == 0) { // 切片获取成功
                this.wul_chunk = response.chunk;
                deferred.resolve();
              } else { // 切片获取失败,请求成功
                this.wul_uploader.cancelFile(file);    //取消文件上传
                this.$message({
                  message: "切片检查失败,请联系管理员",
                  type: 'error'
                });
                deferred.resolve();
                this.uploadLoading = false;
                this.stopBtn = true;
              }
            }.bind(this)
          });
          return deferred.promise();
        }.bind(this));
        return deferred.promise();
      }.bind(this),
      beforeSend: function (block) {
        var deferred = WebUploader.Deferred();
        if (block.chunk < this.wul_chunk) {
          return deferred.reject();
        }
        this.wul_uploader.md5File(block.blob).then(function (chunkMd5) {
          var timestamp = Date.parse(new Date()) / 1000;
          var signParam = '{chunk=' + block.chunk + ', chunkMd5=' + chunkMd5 + ', chunkSize=' + this.chunkSize + ', fileMd5=' + this.wul_fileMd5 + ', size=' + this.wul_size + ', timestamp=' + timestamp + '}';
         // var signTemp = CryptoJS.HmacSHA1(signParam, this.securityKey);
         // var sign = Base64.encode(signTemp);    //获取sign值
          this.wul_uploader.options.formData = {
            'timestamp': timestamp,
            'appId': this.appId,
            'chunk': block.chunk,
            'chunkSize': this.chunkSize,
            'fileMd5': this.wul_fileMd5,
            'chunkMd5': chunkMd5,
            'size': this.wul_size
            //'sign': sign
          };
          deferred.resolve();
        }.bind(this))
        return deferred.promise();
      }.bind(this),
      afterSendFile: function (file) {
        var timestamp = Date.parse(new Date()) / 1000;
        var signParam = "{chunkSize=" + this.chunkSize + ", fileMd5=" + this.wul_fileMd5 + ", fileName=" + file.name + ", size=" + this.wul_size + ", timestamp=" + timestamp + "}";
        //var sign = Base64.encode(CryptoJS.HmacSHA1(signParam, this.securityKey));
        // 如果分块上传成功，则通知后台合并分块
        $.ajax({
          type: "POST",
          url: this.mergeUrl,
          data: {
            appId: this.appId,
            fileMd5: this.wul_fileMd5,
            fileName: file.name,
            chunkSize: this.chunkSize,
            //sign: sign,
            size: this.wul_size,
            timestamp: timestamp
          },
          success: function (response) {
            if (response.responseCode == 0) {
              this.fileObject.status = "success";
              this.fileObject.percentage = 100;
              this.fileObject.url = response.filePath;
            } else {
              this.fileObject.status = "exception";
              this.$message({
                message: "上传失败,失败原因:" + response.responseMsg,
                type: 'error'
              });
            }
            this.uploadLoading = false;
            this.stopBtn = true;
            this.wul_uploader.reset();
            this.wul_fileMd5 = "";
            this.wul_size = 0;
            this.wul_fileName = "";
            this.wul_chunk = 0;    //当前切片数
          }.bind(this)
        });
      }.bind(this)
    });
    this.wul_uploader = WebUploader.create({
      // swf文件路径
      swf: '../js/Uploader.swf',
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
      // 分片大小为2M
      chunkSize: this.chunkSize,
      // 分片上传失败重试次数
      chunkRetry: this.chunkRetry,
      // 图片不做压缩
      compress: false,
      // 队列设置10个,为了选择多个文件的时候能提示
      fileNumLimit: 10,
      // 提前准备好下一个文件
      prepareNextFile: true,
      // 限制单个文件大小
      fileSingleSizeLimit: this.sizeLimit,
      //线程数
      threads : 1,
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
    height: 35px;
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
    font-size: 10px;
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

</style>
