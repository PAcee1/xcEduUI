import Home from '@/module/home/page/home.vue';
import Login from '@/module/home/page/loginpage.vue';
import Denied from '@/module/home/page/denied.vue';
import Logout from '@/module/home/page/logout.vue';
import order_pay from '@/module/order/page/order_pay.vue';
// import LoginMini from '@/module/home/page/login_mini.vue';
export default [{
    path: '/',
    component: Home,
    name: '个人中心',
    hidden: true
  },
  {
    path: '/login',
    component: Login,
    name: 'Login',
    hidden: true
  },
  {
    path: '/logout',
    component: Logout,
    name: 'Logout',
    hidden: true
  },
  {
    path: '/denied',
    component: Denied,
    name: Denied,
    hidden: true
  }/*,
  {
    path: '/loginmini',
    component: LoginMini,
    name: 'LoginMini',
    hidden: true
  }*/
]
