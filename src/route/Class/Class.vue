<template>

<div class="cate">
  <div  class="header">
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
  .cate{
    background: #fff;
    .header{
      //   width: 750/@rem;
      width: 100%;
      height:88/@rem;
      // background: pink;
      box-sizing: border-box;
      padding: 10px;
      margin-top: -5px;
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

</style>
