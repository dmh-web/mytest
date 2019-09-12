<template>
  <div class="list" ref="wrapper">

    <div>

      <div class="area">
        <div class="title">当前城市</div>
        <ul class="btn_list">
          <li><div class="btn">{{this.$store.state.city}}</div></li>
        </ul>
      </div>

      <div class="area">
        <div class="title">热门城市</div>
        <ul class="btn_list">
          <li
            v-for="item in hotCity"
            :key="item.id"
            @click="handleCityClick(item.name)"
          ><div class="btn">{{item.name}}</div></li>
        </ul>
      </div>


      <div class="area"
           v-for="(item,key) in cityList"
           :key="key"
           :ref="key"
      >
        <div class="title">{{key}}</div>

        <ul class="list_cshi">
          <li
            v-for="city in item"
            :key="city.id"
            @click="handleCityClick(city.name)"
          >{{city.name}}</li>
        </ul>
      </div>

    </div>

  </div>
</template>
<script>
  //引入better-scorll
  import Bscroll from 'better-scroll'
  export default {
    name: "List",
    props:{
      hotCity:Array,
      cityList:Object,
      letter:String
    },
    methods:{
      handleCityClick(city){
        this.$store.dispatch('changeCity',city); //通过$store.dispatch()方法去调用vuex的修改公共数据方法

        //编程式路由
        this.$router.push('/')
      }
    },
    mounted () {
      this.scroll=new Bscroll(this.$refs.wrapper);
    },
    watch:{
      letter(){
        if(this.letter){
          const element=this.$refs[this.letter][0]; //找到标记的节点
          this.scroll.scrollToElement(element);
          //console.log(element);

        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .list
    overflow hidden
    position absolute;
    top:.76rem;
    left:0;
    bottom:0;
    right:0;
    .area{
      .title{
        width: 100%
        height:.3rem;
        background :#eeeeee;
        padding-left:.1rem;
        line-height :.3rem;color:#666;
        border-bottom :1px solid #cccccc;
      }
      .btn_list{
        overflow:hidden;
        padding:.05rem .3rem .05rem .05rem;
        box-sizing :border-box;
        li{
          width:33.3%;
          float:left;
          div{
            text-align:center;
            margin:.05rem;
            border:.01rem solid #ccc;
            border-radius:.03rem;
            padding:.05rem 0;
          }
        }
      }
      .list_cshi{

        li {
          border-bottom: 1px solid #cccccc;
          line-height:.3rem;
          padding-left:.10rem;
          color:#666;
        }
      }
    }
</style>
