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

export default {
  [RECEIVE_HEADCATELIST](state,{headCateList}){
    state.headCateList=headCateList
  },
  [RECEIVE_FOCUSLIST](state,{focusList}){
    state.focusList=focusList
  },
  [RECEIVE_POLICYDESCLIST](state,{policyDescList}){
    state.policyDescList=policyDescList
  },
  [RECEIVE_TAGLIST](state,{tagList}){
    state.tagList=tagList
  },
  [RECEIVE_NEWITEMLIST](state,{newItemList}){
    state.newItemList=newItemList
  },
  [RECEIVE_POPULARITEMLISTS](state,{popularItemList}){
    state.popularItemList=popularItemList
  },
  [RECEIVE_FLASHSALEINDEXVO](state,{flashSaleIndexVO}){
    state.flashSaleIndexVO=flashSaleIndexVO
  },
  [RECEIVE_TOPICLIST](state,{topicList}){
    state.topicList=topicList
  },
  [RECEIVE_CATELIST](state,{cateList}){
    state.cateList=cateList
  }
}
