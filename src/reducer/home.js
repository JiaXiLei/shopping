import { FETCH_HOME_ACTION } from '@/constants/actionTypes'
const defaultState = {
  data: []
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case FETCH_HOME_ACTION:
       return {
         ...state
       }
  
    default:
      return state
  }
}