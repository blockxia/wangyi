<template>

<div class="cate">
  <div class="cate_header_wrapper">
    <div  class="header ">
      <div class="search">
        <i class="iconfont icon-search"></i>
        <span class="placeholder">搜索商品, 共10718款好物</span>
      </div>
    </div>
  </div>
  <div class="bottom">
    <div class="nav">
      <ul class="nav_list">
        <li class="nav_list_li " :class="{on:currentIndex===index}"  v-for="(item,index) in 13" :key="index"
            @click="goCate({path:'/class/cate',index})">推荐专区</li>
      </ul>
    </div>
    <div class="list">
     <div class="list_slide">
       <div class="list_cover">
         <img src="http://yanxuan.nosdn.127.net/e4258aaaa07d3732a3c158342b17af45.jpg?imageView&thumbnail=0x196&quality=75" alt="">
       </div>
       <div class="list_title">
         <span>--爆品区分类--</span>
       </div>
       <div class="list_img">
         <ul class="list_img_ul">
           <li v-for="item in 5">
             <img src="http://yanxuan.nosdn.127.net/41384c389e80d6437324616e346f3294.png?imageView&quality=85&thumbnail=144x144" alt="">
             <div class="img_name">夏凉床品</div>
           </li>
         </ul>
       </div>
     </div>
    </div>
  </div>
</div>

</template>

<script>
  import BScroll from  'better-scroll'

  export default {
    data(){
      return{
        currentIndex:0
      }
    },
    mounted(){
      this.$nextTick(()=>{
        new BScroll('.nav',{
          scrollY:true,

        })
        new BScroll('.list',{
          scrollY:true,

        })
      })
    },
    methods:{
      goCate(obj){
        const {path,index}=obj
        this.$router.push(path)
        this.currentIndex=index
      }
    }
  }
</script>

<style lang='less' rel="stylesheet/less" scoped>
  @import "../../assets/less/mixins";
  .cate{
    background: #fff;
    overflow: hidden;
    .cate_header_wrapper{
      position: relative;
      .header{
        border-bottom: 1px solid #eee;
        background: #fff;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 1;
        width: 100%;
        height:88/@rem;
        box-sizing: border-box;
        padding: 10px;
       // margin-top: -5px;
        .search{
          width: 100%;
          height:56/@rem;
          background: #EDEDED;
          text-align: center;
          border-radius: 5px;
          .placeholder{
            font-size: 12px;
            vertical-align: middle;
            color:#666;

          }
        }
      }
    }

    .bottom{
      margin-top: 88/@rem;
      display: flex;
      margin-bottom:88/@rem;
      width: 100%;
      .nav{
        width: 25%;
        height:1300/@rem;
        border-right: 1px solid #eee;
        box-sizing: border-box;
        padding: 5px 3px;
        .nav_list{
          .on{
            border-left: solid 2px   #b4282d;
            color:#b4282d;
            font-size:16px ;
          }
          li{
            margin-top: 20px;
            font-size: 14px;
            color:black ;
            width: 162/@rem;
            height:50/@rem;
         //   background: plum;
            text-align: center;
            line-height:50/@rem;
          }
        }
      }
      .list{
        width: 75%;
     //   background: yellow;
        height:1215/@rem;
        box-sizing: border-box;
        padding: 30/@rem;
        .list_slide{
          .list_cover{
            height:192/@rem;
            img{
              width: 100%;
              vertical-align: middle;
            }
          }
          .list_title{
            height:108/@rem;
            text-align: center;
            line-height:108/@rem;
            font-size: 12px;
            color: #7e8c8d;
          }
          .list_img{
            width: 568/@rem;
            height:864/@rem;
            .list_img_ul{
              width: 550/@rem;
              height:864/@rem;
              margin-top: -10px;
              li{
                width: 144/@rem;
                height: 144/@rem;
                float: left;
                margin-top: 20px;
                margin-left: 10px;
                img{
                  width: 100%;
                  vertical-align: middle;
                }
                .img_name{
                  width: 144/@rem;
                  height: 72/@rem;
                  font-size: 12px;
                  text-align: center;
                  line-height:72/@rem;
                }
              }
            }
          }
        }

      }
    }

  }

</style>
