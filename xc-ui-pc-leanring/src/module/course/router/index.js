import course_list from '@/module/course/page/course_list.vue';

import Home from '@/module/home/page/home.vue';
import learning_video from '@/module/course/page/learning_video.vue';
export default [
  {
    path: '/',
    component: Home,
    name: '我的课程',
    hidden: false,
    iconCls: 'el-icon-document',
    children: [
      { path: '/', name: '课程列表',component: course_list,hidden: false }
    ]
  },
  {
    path: '/learning/:courseId/:chapter',
    component: learning_video,
    name: '录播视频学习',
    hidden: false,
    iconCls: 'el-icon-document'
  }
]
