import React, { Component } from 'react'
import './App.css'

export default class Contact extends Component {
    constructor(){
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
        event.preventDefault();
        const target = event.target
        const value= target.value
        const name = target.name
        this.setState({
            [name]: value
        })
    }

    handleSubmit(fname, lname, email, comment){
        console.log({fname, lname, email, comment})
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <input 
            type="text" 
            name="fname" 
            placeholder="First Name" 
            onChange={this.handleChange}
            />
            <br/>
            <br/>
            <input 
            type="text" 
            name="lname" 
            placeholder="Last Name" 
            onChange={this.handleChange}
            />            
            <br/>
            <br/>
            <input 
            type="text" 
            name="fname" 
            placeholder="Email Address" 
            onChange={this.handleChange}
            />
            <br/>
            <br/>
            <textarea 
            type="text" 
            name="comments" 
            placeholder="Additional Comments" 
            onChange={this.handleChange}
            />
            <br />
            <button type="submit">Submit</button>       
            </form>
        )
    }
}
