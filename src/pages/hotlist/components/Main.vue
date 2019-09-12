<template>

      <div class="main-title" :class="{'on':c}">
          <div class="title-left" @click="onTabClick">
              <p :class="{'active':a}" >TOP景点</p>
          </div>
          <div class="title-right" @click="onTabClick1">
              <p :class="{'active':b}">TOP线路</p>
          </div>
      </div>


</template>

<script>
    export default {
      name: "Main",
      data(){
          return{
              a:true,
              b:false,
              c:false,
              opacityStyle:{
                position:'fixed',
                top:'.4rem'
              },
          }
      },
      props:{
            letter:Number
      },
      methods:{
        onTabClick(){
                window.scrollTo(0,0);
                this.a=true;
                this.b=false
        },
        onTabClick1(){
          this.a=false;
          this.b=true;
          if(this.letter){
            window.scroll(0,this.letter - 150);
          }

        },
        handleScroll(){
          //获取页面滚动高度
          const  top=document.documentElement.scrollTop;
          if(top>110){
              this.c=true
          }else{
            this.c=false;
          }
        }
      },
      mounted(){
        window.addEventListener('scroll',this.handleScroll)
      }
    }
</script>

<style lang="stylus" scoped>
    .on{
      position fixed;
      background #fff;
      top:.4rem;
    }
    .main-title{
      display flex;
      flex-direction row;
      width 100%;
      height .55rem;
      line-height .55rem;
      border-bottom 1px solid #ccc;
      text-align center;
      font-size :.25rem;

      .title-left{
        flex 1;
        display flex;
        p {
          width 60%;
          margin auto;
        }
      }
      .title-right{
        flex 1;
        display flex;

        p{
          width 60%;
          margin auto;
        }
      }
      .active{
        color #25a4bb;
        border-bottom 2px solid #25a4bb;
      }
    }


</style>
