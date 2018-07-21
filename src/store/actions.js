import {
  RECEIVE_HEADCATELIST,
  RECEIVE_FOCUSLIST,
  RECEIVE_POLICYDESCLIST,
  RECEIVE_TAGLIST,
  RECEIVE_NEWITEMLIST,
  RECEIVE_POPULARITEMLISTS,
  RECEIVE_FLASHSALEINDEXVO,
  RECEIVE_TOPICLIST,
  RECEIVE_CATELIST
} from './mutation-types'
import {
  reqMsite,
  reqMsiteL,
  reqMsiteD,
  reqMsiteT,
  reqMsiteNew,
  reqMsiteHot,
  reqMsiteXsg,
  reqMsiteZT,
  reqMsiteJH
} from '../api'
export default {


  async getHeadCateList({commit},cb){
    const result = await reqMsite()
    //console.log(result);
    if(result.code===0){
      const headCateList=result.data
     // console.log(headCateList);
      commit(RECEIVE_HEADCATELIST,{headCateList})
      cb&&cb()
    }
  },
  async getFocusList({commit}) {
    const result = await reqMsiteL()
   // console.log('整体',result);
    if (result.code === 0) {
      const focusList = result.data
     //console.log(focusList);
      commit(RECEIVE_FOCUSLIST, {focusList})
    }
  },
  async getPolicyDescList({commit}) {
    const result = await reqMsiteD()
    //console.log('整体',result);
    if (result.code === 0) {
      const policyDescList = result.data
     // console.log(policyDescList);
      commit(RECEIVE_POLICYDESCLIST, {policyDescList})
    }
  },
  async getTagList({commit}) {
    const result = await reqMsiteT()
    //console.log('getTagList整体',result);
    if (result.code === 0) {
      const tagList = result.data
      //console.log(tagList);
      commit(RECEIVE_TAGLIST, {tagList})
    }
  },
  async getNewItemList({commit}) {
    const result = await reqMsiteNew()
    //console.log('getNewItemList',result);
    if (result.code === 0) {
      const newItemList = result.data
     // console.log('getNewItemList');
      commit(RECEIVE_NEWITEMLIST, {newItemList})
    }
  },
  async getPopularItemLists({commit}) {
    const result = await reqMsiteHot()
    //console.log('getPopularItemLists',result);
    if (result.code === 0) {
      const popularItemList = result.data
      //console.log('getPopularItemLists');
      commit(RECEIVE_POPULARITEMLISTS, {popularItemList})
    }
  },
  async getFlashSaleIndexVO ({commit}) {
    const result = await reqMsiteXsg()
   // console.log('getFlashSaleIndexVO',result);
    if (result.code === 0) {
      const flashSaleIndexVO = result.data
     // console.log('getFlashSaleIndexVO');
      commit(RECEIVE_FLASHSALEINDEXVO, {flashSaleIndexVO})
    }
  },
  async getTopicList ({commit}) {
    const result = await reqMsiteZT()
   // console.log('getTopicList',result);
    if (result.code === 0) {
      const topicList = result.data
     // console.log('getTopicList');
      commit(RECEIVE_TOPICLIST, {topicList})
    }
  },
  async getCateList ({commit}) {
    const result = await reqMsiteJH()
    console.log('getCateList',result);
    if (result.code === 0) {
      const cateList = result.data
      console.log('getCateList');
      commit(RECEIVE_CATELIST, {cateList})
    }
  },


}
