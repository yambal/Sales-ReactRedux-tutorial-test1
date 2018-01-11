import { createStore } from 'redux'

import Reducer from './reducer'


const initilState = {}

const store = createStore (
  Reducer
)

export default store
