<template>
  <div
    class="header"
    v-show="showHeader"
    :style="opacityStyle"
  >
    <router-link to="/">
      <span class="iconfont icon-left"></span>
    </router-link>
    城市详情
  </div>
</template>

<script>
    export default {
        name: "Detailheader",
      data(){
          return{
            showHeader:false,
            opacityStyle:{
              opacity:0
            }
          }
      },
      methods:{
        handleScroll(){
          //获取页面滚动高度
          const  top=document.documentElement.scrollTop;
          if(top>80){
            let opacity=top/140;
            opacity>1 ? 1 : opacity;
            this.opacityStyle={
              opacity
            };
            this.showHeader=true
          }else{
            this.showHeader=false;
          }
        }
      },
      mounted(){
          window.addEventListener('scroll',this.handleScroll)
      }
    }
</script>

<style lang="stylus" scoped>
  .header{
    top 0;
    position fixed;
    z-index 1;
    text-align center;
    width 100%;
    height:.4rem;
    background #00bcd4;
    color: #fff;
    line-height .4rem;
    font-size .16rem;
    span{
      position absolute;
      left .1rem;
      color #fff;
    }
  }
</style>
