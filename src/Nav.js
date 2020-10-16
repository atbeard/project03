import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './App.css'

export default class Nav extends Component {
    render() {
        return (
            <nav>
                <h3>My Todo App</h3>
                <ul className="nav-links">
                    <Link style={{textDecoration: 'none'}}
                    to="/"><li>Home</li></Link>
                    <Link style={{textDecoration: 'none'}}
                    to="/todos"><li>Todos</li></Link>
                    <Link style={{textDecoration: 'none'}}
                    to="/contact"><li>Contact</li></Link>
                </ul>
                
            </nav>
        )
    }
}
