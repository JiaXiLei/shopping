import { FETCH_HOME_NAV, FETCH_HOME_LIST, FETCH_HOME_GOODS } from '@/constants/actionTypes'

const defaultState = {
  homeImg: [], //home轮播
  homeListData: [], //home分类列表,
  homeGoodsData: [], //home商品列表
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case FETCH_HOME_NAV:
        return { ...state, homeImg: action.payload.data }
    case FETCH_HOME_LIST:
        return { ...state, homeListData: action.payload.data }
    case FETCH_HOME_GOODS:
      return { ...state, homeGoodsData: action.payload.data }

    default:
      return state
  }
}