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
