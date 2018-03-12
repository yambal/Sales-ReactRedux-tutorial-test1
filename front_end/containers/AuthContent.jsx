import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Redirect } from 'react-router-dom'

import Counter from './counter/Counter'

export default class AuthContent extends Component {
  constructor(props){
    super(props)
}
  render(){
    return (
      <div>
        {this.props.isAuthenticated
          ? <Counter {...this.props}/>
          : <Redirect to='/signin' />}
       </div>
    )
  }
}
