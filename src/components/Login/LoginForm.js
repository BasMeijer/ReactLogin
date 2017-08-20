import React, { Component } from 'react'
import InputField from './InputField'

class LoginForm extends Component {

    constructor() {
        super()
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange = (event) => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        this.setState({
            [name]: value
        })
    }

    handleFormSubmission = (e) => {
        e.preventDefault()
        const email = this.state.email
        const password = this.state.password

        this.props.handleLogin(email, password)
    }

    render() {
        return (
            <div>
                {this.props.error && <div className="error">{this.props.error}</div>}
                <form onSubmit={this.handleFormSubmission}>

                    <InputField name="email" type="email" onChange={this.handleInputChange} />
                    <InputField name="password" type="password" onChange={this.handleInputChange} />
                    <input type="submit" value="Login" />

                </form>
            </div>
        )
    }
}

export default LoginForm