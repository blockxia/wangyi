<template>
  <div class="shopping">
    <div  class="header">
      <div class="left">
        <span class="name" >购物车</span>
      </div>
      <div class="right">
        <span @click="$router.replace('/profile')">
          领券
        </span>
      </div>
    </div>
    <div class="content">
      <div class="ul_list">
        <ul class="tip">
          <li>
            <i class="iconfont icon-kongxinyuan"></i>
            <span>网易自营品牌</span>
          </li>
          <li>
            <i class="iconfont icon-kongxinyuan"></i>
            <span>30天无忧退货</span>
          </li>
          <li>
            <i class="iconfont icon-kongxinyuan"></i>
            <span>48小时快速退款</span>
          </li>
        </ul>
      </div>
      <div class="icon">
        <div class="up">
          <div class="icon_img">
            <img src="./images/shopcar.png" alt="">
          </div>
          <div class="title">
            <span>去添加点什么吧</span>
          </div>
        </div>
        <div class="btn_red" @click="$router.push('/profile')">
          <div >登录</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang='less' rel="stylesheet/less" scoped="true">
  @import "../../assets/less/mixins";
  .shopping{

    .header{
      background: #fff;
      width: 750/@rem;
      height:88/@rem;
      box-sizing: border-box;
      padding: 0 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      .left{
        /*width: 550/@rem;
        height:87/@rem;*/
        font-size: 18px;
      }
      .right{
        position: absolute;
        right: 10/@rem;
        top: 25/@rem;
        width: 88/@rem;
        height:87/@rem;
        font-size: 14px;
        color: #b4282d;
      }
    }
    .content{
      width: 750/@rem;
      height:1246/@rem;
      .ul_list{
        .tip{
          display: flex;
          height: 72/@rem;
          align-items: center;
          background: #eee;
          &>li{
            flex: 1;
            text-align: center;
            line-height: 72/@rem;
            .iconfont{
              font-size: 10px;
              color:#bbb
            }
            &>span{
              font-size: 12px;
              color: #7e8c8d;
            }
          }
        }
      }
      .icon{
        width: 750/@rem;
        height:1174/@rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .up{
          width: 750/@rem;
          height:300/@rem;
          text-align: center;
          .icon_img{
            width: 248/@rem;
            height:248/@rem;
            margin: 0 auto;
            img{
              width: 100%;
              vertical-align: middle;
            }
          }
          .title{
            width: 750/@rem;
            height:27/@rem;
            font-size: 12px;
            color: #7e8c8d;
          }
        }
        .btn_red{
          width: 480/@rem;
          height:92/@rem;
          background-color: #b4282d;
          font-size: 16px;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }

    }
  }

</style>
