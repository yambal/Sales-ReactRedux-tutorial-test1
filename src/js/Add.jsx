import React, { Component } from 'react'
import ReactDom from 'react-dom'

import Style from './App.css'

export default class Add extends Component {
  constructor(props){
    super(props)
  }
  render(){
    const count = this.props.count
    const history = this.props.history
    return (
      <div className="count_box">
      ADD
        <button type="button" onClick={() => {this.props.addCount(count, history)}}>
        足すにゃ！
        </button>
        <button type="button" onClick={() => {this.props.changeButton(false)}}>
        引き算ボタンを出現させるにゃー
        </button>
      </div>
    )
  }
}
