import index from '@/views/index/index.vue'
const routers = [{
  path: '/',
  meta: { title: '首页' },
  component: index,
  redirect: 'index',
  children: [{
    path: '/index',
    meta: { title: '首页' },
    component: (resolve) => require(['@/views/index/main.vue'], resolve)
  }]
},
{
  path: '/index',
  meta: { title: '首页' },
  component: (resolve) => require(['@/views/index/index.vue'], resolve)
},
{
  path: '/login',
  meta: { title: '登陆' },
  component: (resolve) => require(['@/views/login/index.vue'], resolve)
},
{
  path: '/error',
  meta: { title: '错误' },
  component: (resolve) => require(['@/views/errorPages/404.vue'], resolve)
},
{
  path: '/example1',
  meta: { title: '例子' },
  component: index,
  children: [{
    path: '/example1',
    meta: { title: '例子1111' },
    component: (resolve) => require(['@/views/examples/example1.vue'], resolve)
  }]
},
{
  path: '/example2',
  meta: { title: '例子2' },
  component: (resolve) => require(['@/views/examples/example2.vue'], resolve)
}]
export default routers
