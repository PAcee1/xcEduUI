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
import CourseRouter from '@/module/course/router'
import MediaRouter from '@/module/media/router'
import ExamRouter from '@/module/exam/router'
import QuestionRouter from '@/module/question/router'
// import CmsRouter from '@/module/cms/router'
// import FsRouter from '@/module/fs/router'
// 合并路由规则
concat(CourseRouter)
concat(HomeRouter)
concat(MediaRouter)
// concat(ExamRouter)
// concat(QuestionRouter)
// concat(CmsRouter)
// concat(FsRouter)
// export default new Router({
// 	routes:_routers
// });
export default routes;
