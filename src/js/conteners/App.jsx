import React from 'react'

import { connect } from 'react-redux'

class App extends React.Component {
  render () {
    return (
      <h1>{this.props.user.name}</h1>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App)
