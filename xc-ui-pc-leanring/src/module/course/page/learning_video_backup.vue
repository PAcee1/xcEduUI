<template>
  <div>

    <div class="learing-course">

      <div class="course-cont">
        <div class="course-cont-top-video" style="position: relative;">
          <div class="video-box">
            <div class="top text-center">
             {{coursename}}
            </div>
            <div class="video text-center" style="padding-right: 55px;">
              <div class="video-mine">
                <!--<div class="cls-text"><a class="media" href=".//plugins/js-pdf/NodeJSDeveloperGuid.pdf"></a></div>-->
                <div class="cls-video">
                  <div id="vdplay">

                    <video-player class="vjs-custom-skin" ref="videoPlayer" :options="playerOptions">
                    </video-player>
                  </div>
                  <div class="vdControl">
                    <!--<div class="play" onclick="vdPlay()">播放</div>-->
                  </div>
                </div>
              </div>
            </div>
            <div class="course-nav">
              <div class="nav-stacked text-center">
                <li class="nav"><a :href="url" class="glyphicon glyphicon-list-alt"><span>目录</span></a></li>
                <li class="lab-note"><a :href="url" class="glyphicon glyphicon-user"><span>笔记</span></a></li>
                <li class="lab-ask"><a :href="url" class="glyphicon glyphicon-cog"><span>问答</span></a></li>
                <li class="lab-com"><a :href="url" class="glyphicon glyphicon-duplicate"><span>评论</span></a></li>
              </div>
            </div>
            <div class="note">
              <div class="note-box">
                <div class="note-lab"><span class="active">我的笔记</span><span>精选笔记</span></div>
                <div class="note-item-cont">
                  <div class="my-note">
                    <div class="textarea-box">
                      <textarea name="my-note" id=""></textarea>
                      <div class="info"><span class="time"><i class="i-play"></i>23`22` </span><span class="not-but">提交</span></div>
                    </div>
                    <ul class="my-item-box">
                      <li>
                        <div><span><img src="/static/images/asset-vid.png" alt=""></span><span class="name">王老师</span><span class="time"><i class="i-play"></i>23`22` </span></div>
                        <div class="cont">
                          课程内容 消息回复接口（图文,语音消息的自动回复） 素材管理接口（图片上传） 自定义菜单接口（菜单的创建，查询，删除）
                        </div>
                        <div class="operation"><span>2017-2-29</span>
                          <div class="oper-box"><span><i class="i-edt"></i>编辑</span><span><i class="i-del"></i>删除</span><span><i class="i-laud"></i>赞</span></div>
                        </div>
                      </li>
                      <li>
                        <div><span><img src="/static/images/asset-vid.png" alt=""></span><span class="name">王老师</span><span class="time"><i class="i-play"></i>23`22` </span></div>
                        <div class="cont">
                          课程内容 消息回复接口（图文,语音消息的自动回复） 素材管理接口（图片上传） 自定义菜单接口（菜单的创建，查询，删除）
                        </div>
                        <div class="operation"><span>2017-2-29</span>
                          <div class="oper-box"><span><i class="i-edt"></i>编辑</span><span><i class="i-del"></i>删除</span><span><i class="i-laud"></i>赞</span></div>
                        </div>
                      </li>
                      <li>
                        <div><span><img src="/static/images/asset-vid.png" alt=""></span><span class="name">王老师</span><span class="time"><i class="i-play"></i>23`22` </span></div>
                        <div class="cont">
                          课程内容 消息回复接口（图文,语音消息的自动回复） 素材管理接口（图片上传） 自定义菜单接口（菜单的创建，查询，删除）
                        </div>
                        <div class="operation"><span>2017-2-29</span>
                          <div class="oper-box"><span><i class="i-edt"></i>编辑</span><span><i class="i-del"></i>删除</span><span><i class="i-laud"></i>赞</span></div>
                        </div>
                      </li>
                      <li>
                        <div><span><img src="/static/images/asset-vid.png" alt=""></span><span class="name">王老师</span><span class="time"><i class="i-play"></i>23`22` </span></div>
                        <div class="cont">
                          课程内容 消息回复接口（图文,语音消息的自动回复） 素材管理接口（图片上传） 自定义菜单接口（菜单的创建，查询，删除）
                        </div>
                        <div class="operation"><span>2017-2-29</span>
                          <div class="oper-box"><span><i class="i-edt"></i>编辑</span><span><i class="i-del"></i>删除</span><span><i class="i-laud"></i>赞</span></div>
                        </div>
                      </li>
                      <li>
                        <div><span><img src="/static/images/asset-vid.png" alt=""></span><span class="name">王老师</span><span class="time"><i class="i-play"></i>23`22` </span></div>
                        <div class="cont">
                          课程内容 消息回复接口（图文,语音消息的自动回复） 素材管理接口（图片上传） 自定义菜单接口（菜单的创建，查询，删除）
                        </div>
                        <div class="operation"><span>2017-2-29</span>
                          <div class="oper-box"><span><i class="i-edt"></i>编辑</span><span><i class="i-del"></i>删除</span><span><i class="i-laud"></i>赞</span></div>
                        </div>
                      </li>
                      <li>
                        <div><span><img src="/static/images/asset-vid.png" alt=""></span><span class="name">王老师</span><span class="time"><i class="i-play"></i>23`22` </span></div>
                        <div class="cont">
                          课程内容 消息回复接口（图文,语音消息的自动回复） 素材管理接口（图片上传） 自定义菜单接口（菜单的创建，查询，删除）
                        </div>
                        <div class="operation"><span>2017-2-29</span>
                          <div class="oper-box"><span><i class="i-edt"></i>编辑</span><span><i class="i-del"></i>删除</span><span><i class="i-laud"></i>赞</span></div>
                        </div>
                      </li>
                      <li>
                        <div><span><img src="/static/images/asset-vid.png" alt=""></span><span class="name">王老师</span><span class="time"><i class="i-play"></i>23`22` </span></div>
                        <div class="cont">
                          课程内容 消息回复接口（图文,语音消息的自动回复） 素材管理接口（图片上传） 自定义菜单接口（菜单的创建，查询，删除）
                        </div>
                        <div class="operation"><span>2017-2-29</span>
                          <div class="oper-box"><span><i class="i-edt"></i>编辑</span><span><i class="i-del"></i>删除</span><span><i class="i-laud"></i>赞</span></div>
                        </div>
                      </li>
                    </ul>
                    <a :href="url" class="more">查看更多</a>
                  </div>
                  <div class="sel-note">
                    <ul class="my-item-box">
                      <li>
                        <div><span><img src="/static/images/asset-vid.png" alt=""></span><span class="name">王老师</span><span class="time"><i class="i-play"></i>23`22` </span></div>
                        <div class="cont">
                          课程内容 消息回复接口（图文,语音消息的自动回复） 素材管理接口（图片上传） 自定义菜单接口（菜单的创建，查询，删除）
                        </div>
                        <div class="operation"><span>2017-2-29</span>
                          <div class="oper-box"><span><i class="i-edt"></i>编辑</span><span><i class="i-del"></i>删除</span><span><i class="i-laud"></i>赞</span></div>
                        </div>
                      </li>
                      <li>
                        <div><span><img src="/static/images/asset-vid.png" alt=""></span><span class="name">王老师</span><span class="time"><i class="i-play"></i>23`22` </span></div>
                        <div class="cont">
                          课程内容 消息回复接口（图文,语音消息的自动回复） 素材管理接口（图片上传） 自定义菜单接口（菜单的创建，查询，删除）
                        </div>
                        <div class="operation"><span>2017-2-29</span>
                          <div class="oper-box"><span><i class="i-edt"></i>编辑</span><span><i class="i-del"></i>删除</span><span><i class="i-laud"></i>赞</span></div>
                        </div>
                      </li>
                      <li>
                        <div><span><img src="/static/images/asset-vid.png" alt=""></span><span class="name">王老师</span><span class="time"><i class="i-play"></i>23`22` </span></div>
                        <div class="cont">
                          课程内容 消息回复接口（图文,语音消息的自动回复） 素材管理接口（图片上传） 自定义菜单接口（菜单的创建，查询，删除）
                        </div>
                        <div class="operation"><span>2017-2-29</span>
                          <div class="oper-box"><span><i class="i-edt"></i>编辑</span><span><i class="i-del"></i>删除</span><span><i class="i-laud"></i>赞</span></div>
                        </div>
                      </li>
                      <li>
                        <div><span><img src="/static/images/asset-vid.png" alt=""></span><span class="name">王老师</span><span class="time"><i class="i-play"></i>23`22` </span></div>
                        <div class="cont">
                          课程内容 消息回复接口（图文,语音消息的自动回复） 素材管理接口（图片上传） 自定义菜单接口（菜单的创建，查询，删除）
                        </div>
                        <div class="operation"><span>2017-2-29</span>
                          <div class="oper-box"><span><i class="i-edt"></i>编辑</span><span><i class="i-del"></i>删除</span><span><i class="i-laud"></i>赞</span></div>
                        </div>
                      </li>
                      <li>
                        <div><span><img src="/static/images/asset-vid.png" alt=""></span><span class="name">王老师</span><span class="time"><i class="i-play"></i>23`22` </span></div>
                        <div class="cont">
                          课程内容 消息回复接口（图文,语音消息的自动回复） 素材管理接口（图片上传） 自定义菜单接口（菜单的创建，查询，删除）
                        </div>
                        <div class="operation"><span>2017-2-29</span>
                          <div class="oper-box"><span><i class="i-edt"></i>编辑</span><span><i class="i-del"></i>删除</span><span><i class="i-laud"></i>赞</span></div>
                        </div>
                      </li>
                      <li>
                        <div><span><img src="/static/images/asset-vid.png" alt=""></span><span class="name">王老师</span><span class="time"><i class="i-play"></i>23`22` </span></div>
                        <div class="cont">
                          课程内容 消息回复接口（图文,语音消息的自动回复） 素材管理接口（图片上传） 自定义菜单接口（菜单的创建，查询，删除）
                        </div>
                        <div class="operation"><span>2017-2-29</span>
                          <div class="oper-box"><span><i class="i-edt"></i>编辑</span><span><i class="i-del"></i>删除</span><span><i class="i-laud"></i>赞</span></div>
                        </div>
                      </li>
                      <li>
                        <div><span><img src="/static/images/asset-vid.png" alt=""></span><span class="name">王老师</span><span class="time"><i class="i-play"></i>23`22` </span></div>
                        <div class="cont">
                          课程内容 消息回复接口（图文,语音消息的自动回复） 素材管理接口（图片上传） 自定义菜单接口（菜单的创建，查询，删除）
                        </div>
                        <div class="operation"><span>2017-2-29</span>
                          <div class="oper-box"><span><i class="i-edt"></i>编辑</span><span><i class="i-del"></i>删除</span><span><i class="i-laud"></i>赞</span></div>
                        </div>
                      </li>
                    </ul>
                    <a :href="url" class="more">查看更多</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="ask">
              <div class="ask-box">
                <div class="note-lab"><span class="active">我的问答</span><span>精选问答</span></div>
                <div class="note-item-cont">
                  <div class="my-note">
                    <div class="textarea-box">
                      <input type="text" class="ask-title" value="" placeholder="请输入问题标题">
                      <textarea name="my-note" id="" placeholder="请输入问题描述"></textarea>
                      <div class="info"><span class="pic" onclick="screenshot()">截图 </span><span class="not-but">保存</span></div>
                    </div>
                    <ul class="my-item-box">
                      <li>
                        <div><span><img src="/static/images/asset-vid.png" alt=""></span><span class="name">王老师</span><span class="our-answer">我来回答</span></div>
                        <div class="tit">这个是我想问的问题</div>
                        <div class="cont">
                          课程内容 消息回复接口（图文,语音消息的自动回复） 素材管理接口（图片上传） 自定义菜单接口（菜单的创建，查询，删除）
                        </div>
                        <div class="operation"><span>4 小时前</span>
                          <div class="oper-box"><span>回答 2</span><span>浏览 4</span></div>
                        </div>
                      </li>
                      <li>
                        <div><span><img src="/static/images/asset-vid.png" alt=""></span><span class="name">王老师</span><span class="our-answer">我来回答</span></div>
                        <div class="tit">这个是我想问的问题</div>
                        <div class="cont">
                          课程内容 消息回复接口（图文,语音消息的自动回复） 素材管理接口（图片上传） 自定义菜单接口（菜单的创建，查询，删除）
                        </div>
                        <div class="operation"><span>4 小时前</span>
                          <div class="oper-box"><span>回答 2</span><span>浏览 4</span></div>
                        </div>
                      </li>
                      <li>
                        <div><span><img src="/static/images/asset-vid.png" alt=""></span><span class="name">王老师</span><span class="our-answer">我来回答</span></div>
                        <div class="tit">这个是我想问的问题</div>
                        <div class="cont">
                          课程内容 消息回复接口（图文,语音消息的自动回复） 素材管理接口（图片上传） 自定义菜单接口（菜单的创建，查询，删除）
                        </div>
                        <div class="operation"><span>4 小时前</span>
                          <div class="oper-box"><span>回答 2</span><span>浏览 4</span></div>
                        </div>
                      </li>
                      <li>
                        <div><span><img src="/static/images/asset-vid.png" alt=""></span><span class="name">王老师</span><span class="our-answer">我来回答</span></div>
                        <div class="tit">这个是我想问的问题</div>
                        <div class="cont">
                          课程内容 消息回复接口（图文,语音消息的自动回复） 素材管理接口（图片上传） 自定义菜单接口（菜单的创建，查询，删除）
                        </div>
                        <div class="operation"><span>4 小时前</span>
                          <div class="oper-box"><span>回答 2</span><span>浏览 4</span></div>
                        </div>
                      </li>
                      <li>
                        <div><span><img src="/static/images/asset-vid.png" alt=""></span><span class="name">王老师</span><span class="our-answer">我来回答</span></div>
                        <div class="tit">这个是我想问的问题</div>
                        <div class="cont">
                          课程内容 消息回复接口（图文,语音消息的自动回复） 素材管理接口（图片上传） 自定义菜单接口（菜单的创建，查询，删除）
                        </div>
                        <div class="operation"><span>4 小时前</span>
                          <div class="oper-box"><span>回答 2</span><span>浏览 4</span></div>
                        </div>
                      </li>
                      <li>
                        <div><span><img src="/static/images/asset-vid.png" alt=""></span><span class="name">王老师</span><span class="our-answer">我来回答</span></div>
                        <div class="tit">这个是我想问的问题</div>
                        <div class="cont">
                          课程内容 消息回复接口（图文,语音消息的自动回复） 素材管理接口（图片上传） 自定义菜单接口（菜单的创建，查询，删除）
                        </div>
                        <div class="operation"><span>4 小时前</span>
                          <div class="oper-box"><span>回答 2</span><span>浏览 4</span></div>
                        </div>
                      </li>
                      <li>
                        <div><span><img src="/static/images/asset-vid.png" alt=""></span><span class="name">王老师</span><span class="our-answer">我来回答</span></div>
                        <div class="cont">
                          课程内容 消息回复接口（图文,语音消息的自动回复） 素材管理接口（图片上传） 自定义菜单接口（菜单的创建，查询，删除）
                        </div>
                        <div class="operation"><span>2017-2-29</span>
                          <div class="oper-box"><span><i class="i-edt"></i>编辑</span><span><i class="i-del"></i>删除</span><span><i class="i-laud"></i>赞</span></div>
                        </div>
                      </li>
                    </ul>
                    <a :href="url" class="more">查看更多</a>
                  </div>
                  <div class="sel-note">
                    <ul class="my-item-box">
                      <li>
                        <div><span><img src="/static/images/asset-vid.png" alt=""></span><span class="name">王老师</span><span class="our-answer">我来回答</span></div>
                        <div class="tit">这个是我想问的问题</div>
                        <div class="cont">
                          课程内容 消息回复接口（图文,语音消息的自动回复） 素材管理接口（图片上传） 自定义菜单接口（菜单的创建，查询，删除）
                        </div>
                        <div class="operation"><span>4 小时前</span>
                          <div class="oper-box"><span>回答 2</span><span>浏览 4</span></div>
                        </div>
                      </li>
                      <li>
                        <div><span><img src="/static/images/asset-vid.png" alt=""></span><span class="name">王老师</span><span class="our-answer">我来回答</span></div>
                        <div class="tit">这个是我想问的问题</div>
                        <div class="cont">
                          课程内容 消息回复接口（图文,语音消息的自动回复） 素材管理接口（图片上传） 自定义菜单接口（菜单的创建，查询，删除）
                        </div>
                        <div class="operation"><span>4 小时前</span>
                          <div class="oper-box"><span>回答 2</span><span>浏览 4</span></div>
                        </div>
                      </li>
                      <li>
                        <div><span><img src="/static/images/asset-vid.png" alt=""></span><span class="name">王老师</span><span class="our-answer">我来回答</span></div>
                        <div class="tit">这个是我想问的问题</div>
                        <div class="cont">
                          课程内容 消息回复接口（图文,语音消息的自动回复） 素材管理接口（图片上传） 自定义菜单接口（菜单的创建，查询，删除）
                        </div>
                        <div class="operation"><span>4 小时前</span>
                          <div class="oper-box"><span>回答 2</span><span>浏览 4</span></div>
                        </div>
                      </li>
                      <li>
                        <div><span><img src="/static/images/asset-vid.png" alt=""></span><span class="name">王老师</span><span class="our-answer">我来回答</span></div>
                        <div class="tit">这个是我想问的问题</div>
                        <div class="cont">
                          课程内容 消息回复接口（图文,语音消息的自动回复） 素材管理接口（图片上传） 自定义菜单接口（菜单的创建，查询，删除）
                        </div>
                        <div class="operation"><span>4 小时前</span>
                          <div class="oper-box"><span>回答 2</span><span>浏览 4</span></div>
                        </div>
                      </li>
                      <li>
                        <div><span><img src="/static/images/asset-vid.png" alt=""></span><span class="name">王老师</span><span class="our-answer">我来回答</span></div>
                        <div class="tit">这个是我想问的问题</div>
                        <div class="cont">
                          课程内容 消息回复接口（图文,语音消息的自动回复） 素材管理接口（图片上传） 自定义菜单接口（菜单的创建，查询，删除）
                        </div>
                        <div class="operation"><span>4 小时前</span>
                          <div class="oper-box"><span>回答 2</span><span>浏览 4</span></div>
                        </div>
                      </li>
                      <li>
                        <div><span><img src="/static/images/asset-vid.png" alt=""></span><span class="name">王老师</span><span class="our-answer">我来回答</span></div>
                        <div class="tit">这个是我想问的问题</div>
                        <div class="cont">
                          课程内容 消息回复接口（图文,语音消息的自动回复） 素材管理接口（图片上传） 自定义菜单接口（菜单的创建，查询，删除）
                        </div>
                        <div class="operation"><span>4 小时前</span>
                          <div class="oper-box"><span>回答 2</span><span>浏览 4</span></div>
                        </div>
                      </li>
                      <li>
                        <div><span><img src="/static/images/asset-vid.png" alt=""></span><span class="name">王老师</span><span class="our-answer">我来回答</span></div>
                        <div class="tit">这个是我想问的问题</div>
                        <div class="cont">
                          课程内容 消息回复接口（图文,语音消息的自动回复） 素材管理接口（图片上传） 自定义菜单接口（菜单的创建，查询，删除）
                        </div>
                        <div class="operation"><span>4 小时前</span>
                          <div class="oper-box"><span>回答 2</span><span>浏览 4</span></div>
                        </div>
                      </li>
                      <li>
                        <div><span><img src="/static/images/asset-vid.png" alt=""></span><span class="name">王老师</span><span class="our-answer">我来回答</span></div>
                        <div class="tit">这个是我想问的问题</div>
                        <div class="cont">
                          课程内容 消息回复接口（图文,语音消息的自动回复） 素材管理接口（图片上传） 自定义菜单接口（菜单的创建，查询，删除）
                        </div>
                        <div class="operation"><span>4 小时前</span>
                          <div class="oper-box"><span>回答 2</span><span>浏览 4</span></div>
                        </div>
                      </li>
                      <li>
                        <div><span><img src="/static/images/asset-vid.png" alt=""></span><span class="name">王老师</span><span class="our-answer">我来回答</span></div>
                        <div class="tit">这个是我想问的问题</div>
                        <div class="cont">
                          课程内容 消息回复接口（图文,语音消息的自动回复） 素材管理接口（图片上传） 自定义菜单接口（菜单的创建，查询，删除）
                        </div>
                        <div class="operation"><span>4 小时前</span>
                          <div class="oper-box"><span>回答 2</span><span>浏览 4</span></div>
                        </div>
                      </li>
                    </ul>
                    <a :href="url" class="more">查看更多</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="com">
              <div class="com-box">
                <!--<div class="note-lab"><span class="active">我的问答</span><span>精选问答</span></div>-->
                <div class="note-item-cont">
                  <div class="my-note">
                    <div class="evaluate">
                      <div class="eva-top">
                        <div class="tit">课程评分 </div>
                        <div class="star">
                          <div class="score"><i>5</i></div>
                        </div><span class="star-score"> <i>5</i> 分</span></div>
                      <div class="eva-cont">
                        <div class="tit">学员评语 </div>
                        <div class="text-box">
                          <textarea class="form-control" rows="5" placeholder="扯淡、吐槽、表扬、鼓励......想说啥说啥！"></textarea>
                          <div class="text-right"><span>发表评论</span></div>
                        </div>
                      </div>
                    </div>
                    <!--<div class="textarea-box">-->
                    <!--<input type="text" class="ask-title" value="" placeholder="请输入问题标题">-->
                    <!--<textarea name="my-note" id=""  placeholder="请输入问题描述"></textarea>-->
                    <!--<div class="info"><span class="pic" onclick="screenshot()">截图 </span><span class="not-but">保存</span></div>-->
                    <!--</div>-->
                    <ul class="my-item-box">
                      <li>
                        <div>
                          <span><img src="/static/images/asset-vid.png" alt=""></span>
                          <span class="name">王老师</span>
                          <div class="item-rit">
                            <div class="star-show">
                              <div class="score"><i>4</i></div>
                            </div>
                            <div class="showSt">评分 <span>5星</span></div>
                          </div>
                        </div>
                        <div class="cont">
                          课程内容 消息回复接口（图文,语音消息的自动回复） 素材管理接口（图片上传） 自定义菜单接口（菜单的创建，查询，删除）
                        </div>
                        <div class="operation"><span>2017-2-23</span>
                          <div class="oper-box"></div>
                        </div>
                      </li>
                      <li>
                        <div>
                          <span><img src="/static/images/asset-vid.png" alt=""></span>
                          <span class="name">王老师</span>
                          <div class="item-rit">
                            <div class="star-show">
                              <div class="score"><i>4</i></div>
                            </div>
                            <div class="showSt">评分 <span>5星</span></div>
                          </div>
                        </div>
                        <div class="cont">
                          课程内容 消息回复接口（图文,语音消息的自动回复） 素材管理接口（图片上传） 自定义菜单接口（菜单的创建，查询，删除）
                        </div>
                        <div class="operation"><span>2017-2-23</span>
                          <div class="oper-box"></div>
                        </div>
                      </li>
                      <li>
                        <div>
                          <span><img src="/static/images/asset-vid.png" alt=""></span>
                          <span class="name">王老师</span>
                          <div class="item-rit">
                            <div class="star-show">
                              <div class="score"><i>4</i></div>
                            </div>
                            <div class="showSt">评分 <span>5星</span></div>
                          </div>
                        </div>
                        <div class="cont">
                          课程内容 消息回复接口（图文,语音消息的自动回复） 素材管理接口（图片上传） 自定义菜单接口（菜单的创建，查询，删除）
                        </div>
                        <div class="operation"><span>2017-2-23</span>
                          <div class="oper-box"></div>
                        </div>
                      </li>
                      <li>
                        <div>
                          <span><img src="/static/images/asset-vid.png" alt=""></span>
                          <span class="name">王老师</span>
                          <div class="item-rit">
                            <div class="star-show">
                              <div class="score"><i>4</i></div>
                            </div>
                            <div class="showSt">评分 <span>5星</span></div>
                          </div>
                        </div>
                        <div class="cont">
                          课程内容 消息回复接口（图文,语音消息的自动回复） 素材管理接口（图片上传） 自定义菜单接口（菜单的创建，查询，删除）
                        </div>
                        <div class="operation"><span>2017-2-23</span>
                          <div class="oper-box"></div>
                        </div>
                      </li>
                      <li>
                        <div>
                          <span><img src="/static/images/asset-vid.png" alt=""></span>
                          <span class="name">王老师</span>
                          <div class="item-rit">
                            <div class="star-show">
                              <div class="score"><i>4</i></div>
                            </div>
                            <div class="showSt">评分 <span>5星</span></div>
                          </div>
                        </div>
                        <div class="cont">
                          课程内容 消息回复接口（图文,语音消息的自动回复） 素材管理接口（图片上传） 自定义菜单接口（菜单的创建，查询，删除）
                        </div>
                        <div class="operation"><span>2017-2-23</span>
                          <div class="oper-box"></div>
                        </div>
                      </li>
                      <li>
                        <div>
                          <span><img src="/static/images/asset-vid.png" alt=""></span>
                          <span class="name">王老师</span>
                          <div class="item-rit">
                            <div class="star-show">
                              <div class="score"><i>4</i></div>
                            </div>
                            <div class="showSt">评分 <span>5星</span></div>
                          </div>
                        </div>
                        <div class="cont">
                          课程内容 消息回复接口（图文,语音消息的自动回复） 素材管理接口（图片上传） 自定义菜单接口（菜单的创建，查询，删除）
                        </div>
                        <div class="operation"><span>2017-2-23</span>
                          <div class="oper-box"></div>
                        </div>
                      </li>
                    </ul>
                    <a :href="url" class="more">查看更多</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="navCont">
              <div class="course-weeklist">
                <div class="nav nav-stacked" v-for="(teachplan_first, index) in teachplanList">
                  <div class="tit nav-justified text-center"><i class="pull-left glyphicon glyphicon-th-list"></i>{{teachplan_first.pname}}<i class="pull-right"></i></div>
                  <li   v-if="teachplan_first.children!=null" v-for="(teachplan_second, index) in teachplan_first.children"><i class="glyphicon glyphicon-check"></i>
                    <a :href="url" @click="study(teachplan_second.id)">
                      {{teachplan_second.pname}}
                    </a>
                  </li>

                 <!-- <div class="tit nav-justified text-center"><i class="pull-left glyphicon glyphicon-th-list"></i>第一章<i class="pull-right"></i></div>
                  <li  ><i class="glyphicon glyphicon-check"></i>
                    <a :href="url" >
                      第一节
                    </a>
                  </li>-->
                  <!--<li><i class="glyphicon glyphicon-unchecked"></i>为什么分为A、B、C部分</li>-->
                </div>

              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
  let sysConfig = require('@/../config/sysConfig')
  import * as courseApi from '../api/course'
  import * as systemApi from '@/base/api/system'
  import utilApi from '../../../common/utils';


  export default {
    components: {},
    data() {
      return {
        url:'',//当前url
        courseId:'',//课程id
        chapter:'',//章节Id
        coursename:'',//课程名称
        coursepic:'',//课程图片
        teachplanList:[],//课程计划
        playerOptions: {//播放参数
          autoplay: false,
          controls: true,
          sources: [{
            type: "application/x-mpegURL",
            src: ''
          }]
        },

      }
    },

    methods: {
      playvideo(video_src){
        console.log(video_src)
        this.playerOptions.sources[0].src = video_src
        this.playerOptions.autoplay = true
      },
      //取出第一个章节
      getFirstTeachplan(){
          if(this.teachplanList && this.teachplanList.length>0){
            let teachplan = this.teachplanList[0]//第一章
            if(teachplan.children && teachplan.children.length>0){//二级分类
                let secondTeachplan = teachplan.children;
                return secondTeachplan[0].id;
            }
          }
          return ;
      },
      //开始学习
      study(chapter){
          // 获取播放地址
        courseApi.get_media(this.courseId,chapter).then((res)=>{
            if(res.success){
               let fileUrl = sysConfig.videoUrl + res.fileUrl
               //播放视频
              this.playvideo(fileUrl)
            }else if(res.message){
                this.$message.error(res.message)
            }else{
              this.$message.error("播放视频失败，请刷新页面重试")
            }
        });
      }

    },
    created(){
        //当前请求的url
      this.url = window.location
      //课程id
      this.courseId = this.$route.params.courseId
      //章节id
      this.chapter = this.$route.params.chapter
      //取出课程Id
      systemApi.course_view(this.courseId).then((view_course)=>{

          if(!view_course || !view_course[this.courseId]){
            this.$message.error("获取课程信息失败，请重新进入此页面！")
            return ;
          }

          let courseInfo = view_course[this.courseId]
          console.log(courseInfo)
          this.coursename = courseInfo.name
          if(courseInfo.teachplan){
              let teachplan = JSON.parse(courseInfo.teachplan);
            this.teachplanList = teachplan.children;

          }

          //一级分类
//          this.teachplanList = view_course.teachplan.children[0].children
           if(!this.chapter || this.chapter == '0'){
             //取出第一个教学计划
             this.chapter = this.getFirstTeachplan()
             //开始学习
             this.study(this.chapter)
           }else{
             //开始学习
             this.study(this.chapter)
           }
      })
      //播放测试
//      this.playvideo("http://video.xuecheng.com/video/lucene.m3u8")
//      this.playvideo("http://video.xuecheng.com/video/5/3/53ac4cca3ddf386c21f4f1cbb4dc9876/hls/53ac4cca3ddf386c21f4f1cbb4dc9876.m3u8")
    },
    mounted() {


      //this.player = videojs('video-player');

      $(function() {
        $('.active-box span').click(function() {
          $(this).css({
            'color': '#00a4ff'
          })
          if ($(this).find('i').hasClass('i-laud')) {
            $(this).find('.i-laud').css('background-position', '-80px -19px')
          } else if ($(this).find('i').hasClass('i-coll')) {
            $(this).find('.i-coll').css('background-position', '1px -75px')
          }
        })
        $('.learing-box .item-list').mouseover(function(e) {
          $(this).css({
            'height': '140px'
          }).addClass('hov').siblings().css({
            'height': '50px'
          })
          $(this).siblings().removeClass('hov')
        })
        $('.learing-box .item-box').mouseout(function() {
          $(this).find('.item-list:first').css({
            'height': '140px'
          }).addClass('hov')
          $(this).find('.item-list:first').siblings().css({
            'height': '50px'
          }).removeClass('hov')
        })
      })


      $(function() {
        $('.learing-box .item-list').mouseover(function(e) {
          $(this).css({
            'height': '140px'
          }).addClass('hov').siblings().css({
            'height': '50px'
          })
          $(this).siblings().removeClass('hov')
        })
        $('.learing-box .item-box').mouseout(function() {
          $(this).find('.item-list:first').css({
            'height': '140px'
          }).addClass('hov')
          $(this).find('.item-list:first').siblings().css({
            'height': '50px'
          }).removeClass('hov')
        })
      })

      $(function() {
        //代码点击显示
        $(".item .item-left").click(function() {
          var pre = $(this).parent();
          if (!pre.find('pre').hasClass('code-pop')) {
            pre.find('pre').addClass('code-pop');
            pre.find('.mask,pre').css('display', 'block')
          } else {
            pre.find('pre').removeClass('code-pop');
            pre.find('.mask,pre').css('display', 'none')
          }
        });
        //代码切换
        $('.content-title p a').click(function() {
          $(this).addClass('all').siblings().removeClass('all');
        })

        $('.learing-box .item-list').mouseover(function(e) {
          $(this).css({
            'height': '140px'
          }).addClass('hov').siblings().css({
            'height': '50px'
          })
          $(this).siblings().removeClass('hov')
        })
        $('.learing-box .item-box').mouseout(function() {
          $(this).find('.item-list:first').css({
            'height': '140px'
          }).addClass('hov')
          $(this).find('.item-list:first').siblings().css({
            'height': '50px'
          }).removeClass('hov')
        })
      })


      $(function() {
        //评分
        $('.star .score').map(function(n, i) {
          var x = Number($(this).find('i').text());
          var w = 109 * (1 - x / 5);
          $(this).css('width', w + 'px');
        })
        //评论打分
        $('.evaluate .star').mousemove(function(e) {
          var startX = $(this).offset().left;
          var movX = e.clientX - startX + 0.5;
          var w = 145 * (1 - movX / 145);
          $(this).find('.score').css('width', w + 'px');
          $('.star-score i').text((movX / 145 * 5).toFixed(1))
        })
        //星级评分
        $('.grade').map(function(n, i) {
          var pret = $(this).find('.percent-num i').text();
          var wt = $(this).find('.grade-percent').width();
          $(this).find('.grade-percent span').css('width', wt * pret / 100);
        })



      })

      $(function() {
        var vidHit = $('html').height() - 0;
        var vidCenHit = (vidHit - $('.video-play').height()) / 2;
        var vdwt = $('.video').width();
        var wt = 300;

        $('.course-cont-top-video,.video').css('height', vidHit);
        $('.video').css('height', vidHit - 50);


        $('.note-cont').css('height', vidHit - $('.note-box .note').height() - 65);

        $(window).resize(function() {
          $('.course-cont-top-video,.video').css('height', vidHit);
          $('.video').css('height', vidHit - 50);
//      $('#video-player').height(vidHit - 70);
          $('.nodte-cont').css('height', vidHit - $('.note-box .note').height() - 65);
        });
        $(window).resize();
        //还原初始状态-控制器
        function setStart(obj) {
          if (obj === 'ck') { //左导航
            setnt()
            setak()
            setcm()
            setnav()
          } else if (obj === 'nt') { // 笔记
            setck()
            setak()
            setcm()
            setnav()
          } else if (obj === 'ak') { // 问答
            setck()
            setnt()
            setcm()
            setnav()
          } else if (obj === 'cm') { // 评论
            setck()
            setnt()
            setak()
            setnav()
          } else if (obj === 'nv') { // 目录
            setck()
            setnt()
            setcm()
            setak()
          }
        }

        function setck() {
          if ($('.video-box .glyphicon-align-justify').hasClass('ck')) {
            $('.video-box .glyphicon-align-justify').removeClass('ck');
            $('.video-box').animate({
              width: '100%'
            }, 500)
            $('.course-nav').animate({
              'right': "0px"
            }, 0)
            $('.course-weeklist').animate({
              left: -wt
            }, 500)
          }
        }

        function setnt() {
          if ($('.course-nav .lab-note').hasClass('nt')) {
            $('.course-nav .lab-note').removeClass('nt');
            $('.note').animate({
              'width': "0"
            }, 500);
            $('.course-nav').animate({
              'right': "0px"
            }, 0)
            $('.video').animate({
              'width': '100%'
            }, 500);
          }
        }
        //
        function setnav() {
          if ($('.course-nav .nav').hasClass('nv')) {
            $('.course-nav .nav').removeClass('nv');
            $('.navCont').animate({
              'width': "0"
            }, 500);
            $('.course-nav').animate({
              'right': "0px"
            }, 0)
            $('.video').animate({
              'width': '100%'
            }, 500);
          }
        }
        //
        function setak() {
          if ($('.course-nav .lab-ask').hasClass('ak')) {
            $('.course-nav .lab-ask').removeClass('ak');
            $('.ask').animate({
              'width': "0"
            }, 500);
            $('.course-nav').animate({
              'right': "0px"
            }, 0)
            $('.video').animate({
              'width': '100%'
            }, 500);
          }
        }
        // 讲义
        function setcm() {
          if ($('.course-nav .lab-com').hasClass('cm')) {
            $('.course-nav .lab-com').removeClass('cm');
            $('.com').animate({
              'width': "0"
            }, 500);
            $('.course-nav').animate({
              'right': "0px"
            }, 0)
            $('.video').animate({
              'width': '100%'
            }, 500);
          }
        }
        //
        $('.note-box .problem').click(function() {
          alert('wenda')
          if (!$(this).hasClass('ck')) {
            $(this).addClass('ck');
            $(this).find('p').css('display', 'block')
            $('.note-cont').css('height', vidHit - $('.note-box .note').height() - 65);
          } else {
            $(this).removeClass('ck');
            $(this).find('p').css('display', 'none')
            $('.note-cont').css('height', vidHit - $('.note-box .note').height() - 65);
          }
        });
        //
        var reht = $(".video-box .resou-box").height();
        $(".video-box .pull-right").click(function() {
          if (!$(this).hasClass('ck')) {
            $(this).addClass('ck');
            $(".video-box .resources").animate({
              height: reht
            }, 500)
          } else {
            $(this).removeClass('ck');
            $(".video-box .resources").animate({
              height: 0
            }, 500)
          }
        })
        //笔记切换
        $('.note-box .note-lab span, .ask-box .note-lab span').click(function() {
          $(this).addClass('active').siblings().removeClass('active')
          if ($(this).index() == 1) {
            $('.note-item-cont').animate({
              'left': -400
            }, 500)
          } else {
            $('.note-item-cont').animate({
              'left': 0
            }, 500)
          }
        })
        //笔记部分处理
        var myNtHt = $('.my-note .textarea-box').height();
        $('.my-note .my-item-box').css('height', $('.note-box').height() - myNtHt - 160 + "px");
        $('.sel-note .my-item-box').css('height', $('.note-box').height() - 160 + "px");
        $('.course-nav .lab-note').click(function() {
          window.location = '#'
          setStart('nt');
          if (!$(this).hasClass('nt')) {
            $(this).addClass('nt');
            $('.note').animate({
              'width': "400px"
            }, 500)
            $('.course-nav').animate({
              'right': "401px"
            }, 500)
            $('.video').animate({
              'width': vdwt - 380 + 'px'
            }, 500);
          } else {
            $(this).removeClass('nt');
            $('.note').animate({
              'width': "0"
            }, 500);
            $('.course-nav').animate({
              'right': "0px"
            }, 500)
            $('.video').animate({
              'width': '100%'
            }, 500);
          }
        })
        //目录
        $('.course-nav .nav').click(function() {
          window.location = '#'
          setStart('nv');
          if (!$(this).hasClass('nv')) {
            $(this).addClass('nv');
            $('.navCont').animate({
              'width': "300px"
            }, 500)
            $('.course-nav').animate({
              'right': "301px"
            }, 500)
            $('.video').animate({
              'width': vdwt - 280 + 'px'
            }, 500);
          } else {
            $(this).removeClass('nv');
            $('.navCont').animate({
              'width': "0"
            }, 500);
            $('.course-nav').animate({
              'right': "0px"
            }, 500)
            $('.video').animate({
              'width': '100%'
            }, 500);
          }
        })
        // 问答
        $('.course-nav .lab-ask').click(function() {
          window.location = '#'
          setStart('ak');
          if (!$(this).hasClass('ak')) {
            $(this).addClass('ak');
            $('.ask').animate({
              'width': "400px"
            }, 500)
            $('.course-nav').animate({
              'right': "401px"
            }, 500)
            $('.video').animate({
              'width': vdwt - 380 + 'px'
            }, 500);
          } else {
            $(this).removeClass('ak');
            $('.ask').animate({
              'width': "0"
            }, 500);
            $('.course-nav').animate({
              'right': "0px"
            }, 500)
            $('.video').animate({
              'width': '100%'
            }, 500);
          }
        })
        // 评论
        $('.course-nav .lab-com').click(function() {
          window.location = '#'
          setStart('cm');
          if (!$(this).hasClass('cm')) {
            $(this).addClass('cm');
            $('.com').animate({
              'width': "400px"
            }, 500)
            $('.course-nav').animate({
              'right': "401px"
            }, 500)
            $('.video').animate({
              'width': vdwt - 380 + 'px'
            }, 500);
          } else {
            $(this).removeClass('cm');
            $('.com').animate({
              'width': "0"
            }, 500);
            $('.course-nav').animate({
              'right': "0px"
            }, 500)
            $('.video').animate({
              'width': '100%'
            }, 500);
          }
        })
//    //video播放器
//    $('.video-mine .cls-text').click(function() {
//
//    })

      })

    }
  }

</script>

<style>
  @import './../../../../static/plugins/normalize-css/normalize.css';
  /*@import './../../../../static/plugins/bootstrap/dist/css/bootstrap.css';*/
  @import './../../../../static/css/page-learing-personal.css';
  @import './../../../../static/css/page-learing-course-videoes.css';
  @import './../../../../static/plugins/rainbow.css';
  /*@import './../../../../static/plugins/videojs/video-js.css';*/
  .playbackView {
    position: relative;
  }

  .optionsWrapper {
    width: 500px;
    margin: 20px auto;
  }
  .video-js{
    position:inherit;
  }
  .learing-course{
    background: #000;
  }
  .nav > li > a {
    position: relative;
    display: unset;
    padding: 10px 15px;
/*    color: #ebeef5;*/
  }
/*  .nav > li > a:hover { background-color:#00a4ff; }*/

</style>
