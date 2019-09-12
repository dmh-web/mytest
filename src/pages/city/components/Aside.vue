<template>
    <div class="aside">
      <ul class="aside-list" >
        <li
          v-for="item in letters"
          :key="item"
          :ref="item"
          @click="cityClick"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
        >
          {{item}}
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "Aside",
        props:{
          aside:Object
        },
        data(){
            return{
              touchStatus:false,
              startY:0,
              timer:null
            }
        },
        methods:{
          cityClick(e){
            //console.log(e.target.innerText);//获取到了元素字符串
            this.$emit('change',e.target.innerText);//向父组件传值
          },
          handleTouchStart(){
            this.touchStatus=true
          },
          updated(){//当页面数据发生改变而且渲染完成的时候
            this.startY=this.$refs['A'][0].offsetTop;//获得A距离最外层div上边的距离

          },
          handleTouchMove(e){
            if(this.timer){
              clearTimeout(this.timer)
            }
            this.timer=setTimeout(()=>{
                    //函数截流--不让函数反复执行,提高代码性能
              if(this.touchStatus){
                const touchY=e.touches[0].clientY-76;//获得点击点距离最外层div上边的距离
                const index=Math.floor((touchY-this.startY)/20);//计算当前触发点的下标
                if(index >= 0 && index < this.letters.length){
                  this.$emit('change',this.letters[index]);
                }
              }
            },160);

          },
          handleTouchEnd(){
            this.touchStatus=false
          }
        },
        computed:{
          //将aside对象转为数组,方便后面的传参

          letters(){
            const letters=[];
            for(let i in this.aside){
              letters.push(i)
            }
            return letters;
          }
        }
    }
</script>

<style lang="stylus" scoped>
  .aside-list{
    width .2rem;
    position fixed;
    top .76rem;
    right 0;
    bottom 0;
    display flex;
    flex-direction column;
    justify-content center;
    li{
      text-align center;
      font-size .16rem;
      line-height .2rem;
      color #00bcd4;
    }
  }
</style>
