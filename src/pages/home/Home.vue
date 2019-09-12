<template>
    <!--使用组件-->
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :swiper="swiper"></home-swiper>
    <home-icons :icons="icons"></home-icons>
    <home-other :hot="hot" :like="like"></home-other>
    <home-week :week="week"></home-week>
    <home-footer></home-footer>
  </div>
</template>

<script>
  //引入组件
  import HomeHeader from '@/pages/home/components/Header'
  import HomeSwiper from '@/pages/home/components/Swiper'
  import HomeIcons from '@/pages/home/components/Icons'
  import HomeOther from '@/pages/home/components/Other'
  import HomeWeek from '@/pages/home/components/Week'
  import HomeFooter from '@/pages/home/components/Footer'

  import axios from 'axios' //引入ajax组件

    export default {
        name: "Home",
      components:{
          HomeHeader,
          HomeSwiper,
          HomeIcons,
          HomeOther,
          HomeWeek,
          HomeFooter
      },
      data(){
          return {
            city:"",//header的数据
            swiper:[],//swiper的数据
            icons:[],//icons的数据
            hot:[],//热门榜单的数据
            like:[],//猜你喜欢的数据
            week:[],//周末去哪儿的数据
          }
      },
      methods:{
          getHomeInfo(){
                    //请求路径                            回调函数
            axios.get('/static/moke/index.json').then(this.getSucc);
          },
          //数据请求成功时
          getSucc(res){
             res=res.data;
             if(res.ret && res.data){//如果请求到数据而且数据中包含data
               const data=res.data;
               this.city=data.city;
               this.swiper=data.swiperList;
               this.icons=data.iconList;
               this.hot=data.hotJd;
               this.like=data.yLike;
               this.week=data.WeekList;
          }
          }
      },
      mounted(){//钩子函数(一般向后台请求数据后做一些业务处理
          this.getHomeInfo();
      }
    }
</script>

<style scoped>

</style>
