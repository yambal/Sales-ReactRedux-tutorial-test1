import { createStore } from 'redux'

import Reducer from './reducer'


const initilState = {}

const store = createStore (
  Reducer,
  initilState
)

export default store
