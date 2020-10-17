import React, { Component } from 'react'
import './App.css'

export default class Contact extends Component {
    constructor() {
        super()
        this.state = {
            fname: [],
            lname: [],
            email: [],
            comments: [],
        }
        this.handleChange = this.handleChange.bind(this)
    }


    handleChange(event) {
        const value = event.target.value;
        this.setState({
            ...this.state,
            [event.target.name]: value
        })
    }

    handleSubmit = () => {
      alert('thank you for submitting ' + this.state.fname + "!")
    }
    render() {
        return (
            <form>
                <input
                    type="text"
                    name="fname"
                    value={this.state.fname}
                    placeholder="First Name"
                    onChange={this.handleChange}
                />
                <br />
                <br />
                <input
                    type="text"
                    name="lname"
                    value={this.state.lname}
                    placeholder="Last Name"
                    onChange={this.handleChange}
                />
                <br />
                <br />
                <input
                    type="text"
                    name="email"
                    value={this.state.email}
                    placeholder="Email Address"
                    onChange={this.handleChange}
                />
                <br />
                <br />
                <textarea
                    type="text"
                    name="comments"
                    value={this.state.comments}
                    placeholder="Additional Comments"
                    onChange={this.handleChange}
                />
                <br />
                <button type="button" onClick={this.handleSubmit}>Submit</button>
            </form>
        )
    }
}
