import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Link } from 'react-router-dom'

import Add from './Add'
import Reduce from './Reduce'

export default class CountBox extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const props = Object.assign(
      {},
      {...this.props},
      {...this.state},
    )
    return (
      <div>
        {props.isAdd
          ? <Add {...props}/>
          : <Reduce {...props}/>
        }
        <Link to='/history'>
          検索履歴一覧
        </Link>
      </div>
    )
  }
}
