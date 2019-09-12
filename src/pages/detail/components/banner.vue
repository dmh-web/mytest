<template>
  <div>
    <div class="ban-wrapper">
        <div class="banner">
          <img @click="hanleGayClick()"
               :src="img" alt="">
        </div>
        <!--箭头部分-->
        <div class="ban_left">
          <span class="iconfont icon-left" @click="returnIndexClick()"></span>
        </div>
        
      <div class="ban-bot">
          <div class="ban-num">
            <span class="iconfont icon-diqiu"></span>
            <span>72</span>
          </div>
          <h4>{{name}}</h4>
      </div>
    </div>
    <common-fade>

    <common-gay  @closeSwiper="closeGallary()" v-show="this.showGallary"></common-gay>
                <!--监听公共组件 - common 组件点击事件close()-->
    </common-fade>
  </div>
</template>

<script>
  //使用common组件
  import CommonGay from '@/common/gallary/gallary'
  //使用动画组件
  import  CommonFade from '@/common/fade/Fade'
    export default {
        name: "banner",
      data(){
        return {
          showGallary:false   //定义开关,用来掌控v-show
        }
      },
      props:{
        img:String,
        name:String

      },
        components:{
          CommonGay,
          CommonFade
        },
        methods:{
          returnIndexClick(){//编程式路由
            this.$router.push("/");
          },
          hanleGayClick(){
            this.showGallary=true;
          },
          closeGallary(){ //点击事件,点击后,v-show="false"
            this.showGallary=false;
          }

        },
        
    }
</script>

<style lang="stylus" scoped>
  .ban-wrapper {
    position relative;
    .banner {
      width 100%;
      height 0;
      padding-bottom 50%;
      img {
        width 100%;
      }
    }
    .ban_left{
      position absolute;
      width .36rem;
      height .34rem;
      top .1rem;
      left .1rem;
      background black;
      border-radius 50%;
      opacity .5;
      line-height .36rem;
      color white;
      text-align center;
      font-size .2rem;
    }
    .ban-bot{
      position absolute;
      bottom 0;
      left .1rem;
      .ban-num{
        color #ffffff;
        font-size .12rem;
        width .6rem;
        height .2rem;
        background-color black;
        border-radius .1rem;
        opacity .6;
        text-align center;
        line-height .2rem;
      }
      h4{
        font-size .2rem;
        margin .05rem 0;
        color white;
        text-shadow 0 1px 2px rgba(0,0,0,0.70);
      }
    }
  }
</style>
