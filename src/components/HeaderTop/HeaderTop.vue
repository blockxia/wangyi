<template>
  <div class="header_wrapper">
    <div class="large_header">
      <div  class="header">
        <div class="logo">
          <img src="./images/logo.png" alt="" @click="$router.replace('/msite')">
        </div>
        <div class="search">
          <i class="iconfont icon-search"></i>
          <span class="placeholder">搜索商品, 共10718款好物</span>
        </div>
      </div>
      <div class="nav_wrapper" ref="nav">
        <ul class="slide_nav">
          <li class="slide_item" @click="goIn({path:'/msite/recommend',index:100})" :class="{active: 100==activeIndex}" >推荐</li>
          <li class="slide_item" @click="goIn({path:'/msite/athome',index})" :class="{active: index==activeIndex }"
            v-for="(headCate,index) in headCateList" :key="index"
          >{{headCate.name}}</li>
        <!--  <li class="slide_item">鞋包配饰</li>
          <li class="slide_item">服装</li>
          <li class="slide_item">电器</li>
          <li class="slide_item">洗护</li>
          <li class="slide_item">饮食</li>
          <li class="slide_item">餐厨</li>
          <li class="slide_item">婴童</li>
          <li class="slide_item">文本</li>
          <li class="slide_item">特色区</li>-->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import PubSub from 'pubsub-js'
  export default {
    data () {
      return{
        activeIndex:-1,
        scrollX: 0, // 滚动的y轴坐标
        tops: [], // 所有li的top组成的数组
      }
    },
    computed:{
      ...mapState(['headCateList']),
   /*   active(){
        const {scrollX,tops}=this
        return tops.findIndex((top,index)=>{
          return scrollX>=top&&scrollX<tops[index+1]
        })
      }*/
    },
    mounted(){
     this.$nextTick(()=>{
       this.navsScroll=new BScroll('.nav_wrapper',{
         probeType: 2,
         scrollX:true,
         click: true,
         eventPassthrough:'vertical'
       })
     // this._initTops()
     })
    },
    updated(){
      const index =this.activeIndex;
      localStorage.setItem("setActiveId",index)
    },
    beforeMount(){
      const nowIndex = localStorage.getItem("setActiveId")
      this.activeIndex=parseInt(nowIndex)
    },
    destroyed(){
      localStorage.setItem("setActiveId",100)
     // localStorage.removeItem("setActiveId")
    },
    methods:{
      goIn(obj){
        let {path,index}=obj
        this.$router.push(path)
        this.activeIndex =index
        PubSub.publish('headerData',index)

      },
   /*  _initTops(){
        const tops=[]
       const lis=this.$refs.navsUl.getElementsByClassName('slide_nav')
       let top=0
       tops.push(top)
       Array.from(lis).forEach((li)=>{
         top+=li.clientWidth
         tops.push(top)
       })
       this.tops=tops
      },
      goIn(index){
       const x=-this.tops[index]
        this.scrollX=-x
        this.navsScroll.scrollTo(x,0,500)
      }*/
    },
  }
</script>

<style lang='less' rel="stylesheet/less" scoped>
  @import "../../assets/less/mixins";
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
        //   width: 750/@rem;
        width: 100%;
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
</style>
