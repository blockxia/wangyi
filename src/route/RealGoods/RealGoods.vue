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
        <div class="swiper-slide" v-for="(banner,index) in banners" :key="index">
          <img v-lazy="banner.picUrl" alt="">
          <div class="swiper0_gray_inner">
            <div class="jinri">--{{banner.subTitle}}--</div>
            <div class="guanyu">{{banner.title}}</div>
            <div class="liaoliao">{{banner.desc}}</div>
          </div>
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
          <div class="swiper-slide" v-for="(column,index) in columns" :key="index" v-if="index<8">
            <img v-lazy="column.picUrl" alt="">
            <div class="small_tip">
              {{column.articleCount}}
            </div>
            <div class="title">{{column.title}}</div>
          </div>
        </div>
      </div>
    </div>
    <!--为你推荐-->
    <div class="foryou_tuijian">
      <div class="first">
        <div class="up">
          <div class="inner_header">
            <div class="up_title">
              为你推荐
            </div>
          </div>
          <div class="content">
            <div class="tip" >
              {{recommend.recommendBanner.nickname}}
            </div>
          </div>
          <div class="footerinfo">
            <div class="footer_title">
              <div class="footer_left">选择一种风格，选择一种人生</div>
              <div class="footer_right">
                <span class="num">9.6</span>
                <span class="qi">元起</span>
              </div>
            </div>
            <div class="footer_info">ins风、北欧风、复古风等数十款好物限时特价</div>
          </div>
        </div>
        <div class="first_down">
          <div class="left">
            <div class="left_avatar">
              <div class="left_avatar_img">
                <img :src="recommend.recommends[0].avatar" alt="">
              </div>
              <div class="left_avatar_name">{{recommend.recommends[0].nickname}}</div>
            </div>
            <div class="left_title">{{recommend.recommends[0].subtitle}}</div>
            <div class="left_price">云萃龙井茶饮料限时{{recommend.recommends[0].priceInfo}}元一箱</div>
          </div>
          <div class="right">
            <div class="right_title" v-if="recommend.recommends ? recommend.recommends[0].typeName : null">
              {{recommend.recommends[0].typeName}}
            </div>
          </div>
        </div>
      </div>
     <!-- <div class="second">
        <div class="first_down">
          <div class="left">
            <div class="left_avatar">
              <div class="left_avatar_img">
                <img src="./images/avatar.jpg" alt="">
              </div>
              <div class="left_avatar_name">丁磊</div>
            </div>
            <div class="left_title">这款有机茶叶饮料，无糖不怕胖</div>
            <div class="left_price">云萃龙井茶饮料限时69.8元一箱</div>
          </div>
          <div class="right">
            <div class="right_title">
              丁磊的好货推荐
            </div>
          </div>
        </div>
        <div class="up">
          <div class="inner_header">
            <div class="up_title">
              为你推荐
            </div>
          </div>
          <div class="content">
            <div class="tip">
              严选推荐
            </div>
          </div>
          <div class="footerinfo">
            <div class="footer_title">
              <div class="footer_left">选择一种风格，选择一种人生</div>
              <div class="footer_right">
                <span class="num">9.6</span>
                <span class="qi">元起</span>
              </div>
            </div>
            <div class="footer_info">ins风、北欧风、复古风等数十款好物限时特价</div>
          </div>
        </div>
      </div>-->
    </div>
    <div class="biaoti_header">
      <div class="up_title">
        十点一刻
      </div>
    </div>
    <div class="clock">
      <div class="swiper2">
        <div class="swiper-wrapper">
          <div class="swiper-slide"  v-for="(tenfifteen,index) in tenfifteens" :key="index" v-if="index<3">
            <img src="./images/beijingtu.png" alt="">
            <div class="gray_inner">
              <div class="jinri">--今日话题--</div>
              <div class="guanyu">{{tenfifteen.title}}</div>
              <div class="liaoliao">{{tenfifteen.desc}}</div>
              <div class="canyu">
                <div class="canyu_circle_first">
                  <img src="./images/huisetouxiang.png" alt="">
                </div>
                <div class="canyu_circle_avatar">
                  <img :src="tenfifteen.participantAvatar[0]" alt="">
                </div>
                <div class="canyu_circle_third">
                  <img src="./images/huisetouxiang.png" alt="">
                </div>
                <div class="canyu_circle_point">
                  <div class="small_point"></div>
                  <div class="small_point"></div>
                  <div class="small_point"></div>
                </div>
                <div class="canyu_circle">
                  <span class="canyu_num">{{tenfifteen.participantNum}}</span>
                  <span class="canyu_text">人参与话题</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import {mapState,mapActions} from 'vuex'
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    computed:{
      ...mapState(['banners','columns','recommend','tenfifteens'])
    },
    mounted() {

      this.$nextTick(()=>{
        new Swiper('.swiper0', {
          loop: true,
          slidesPerView: 'auto'
        })
        let swiper1 = new Swiper('.swiper1',{
          slidesPerView: 3
        });
        let swiper2 = new Swiper('.swiper2',{
          slidesPerView:1
        });

      })
      this.getBanner()
      this.getColumn()
      this.getTenfifteens()
      this.getRecommend()
    },
    methods:{
      ...mapActions(['getBanner','getColumn','getTenfifteens','getRecommend'])
    }
  }
