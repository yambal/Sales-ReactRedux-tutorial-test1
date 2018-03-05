import React, { Component } from 'react'
import ReactDom from 'react-dom'

export default class Header extends Component {
  constructor(props){
    super(props)
  }
  render(){
    const count = this.props.count
    return (
      <div>
      count numbert : {count}
      </div>
    )
  }
}
