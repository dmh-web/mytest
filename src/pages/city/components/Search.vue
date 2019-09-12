<template>
  <div>
    <div class="search">
      <input v-model="keywords" class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" v-show="keywords" ref="cityList">
      <ul>
        <li class="search-item" v-for="item in list" :key="item.id">{{item.name}}</li>
        <li class="search-item" v-show="hasNoData">没有搜索到匹配的数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
  //引入bScroll插件
    import Bscroll from 'better-scroll'
    export default {
        name: "Search",
        props:{
          cities:Object
        },
        data(){
            return {
              keywords:'',//用来获取输入的关键字
              list:[],//空数组,用来储存城市
              timer:null//定时器
            }
        },
        computed:{
          hasNoData(){
              return !this.list.length;
          }
        },
        watch:{//监听文本框输入关键字
          keywords(){
            if(this.timer){
            clearTimeout(this.timer);
            }
            this.timer=setTimeout(()=>{  //函数截流
                const result=[];
                for(let i in this.cities){
                  this.cities[i].forEach((value)=>{
                    //查找关键字
                    if(value.spell.indexOf(this.keywords)>-1||value.name.indexOf(this.keywords)>-1){
                      result.push(value);
                    }
                  })
                }
                this.list=result;
            },100)
          }
        },
        mounted(){
          this.scroll=new Bscroll(this.$refs.cityList)
        }
    }
</script>

<style lang="stylus" scoped>
  .search{
    /*不给父元素加宽度,padding就能撑开,
    如果加了宽度 padding只有左边有 右边依然没有*/
    height .36rem;
    width 100%;
    background #00bcd4;
    position fixed;
    top .4rem;
    z-index 99;
    display flex;
    .search-input{
      height .31rem;
      width 95%;
      margin 0 auto;
      box-sizing border-box;
      line-height .31rem;
      border-radius .06rem;
      padding 0 .1rem;
      text-align center;
      color #666;
    }
  }
  .search-content{
    overflow hidden;
    width:100%;
    position absolute;
    top:0.76rem;
    bottom:0;
    left:0;
    background #ccc;
    z-index 1;
    .search-item{
      width 100%;
      height .28rem;
      background #fff;
      line-height .28rem;
      text-indent .1rem;
      border-bottom 1px solid #ccc;
    }
  }
</style>
