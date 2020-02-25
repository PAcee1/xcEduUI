<template>
  <div>
    <mt-swipe :auto="2000">
      <!-- <mt-swipe-item>
        	<img width=100% src="https://img30.360buyimg.com/da/jfs/t12757/188/1427260374/111499/79d14076/5a1fb40bN8bb02fdd.jpg"/>
        </mt-swipe-item>
        <mt-swipe-item>
        	<img width=100% src="https://img1.360buyimg.com/da/jfs/t13747/28/1020241677/122281/1dc8803b/5a17f1f1Ned39359a.jpg"/>
        </mt-swipe-item>
        <mt-swipe-item>
        	<img width=100% src="https://img20.360buyimg.com/da/jfs/t12622/121/1433536783/91898/a8dcfd70/5a20f7ffN097f0db9.jpg"/>
        </mt-swipe-item> -->
      <mt-swipe-item v-for="item in banner.message" :key="item.url">
        <img v-bind:src="item.img" />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
//查询轮播图片
import * as bannerApi from '../api/banner';
export default {
  data() {
    return {
      banner: {}
      /*banner:{
        "message": [
          {
            "img": "https://img30.360buyimg.com/da/jfs/t12757/188/1427260374/111499/79d14076/5a1fb40bN8bb02fdd.jpg",
            "url": "http://www.itcast.cn/"
          },
          {
            "img": "https://img1.360buyimg.com/da/jfs/t13747/28/1020241677/122281/1dc8803b/5a17f1f1Ned39359a.jpg",
            "url": "http://www.itcast.cn/"
          },
          {
            "img": "https://img20.360buyimg.com/da/jfs/t12622/121/1433536783/91898/a8dcfd70/5a20f7ffN097f0db9.jpg",
            "url": "http://www.itcast.cn/"
          }
        ],
        "status": 0
      }*/
    }
  },
  created() {
    //ajax获取轮播图列表
    this.getBanner();
  },
  methods: {
    getBanner() {
      // var url = "/banner";
      // //通过ajax获取轮播图片
      // this.$http.get(url).then(function(response) {
      //   var data = response.body;
      //   //alert(data);
      //   this.banner = data;
      // });
      bannerApi.getBannerPic().then(res => {
        //alert(res);
        this.banner = res
      })


    }
  }
}
</script>
<style scoped>
.mint-swipe {
  height: 300px;
}

.mint-swipe-item,
.mint-swipe-items-wrap {
  /* background: red; */
  width: 100%;
  height: 300px;
}

.mint-swipe-item img {
  width: 100%;
}
</style>
