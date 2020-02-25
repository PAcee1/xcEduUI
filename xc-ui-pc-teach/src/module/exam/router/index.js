import list from '@/module/exam/page/list.vue';
import add from '@/module/exam/page/add.vue';
import Home from '@/module/home/page/home.vue';
export default [
  {
    path: '/exam',
    component: Home,
    name: '考试管理',
    hidden: false,
    iconCls: 'el-icon-menu',
    children: [
      { path: '/exam/list', name: '考试查询',component: list,hidden: false },
      { path: '/exam/add', name: '添加考试',component: add,hidden: false }
    ]
  }
]
