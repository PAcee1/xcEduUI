import personal_setting from '@/module/setting/page/personal_setting.vue';

import Home from '@/module/home/page/home.vue';
export default [
  {
    path: '/',
    component: Home,
    name: '个人设置',
    hidden: false,
    iconCls: 'el-icon-document',
    children: [
      { path: '/setting', name: '个人设置',component: personal_setting,hidden: false }
    ]
  }
]
