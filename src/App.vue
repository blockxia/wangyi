<template>
  <div id="app">
    <!--<HeaderTop/>-->
    <Footer v-show="$route.meta.showFooter"/>
    <router-view/>
  </div>
</template>

<script>
 import Footer from './components/Footer/Footer.vue'
 import HeaderTop from './components/HeaderTop/HeaderTop.vue'

  export default {
    components:{
      Footer,
      HeaderTop
    }
}
</script>

<style lang='less' rel="stylesheet/less" scoped="true">

</style>
