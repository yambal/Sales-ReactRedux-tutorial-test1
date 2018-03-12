import React, { Component } from 'react'
import ReactDom from 'react-dom'

import Style from './App.css'

export default class Auth extends Component {
  constructor(props){
    super(props)
    this.state = {
      user:{
        email: '',
        password: ''
      }
    }
  }

  handleChange(prop, e){
    const user = this.state.user
    user[prop] = e.target.value
    this.setState({
      user: user
    })
  }
  handleSubmit(e){
    e.preventDefault()
    this.props.setUser(this.state.user)
  }
  render(){
    const user = this.state.user
    return (
      <div>
        <h1>サインイン</h1>
        <div>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" placeholder="メールアドレス" value={user.email} onChange={this.handleChange.bind(this, 'email')}/>
            <input type="password" placeholder="パスワード" value={user.password} onChange={this.handleChange.bind(this, 'password')}/>
            <input type="submit" name="commit" value="ログイン" data-disable-with="ログイン"/>
          </form>
          <p>
            test@kmail.com: aaaaa
          </p>
        </div>
       </div>
    )
  }
}
