import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import { login } from '../../api/apiCalls'
import { setAuth } from '../Login/redux/actions'


class LoginContainer extends Component {

    constructor() {
        super()

        this.state = {
            error: null
        }
    }

    render() {
        return (
            <LoginForm handleLogin={this.handleLogin} error={this.state.error} />
        )
    }

    handleLogin = (email, password) => {
        this.setState({
            error: null
        })

        login({ email, password })
            .then(response => {
                this.props.dispatch(setAuth(response.token, response.user.name, response.user.email, response.user._id))
            })
            .catch(err => {
                let message
                console.error(err)

                if (err.status === 401) { // login failed
                    message = "Login failed, email and password don't match."
                } else {
                    message = err.message
                }

                this.setState({
                    error: message
                })
            })
    }
}

LoginContainer = connect(function (state, ownProps) {
    return state
})(LoginContainer)

export default LoginContainer