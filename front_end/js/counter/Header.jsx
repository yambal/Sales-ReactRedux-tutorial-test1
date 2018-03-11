import React, { Component } from 'react'
import ReactDom from 'react-dom'

export default class Header extends Component {
  constructor(props){
    super(props)
  }
  render(){
    const count = this.props.count
    const name = this.props.user.name
    return (
      <div>
      <p>
        count numbert : {count}
      </p>
      <p>
        user name: {name}
      </p>
      </div>
    )
  }
}
