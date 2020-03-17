此为学成在线前端工程，后端工程[地址](https://github.com/PAcee1/xcEduService)

## 项目概述

### 项目介绍

学成在线就是一个在线学习平台，类似慕课网以及腾讯学堂，是专门针对IT行业进行在线学习的平台。

学成在线采用B2B2C的业务模式，即向企业与个人提供平台实现教学服务，其中企业就是老师，提供课程，作业，考试等；个人就是学生，通过平台实现教学和学习的过程。

其原型就是[腾讯课堂](<https://ke.qq.com/>)

### 功能模块

![1580702012697](/image/1580702012697.png)

### 使用前端技术

前端工程大多为单页面应用（SPA），采用vue.js框架开发，搜索功能前端采用nuxt.js服务端渲染（SSR）框架开
发

- Vue
- Vue-cli
- Element
- Nuxt
- npm
- webpack
- axios
- nginx

### 前端工程目录介绍

- xc-ui-pc-leanring：学习中心
- xc-ui-pc-portal：动态的前端页面，需要webpack打包启动
- xc-ui-pc-static-portal：前端静态页面
- xc-ui-pc-static-resources：CMS管理的静态化页面，比如轮播图，课程详情页面
- xc-ui-pc-sysmanage：系统管理，比如CMS
- xc-ui-pc-teach：教学中心管理，包含课程管理，媒资管理

前端工程很多很杂，使用nginx进行代理请求

### 前端项目启动

处理`xc-ui-pc-static-portal`和`xc-ui-pc-static-resources`是静态html，其他工程启动方式：

```
npm install
npm run dev
```

