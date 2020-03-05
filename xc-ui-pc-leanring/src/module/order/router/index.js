import order_list from '@/module/order/page/order_list.vue';
import order_pay from '@/module/order/page/order_pay.vue';
import order_weixinpay from '@/module/order/page/order_weixinpay.vue';

import Home from '@/module/home/page/home.vue';
export default [
  {
    path: '/',
    component: Home,
    name: '我的订单',
    hidden: false,
    iconCls: 'el-icon-document',
    children: [
      { path: '/order', name: '订单列表',component: order_list,hidden: false }
    ]
  },
  {
    path: '/pay/:orderNumber',
    component: order_pay,
    name: '订单支付',
    hidden: true
  },
  {
    path: '/weixinpay/:orderNumber',
    component: order_weixinpay,
    name: '微信支付',
    hidden: true
  }
]
