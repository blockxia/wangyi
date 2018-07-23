<template>
  <div class="list">
    <div class="list_wrapper">
<!-- 判断传过来的Index是否与遍历数据的每一项index相等，用v-if判断显示或隐藏，
如果相等再显示，这样就一一对应了-->
      <div class="list_slide" v-if="index===Index"
           v-for="(category,index) in categorys" :key="index">
        <div class="list_cover">
          <img :src="category.bannerUrl" alt="">
        </div>
        <div class="list_title">
          <span>--{{category.name}}分类--</span>
        </div>
        <div class="list_img">
          <ul class="list_img_ul">
            <li v-for="(subCate,index) in category.subCateList">
              <img :src="subCate.bannerUrl?subCate.bannerUrl:subCate.wapBannerUrl" alt="">
              <div class="img_name">{{subCate.name}}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  import {mapState} from 'vuex'
  import BScroll from  'better-scroll'
  export default {
    data(){
      return{
        //定义一个变量
       Index:0,
      }
    },
    mounted(){
      this.$store.dispatch('getCategorys',()=>{
        this.$nextTick(()=>{
          new BScroll('.list',{
            scrollY:true,
            click: true,
            probeType: 2,
          })
        })
      })
//消息订阅写在初始化时
        PubSub.subscribe('navData',(msg,data)=> {
          //保存传过来的data里的index到Index
          this.Index = data
      })
    },
    destroyed(){
      PubSub.unsubscribe('navData')
    },
    computed:{
      ...mapState(['categorys'])
    },
    methods:{

    }
  }
</script>

<style lang='less' rel="stylesheet/less" scoped>
  @import "../../assets/less/mixins";
.list{
  width: 75%;
  //   background: yellow;
  height:100%;
  box-sizing: border-box;
  padding: 30/@rem;
  overflow: hidden;
  .list_wrapper{
    height: 90%;
    overflow: hidden;
    .list_slide{
      height: 1215/@rem;
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
</style>
