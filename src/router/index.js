import Vue from 'vue'
import Router from 'vue-router'
//引入组件
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
import Hotlist from '@/pages/hotlist/Hotlist'

Vue.use(Router);
//专门配置路由的文件
export default new Router({
  routes: [//路由配置
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component:Detail
    },
    {
      path: '/hotlist',
      name: 'Hotlist',
      component: Hotlist
    },

  ]
})
