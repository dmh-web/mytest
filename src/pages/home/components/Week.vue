<template>
   <div>
     <div class="week-title">
        <p>周末去哪儿</p>
     </div>

     <div class="week-all" v-for="(item,index) in week">
       <img :src="item.imgUrl" alt="">
       <div class="week-message">
          <p class="message-top">{{item.t1}}</p>
          <p class="message-bottom">{{item.t2}}</p>
       </div>
     </div>


   </div>
</template>

<script>
    export default {
        name: "Week",
      props:{
          week:Array
      },
      data(){
          return{

          }
      }
    }
</script>

<style lang="stylus" scoped>
  .week-title{
    width 100%;
    height .4rem;
    background #eee;
    p{
      font-size .18rem;
      text-indent .2rem;
      line-height .4rem;
    }
  }
  .week-all{
    width 100%;
    border-bottom 4px solid #eee;
    img{
      width 100%;
      height 1.37rem;
    }
    .week-message{
      width 100%;
      height .6rem;
      padding .1rem .14rem;
      .message-top{
        font-size .18rem;
        line-height .24rem;
      }
      .message-bottom{
        font-size .14rem;
        line-height .21rem;

      }
    }
  }
</style>
