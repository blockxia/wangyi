<template>
  <div class="msite">
   <!-- <div class="header_wrapper">
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
    </div>-->

    <HeaderTop/>

    <keep-alive>
      <router-view />
    </keep-alive>

  </div>
</template>

<script>
  import {mapState}from 'vuex'
  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'

//  import BScroll from 'better-scroll'
  export default {
    data(){
      return{
        //isHide:false
      }
    },
    mounted(){
     /* this.$store.dispatch('getHeadCateList',()=>{
        this.$nextTick(()=>{
         /!* new BScroll('.inner',{
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
            pagination: {
              el: '.swiper-pagination',
            },
          })
*!/
        })
      });*/
      this.$store.dispatch('getFocusList')
      this.$store.dispatch('getPolicyDescList')
      this.$store.dispatch('getTagList')


    },
    computed:{
      ...mapState(['headCateList'])
    },
//    methods:{
//      goIn(path){
//        this.$router.push(path)
//      },
//      isRed(path){
//        return this.$route.path===path
//      }
//    },
    components:{
      HeaderTop
    }
  }
</script>

<style lang='less' rel="stylesheet/less" scoped>
@import "../../assets/less/mixins";
  .msite{



  }


</style>
