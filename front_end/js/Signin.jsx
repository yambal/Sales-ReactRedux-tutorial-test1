import React, { Component } from 'react'
import ReactDom from 'react-dom'
import request from 'superagent'

import Style from './App.css'

export default class Auth extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: this.props.user,
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
    const url = 'http://0.0.0.0:8080/api/user/signin'
    request
      .post(url)
      .set('Content-Type', 'application/json')
      .send({
        user: this.state.user
      })
      .then((res) => {
        const user = res.body
        this.props.fetchUser(user)
      })
      .catch((err) => {
        console.log(err)
      })
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
