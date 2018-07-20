import {RECEIVE_HEADCATELIST}from './mutation-types'
import {reqMsite} from '../api'
export default {


  async getHeadCateList({commit},cb){
    const result = await reqMsite()
    console.log(result);
    if(result.code===0){
      const headCateList=result.data
      console.log(headCateList);
      commit(RECEIVE_HEADCATELIST,{headCateList})
      cb&&cb()
    }
  }
}
