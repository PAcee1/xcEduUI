# 学成在线课程管理系统
学成在线课程管理前端工程

## Build Setup

安装nodeJS，版本9.x以上

安装npm

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



## 前端开发流程

在代码结构中，我们主要关注src/module中的代码，也是我们主要编写业务的地方

![1580894259993](../../../../1%E7%AC%94%E8%AE%B0/image/1580894259993.png)

目录结构如图，其中home是一个参考示例

- api：编写调用服务端接口代码的地方
- components：一些组件
- page：放vue页面的地方
- router：路由，固定为index.js

### 开发步骤

首先编写路由，如下示例

```js
import Home from '@/module/home/page/home.vue';
import PageList from '@/module/cms/page/page_list.vue';

export default [{
    path: '/cms',
    component: Home,
    name: 'CMS',
    hidden: false,
    children: [
      {
        path: '/cms/page/list',
        name : '页面列表',
        component:PageList,
        hidden:false
      }
    ]
  }
]
```

然后再主路由添加刚刚的子路由，主路由位于src/base/rount/index.js

只需添加路由规则与合并路由规则即可

```js
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
// 定义路由配置
let routes = []
let concat = (router) => {
  routes = routes.concat(router)
}
// // 导入路由规则
import HomeRouter from '@/module/home/router'
import CmsRouter from '@/module/cms/router'
// 合并路由规则
concat(HomeRouter)//加入home模块的路由
concat(CmsRouter)//加入cms模块的路由
export default routes;
```

添加完路由就可以编写页面，以及调用服务端接口的代码了，调用代码如下所示

```js
import http from './../../../base/api/public'
import querystring from 'querystring'
let sysConfig = require('@/../config/sysConfig')
let apiUrl = sysConfig.xcApiUrlPre;

export const page_list = (page,size,params) => {
  return http.requestQuickGet(apiUrl + '/cms/page/list/'+ page +'/' + size);
}
```

使用封装好的`axios`进行接口调用

> 要注意跨域问题，我们使用的vue-cli的脚手架，所以提供了proxyTable解决此问题，在config/index.js中已经配置好，开发时只需使用apiUrl拼接请求地址即可