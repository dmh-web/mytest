<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item in swiper" :key="item.id"><img :src="item.imgUrl" alt=""></swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
    export default {
        name: "HomeSwiper",
      props:{
        swiper:Array
      },
      data (){
          return{
            swiperOption:{
                pagination:".swiper-pagination",
                loop:true,
                autoplay:2000
            },

          }
      }
    }
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active{ //样式穿透
    background :#fff;
  }
  .wrapper
    overflow :hidden;
    width: 100%
    height:0;
    padding-bottom:28.6666666666%
    .swiper-slide
      img{
        width: 100%
      }
</style>
