import Vue from 'vue'
import Router from 'vue-router'
// 为了方便管理，路由也按需加载
import bookRouter from './book'
import likeRouter from '../routers/like'
import personRouter from '../routers/person'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      redirect:'/book/hot'
    },
    bookRouter,
   likeRouter,
   personRouter
  ]
})
