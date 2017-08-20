import React, { Component } from 'react'
import { connect } from 'react-redux'

import LoginContainer from '../Login/LoginContainer'

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
          <h2>Basic React/Redux Login</h2>
          <LoginContainer />
      </div>
    );
  }
}

App = connect(function (state, ownProps) {
    return state
})(App)

export default App