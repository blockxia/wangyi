
import ajax from './ajax'

export const reqRealGoods=()=>ajax('/real')
export const reqClass=()=>ajax('/class')
export const reqProfile=()=>ajax('/profile')
export const reqShopping=()=>ajax('/shopping')


//mock数据
export const reqMsite=()=>ajax('/headCateList')
