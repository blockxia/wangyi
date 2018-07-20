import {RECEIVE_HEADCATELIST} from './mutation-types'

export default {
  [RECEIVE_HEADCATELIST](state,{headCateList}){
    state.headCateList=headCateList
  }
}
