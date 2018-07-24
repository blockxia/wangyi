<template>
  <div id="app">
    <Footer v-show="$route.meta.showFooter"/>
    <router-view/>
  </div>
</template>

<script>
 import Footer from './components/Footer/Footer.vue'

  export default {
    components:{
      Footer
    }
}
</script>

<style lang='less' rel="stylesheet/less" scoped="true">

</style>
