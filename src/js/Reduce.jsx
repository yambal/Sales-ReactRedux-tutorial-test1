import React, { Component } from 'react'
import ReactDom from 'react-dom'

import Style from './App.css'

export default class Reduce extends Component {
  constructor(props){
    super(props)
  }
  render(){
    const count = this.props.count
    const history = this.props.history
    return (
      <div className="count_box">
      REDUCE
        <button type="button" onClick={() => {this.props.reduceCount(count, history)}}>
        引くにゃ！
        </button>
        <button type="button" onClick={() => {this.props.changeButton(true)}}>
        足し算ボタンを出現させるにゃー
        </button>
      </div>
    )
  }
}
