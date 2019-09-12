<template>
    <div class="header">
      <router-link to="/">
         <span class="iconfont icon-left"></span>
      </router-link>
      城市选择
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style lang="stylus" scoped>
    .header{
      top 0;
      position fixed;
      z-index 99;
      text-align center;
      width 100%;
      height:.4rem;
      background #00bcd4;
      color: #fff;
      line-height .4rem;
      font-size .18rem;
      span{
        position absolute;
        left .1rem;
        color #fff;
      }
    }
</style>
