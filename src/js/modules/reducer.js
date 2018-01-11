import { combineReducers } from "redux";

import { helloReducer } from './reducers/helloReducer'

export default combineReducers({
    hello: helloReducer
})
