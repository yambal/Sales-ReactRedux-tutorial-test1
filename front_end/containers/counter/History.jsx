import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Link } from 'react-router-dom'

export default class Historybox extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const historys = this.props.countHistory
    return (
      <div>
        <h1>検索履歴一覧</h1>
        <Link to={`/`}>
          TOP
        </Link>
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
    )
  }
}
