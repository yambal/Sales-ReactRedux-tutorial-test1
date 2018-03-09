import React, { Component } from 'react'
import ReactDom from 'react-dom'

import Add from './Add'
import Reduce from './Reduce'
import Header from './Header'
import Style from './App.css'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      count: 0,
      isAdd: true,
      isOpen: false,
      history: []
    }
    this.changeModalStatus = this.changeModalStatus.bind(this)
  }
  getCurrentTime(){
    const currentTime = new Date()
    const hour = currentTime.getHours()
  	const min = currentTime.getMinutes()
    return hour + "時" + min + "分"
  }
  addCount(count, history){
    const newHistory = ["ADD", this.getCurrentTime()]
    this.setState({
      count: count + 1,
      history: [...history, newHistory]
    })
  }
  reduceCount(count, history){
    const newHistory = ["REDUCE", this.getCurrentTime()]
    this.setState({
    count: count - 1,
    history: [...history, newHistory]
    })
  }
  changeButton(bool){
    this.setState({
      isAdd: bool
    })
  }
  changeModalStatus(open){
    open
    ? this.setState({
        isOpen: false
      })
    : this.setState({
        isOpen: true
      })
  }
  historyModal(historys){
    return(
      <div className="modal_wrapper" onClick={() => this.changeModalStatus(this.state.isOpen)}>
       <div className="modal_box">
         <h2>履歴一覧</h2>
         {historys.map(history =>
             <div>
              <div className='history'>{history[1]}</div>
              {history[0] === "ADD"
               ? <div className='history'>足したにゃ</div>
               : <div className='history'>引いたにゃ</div>
              }
             </div>
          )}
       </div>
      </div>
    )
  }
  render() {
    const props = Object.assign(
      {},
      {...this.state},
      {addCount: this.addCount.bind(this)},
      {reduceCount: this.reduceCount.bind(this)},
      {changeButton: this.changeButton.bind(this)}
    )
    const modalOpen = this.state.isOpen
    console.log(props.history);
    return (
      <div>
        {this.state.isOpen ? this.historyModal(props.history) : null}
        <Header count={props.count} />
        {this.state.isAdd
          ? <Add {...props}/>
          : <Reduce {...props}/>
        }
        <button type="button" onClick={() => this.changeModalStatus(modalOpen)}>
          履歴一覧
        </button>
      </div>
    )
  }
}
