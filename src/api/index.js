
import ajax from './ajax'

export const reqRealGoods=()=>ajax('/real')
export const reqClass=()=>ajax('/class')
export const reqProfile=()=>ajax('/profile')
export const reqShopping=()=>ajax('/shopping')


//mock数据
export const reqMsite=()=>ajax('/headCateList')
export const reqMsiteL=()=>ajax('/focusList')
export const reqMsiteD=()=>ajax('/policyDescList')
export const reqMsiteT=()=>ajax('/tagList')
export const reqMsiteNew=()=>ajax('/newItemList')
export const reqMsiteHot=()=>ajax('/popularItemList')
export const reqMsiteXsg=()=>ajax('/flashSaleIndexVO')
export const reqMsiteZT=()=>ajax('/topicList')
export const reqMsiteJH=()=>ajax('/cateList')
