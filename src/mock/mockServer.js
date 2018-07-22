/*
使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import data from './msite.json'
import shiwuData from './shiwu.json'
//主页面数据
Mock.mock('/headCateList',{code:0,data:data.headCateList})
Mock.mock('/focusList',{code:0,data:data.focusList})
Mock.mock('/policyDescList',{code:0,data:data.policyDescList})
Mock.mock('/tagList',{code:0,data:data.tagList})
Mock.mock('/newItemList',{code:0,data:data.newItemList})
Mock.mock('/popularItemList',{code:0,data:data.popularItemList})
Mock.mock('/flashSaleIndexVO',{code:0,data:data.flashSaleIndexVO})
//福利社待获取
Mock.mock('/topicList',{code:0,data:data.topicList})
Mock.mock('/cateList',{code:0,data:data.cateList})

//实物页面数据
Mock.mock('/banner',{code:0,data:shiwuData.banner})
Mock.mock('/column',{code:0,data:shiwuData.column})
Mock.mock('/recommend',{code:0,data:shiwuData.recommend})
Mock.mock('/tenfifteen',{code:0,data:shiwuData.tenfifteen})
