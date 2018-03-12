import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import {
  onSetUser,
  onAddCount,
  onReduceCount,
  onChangeButton
} from '../modules/ActionCreater'

import AuthContent from './AuthContent'
import Signin from './Signin'
import Style from './App.css'

class Auth extends Component {
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
  componentWillMount(){
    const user = JSON.parse(localStorage.getItem('count_user'))
    user
    ? this.setState({
      user: user,
      isAuthenticated: true
    })
    : null
  }

  render(){
    const props = Object.assign(
      {},
      {...this.props},
      {...this.state}
    )
    return (
      <div>
        <Switch>
          <Route path="/signin" render={() => (<Signin {...this.props}/>)} />
          <AuthContent {...props} isAuthenticated={this.state.isAuthenticated}/>
        </Switch>
       </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    count: state.counter.count,
    isAdd: state.counter.isAdd,
    countHistory: state.counter.countHistory
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCount(count, countHistory) {
      dispatch(onAddCount(count, countHistory))
    },
    reduceCount(count, countHistory) {
      dispatch(onReduceCount(count, countHistory))
    },
    changeButton(isAdd) {
      dispatch(onChangeButton(isAdd))
    },
    setUser(user) {
      dispatch(onSetUser(user))
    }

  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Auth))
