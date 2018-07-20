<template>
  <div class="profile">
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
  </div>
</template>

<script>
  export default {}
</script>

<style lang='less' rel="stylesheet/less" scoped="true">
  @import "../../assets/less/mixins";
  .profile{
    .header{
      width: 750/@rem;
      height:88/@rem;
      background: #EDEDED;
      box-sizing: border-box;
      padding: 8px 15px;
      display: flex;
      justify-content: space-between;
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
  }

</style>
