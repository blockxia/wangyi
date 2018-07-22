<template>
  <div class="class_nav">
    <div class="nav">
      <ul class="nav_list">
        <li class="nav_list_li " :class="{on:index===currentIndex }"
            v-for="(category,index) in categorys" :key="index"
            @click="goCate({path:'/class',index})" >{{category.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from  'better-scroll'
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        currentIndex:0
      }
    },
    mounted(){
      this.$nextTick(()=>{
        new BScroll('.nav',{
          scrollY:true,
          click: true,
          probeType: 2,
        })
      })
    },
    methods:{
      goCate(obj){
        const {path,index}=obj
        this.$router.push(path)
        this.currentIndex=index
      }
    },
    computed:{
      ...mapState(['categorys'])
    }
  }
</script>

<style lang='less' rel="stylesheet/less" scoped>
  @import "../../assets/less/mixins";
.class_nav{
  width: 25%;
  .nav{
    width: 100%;
    height:1300/@rem;
    border-right: 1px solid #eee;
    box-sizing: border-box;
    padding: 5px 3px;
    .nav_list{
      width: 100%;
      .on{
        border-left: solid 2px   #b4282d;
        color:#b4282d;
        font-size:16px ;
      }
      li{
        margin-top: 20px;
        font-size: 14px;
        color:black ;
        width: 162/@rem;
        height:50/@rem;
        //   background: plum;
        text-align: center;
        line-height:50/@rem;
      }
    }
  }
}
</style>
