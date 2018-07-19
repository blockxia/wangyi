<template>
  <div class="msite">
   <!-- <myHeaderTop/>-->
    <div class="header_wrapper">
      <div class="large_header">
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
      </div>
    </div>
   <!-- <router-view></router-view>-->
    <div class="msite_content">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="./images/01.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./images/02.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./images/03.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./images/04.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./images/05.jpg" alt="">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="tip">
          <div>
            <i class="iconfont icon-duigou-copy"></i>
            <span>网易自营品牌</span>
          </div>
          <div>
            <i class="iconfont icon-duigou-copy"></i>
            <span>30天无忧退货</span>
          </div>
          <div>
            <i class="iconfont icon-duigou-copy"></i>
            <span>48小时快速退款</span>
          </div>

       </div>
      <div class="shop_pinpai">
         <div class="gray"></div>
          <div class="hd">
            <span>品牌制造商直供<i class="iconfont icon-shouqijiantouxiao-copy"></i></span>
          </div>
          <ul class="pinpai_group">
            <li class="item">
              <div class="item_text">
                <h6>CK制造商</h6>
                <span>25元起</span>
              </div>
              <img src="./images/01.png" alt="">
            </li>
            <li class="item">
              <div class="item_text">
                <h6>CK制造商</h6>
                <span>25元起</span>
              </div>
              <img src="./images/02.png" alt="">
            </li>
            <li class="item">
              <div class="item_text">
                <h6>CK制造商</h6>
                <span>25元起</span>
              </div>
              <img src="./images/03.png" alt="">
            </li>
            <li class="item">
              <div class="item_text">
                <h6>CK制造商</h6>
                <span>25元起</span>
              </div>
              <img src="./images/04.png" alt="">
            </li>
          </ul>

        </div>
      <div class="new">
        <div class="new_title">
            <div class="new_text">
              <div class="shoufa">新品首发</div>
              <div class="all">查看全部 ></div>
            </div>
            <div class="new_img">
              <img src="./images/new.png" alt="">
            </div>
        </div>
        <div class="new_slide">
          <div class="inner">
            <ul class="new_wrapper">
              <li class="item_slide">
                <img src="./images/new/edac0706ab1052cb47e34c591c568a3b.png" alt="">
                <div class="item_slide_fold">
                  <span>创新可逆模式 空气对流循环</span>
                </div>
                <div class="item_slide_small">
                  <span>创新可逆模式 空气对流循环</span>
                </div>
                <div class="item_slide_pay">
                  <span>￥499</span>
                </div>
              </li>
              <li class="item_slide">
                <img src="./images/new/3840a25ae5b6a35b7e604bd379ec3bd0.png" alt="">
                <div class="item_slide_fold">
                  <span>创新可逆模式 空气对流循环</span>
                </div>
                <div class="item_slide_small">
                  <span>创新可逆模式 空气对流循环</span>
                </div>
                <div class="item_slide_pay">
                  <span>￥499</span>
                </div>
              </li>
              <li class="item_slide">
                <img src="./images/new/e0fcd63d29618685f2690e4e47719b4e.png" alt="">
                <div class="item_slide_fold">
                  <span>创新可逆模式 空气对流循环</span>
                </div>
                <div class="item_slide_small">
                  <span>创新可逆模式 空气对流循环</span>
                </div>
                <div class="item_slide_pay">
                  <span>￥499</span>
                </div>
              </li>
              <li class="item_slide">
                <img src="./images/new/3840a25ae5b6a35b7e604bd379ec3bd0.png" alt="">
                <div class="item_slide_fold">
                  <span>创新可逆模式 空气对流循环</span>
                </div>
                <div class="item_slide_small">
                  <span>创新可逆模式 空气对流循环</span>
                </div>
                <div class="item_slide_pay">
                  <span>￥499</span>
                </div>
              </li>
              <li class="item_slide">
                <img src="./images/new/eb87709f92843bd6eddf9cb7a2b01688.png" alt="">
                <div class="item_slide_fold">
                  <span>创新可逆模式 空气对流循环</span>
                </div>
                <div class="item_slide_small">
                  <span>创新可逆模式 空气对流循环</span>
                </div>
                <div class="item_slide_pay">
                  <span>￥499</span>
                </div>
              </li>
              <li class="item_slide">
                <img src="./images/new/e0fcd63d29618685f2690e4e47719b4e.png" alt="">
                <div class="item_slide_fold">
                  <span>创新可逆模式 空气对流循环</span>
                </div>
                <div class="item_slide_small">
                  <span>创新可逆模式 空气对流循环</span>
                </div>
                <div class="item_slide_pay">
                  <span>￥499</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="hot">
        <div class="new_title">
          <div class="new_text">
            <div class="shoufa">人气推荐 好物精选</div>
            <div class="all">查看全部 ></div>
          </div>
          <div class="new_img">
            <img src="./images/new/hot.png" alt="">
          </div>
        </div>
        <div class="new_slide">
          <div class="hot_inner">
            <ul class="new_wrapper">
              <li class="item_slide">
                <img src="./images/new/edac0706ab1052cb47e34c591c568a3b.png" alt="">
                <div class="item_slide_fold">
                  <span>创新可逆模式 空气对流循环</span>
                </div>
                <div class="item_slide_small">
                  <span>创新可逆模式 空气对流循环</span>
                </div>
                <div class="item_slide_pay">
                  <span>￥499</span>
                </div>
              </li>
              <li class="item_slide">
                <img src="./images/new/3840a25ae5b6a35b7e604bd379ec3bd0.png" alt="">
                <div class="item_slide_fold">
                  <span>创新可逆模式 空气对流循环</span>
                </div>
                <div class="item_slide_small">
                  <span>创新可逆模式 空气对流循环</span>
                </div>
                <div class="item_slide_pay">
                  <span>￥499</span>
                </div>
              </li>
              <li class="item_slide">
                <img src="./images/new/e0fcd63d29618685f2690e4e47719b4e.png" alt="">
                <div class="item_slide_fold">
                  <span>创新可逆模式 空气对流循环</span>
                </div>
                <div class="item_slide_small">
                  <span>创新可逆模式 空气对流循环</span>
                </div>
                <div class="item_slide_pay">
                  <span>￥499</span>
                </div>
              </li>
              <li class="item_slide">
                <img src="./images/new/3840a25ae5b6a35b7e604bd379ec3bd0.png" alt="">
                <div class="item_slide_fold">
                  <span>创新可逆模式 空气对流循环</span>
                </div>
                <div class="item_slide_small">
                  <span>创新可逆模式 空气对流循环</span>
                </div>
                <div class="item_slide_pay">
                  <span>￥499</span>
                </div>
              </li>
              <li class="item_slide">
                <img src="./images/new/eb87709f92843bd6eddf9cb7a2b01688.png" alt="">
                <div class="item_slide_fold">
                  <span>创新可逆模式 空气对流循环</span>
                </div>
                <div class="item_slide_small">
                  <span>创新可逆模式 空气对流循环</span>
                </div>
                <div class="item_slide_pay">
                  <span>￥499</span>
                </div>
              </li>
              <li class="item_slide">
                <img src="./images/new/e0fcd63d29618685f2690e4e47719b4e.png" alt="">
                <div class="item_slide_fold">
                  <span>创新可逆模式 空气对流循环</span>
                </div>
                <div class="item_slide_small">
                  <span>创新可逆模式 空气对流循环</span>
                </div>
                <div class="item_slide_pay">
                  <span>￥499</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    mounted(){
      this.$nextTick(()=>{
        new BScroll('.nav_wrapper',{
          scrollX:true
        })
        new BScroll('.inner',{
          scrollX:true
        })
        new BScroll('.hot_inner',{
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
    },
    components:{
      myHeaderTop:HeaderTop
    }
  }
</script>

<style lang='less' rel="stylesheet/less" scoped>
@import "../../assets/less/mixins";
  .msite{
  //  background: #eee;
    .header_wrapper{
      position: relative;
      z-index: 100;
      .large_header{
        position: fixed;
        z-index: 99;
        top: 0;
        left: 0;
        background: white;
        .header{
          width: 750/@rem;
          height:88/@rem;
          // background: pink;
          box-sizing: border-box;
          padding: 8px 15px;
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
          overflow: hidden;
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
      }
    }
    .msite_content{
      margin-top:148/@rem ;
      margin-bottom: 200px;
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
      .tip{
        display: flex;
        height: 72/@rem;
        align-items: center;
        &>div{
          flex: 1;
          text-align: center;
          line-height: 72/@rem;
          .iconfont{
            font-size: 14px;
           // margin: 0 5px;
            color: red;
          }
          &>span{
            font-size: 12px;
          }
        }
      }
      .shop_pinpai{
        width: 750/@rem;
        height: 586/@rem;
        .gray{
          width: 750/@rem;
          height: 20/@rem;
          background: #eee;
        }
        .hd{
          width: 750/@rem;
          height: 110/@rem;
          text-align: center;
          line-height:110/@rem;
          &>span{
            font-size: 18px;
            width: 100%;

          }
        }
        .pinpai_group{
          margin-left: 6px;
          .clearFix();
          width: 750/@rem;
          height: 476/@rem;
          &>.item{
            width: 355/@rem;
            height: 238/@rem;
            float: left;
            position: relative;
            box-sizing: border-box;
            padding:5px ;
            margin: 2px;
            background: #eee;
            .item_text{
              position: absolute;
              h6,span{
                font-size: 16px;
              }
            }
            &>img{
              width: 100%;
              height: 100%;
              vertical-align: middle;
            }
          }
        }

      }
      .new{
         width: 750/@rem;
         height: 772/@rem;
         //  background-color: green;
         margin-top: 30px;
         .new_title{
           width: 750/@rem;
           height: 260/@rem;
           position: relative;
           .new_img{
             width: 750/@rem;
             height: 260/@rem;
             &>img{
               width: 100%;
               height: 100%;
             }
           }
           .new_text{
             position: absolute;
             left: 50%;
             top:50%;
             transform: translate(-50%,-50%);
             margin: auto;
             color: #bbb;
             .shoufa{
               font-size: 20px;
               text-align: center;
               margin-bottom: 10px;
             }
             .all{
               width: 240/@rem;
               height: 56/@rem;
               background: #eee;
               font-size: 14px;
               text-align: center;
               line-height:56/@rem;
             }
           }
         }
         //滑动
         .new_slide{
           .inner{
             width: 750/@rem;
             height: 480/@rem;
             .new_wrapper{
               .clearFix();
               width: 2000/@rem;
               height: 414/@rem;
               .item_slide{
                 float: left;
                 width: 280/@rem;
                 height: 280/@rem;
                 margin: 15px 8px;
                 background: #F5F4F3;
                 &:nth-child(1){
                   margin-left: 15px;
                 }
                 &>img{
                   width: 100%;
                 }
                 .item_slide_fold{
                   font-size: 14px;
                   white-space: nowrap;
                   overflow: hidden;
                   text-overflow: ellipsis;
                   margin-left: 5px;

                 }
                 .item_slide_small{
                   font-size: 12px;
                   white-space: nowrap;
                   overflow: hidden;
                   text-overflow: ellipsis;
                   margin-left: 5px;
                   margin: 5px;
                   color: #aaa;
                 }
                 .item_slide_pay{
                   color: red;
                   font-size: 12px;
                   margin-left: 3px;
                 }
               }
             }
           }
         }
       }
      .hot{
         width: 750/@rem;
         height: 772/@rem;
         background-color: #fffffa;
         margin-top: -20px;
         .new_title{
           width: 750/@rem;
           height: 260/@rem;
           position: relative;
           .new_img{
             width: 750/@rem;
             height: 260/@rem;
             &>img{
               width: 100%;
               height: 100%;
             }
           }
           .new_text{
             position: absolute;
             left: 50%;
             top:50%;
             transform: translate(-50%,-50%);
             margin: auto;
             color: #bbb;
             .shoufa{
               font-size: 20px;
               text-align: center;
               margin-bottom: 10px;
             }
             .all{
               width: 320/@rem;
               height: 56/@rem;
               background: #FFF7Ee;
               font-size: 14px;
               text-align: center;
               line-height:56/@rem;
             }
           }
         }
         //滑动
         .new_slide{
           .hot_inner{
             width: 750/@rem;
             height: 480/@rem;
             .new_wrapper{
               .clearFix();
               width: 2000/@rem;
               height: 414/@rem;
               .item_slide{
                 float: left;
                 width: 280/@rem;
                 height: 280/@rem;
                 margin: 15px 8px;
                 background: #F5F4F3;
                 &:nth-child(1){
                   margin-left: 15px;
                 }
                 &>img{
                   width: 100%;
                 }
                 .item_slide_fold{
                   font-size: 14px;
                   white-space: nowrap;
                   overflow: hidden;
                   text-overflow: ellipsis;
                   margin-left: 5px;

                 }
                 .item_slide_small{
                   font-size: 12px;
                   white-space: nowrap;
                   overflow: hidden;
                   text-overflow: ellipsis;
                   margin-left: 5px;
                   margin: 5px;
                   color: #aaa;
                 }
                 .item_slide_pay{
                   color: red;
                   font-size: 12px;
                   margin-left: 3px;
                 }
               }
             }
           }
         }
       }
    }
  }


</style>
