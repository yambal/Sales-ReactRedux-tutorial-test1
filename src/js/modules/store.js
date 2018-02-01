import { createStore } from 'redux'

import { rootReducer } from './reducers/rootReducer'

const initilState = {}

export const store = createStore(
  rootReducer,
  initilState
)
