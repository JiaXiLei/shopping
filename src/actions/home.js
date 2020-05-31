import { FETCH_HOME_NAV, FETCH_HOME_LIST, FETCH_HOME_GOODS } from '@/constants/actionTypes'
import { homeNavData, homelist, homegoods } from '@/services/home'

//home轮播图片
export function homeNav () {
  return {
    type: FETCH_HOME_NAV,
    payload: homeNavData()
  }
}

//home分类列表
export function homeLists () {
  return {
    type: FETCH_HOME_LIST,
    payload: homelist()
  }
}

//home商品列表
export function homegood () {
  return {
    type: FETCH_HOME_GOODS,
    payload: homegoods()
  }
}