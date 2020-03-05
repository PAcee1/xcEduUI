<template>
  <!--底部版权-->
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-7">
          <div>
            <!--<h1 style="display: inline-block">学成网</h1>--><img src="/static/images/asset-logoIco.png" alt=""></div>
          <div>学成网致力于普及中国最好的教育它与中国一流大学和机构合作提供在线课程。</div>
          <div>© 2017年XTCG Inc.保留所有权利。-沪ICP备15025210号</div>
          <input type="button" class="btn btn-primary" value="下 载" />
        </div>
        <div class="col-md-5 row">
          <dl class="col-md-4">
            <dt>关于学成网</dt>
            <dd>关于</dd>
            <dd>管理团队</dd>
            <dd>工作机会</dd>
            <dd>客户服务</dd>
            <dd>帮助</dd>
          </dl>
          <dl class="col-md-4">
            <dt>新手指南</dt>
            <dd>如何注册</dd>
            <dd>如何选课</dd>
            <dd>如何拿到毕业证</dd>
            <dd>学分是什么</dd>
            <dd>考试未通过怎么办</dd>
          </dl>
          <dl class="col-md-4">
            <dt>合作伙伴</dt>
            <dd>合作机构</dd>
            <dd>合作导师</dd>
          </dl>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
}
</script>
<style scoped>

  /*
   * colors variables
   */
  footer {
    width: 100%;
    background: #fff;
    margin-top: 20px;
    padding: 40px 0;
    line-height: 260%;
  }

  footer .btn-primary {
    min-width: 100px;
    margin-top: 10px;
  }

  footer img {
    position: relative;
    top: -8px;
    left: 0px;
  }

  footer dt {
    margin-bottom: 20px;
  }

  footer dd {
    line-height: 200%;
  }

</style>
