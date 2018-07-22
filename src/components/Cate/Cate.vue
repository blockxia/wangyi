<template>
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
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from  'better-scroll'
  export default {
    mounted(){
        this.$nextTick(()=>{

        })
    },
    computed:{
      ...mapState(['categorys'])
    }
  }
</script>

<style lang='less' rel="stylesheet/less" scoped>
  @import "../../assets/less/mixins";
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
</style>
