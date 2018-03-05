import React, { Component } from 'react'
import ReactDom from 'react-dom'

import Add from './Add'
import Reduce from './Reduce'
import Header from './Header'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      count: 0,
      isAdd: true
    }
    this.addCount = this.addCount.bind(this)
    this.reduceCount = this.reduceCount.bind(this)
    this.changeButton = this.changeButton.bind(this)
  }
  addCount(count){
    this.setState({
      count: count + 1
    })
  }
  reduceCount(count){
    this.setState({
    count: count - 1
    })
  }
  changeButton(bool){
    this.setState({
      isAdd: bool
    })
  }
  render() {
    const count = this.state.count
    return (
      <div>
        <Header count={count} />
        {this.state.isAdd?
        <Add count={count} addCount={this.addCount} changeButton={this.changeButton}/>
        :<Reduce count={count} reduceCount={this.reduceCount} changeButton={this.changeButton}/>
        }
      </div>
    )
  }
}
