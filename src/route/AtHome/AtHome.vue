<template>
  <!--id="#"-->
  <div class="msite_content" id="#">


    <div class="jujiahaowu" v-if="index===Index"  v-for="(cate,index) in headCateList" >
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img :src="cate.bannerUrl" alt="">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="jujiahaowu_title">
        <div class="jujiahaowu_title_inner">
          <h3>居家好物</h3>
          <span class="info">{{cate.subCateList.frontName}}</span>
        </div>
      </div>
      <div class="jujiahaowu_content">
      <ul class="jujiahaowu_content_inner">
        <li v-if="" v-for="(item,index) in cate.subCateList">
          <img :src="item.wapBannerUrl" alt="">
          <div class="ul-item li_inner">{{item.name}}</div>
          <div class="ul-item li_info">{{item.frontDesc}}</div>
          <div class="ul-item li_price">￥{{item.level}}</div>
        </li>
      </ul>
    </div>
    </div>
  </div>

</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        Index:0
      }
    },
    computed:{
      ...mapState([
     'headCateList',

      ])
    },
    mounted(){
      this.$store.dispatch('getHeadCateList',()=>{
        this.$nextTick(()=>{
          PubSub.subscribe('headerData',(msg,data)=>{
            this.Index=data
            console.log(data)
          })
      });

      })
    },
    destroyed(){
      PubSub.unsubscribe('headerData')
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

    .jujiahaowu{
      overflow: hidden;
      width: 750/@rem;
      height: 2318/@rem;
      background: white;
      margin-top: 10px;
      margin-bottom: -150px;
      .swiper-container{
        width: 750/@rem;
        height: 400/@rem;
        background: #fff;

        .swiper-wrapper{
          .swiper-slide{
            &>img{
              width: 100%;
              height: 100%;
            }
          }
        }

      }
      .jujiahaowu_title{
        width: 750/@rem;
        height: 120/@rem;
        font-size:16px ;
        display: flex;
        color: #333;
        justify-content: center;
        align-items: center;
        text-align: center;
        .info{
          font-size: 10px;
          color: #7e8c8d;
        }
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
