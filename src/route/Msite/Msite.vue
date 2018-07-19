<template>
  <div class="msite">
    <div  class="header">
      <div class="logo">
          <img src="./images/logo.png" alt="">
      </div>
      <div class="search">
        <i class="iconfont icon-search"></i>
        <span class="placeholder">搜索商品, 共10718款好物</span>
      </div>
    </div>
    <div class="nav_wrapper">
      <ul class="slide_nav">
        <li class="slide_item active" @click="goIn('/recommend')" :class="{active:isRed('/recommend')}">推荐</li>
        <li class="slide_item" @click="goIn('/athome')" :class="{active:isRed('/athome')}">居家</li>
        <li class="slide_item">鞋包配饰</li>
        <li class="slide_item">服装</li>
        <li class="slide_item">电器</li>
        <li class="slide_item">洗护</li>
        <li class="slide_item">饮食</li>
        <li class="slide_item">餐厨</li>
        <li class="slide_item">婴童</li>
        <li class="slide_item">文本</li>
        <li class="slide_item">特色区</li>
      </ul>
    </div>
    <router-view></router-view>
    <div class="msite_content">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="./images/01.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./images/01.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./images/01.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./images/01.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./images/01.jpg" alt="">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
        <div class="tip">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="shop_pinpai">
          <span>品牌制造商直供<i></i></span>
          <div class="pinpai_group">
            <img src="" alt="">
            <div>
              <h4></h4>
              <span></span>
            </div>
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
    mounted(){
      this.$nextTick(()=>{
        new BScroll('.nav_wrapper',{
          scrollX:true
        })
      })

      new Swiper('.swiper-container',{
        autoplay:true,
        loop:true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
      })
    },
    methods:{
      goIn(path){
        this.$router.push(path)
      },
      isRed(path){
        return this.$route.path===path
      }
    }
  }
</script>

<style lang='less' rel="stylesheet/less" scoped>
@import "../../assets/less/mixins";
  .msite{
    .header{
      width: 750/@rem;
      height:88/@rem;
     // background: pink;
      box-sizing: border-box;
      padding: 10px 15px;
      display: flex;
      .logo{
        width: 138/@rem;
        height:40/@rem;
        img{
          width: 100%;
         vertical-align: middle;
        }
      }
      .search{
        width: 532/@rem;
        height:56/@rem;
        background: #EDEDED;
        text-align: center;
        margin-left: 10px;
        border-radius: 5px;
        .iconfont{

        }
        .placeholder{
          font-size: 14px;
          vertical-align: middle;
          color:#666
        }
      }
    }
    .nav_wrapper{
      width: 100%;
      height:60/@rem;
      .slide_nav{
        .clearFix();
        width: 210%;
        height:60/@rem;
        .active{
          .bottom-border-1px(#B4282D);
          color :#B4282D
        }
        &>li{
          float: left;
          font-size: 14px;
          color: #333;
          margin: 0 12px;
          line-height:60/@rem ;
          width: 80/@rem;
          text-align: center;
          &:nth-child(3){
            width: 144/@rem;
          }
          &:nth-child(1){
            margin-left: 20px;

          }
          &:nth-child(11){

            width: 90/@rem;
          }

        }
      }
    }
    .msite_content{
      .swiper-container{
        width: 750/@rem;
        height: 400/@rem;
          .swiper-wrapper{
            .swiper-slide{
              &>img{
                width: 100%;
              }
            }
          }

      }
    }
  }


</style>
