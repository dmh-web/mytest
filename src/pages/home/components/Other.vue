<template>
  <div>
  <!--定位和必游榜单部分-->
    <div class="main">
      <div class="main-left">
        <span class="iconfont icon-dingwei"></span>
        <span>定位失败</span>
      </div>
      <div class="main-right">
        <span class="iconfont icon-diqiu"></span>
        <span>必游榜单</span>
      </div>
    </div>

  <!--中间div过渡部分-->
    <div class="empty"></div>



    <!--热门榜单部分-->
    <div class="main-hot">
      <!--上方-->
        <div class="hot-top">
          <div class="top-left">
            <span class="iconfont icon-remen"></span>
            <span>本周热门榜单</span>
          </div>
          <div class="top-right">
            <router-link to="/hotlist">
                <span>全部榜单 > </span>
            </router-link>
          </div>
        </div>
      <!--下方-->
        <div class="hot-bottom">
          <ul class="hot-ul">
            <li v-for="(item,index) in hot" :key="item.id">
              <img :src="item.imgUrl" alt="">
              <p>{{item.desc}}</p>
              <p>￥<span class="text">{{item.price}}</span>起</p>
            </li>
          </ul>
        </div>

    </div>


    <!--中间div过渡部分-->
    <div class="empty"></div>

    <!--猜你喜欢部分-->
    <div class="main-like">
      <!--上方开始-->
      <div class="like-top">
        <span class="iconfont icon-like-bk-jf"></span>
        <span>猜你喜欢</span>
      </div>

      <!--下方开始-->
      <div class="like-bottom">
        <ul class="like-ul"  >


          <router-link
            v-for="(item,index) in like"
            :key="item.id"
            :to="'/detail/'+item.id"
            tag="li"
          >
            <!--左部分-->
              <div class="like-left">
                <img :src="item.imgUrl" alt="">
              </div>


            <!--右部分-->
              <div class="like-right">
                <!--地名-->
                <p class="name">{{item.desc}}</p>

                <!--销售信息-->
                <div class="message">
                  <p class="heart">
                    <span class="iconfont icon-like-bk-jf"></span>
                    <span class="iconfont icon-like-bk-jf"></span>
                    <span class="iconfont icon-like-bk-jf"></span>
                    <span class="iconfont icon-like-bk-jf"></span>
                    <span class="iconfont icon-like-bk-jf"></span>
                  </p>
                  <p class="pinglun">{{item.num}}条评论</p>
                </div>

                <!--价格和地区-->
                <div class="value-address">
                  <p class="value">￥<span class="text">{{item.price}}</span>起</p>
                  <p class="address">{{item.address}}</p>
                </div>

                <!--宣言-->
                <p class="call">{{item.text}}</p>
              </div>
          </router-link>


        </ul>
      </div>
    </div>
    <div class="main-bottom">查看所有产品</div>
  </div>
</template>

<script>
    export default {
        name: "Other",

      props:{
        hot:Array,
        like:Array
      },

      data(){
        return {

        }
      },

    }
</script>

<style lang="stylus" scoped>
  /*定位和必游榜单部分*/
  .main{
    display flex;
    width 100%;
    height .5rem;
    margin-top .1rem;
    line-height .5rem;
    border-top 1px solid #ccc;
    .main-left{
      width: 50%
      text-align center;
      border-right 1px solid #ccc;
    }
    .main-right{
      width 50%;
      text-align center;
    }
  }


  /*空div部分*/
  .empty{
    width 100%;
    height:.1rem;
    background #eee;
  }


  /*热门榜单部分*/
  .main-hot{
    width 100%;
    /*上方开始*/
    .hot-top{
      width 100%;
      display flex;
      justify-content space-between;
      line-height .4rem;
      .top-left{
        margin-left .1rem;
        font-size .16rem;
        .icon-remen{
          color orangered;
        }
      }
      .top-right{
        margin-right .1rem;
        span{
          color: #333;
        }
      }

    }

    /*下方开始*/
    .hot-ul {
      overflow-x scroll;
      white-space nowrap;
      li:nth-of-type(1){
        margin-left .1rem;
      }
      li{
        text-align center;
        margin .05rem;
        display inline-block;
        padding-bottom .1rem;
        img {
          width 1rem;
          height 1rem;
        }
        p:nth-of-type(1){
          padding-top .1rem;
        }
        p{
          padding-top .05rem;
          .text{
            color:orangered;
          }
        }
      }
    }
  }


  /*猜你喜欢部分*/
  .main-like{
    width 100%;

    /*上方开始*/
    .like-top{
      width 100%;
      line-height .5rem;
      padding-left .1rem;
      .icon-like-bk-jf{
        color: red;
      }
    }


  /*下方开始*/
    .like-bottom{
      width 100%;
      margin-left .15rem;
      .like-ul{
        width 3.63rem;

        li{
          width 100%;
          height 1.37rem;

          display flex;
          .like-left{
            img{
              width 1rem;
              height 1rem;
            }
          }
          .like-right{
            margin-left .1rem;
            width 2.63rem;

            .name{
              line-height .44rem;
              font-size .16rem;
            }
            .message{
              display flex;
              .heart{
                  font-size .1rem;
                color orangered;
              }
              .pinglun{
                margin-left .2rem;
                font-size .12rem;
              }
            }
            .value-address{
              display flex;
              margin .2rem 0;
              justify-content space-between;
              .value{
                font-size .18rem;
                .text{
                  color: orange;
                }
              }
              .address{
                font-size .12rem;
                margin-right .1rem;
              }
            }
            .call{
              font-size .12rem;
              color: orangered;
            }

          }

        }
      }


    }
  }


  .main-bottom{
    width 100%;
    height .5rem;
    margin-top:.2rem;
    text-align center;
    line-height .5rem;
    color: #00bcd4;
    font-size .18rem;
    border-top 1px solid #eee;

  }

</style>
