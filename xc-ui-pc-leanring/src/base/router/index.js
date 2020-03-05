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
import OrderRouter from '@/module/order/router'
import SettingRouter from '@/module/setting/router'
import ExamRouter from '@/module/exam/router'
import QuestionRouter from '@/module/question/router'
// 合并路由规则
concat(CourseRouter)
concat(OrderRouter)
concat(HomeRouter)
concat(SettingRouter)
// concat(QuestionRouter)
// export default new Router({
// 	routes:_routers
// });
export default routes;
