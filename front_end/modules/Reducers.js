import { bindActionCreators, combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

function getCurrentTime() {
  const currentTime = new Date()
  const hour = currentTime.getHours()
  const min = currentTime.getMinutes()
  return hour + "時" + min + "分"
}

const defaultState = {
  count: 0,
  isAdd: true,
  countHistory: []
 }

function countReducers(state = defaultState, action) {
  switch (action.type) {
    case 'ADD':
      var newHistory = ["ADD", getCurrentTime()]
      return {
        ...state,
        count: action.payload.count + 1,
        countHistory: [...action.payload.countHistory, newHistory]
      }
    case 'REDUCE':
      var newHistory = ["REDUCE", getCurrentTime()]
      return {
        ...state,
        count: action.payload.count - 1,
        countHistory: [...action.payload.countHistory, newHistory]
      }
    case 'CHANGE_BUTTON':
    return {
      ...state,
      isAdd: action.payload.isAdd
    }
    default:
      return state
  }
}

function userReducers(state = {}, action) {
  switch (action.type) {
    case 'REQUEST_POST':
      return {
        ...state,
      }
    case 'RECEIVE_POST':
      return {
        ...state,
        user: action.payload.user
      }
    default:
      return state
  }
}

export default combineReducers({
    user: userReducers,
    counter: countReducers,
    router: routerReducer
  })
