<template>
  <div class="yanxuan_wrapper">
    <div  class="header">
    <span class="shoubu logo">
      <i class="iconfont icon-shouye" @click="$router.replace('/msite')"></i>
    </span>
    <span class="img">
      <img src="./images/logo.png" alt="" @click="$router.replace('/msite')">
    </span>
      <span class="shoubu search">
      <i class="iconfont icon-search"></i>
    </span>
      <span class="shoubu shop">
      <i class="iconfont icon-tubiaolunkuo-" @click="$router.replace('/shopping')"></i>
    </span>
    </div>
    <div class="swiper0">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="./images/1.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="./images/2.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="./images/3.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="./images/4.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="./images/6.jpg" alt="">
        </div>
      </div>
    </div>
    <div class="small">
      <div class="swiper-container swiper1">
        <div class="swiper-wrapper">
          <div class="swiper-slide" >
            <img src="./images/1.jpg" alt="">
            <div class="title">严选好物</div>
          </div>
          <div class="swiper-slide">
            <img src="./images/2.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./images/3.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./images/4.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./images/6.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
    <!--为你推荐-->
    <div class="foryou_tuijian">
      <div class="first">
        <div class="up">
          <div class="header"></div>
          <div class="content"></div>
          <div class="footerinfo"></div>
        </div>
        <div class="down">
          <div class="left"></div>
          <div class="right"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    mounted() {
      new Swiper('.swiper0', {
        loop: true,
        slidesPerView: 'auto'
      })
      let swiper1 = new Swiper('.swiper1',{
        slidesPerView: 4
      });
    }
  }
</script>

<style lang='less' rel="stylesheet/less" scoped="true">
  @import "../../assets/less/mixins";
  .yanxuan_wrapper{
    background: #fff;
    overflow: hidden;

    .header{
      width: 750/@rem;
      height:88/@rem;
      background: #EDEDED;
      box-sizing: border-box;
      padding: 8px 15px;
      display: flex;
      justify-content: space-between;
      .iconfont{font-size: 28px}
      .logo{

      }
      .img{
        width: 172/@rem;
        height:54/@rem;
        margin-left: 60px;
        &>img{
          width: 100%;
        }
      }
      .search{}
      .shop{}
    }
    .swiper0{
      width: 750/@rem;
      height: 433/@rem;
      background: #fff;
      .swiper-wrapper{
        width: 690/@rem;
        height: 433/@rem;
        .swiper-slide{
          margin-left: 12/@rem;
          margin-top: 10px;

          &>img{
            margin-left: 12/@rem;
            width: 670/@rem;
            height: 385/@rem;
            vertical-align: middle;
            border-radius: 6px;
          }
        }
      }

    }
    .small{
      .swiper1{
        width: 690/@rem;
        height: 226/@rem;
        background: #fff;
        .swiper-wrapper{
          width: 690/@rem;
          height: 226/@rem;
          .swiper-slide{
            width: 164/@rem;
            height: 164/@rem;
            .title{
              margin-top: 5px;
              width: 180/@rem;
              height: 24/@rem;
              font-size: 10px;
              text-align: center;
              margin-left: -5px;
            }
            &>img{
              width: 164/@rem;
              height: 164/@rem;
              vertical-align: middle;
              border-radius: 5px;
            }
          }
        }

      }
    }
  }

</style>
