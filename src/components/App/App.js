import React, { Component } from 'react'
import LoginContainer from '../Login/LoginContainer'

import { login } from '../../api/apiCalls'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Basic User Login</h2>
          <LoginContainer />
        </div>
      </div>
    );
  }
}

export default App;
