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
          手机号注册
        </div>
      </div>
      <div class="center">
        <div class="btn_wrap">
          <div class="input_emil">
            <input type="tel" maxlength="11"  class="emil_phone"
                   placeholder="请输入手机号" v-model="phone">
          </div>
          <div class="input_pwd">
            <div class="input_pwd_inner">
              <input type="password" maxlength="6" class="emil_pwd"
                     placeholder="请输入短信验证码" v-model="short">
            </div>
            <div class="code  " :class="{on:isPhone}" @click="getPhoneCode">
              <span class="getcode " >{{computeTime>0 ? `已发送(${computeTime}s)`:'获取验证码'}}</span>
            </div>
          </div>
          <div class="register_phone">
            <div class="text" @click="$router.push('/register')">
              <span class="register">注册账号</span>
            </div>
            <div class="pwd">
              <span class="register">忘记密码</span>
            </div>
          </div>
          <div class="btn_phone"  @click="sendPhone">
            <span>登录</span>
          </div>
          <div class="btn_emil" @click="$router.push('/login')">

            <span>其他登录方式</span>
          </div>
          <div class="text_register" @click="$router.replace('/register')">
            <span>注册账号</span>
            <i class="iconfont icon-jiantouyou"></i>
          </div>
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
        phone:'',
        short:'',
        computeTime:0
      }
    },
    computed:{
      //计算属性
      isPhone(){
        return /^1\d{10}$/.test(this.phone)
      }
    },
    methods:{
      //v-if="isShow"
      sendPhone(){
        if(!this.isPhone){
          alert('请输入正确手机号')
        }
      },
      getPhoneCode(){
        if(this.isPhone && this.computeTime===0){
          this.computeTime=60
          const timer=setInterval(()=>{
            this.computeTime--
            if(this.computeTime<=0){
              clearInterval(timer)
              this.computeTime=0
            }
          },1000)
        }
      }
    },

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
         font-size: 20px;
          text-align: center;
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
            margin-bottom: 11%;
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
            margin-bottom: 10%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .input_pwd_inner{
              width: 720/@rem;
              box-sizing: border-box;
              margin-top: inherit;
              .emil_pwd{
                box-sizing: border-box;
                width: 100%;
                height:91/@rem;
                padding-left: 5%;
                outline: none;
                border-bottom: 1px solid #eeeeee;
              }
            }
            .on{
              color: #eee;
            }
            .code{
              width: 168/@rem;
              height:56/@rem;
              //    background: pink;
              text-align: center;
              line-height:56/@rem;
              margin-bottom: 1%;
              margin-left: -35%;
              border: 1px solid #000;
              color: #000;
              border-radius: 5px;
              .getcode{
                color: #000;
              }

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
          .text_register{
            width: 670/@rem;
            height:40/@rem;
          }
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