</script>

<style lang='less' rel="stylesheet/less" scoped>
  @import "../../assets/less/mixins";
  .yanxuan_wrapper{
    background: #fff;
    overflow: hidden;

    .clearFix();

    .header{
      width: 750/@rem;
      height:88/@rem;
      background: #EDEDED;
      box-sizing: border-box;
      padding: 8px 15px;
      display: flex;
      justify-content: space-between;
      position: fixed;
      left: 0;
      top: 0;
      z-index: 300;

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
      margin-top: 88/@rem;
      width: 100%;
      height: 433/@rem;
      background: #fff;
      .swiper-wrapper{
        width: 670/@rem;
        height: 433/@rem;
        margin: 1.2rem;
        .swiper-slide{
          margin-top: 10px;
          .swiper0_gray_inner{
            background-color: rgba(255,255,255,.9);
            width: 450/@rem;
            height: 260/@rem;
            margin-left: 70/@rem;
            margin-top: 70/@rem;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            font-size: 14px;
            text-align: center;
            .jinri{
              width: 450/@rem;
              height: 28/@rem;
              font-size: 10px;
              color:#7f7f7f;
            }
            .guanyu{
              width: 450/@rem;
              height: 43/@rem;
              font-size:14px ;
            }
            .liaoliao{
              width: 450/@rem;
              height: 41/@rem;
              font-size: 10px;
            }
          }
          &>img{
            width: 95%;
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
          width: 120%;
          height: 226/@rem;
          .swiper-slide{

            width: 164/@rem;
            height: 164/@rem;
            margin:0.5rem 0.2rem ;
            .small_tip{
              width: 150/@rem;
              height: 32/@rem;
              font-size: 10px;
              color: white;
              position: absolute;
              right: 0;
              top:0;
            }
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
    .foryou_tuijian{

      width: 750/@rem;
      height: 1020/@rem;
      .first{
        width: 690/@rem;
        height: 1220/@rem;
        margin: 0 auto;
        position: relative;
        .up{
          width: 690/@rem;
          height: 120/@rem;
          .inner_header{
            width: 690/@rem;
            height: 120/@rem;
            display: flex;
            justify-content: center;
            align-items: center;
            .up_title{
              font-size: 16px;
            }
          }
          .content{
            border: 1px solid #bbb;
            width: 690/@rem;
            height: 386/@rem;
            background: plum;
            position: relative;
            background-image:url('./images/shafa.jpg');
            background-size: 100% 100%;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            .tip{
              font-size: 12px;
              width: 130/@rem;
              height: 36/@rem;
              border-radius: 10px;
              background: #fff;
              position: absolute;
              left: 10px;
              top: 10px;
              line-height:36/@rem;
              text-align: center;
            }
          }
          .footerinfo{
            border: 1px solid #bbb;
            width: 690/@rem;
            height: 186/@rem;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
            .footer_title{
              overflow: hidden;
              margin: 10px;
              .clearFix();
              .footer_left{
                width: 496/@rem;
                height: 43/@rem;
                float: left;
                font-size: 18px;
              }
              .footer_right{
                width: 130/@rem;
                height: 43/@rem;
                float: right;
                font-size: 16px;
              }
            }
            .footer_info{
              margin: 10px;
              width: 648/@rem;
              height: 33/@rem;
              font-size: 14px;
              color: #bbb;
            }
          }
        }
        .first_down{
          margin-top: 185px;
          width: 690/@rem;
          height: 272/@rem;
      //    background: pink;
          border: 1px solid #bbb;
          position: absolute;
          top:29%;
          font-size: 16px;
          .left{
            width: 408/@rem;
            height: 272/@rem;
            box-sizing: border-box;
            padding: 0 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .left_avatar{
              width: 358/@rem;
              height: 48/@rem;
              .left_avatar_img{
                width: 46/@rem;
                height: 46/@rem;
                float: left;
                img{
                  width: 100%;
                  border-radius: 50px;
                }
              }
              .left_avatar_name{
                width: 50/@rem;
                height: 24/@rem;
                line-height:46/@rem;
                float: left;
                font-size: 10px;
                transform: scale(0.8);
                margin-left: 5px;
              }
            }
            .left_title{
              width: 328/@rem;
              height: 38/@rem;
              font-size: 16px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              margin: 10px 0;
            }
            .left_price{
              width: 358/@rem;
              height: 36/@rem;
              font-size: 12px;
            }
          }
          .right{
            width: 280/@rem;
            height: 272/@rem;
            background-image: url("./images/right2.jpg");
            background-size: 100%;
            float: right;
            margin-top: -272/@rem;
            .right_title{
              width: 201/@rem;
              height: 36/@rem;
              font-size: 12px;
              background: #fff;
              text-align: center;
              line-height: 36/@rem;
              border-radius: 10px;
              margin-top: 8px;
              margin-left: 5px;
            }
          }
        }
      }
      /*.second{
        width: 690/@rem;
        height: 1220/@rem;
        margin: 0 auto;
        position: relative;
        .up{
          width: 690/@rem;
          height: 120/@rem;
          .inner_header{
            width: 690/@rem;
            height: 120/@rem;
            display: flex;
            justify-content: center;
            align-items: center;
            .up_title{
              font-size: 16px;
            }
          }
          .content{
            border: 1px solid #bbb;
            width: 690/@rem;
            height: 386/@rem;
            background: plum;
            position: relative;
            background-image:url('./images/shafa.jpg');
            background-size: 100% 100%;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            .tip{
              font-size: 12px;
              width: 130/@rem;
              height: 36/@rem;
              border-radius: 10px;
              background: #fff;
              position: absolute;
              left: 10px;
              top: 10px;
              line-height:36/@rem;
              text-align: center;
            }
          }
          .footerinfo{
            border: 1px solid #bbb;
            width: 690/@rem;
            height: 186/@rem;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
            .footer_title{
              overflow: hidden;
              margin: 10px;
              .clearFix();
              .footer_left{
                width: 496/@rem;
                height: 43/@rem;
                float: left;
                font-size: 18px;
              }
              .footer_right{
                width: 130/@rem;
                height: 43/@rem;
                float: right;
                font-size: 16px;
              }
            }
            .footer_info{
              margin: 10px;
              width: 648/@rem;
              height: 33/@rem;
              font-size: 14px;
              color: #bbb;
            }
          }
        }
        .first_down{
          margin-top: 185px;
          width: 690/@rem;
          height: 272/@rem;
          //    background: pink;
          border: 1px solid #bbb;
          position: absolute;
          top:29%;
          font-size: 16px;
          .left{
            width: 408/@rem;
            height: 272/@rem;
            box-sizing: border-box;
            padding: 0 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .left_avatar{
              width: 358/@rem;
              height: 48/@rem;
              .left_avatar_img{
                width: 46/@rem;
                height: 46/@rem;
                float: left;
                img{
                  width: 100%;
                  border-radius: 50px;
                }
              }
              .left_avatar_name{
                width: 50/@rem;
                height: 24/@rem;
                line-height:46/@rem;
                float: left;
                font-size: 10px;
                transform: scale(0.8);
                margin-left: 5px;
              }
            }
            .left_title{
              width: 328/@rem;
              height: 38/@rem;
              font-size: 16px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              margin: 10px 0;
            }
            .left_price{
              width: 358/@rem;
              height: 36/@rem;
              font-size: 12px;
            }
          }
          .right{
            width: 280/@rem;
            height: 272/@rem;
            background-image: url("./images/right2.jpg");
            background-size: 100%;
            float: right;
            margin-top: -272/@rem;
            .right_title{
              width: 201/@rem;
              height: 36/@rem;
              font-size: 12px;
              background: #fff;
              text-align: center;
              line-height: 36/@rem;
              border-radius: 10px;
              margin-top: 8px;
              margin-left: 5px;
            }
          }
        }
      }*/
    }
    .biaoti_header{
      /*background: #fff;*/
        margin-top: 20px;
        width: 690/@rem;
        height: 120/@rem;
        display: flex;
        justify-content: center;
        align-items: center;
        .up_title{
          font-size: 16px;
        }
    }
   .clock{
     position: relative;
     .swiper2{
       margin-top: -10/@rem;
       width: 400%;
       height: 433/@rem;
       .swiper-wrapper{
         width: 400%;
         height: 433/@rem;
         .swiper-slide{
           margin-left: 15/@rem;
           margin-top: 10px;
           .gray_inner{
             width: 450/@rem;
             height: 280/@rem;
             margin-left: 50/@rem;
             margin-top: 30/@rem;
             position: absolute;
             top: 0;
             left: 0;
             z-index: 1;
             display: flex;
             flex-direction: column;
             align-items: center;
             justify-content: space-around;
             font-size: 14px;
             text-align: center;
             .jinri{
               width: 450/@rem;
               height: 28/@rem;
               font-size: 10px;
               color:#7f7f7f;
             }
             .guanyu{
               width: 450/@rem;
               height: 43/@rem;
             }
             .liaoliao{
               width: 450/@rem;
               height: 41/@rem;
             }
             .canyu{
               width: 450/@rem;
               height: 48/@rem;
               display: flex;
               justify-content: center;
               align-items: center;
               .canyu_circle_first{
                 width: 48/@rem;
                 height: 48/@rem;

                 img{
                   width: 100%;
                   border-radius: 50px;
                 }
               }
               .canyu_circle_avatar{
                 width: 48/@rem;
                 height: 48/@rem;
                 border-radius: 50px;
                 img{
                   width: 100%;
                   border-radius: 50px;
                 }
               }
               .canyu_circle_third{
                 width: 48/@rem;
                 height: 48/@rem;
                 border-radius: 50px;
                 img{
                   width: 100%;
                   border-radius: 50px;
                 }
               }
               .canyu_circle_point{
                 width: 48/@rem;
                 height: 48/@rem;
                 background: #bbb;
                 border-radius: 50px;
                 display: flex;
                 justify-content: space-around;
                 align-items: center;
                 .small_point{
                   border-radius: 50%;
                   width: 6/@rem;
                   height: 6/@rem;
                   background: #fff;

                 }
               }
               .canyu_circle{
                 .canyu_num{

                 }
                 .canyu_text{

                 }
               }
             }
           }
           &>img{
             margin-left: 10/@rem;
             width: 550/@rem;
             height: 385/@rem;
             vertical-align: middle;
             border-radius: 6px;
           }
         }
       }
       margin-bottom: 100px;
     }

   }
  }

</style>
