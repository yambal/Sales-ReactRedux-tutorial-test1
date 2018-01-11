import React from 'react'
import { connect } from 'react-redux'

class App extends React.Component {
	render () {
    console.log(this.props)
		return (
			<h1>{this.props.name}</h1>
		)
	}
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
      name: state.hello.name,
  };
};

export default connect(mapStateToProps)(App);
