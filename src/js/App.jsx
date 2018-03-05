import React, { Component } from 'react'
import ReactDom from 'react-dom'

import Add from './Add'
import Reduce from './Reduce'
import Header from './Header'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Add />
        <Reduce />
      </div>
    )
  }
}
