import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/dianying'
  },
  {
    path: '/dianying',
    name: 'dianying',
    component: () => import(/* webpackChunkName: "dianying" */ '../views/dianying/dianying.vue'),
    children:[
      {
        path: 'left',
        name: 'left',
        component: () => import(/* webpackChunkName: "dianying" */ '../views/dianying/page/left.vue')
      },
      {
        path: 'right',
        name: 'right',
        component: () => import(/* webpackChunkName: "dianying" */ '../views/dianying/page/right.vue')
      }
    ]
  },
  {
    path: '/yingyuan',
    name: 'yingyuan',
    component: () => import(/* webpackChunkName: "yingyuan" */ '../views/yingyuan/yingyuan.vue')
  },
  {
    path: '/wode',
    name: 'wode',
    component: () => import(/* webpackChunkName: "wode" */ '../views/wode/wode.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
