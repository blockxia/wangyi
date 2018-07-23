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
    <div class="content">
      <div class="up">
        <div class="img_wrap">
          <img src="./images/login.png" alt="">
        </div>
      </div>
      <div class="center">
        <div class="btn_wrap">
          <!-- @click="$router.replace('/login')"-->
          <!--goto({path:'/login',index})-->
          <div class="btn_phone"  @click="$router.replace('/phonelogin')">
            <i class="iconfont icon-shouji4"></i>
            <span>手机号码登录</span>
          </div>
          <div class="btn_emil" @click="$router.replace('/login')">
            <i class="iconfont icon-youxiang"></i>
            <span>邮箱账号登录</span>
          </div>
          <div class="text_register" @click="$router.replace('/register')">
            <span>手机号快捷注册</span>
            <i class="iconfont icon-jiantouyou"></i>
          </div>

        </div>
      </div>
      <div class="down">
        <div class="wrap">
          <div class="wechat">
            <i class="iconfont icon-weixin_"></i>
            <span>微信</span>
          </div>
          <div class="qq">
            <i class="iconfont icon-QQ3"></i>
            <span>QQ</span>
          </div>
          <div class="weibo">
            <i class="iconfont icon-weibo2"></i>
            <span>微博</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods:{

    }
  }
</script>

<style lang='less' rel="stylesheet/less" scoped="true">
  @import "../../assets/less/mixins";
  .profile{
    .header{
      width: 750/@rem;
      height:88/@rem;
      background: #F2F5F4;
      box-sizing: border-box;
      padding: 8px 15px;
      display: flex;
      justify-content: space-between;
      .iconfont{font-size: 28px;}
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
    .content{
      width: 750/@rem;
      height:1246/@rem;

      .up{
        width: 750/@rem;
        height:410/@rem;
        display: flex;
        justify-content: center;
        align-items: center;
        .img_wrap{
          width: 268/@rem;
          height:90/@rem;
          img{
            width: 100%;
            height: 100%;
            vertical-align: middle;
          }
        }
      }
      .center{
        width: 750/@rem;
        height:292/@rem;

        .btn_wrap{
          width: 750/@rem;
          height:292/@rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          line-height:74/@rem;
          font-size: 14px;
          .btn_phone{
            width: 670/@rem;
            height:94/@rem;
            background: #b4282d;
            color: #fff;
          }
          .btn_emil{
            width: 670/@rem;
            height:94/@rem;
            color:#b4282d ;
            border: 1px solid #b4282d ;
            margin: 20px 0;
          }
          .text_register{
            width: 670/@rem;
            height:40/@rem;
          }
        }
      }
      .down{
        width: 750/@rem;
        height:40/@rem;
        font-size: 14px;
        position: absolute;
        bottom: 20px;
        left: 0;
        .wrap{
          width: 750/@rem;
          height:40/@rem;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          line-height: 32/@rem;
          color:#7F7F7F;
          &span{
            width: 56/@rem;
            height:32/@rem;
          }
          .iconfont{
            width: 40/@rem;
            height:40/@rem;
          }
          .wechat{
            width: 180/@rem;
            height:40/@rem;

          }
          .qq{
            width: 180/@rem;
            height:40/@rem;
            border-right:1px solid  #7F7F7F;
            border-left:1px solid  #7F7F7F;
          }
          .weibo{
            width: 180/@rem;
            height:40/@rem;
          }
        }
      }
    }
  }

</style>
