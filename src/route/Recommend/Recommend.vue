<template>
  <!--id="#"-->
  <div class="msite_content" id="#">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in focusList"
        :key="index">
          <img :src="item.picUrl" alt="">
        </div>
      <!--  <div class="swiper-slide">
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
        </div>-->
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="tip">
      <div v-for="(desc,index) in policyDescList" :key="index">
        <i class="iconfont icon-duigou-copy"></i>
        <span>{{desc.desc}}</span>
      </div>
    </div>
    <div class="shop_pinpai">

      <div class="hd">
        <span>品牌制造商直供<i class="iconfont icon-shouqijiantouxiao-copy"></i></span>
      </div>
      <ul class="pinpai_group">
        <li class="item" v-for="(tag,index) in tagList" :key="index" v-if="index<4">
          <div class="item_text">
            <h6>{{tag.name}}</h6>
            <span>{{tag.floorPrice}}元起</span>
          </div>
          <img v-lazy="tag.picUrl" alt="">
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
          <ul class="new_wrapper" >
            <li class="item_slide" v-for="(newItem,index) in newItemList">
              <img v-lazy="newItem.listPicUrl" alt="">
              <div class="item_slide_fold">
                <span>{{newItem.name}}</span>
              </div>
              <div class="item_slide_small">
                <span>{{newItem.simpleDesc}}</span>
              </div>
              <div class="item_slide_pay">
                <span>￥{{newItem.retailPrice}}</span>
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
            <li class="item_slide" v-for="(popularItem,index) in popularItemList" :key="index">
              <img :src="popularItem.listPicUrl" alt="">
              <div class="item_slide_fold">
                <span>{{popularItem.name}}</span>
              </div>
              <div class="item_slide_small">
                <span>{{popularItem.simpleDesc}}</span>
              </div>
              <div class="item_slide_pay">
                <span>￥{{popularItem.retailPrice}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="xianshishop">
      <div class="xianshishop_item left">
        <div class="title">
          <span>严选限时购</span>
        </div>
        <div class=" Countdown_time" v-if="time._data">
          <span class="hour" >{{time._data.hours}}</span>
          <span class="black">:</span>
          <span class="min" >{{time._data.minutes}}</span>
          <span class="black">:</span>
          <span class="second" >{{time._data.seconds}}</span>
        </div>
        <div class="predict_time">
          <span class="up_time">下一场</span>
          <span class="predict_time_center">{{flashSaleIndexVO.nextStartTime |date-format}}</span>
          <span class="begin_time">开始</span>
        </div>
      </div>
      <div class=" xianshishop_item right">
        <div class="right_img">
          <img :src="flashSaleIndexVO.primaryPicUrl" alt="">
        </div>
        <div class="circle">
          <div class="new">￥{{flashSaleIndexVO.activityPrice}}</div>
          <div class="old">￥{{flashSaleIndexVO.originPrice}}</div>
        </div>
      </div>
    </div>
    <div class="fuli">
      <div>
        <img src="./images/fuli.jpg" alt="">
      </div>
    </div>
    <div class="target" @click="target">
      <a href="#">
        <i class="iconfont icon-shouqijiantouxiao"></i>
      </a>
    </div>
    <div class="zhuanti">
      <div class="zhuanti_title">
        <div class="title">
          <span>专题精选</span>
          <i class="iconfont icon-shouqijiantouxiao-copy"></i>
        </div>
      </div>
      <div class="bottom_wrapper">
        <ul class="bottom_slide">
          <li v-for="(topic,index) in topicList" :key="index" v-if="index<2">
            <img :src="topic.itemPicUrl" alt="">
            <h4>{{topic.title}}</h4>
            <div class="small">{{topic.subtitle}}</div>
            <span>{{topic.priceInfo}}元起</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="jujiahaowu">
      <div class="jujiahaowu_title">
        <div class="jujiahaowu_title_inner">
          <h3>居家好物</h3>
        </div>
      </div>
      <div class="jujiahaowu_content">
        <ul class="jujiahaowu_content_inner">
          <li v-if="index<6" v-for="(cate,index) in cateList">
            <img :src="cate.itemList[0].listPicUrl" alt="">
            <div class="ul-item li_inner">{{cate.itemList[0].simpleDesc}}</div>
            <div class="ul-item li_info">{{cate.itemList[0].name}}</div>
            <div class="ul-item li_price">￥{{cate.itemList[0].retailPrice}}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
  import {mapState,mapActions} from 'vuex'

  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  import moment from 'moment'

  export default {
    data(){
      return{
        time:{},
      }
    },
    computed:{
      ...mapState([
        'focusList',
        'policyDescList',
        'tagList',
        'newItemList',
        'popularItemList',
        'flashSaleIndexVO',
        'topicList',
        'cateList'
      ])
    },
    mounted(){
      this.$store.dispatch('getHeadCateList',()=>{
        this.$nextTick(()=>{
          new BScroll('.inner',{
            scrollX:true,
            eventPassthrough:'vertical'
          })
          new BScroll('.hot_inner',{
            scrollX:true,
            eventPassthrough:'vertical'
          })
          new BScroll('.bottom_wrapper',{
            scrollX:true,
            eventPassthrough:'vertical'
          })
          new Swiper('.swiper-container',{
            autoplay:true,
            loop:true,
            // 如果需要分页器
            initialSilde:0,
            pagination: {
              el: '.swiper-pagination',
            },
          })

        })
      });
      this.$store.dispatch('getNewItemList')
      this.$store.dispatch('getPopularItemLists')
      //this.$store.dispatch('getFlashSaleIndexVO')
      this.$store.dispatch('getFlashSaleIndexVO',()=>{
        this.$nextTick(()=>{
          let time=moment.duration(this.flashSaleIndexVO.remainTime)
          const timer=setInterval(()=>{
            time-=1000
            if(time<=0){
              clearInterval(timer)
            }
            this.time=moment.duration(time)
          },1000)
        })
      })
      this.getTopicList()
      this.getCateList()
   /*  const scroll =new BScroll('#bar',{

      }).scrollTo(100,500,1000,swipe)
   */

    },
    destroyed(){

    },
    methods:{
      //映射函数多次复用较简单
      ...mapActions(['getFlashSaleIndexVO','getTopicList','getCateList']),
      target(){
        scrollTo(100,500)
      }
    }
  }
</script>

<style lang='less' rel="stylesheet/less" scoped>
  @import "../../assets/less/mixins";
  .msite_content{
    overflow: hidden;
    background: #eee;
    margin-top:148/@rem ;
    margin-bottom: 200px;
    .swiper-container{
      width: 750/@rem;
      height: 400/@rem;
      background: #fff;
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
      background: #fff;
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
      height: 610/@rem;
      background: #fff;
      margin-top: 10px;

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
        background: #fff;

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
      margin-top: 10px;
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
          overflow: hidden;
          background-color: white;
          .new_wrapper{
            .clearFix();
            width: 380%;
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
      margin-top: 5px;
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
          overflow: hidden;
          width: 750/@rem;
          height: 480/@rem;
          .new_wrapper{
            .clearFix();
            width: 380%;
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
    .xianshishop{
      width: 750/@rem;
      height: 380/@rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;
      margin-top: 10px;
      .left{
        width: 334/@rem;
        height: 320/@rem;
        color:#333;
        .title{
          margin-top: 40px;
          color: #333;
          font-size: 20px;
        }
        .Countdown_time{
          margin: 20px 0;
          color: white;
          font-size: 20px;
          text-align: center;
          margin-left: -40px;
          &>span{
            display: inline-block;
          }
          .black{
            color: black;
          }
          .hour{
            width: 62/@rem;
            height: 56/@rem;
            background: #333;
          }
          .min{width: 62/@rem;
            height: 56/@rem;
            background: #333;}
          .second{
            width: 62/@rem;
            height: 56/@rem;
            background: #333;
          }
        }
        .predict_time{
          font-size: 14px;
          color: #333;
        }
      }
      .right{
        width: 320/@rem;
        height: 320/@rem;
        position: relative;
        .right_img{
          &>img{
            width: 100%;
            height: 100%;
            vertical-align: middle;
          }
        }
        .circle{
          width: 96/@rem;
          height: 96/@rem;
          background: rgba(244,143,24,.95);
          color: #fff;
          font-size: 10px;
          border-radius: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          bottom: 0;
          right: 0;
          .new{
            position: absolute;
            left: 0;
            top: 0;
          }
          .old{
            position: absolute;
            left: 0;
            top: 20px;
            text-decoration: line-through;
          }
        }
      }

    }
    .target{
      position: fixed;
      z-index: 200;
      right: 0;
      bottom: 60px;
      width: 60px;
      height: 60px;
     // background: pink;
      .iconfont{
        font-size: 60px;
      }

         }
    .fuli{
      width: 750/@rem;
      height: 300/@rem;
      background: pink;
      margin-top: 10px;
      &>div{
        img{
          width: 100%;
          vertical-align: middle;
        }
      }
    }
    .zhuanti{
      width: 750/@rem;
      height: 563/@rem;
      margin-top: 10px;
      background: #fff;
      .zhuanti_title{
        overflow: hidden;
        width: 750/@rem;
        height: 110/@rem;
        display: flex;
        justify-content: center;
        align-items: center;
        .title{
          font-size:16px ;
          color: #333;
        }
      }
      .bottom_wrapper{
        .bottom_slide{
          width: 200%;
          height: 417/@rem;
          font-size: 16px;

          &>li{
            width: 575/@rem;
            height: 322/@rem;
            margin-left: 15px;
            float: left;
            img{
              width: 100%;
              height: 100%;
              vertical-align: middle;
              border-radius: 10px;
            }
            h4{
              margin: 3px 0;
              color: #333;
              width: 410/@rem;
              height: 41/@rem;
            }
            span{
              width: 102/@rem;
              height: 41/@rem;
              font-size:14px ;
              color: red;
            }
            .small{
              width: 575/@rem;
              height: 36/@rem;
              font-size: 14px;
              color: #aaa;
              //  margin-bottom:1px ;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }
      }
    }
    .jujiahaowu{
      overflow: hidden;
      width: 750/@rem;
      height: 2318/@rem;
      background: white;
      margin-top: 10px;
      margin-bottom: -150px;
      .jujiahaowu_title{
        width: 750/@rem;
        height: 120/@rem;
        font-size:16px ;
        display: flex;
        color: #333;
        justify-content: center;
        align-items: center;

      }
      .jujiahaowu_content{

        .jujiahaowu_content_inner{
          &>li{
            width: 375/@rem;
            height: 537/@rem;
            // margin: 10px;
            float: left;
            .ul-item{
              font-size: 14px;
              margin-left: 5px;

            }
            img{
              width: 345/@rem;
              height: 345/@rem;
              vertical-align: middle;
              margin-left: 8px;
            }
            .li_inner{
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              color: #9F8A60;
              font-size: 10px;
              width:345/@rem;
              height:69/@rem;
              line-height:69/@rem;
              margin-left: 8px;
              background-color:rgba(159,138,96,0.5);
            }
            .li_info{
              color: #333;
              font-size: 14px;
              margin: 5px 5px;
            }
            .li_price{
              color: red;
              font-size: 14px;
            }

          }
        }
      }
    }
  }
</style>
