
import NotFound from './base/components/404.vue'

let menus = [
    {
        path: '/login',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: NotFound,
        name: '导航一',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/main', component: NotFound, name: '主页', hidden: true },
            { path: '/table', component: NotFound, name: 'Table' },
            { path: '/form', component: NotFound, name: 'Form' },
            { path: '/user', component: NotFound, name: '列表' },
        ]
    },
    {
        path: '/',
        component: NotFound,
        name: '导航二',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/page4', component: NotFound, name: '页面4' },
            { path: '/page5', component: NotFound, name: '页面5' }
        ]
    },
    {
        path: '/',
        component: NotFound,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true,//只有一个节点
        children: [
            { path: '/page6', component: NotFound, name: '导航三' }
        ]
    },
    {
        path: '/',
        component: NotFound,
        name: 'Charts',
        iconCls: 'fa fa-bar-chart',
        children: [
            { path: '/echarts', component: NotFound, name: 'echarts' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default menus;
