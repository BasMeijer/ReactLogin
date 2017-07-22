import React, { Component } from 'react'
import LoginForm from './LoginForm'
import {login} from '../../api/apiCalls'

class componentName extends Component {

    constructor(){
        super()

        this.state ={
            error: null
        }
    }

    render () {
        return (
            <LoginForm handleLogin={this.handleLogin} error={this.state.error}/>
        )
    }

    handleLogin = (email, password) => {
        this.setState({
            error: null
        })

        login({ email, password })
            .then(token => {
                // TODO ADD REDUX TO STORE TOKEN
                console.log('login!', token)
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

export default componentName