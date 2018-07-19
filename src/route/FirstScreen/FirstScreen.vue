<template>
  <div class="first_wrap">
    <div class="first_image">
      <img src="./images/top1.jpg"/>
    </div>
    <div class="first_image_center">
      <img src="./images/top2.jpg"/>
    </div>

      <!--继续使用触屏版浏览>-->
      <!--<div>下载APP 立即领取</div>-->
     <!-- <img src="./images/bottom.jpg" alt="">-->
      <router-link to="/msite" push >
        <div class="first_bottom"> </div>
      </router-link>

  </div>
</template>

<script>
  export default {

  }
</script>

<style lang='less' rel="stylesheet/less">
  @import "../../assets/less/mixins";
body{
  background: #efeeec;
  .first_wrap{
    display: flex;
    flex-direction: column;
    align-items: center;
    .first_image{
      width:750/@rem;
      height: 386/@rem;
      &>img{
        width: 100%;
        vertical-align: middle;
      }
    }
    .first_image_center{
      width: 750/@rem;
      height: 327/@rem;
      &>img{
        width: 100%;
        vertical-align: middle;
      }
    }
    .first_bottom{
      background-image: url("./images/bottom.jpg");
      background-size: 100% 100%;
      width: 750/@rem;
      height: 432/@rem;
      &>img{
        width: 100%;
        vertical-align: middle;
      }
    }
  }
}
</style>
