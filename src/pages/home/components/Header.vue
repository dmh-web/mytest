<template>
    <div class="header">
        <div class="header-left">
          <span class="iconfont icon-left"></span>
        </div>
        <div class="header-input">
          <span class="iconfont icon-sousuo"></span>
          <input type="text" placeholder="输入城市景点/游玩主题">
        </div>
      <router-link to="/city">
        <div class="header-right">
          {{this.$store.state.city}}
          <span class="iconfont icon-f11"></span>
        </div>
      </router-link>
    </div>
</template>

<script>
    export default {
        name: "Header",
      props:{
          city:String
      }
    }
</script>

<style lang="stylus" scoped>
    .header{
      width:100%;
      height:.45rem;
      background:#00bcd4;
      display:flex;
      align-items center;
      font-size .16rem;
      color #fff;
      .header-left{
        margin 0 .05rem;
      }
      .header-input{
        flex 1;
        height .3rem;
        line-height .26rem;
        background #fff;
        border-radius .05rem;
        color: #cacaca;

        span{
          margin-left 5px;
          font-size .18rem;
          display inline-block;
          vertical-align middle;
        }

      }
      .header-right{
        margin 0 .05rem;
        color: white;
      }
    }


</style>
