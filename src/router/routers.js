import index from '@/views/index/index.vue'
export const constantRouters = [{
  path: '/',
  component: index,
  redirect: 'index',
  hidden: true,
  children: [{
    path: 'index',
    meta: { title: '首页', name: '1' },
    component: (resolve) => require(['@/views/index/main.vue'], resolve)
  }]
},
{
  path: '/login',
  meta: { title: '登录' },
  hidden: true,
  component: (resolve) => require(['@/views/login/index.vue'], resolve)
},
{
  path: '/error',
  meta: { title: 'not found' },
  hidden: true,
  component: (resolve) => require(['@/views/errorPages/404.vue'], resolve)
}
];

export default constantRouters

export const asyncRouters = [{
  path: '/one',
  meta: { title: '目录一' },
  component: index,
  children: [{
    path: 'video',
    meta: { title: '视频页面', name: '2', role: ['admin'] },
    component: (resolve) => require(['@/views/video/index.vue'], resolve)
  },
  {
    path: 'echart',
    meta: { title: '图表页面', name: '3', role: ['admin'] },
    component: (resolve) => require(['@/views/echart/index.vue'], resolve)
  }
  ]
},
{
  path: '/two',
  meta: { title: '目录二' },
  component: index,
  children: [
    {
      path: 'table',
      meta: { title: '表格页面', name: '7', role: ['admin'] },
      component: (resolve) => require(['@/views/table/index.vue'], resolve)
    },
    {
      path: 'richText',
      meta: { title: '富文本页面', name: '8', role: ['admin'] },
      component: (resolve) => require(['@/views/richText/index.vue'], resolve)
    }
  ]
},
{
  path: '*',
  redirect: '/error',
  hidden: true
}
]
