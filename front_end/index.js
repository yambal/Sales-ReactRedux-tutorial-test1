import React from 'react'
import ReactDom from 'react-dom'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'

import Auth from './containers/Auth'
import store, { history } from './modules/Store'

ReactDom.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Auth />
    </ConnectedRouter>
  </Provider>,
 document.getElementById('app')
)
