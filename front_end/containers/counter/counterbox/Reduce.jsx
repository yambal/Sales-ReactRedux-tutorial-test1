import React, { Component } from 'react'
import ReactDom from 'react-dom'

export default class Reduce extends Component {
  constructor(props){
    super(props)
  }

  render(){
    const count = this.props.count
    const countHistory = this.props.countHistory
    return (
      <div className="count_box">
      REDUCE
        <button type="button" onClick={() => {this.props.reduceCount(count, countHistory)}}>
        引くにゃ！
        </button>
        <button type="button" onClick={() => {this.props.changeButton(true)}}>
        足し算ボタンを出現させるにゃー
        </button>
      </div>
    )
  }
}
