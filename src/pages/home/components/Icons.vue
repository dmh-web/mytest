<template>
    <div class="icons">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(page,index) in pages" :key="index">
            <div class="icon" v-for="(item,index) in page" :key="item.id">
              <img :src="item.imgUrl" alt="">
              <p>{{item.desc}}</p>
            </div>
        </swiper-slide>

        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>





      
    </div>
</template>

<script>
    export default {
        name: "Icons",
      props:{
          icons:Array
      },
        data () {
          return {
            swiperOption:{
              pagination:".swiper-pagination"
            },

          }
        },
      computed:{
          pages(){
            const pages=[];
            this.icons.forEach((item,index)=>{
             const page= Math.floor(index/8);
            if(!pages[page]){
              pages[page]=[];
            }
             pages[page].push(item);
            });
            return pages;
          }
      }

    }
</script>

<style lang="stylus" scoped>
    .icons{
      width 100%;
      height 0;
      padding-bottom 50%;
      overflow hidden;
      .icon{
          width 25%;
          float left;
          height 0;
          padding-bottom 25%;
          text-align center;
        img{
          width 60%;
          margin-top 0.07rem;
        }
        p{
          color: #6f6f6f;
          margin-top .03rem;
          font-size .12rem;
        }
      }
    }
  .icons >>> .swiper-container{
    height 0;
    padding-bottom 50%;
  }
    .icons >>>  .swiper-container-horizontal > .swiper-pagination-bullets{
      bottom 1px;
    }
  .icons >>> .swiper-pagination-bullet-active{
    background #00bcd4;
  }
</style>
