<template>
  <footer class="footer_group border-1px">
    <span class="group_item" @click="goto('/msite')" :class="{on:isShow('/msite')}">
      <span class="item_icon ">
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>首页</span>
    </span>
    <span class="group_item" @click="goto('/real')" :class="{on:isShow('/real')}">
      <span class="item_icon ">
      <i class="iconfont icon-shoucang"></i>
      </span>
      <span>识物</span>
    </span>
    <span class="group_item" @click="goto('/class')" :class="{on:isShow('/class')}">
      <span class="item_icon ">
      <i class="iconfont icon-fenlei"></i>
      </span>
      <span>分类</span>
    </span>
    <span class="group_item " @click="goto('/shopping')" :class="{on:isShow('/shopping')}">
      <span class="item_icon ">
      <i class="iconfont icon-daishouhuo"></i>
      </span>
      <span>购物车</span>
    </span>
    <span class="group_item " @click="goto('/profile')" :class="{on:isShow('/profile')}">
      <span class="item_icon ">
      <i class="iconfont icon-wode"></i>
      </span>
      <span>个人</span>
    </span>
  </footer>
</template>

<script>
  export default {
    methods:{
      goto(path){
          this.$router.replace(path)
      },
      isShow(path){
//||this.$route.path==='/class/cate'
        if(this.$route.path==='/msite/recommend' || this.$route.path=== '/msite/athome'){
          return this.$route.path.slice(0,6) === path
        }
        return this.$route.path===path
      }

    }
  }
</script>

<style lang='less' rel="stylesheet/less" scoped>
@import "../../assets/less/mixins";

  .footer_group{
    .top-border-1px(#eee);
    display:flex;
    width: 100%;
    height:98/@rem ;
    background-color: #FAFAFA;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
     & .iconfont{
      font-size: 22px;
     }
    .group_item{
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 16px;
      margin: 5px;
      color: #999999;
      &.on{
      color :#B4282D
      }
      span{
        font-size :12px;
        margin-bottom:2px;
      }
    }
  }

</style>
