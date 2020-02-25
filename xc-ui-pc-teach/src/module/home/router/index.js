import Home from '@/module/home/page/home.vue';
import Login from '@/module/home/page/login.vue';
export default [{
    path: '/',
    component: Home,
    name: '教学管理首页',
    hidden: true,
    meta: { requiresAuth: true ,permission:'xc_teachmanager'}
    // ,
    // redirect: '/home',
    // children: [
    //   {path: 'home', component: Home}
    // ]
  }/*,
  {
    path: '/login',
    component: Login,
    name: 'Login',
    hidden: true
  }*/
]
