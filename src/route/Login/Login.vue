<template>
  <div class="login_wrapper">
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
          <div class="input_emil">
            <input type="text"  class="emil_phone"
             placeholder="邮箱账号" v-model="emil">
          </div>
          <div class="input_pwd">
            <input type="password" maxlength="6" class="emil_pwd"
                   placeholder="密码" v-model="pwd">
          </div>
          <div class="register_phone">
            <div class="text" @click="$router.push('/register')">
              <span class="register">注册账号</span>
            </div>
            <div class="pwd">
              <span class="register">忘记密码</span>
            </div>
          </div>
          <div class="btn_phone"  @click="sendCode">
            <span>登录</span>
          </div>
          <div class="btn_emil" @click="$router.push('/phonelogin')">

            <span>其他登录方式</span>
          </div>
          <!--<div class="text_register" @click="$router.replace('/register')">
            <span>注册账号</span>
            <i class="iconfont icon-jiantouyou"></i>
          </div>-->
        </div>
      </div>
      <!--<div class="down">
        <div class="wrap">

        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        emil:'',
        pwd:''
      }
    },
    computed:{
      isEmil(){
        return /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(this.emil)
      }
    },
    methods:{
      //v-if="isShow"
      sendCode(){
        const {emil,pwd}=this

        if(this.isEmil && !pwd){
          alert('请输入密码 ')

        }else if(!this.isEmil || !pwd){
          alert('邮箱或密码输入错误')
        }else{
          alert('登录成功')
        }

      }
    }
  }
</script>

<style lang='less' rel="stylesheet/less" scoped="true">
  @import "../../assets/less/mixins";
.login_wrapper{
  background: #fff;
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
        margin-top: -20%;
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
        .input_emil{
          width: 670/@rem;
          height:91/@rem;
          box-sizing: border-box;
          margin: 0 -5%;
        //  background:lightpink ;
          margin-bottom: 1%;
            .emil_phone{
              box-sizing: border-box;
              width: 100%;
              height:100%;
              padding-left: 5%;
              outline: none;
              border-bottom: 1px solid #eeeeee;
            }
        }
        .input_pwd{
          width: 670/@rem;
          height:91/@rem;
          box-sizing: border-box;
          margin: 0 -5%;
          //  background:lightpink ;
          margin-bottom: 5%;
          .emil_pwd{
            box-sizing: border-box;
            width: 100%;
            height:100%;
            padding-left: 5%;
            outline: none;
            border-bottom: 1px solid #eeeeee;
          }
        }
        .register_phone{
          width: 670/@rem;
          height:91/@rem;
          box-sizing: border-box;
          //margin: 0 -5%;

          margin-bottom: 6%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          line-height:91/@rem ;
          padding: 1% 0;

          .text{
            height:91/@rem;
          }
          .pwd{
            height:91/@rem;
          }
        }
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
       /* .text_register{
          width: 670/@rem;
          height:40/@rem;
        }*/
      }
    }
   /* .down{
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

      }
    }*/
  }
}
</style>
