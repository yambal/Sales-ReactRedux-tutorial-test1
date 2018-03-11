import React, { Component } from 'react'
import ReactDom from 'react-dom'

import Counter from './counter/Counter'
import Signin from './Signin'
import Style from './App.css'

export default class Auth extends Component {
  constructor(props){
    super(props)
    this.state={
      user: {
        name: '',
        email: '',
        password: ''
      },
      isAuthenticated: false
    }
  }

  fetchUser(user){
    this.setState({
      isAuthenticated: true,
      user: user
    })
  }
  onSignout(){
    this.setState({
      user: {
        name: '',
        email: '',
        password: ''
      },
      isAuthenticated: false
    })
  }


  render(){
    const props = Object.assign(
      {},
      {...this.state},
      {fetchUser: this.fetchUser.bind(this)}
    )
    console.log(this);
    return (
      <div>
        {this.state.isAuthenticated
         ? <Counter user={this.state.user} onSignout={this.onSignout.bind(this)}/>
         : <Signin {...props} />
         }
       </div>
    )
  }
}
