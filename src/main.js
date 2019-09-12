// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//整个项目的入口文件
//整个项目的入口文件
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './Store' //引入store   -vuex
//引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'

//重置样式
import './assets/styles/reset.css'
import './assets/styles/border.css'  //解决一个像素边框的问题
import './assets/styles/iconfont.css' //引入图标库
import 'swiper/dist/css/swiper.css' //引入swiper样式
import fastClick from 'fastclick' //解决点击延迟300ms的问题
import  'babel-polyfill'


Vue.config.productionTip = false;
fastClick.attach(document.body);
router.afterEach((to, from, next) => { //页面跳转后滚动条在最顶部
  window.scrollTo(0, 0);
});


Vue.use(VueAwesomeSwiper);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },//组件的注册
  template: '<App/>'
})
