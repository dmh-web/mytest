<template>
    <div class="container">
      <div class="wrapper" @click="close()">
        <swiper :options="swiperOption">
          <!-- slides -->
          <swiper-slide>
            <img src="http://img1.qunarzz.com/sight/p0/1504/d6/d65f3eebd57efdc6.water.jpg_r_800x800_dd862cb7.jpg" alt="">
          </swiper-slide>
          <swiper-slide>
            <img src="http://img1.qunarzz.com/sight/p0/1504/65/6513e6b2d37680a0.water.jpg_r_800x800_1851d298.jpg" alt="">
          </swiper-slide>
        </swiper>
      </div>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </div>
</template>

<script>
    export default {
        name: "gallary",
      data (){
        return{
          swiperOption:{
            pagination:".swiper-pagination",
            loop:true,
            paginationType:'fraction',
            observeParents:true,
            observer:true
          },
        }
      },
      methods:{
          close(){//利用自定义点击事件 向父组件触发事件,通过$emit传输
            this.$emit("closeSwiper")            //子组件可以使用 $emit 触发父组件的自定义事件。
          }
      }
    }
</script>

<style lang="stylus" scoped>
  .container >>> swiper-container{
    overflow:inherit;
  }
  .container>>>.swiper-pagination-fraction{
    color #fff;
    bottom 1.8rem
  }
  .container{
    background #000000;
    position absolute;
    left 0;
    top 0;
    bottom 0;
    width 100%;
    display flex;
    flex-direction column;
    justify-content center
    .wrapper{
      width 100%;

      background #fff;
      img{
        width 100%;
      }
    }
  }
</style>
