<template>
    <div class="banner-img">
      <!--背景图-->
      <img src="http://img1.qunarzz.com/sight/p0/1606/75/75ad3b764502686890.water.jpg_375x170_363d0b77.jpg" alt="">

      <!--左侧箭头-->
      <div class="left-jt" @click="handleReturnClick">
        <span class="iconfont icon-left"></span>
      </div>
      <!--文字部分-->
          <!--星星+地名-->
          <div class="banner-address">
            <span class="left-line"></span>
            <span class="iconfont icon-xingxing"></span>
            <span class="mid-text">北京</span>
            <span class="iconfont icon-xingxing"></span>
            <span class="right-line"></span>
          </div>
          <!--标题-->
          <div class="banner-title">
            <h3 class="title-text">本周热门榜单</h3>
          </div>


    </div>
</template>

<script>
    export default {
      name: "Banner",
      methods:{
        //点击箭头返回主页面
        handleReturnClick(){
          this.$router.push("/")
        }
      },
    }
</script>

<style lang="stylus" scoped>
  .banner-img{
    width 100%;
    height 0;
    padding-bottom 45.555555555%;
    position relative;
    .left-jt{
      width .36rem;
      height .34rem;
      border-radius 50%;
      background #000;
      position absolute;
      opacity .5;
      top .1rem;
      left .1rem;
      text-align center;
      line-height .36rem;
      color white;
    }
    /*星星+地名*/
    .banner-address{
      width 100%;
      height .2rem;
      position absolute;
      text-align center;
      top 40%;
      .left-line{
        display: inline-block;
        position: relative;
        width: 0;
        top -.05rem;
        height: 0;
        border-top: 1px solid transparent;
        border-right: .6rem solid #fff;
        border-bottom: 1px solid transparent;
      }
      .right-line{
        display: inline-block;
        position: relative;
        top -.05rem;
        width: 0;
        height: 0;
        border-top: 1px solid transparent;
        border-left: .6rem solid #fff;
        border-bottom: 1px solid transparent;
      }
      .icon-xingxing{
        color white;
        font-size .12rem;
        line-height .2rem;
      }
      .mid-text{
        font-size .18rem;
        position relative;
        color white;
        top .03rem;
      }
    }

    /*标题*/
    .banner-title{
      width 100%;
      height .2rem;
      position absolute;
      top 57%;
      text-align center;
      line-height .2rem;
      .title-text{
        font-size .24rem;
        font-weight bold;
        letter-spacing 2px;
        color white;
      }
    }

  }
</style>
