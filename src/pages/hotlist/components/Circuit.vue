<template>
    <div class="circuit">
      <div ref="name1" class="circuit-title">
        <span class="left-line"></span>
        <span class="mid-text">TOP线路</span>
        <span class="right-line"></span>
      </div>




      <div class="container">
        <div class="top">
          <img class="top-left"
               src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg" alt="">
          <div class="top-right">
            <p class="right-title">故宫</p>
            <p class="right-middle">
              <span class="mid-text">38319</span> 人感兴趣
              <span class="mid-text1">419906</span>条评论
            </p>
            <p class="right-bottom">￥<span class="val">40</span><span class="btm-text">起</span></p>
          </div>
        </div>
        <div class="bottom">
          <div class="btm-top">
            <div class="btm-top-left">
              <span class="iconfont icon-diqiu"></span>
              <span>a*5</span>
              <span class="iconfont icon-xingxing"></span>
              <span class="iconfont icon-xingxing"></span>
              <span class="iconfont icon-xingxing"></span>
              <span class="iconfont icon-xingxing"></span>
              <span class="iconfont icon-xingxing"></span>
            </div>

            <div class="btm-top-right">
              <span>2019-7-3</span>
            </div>
          </div>

          <div class="btm-down">
            <p>艾克巨卡巨卡了局部看</p>
          </div>

        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Circuit",
        data(){
            return{

            }
        },
        methods:{
            menu(){
              this.scroll = document.body.scrollTop|| document.documentElement.scrollTop;
              var letter=this.$refs.name1.offsetTop;
              this.$emit('change',letter);
            }
        },
        mounted(){
          window.addEventListener('scroll', this.menu)
        }
    }
</script>

<style lang="stylus" scoped>
  .circuit{
    .circuit-title{
      width 100%;
      height .3rem;
      color:#333;
      text-align center;
      .left-line{
        display: inline-block;
        position: relative;
        width: 0;
        top .1rem;
        height: 0;
        border-top: 1px solid transparent;
        border-right: .6rem solid #333;
        border-bottom: 1px solid transparent;
      }
      .right-line{
        display: inline-block;
        position: relative;
        top .1rem;
        width: 0;
        height: 0;
        border-top: 1px solid transparent;
        border-left: .6rem solid #333;
        border-bottom: 1px solid transparent;
      }
      .mid-text{
        font-size .18rem;
        position relative;
        color #333;
        top .15rem;
      }
    }
    .container {
      width 3.45rem;
      margin .1rem auto;
      background #fff;
      .top {
        height 1rem;
        display flex;
        .top-left {
          width 1rem;
          height 1rem;
        }
        .top-right {
          display flex;
          flex-direction column;
          padding-left .1rem;
          .right-title {
            line-height .35rem;
            font-size .16rem;
            color #333;
          }
          .right-middle {
            padding .1rem 0;
            font-size .12rem;
            .mid-text {
              color #25a4bb;
              font-size .16rem;
            }
            .mid-text1 {
              color #25a4bb;
              font-size .16rem;
              padding-left .2rem;
            }
          }
          .right-bottom {
            font-size .14rem;
            color orange;
            padding .15rem 0 0 0;
            .val {
              font-size .19rem;
              color orange;
            }
            .btm-text {
              font-size .12rem;
              color #333;
            }
          }
        }
      }
      .bottom {
        height .6rem;
        background #eee;
        margin-top .1rem;
        .btm-top {
          padding .07rem;
          display flex;
          .btm-top-left {
            flex 4;
            .icon-xingxing {
              font-size .12rem;
              color orange;
            }
          }
          .btm-top-right {
            flex 1;
          }
        }
        .btm-down {
          padding .07rem;
        }
      }
    }
  }
</style>
