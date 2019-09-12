<template>
    <div class="list">
        <ul v-for="(item,index) in list">
          <li>
            <span class="iconfont icon-remen"></span>
            {{item.title}}
          </li>
          <li v-if="item.children" class="item_list">
            <list :list="item.children"></list>
          </li>
        </ul>
    </div>
</template>

<script>

    export default {
        name: "list",
        props:{
          list:Array
        }

    }
</script>

<style lang="stylus" scoped>
  .list{
    width 100%;
    li{
      width 100%;
      line-height .4rem;
      border-bottom 1px solid #ccc;
      text-indent .2rem;
      color #333;
      span{
        color red;
      }
    }
    .item_list{
      padding-left  .1rem;
    }
  }
</style>
