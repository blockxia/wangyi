import Vue from 'vue'
import Router from 'vue-router'
import FirstScreen from '../route/FirstScreen/FirstScreen.vue'
import Msite from '../route/Msite/Msite.vue'
import RealGoods from '../route/RealGoods/RealGoods.vue'
import Class from '../route/Class/Class.vue'
import Shopping from '../route/Shopping/Shopping.vue'
import Profile from '../route/Profile/Profile.vue'
import Recommend from '../route/Recommend/Recommend.vue'
import AtHome from '../route/AtHome/AtHome.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/first',
      component:FirstScreen
    },
    {
      path: '/msite',
      component:Msite,
      meta:{
        showFooter:true
      },
      children:[
        {
          path: '/msite/recommend',
          component:Recommend,
          meta:{
            showFooter:true
          }
        },
        {
          path: '/msite/athome',
          component:AtHome,
          meta:{
            showFooter:true
          }
        },
        {
          path: '',
          redirect: '/msite/recommend'
        }
      ]
    },
    {
      path: '/real',
      component:RealGoods,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/class',
      component:Class,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/shopping',
      component:Shopping,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/profile',
      component:Profile,
      /*meta:{
        showFooter:true
      }*/
    },




    {
      path: '/',
      redirect:'/first',

    },

  ]
})
