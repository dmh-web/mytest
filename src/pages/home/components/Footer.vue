<template>
    <div>
        <div class="footer-produce">
          <span class="iconfont icon-tanhao"></span>
          <p>票面价</p> <span>是指通过景区指定窗口售卖的纸质门票上标注的价格</span>
        </div>


        <div class="footer-main">
            <ul class="footer-top">
              <li>
                <span class="iconfont icon-jipiao"></span>
                <p>机票</p>
              </li>
              <li>
                <span class="iconfont icon-hotel"></span>
                <p>酒店</p>
              </li>
              <li>
                <span class="iconfont icon-gongyu"></span>
                <p>公寓</p>
              </li>
              <li>
                <span class="iconfont icon-xiajiantou_shuang"></span>
                <p>更多</p>
              </li>
            </ul>

          <div class="footer-middle">
              <div><a href="#">登录</a></div>
              <div><a href="#">我的订单</a></div>
              <div><a href="#">最近浏览</a></div>
              <div><a href="#">关于我们</a></div>
              <div></div>
          </div>

          <div class="footer-bottom">
            <div class="up"><a href="">触屏版</a> <a href="">电脑版</a></div>
            <div class="down">Qunar  京ICP备05021087意见反馈</div>
          </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style lang="stylus" scoped>
  /*小标题*/
  .footer-produce{
      width 100%;
      height .3rem;
      display flex;
      font-size .12rem;

      .icon-tanhao{
        line-height .3rem;
        padding 0 .1rem;
      }

    p {
      font-weight bold;
      line-height .3rem;
    }
    span{
      line-height .3rem;
    }
  }

  /*footer 主体*/
  .footer-main{
      width 100%;
      background #eee;
      /*上部*/
      .footer-top{
        width 100%;
        height:.35rem;
        display flex;
        padding-top .2rem;
        li{
          width 25%;
          text-align center;
          display flex;
          color #9e9e9e;
          line-height .35rem;
          margin-left .2rem;
          font-size .16rem;
        }
        li:nth-of-type(3){
          border-right 1px solid #9e9e9e;
        }
      }
      /*中部*/
      .footer-middle{
        width 100%;
        line-height .4rem;
        font-size .17rem;
        display flex;
        border-bottom 1px solid #ccc;
        div{
          width 20%;
          text-align center;
        }
      }
      /*下部*/
      .footer-bottom{
          text-align center;
        .up{
          line-height .3rem;
          font-size .16rem;
          a:nth-of-type(1){
            color: #9e9e9e;
          }
        }
        .down{
          line-height .3rem;
          color: #9e9e9e;
        }
      }
  }
</style>
