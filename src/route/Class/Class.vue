<template>

<div class="cate">
  <div  class="header">
    <div class="logo">
      <img src="./images/logo.png" alt="" @click="$router.replace('/msite')">
    </div>
    <div class="search">
      <i class="iconfont icon-search"></i>
      <span class="placeholder">搜索商品, 共10718款好物</span>
    </div>
  </div>
</div>

</template>

<script>
  export default {}
</script>

<style lang='less' rel="stylesheet/less" scoped>
  @import "../../assets/less/mixins";
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
</style>
