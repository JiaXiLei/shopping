import { FETCH_HOME_NAV } from '@/constants/actionTypes'
import { homeNavData } from '@/services/home'

//home导航图片
export function homeNav (option) {
  return {
    type: FETCH_HOME_NAV,
    payload: homeNavData()
  }
}