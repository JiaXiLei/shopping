import { FETCH_HOME_NAV } from '@/constants/actionTypes'
const defaultState = {
  homeImg: []
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case FETCH_HOME_NAV:
        const { data } = action.payload
       return {
         ...state,
         homeImg: data
       }
  
    default:
      return state
  }
}