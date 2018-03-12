import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk'
import reducers from './Reducers'

const initialState = {}

export const history = createHistory()

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(
    routerMiddleware(history),
    thunk
  )
)

export default store
