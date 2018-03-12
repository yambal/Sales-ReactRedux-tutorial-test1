import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Switch, Route, Redirect } from 'react-router-dom'

import Header from './Header'
import Countbox from './counterbox/CountBox'
import Historybox from './History'

export default class Counter extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: this.props.user
    }
  }

  handleLoout(){
    this.setState({
      user: {
          name: '',
          email: '',
          password: ''
        },
        isAuthenticated: false
      })
    localStorage.clear
    window.location = '/signin'
  }

  render() {
    return (
      <div>
        <Header count={this.props.count} user={this.props.user}/>
        <Switch>
           <Route exact path="/" render={() => (<Redirect to='/count' />)} />
           <Route path="/count" render={() => (<Countbox {...this.props}/>)} />
           <Route path="/history" render={() => (<Historybox {...this.props}/>)} />
        </Switch>
        <button type="button" onClick={() => {this.handleLoout()}}>
        ログアウト
        </button>
      </div>
    )
  }
}
