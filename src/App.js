import React, { Component } from 'react'
import './App.css'
import TodoApp from './TodoApp'
import Nav from './Nav'
import Home from './Home'
import Contact from './Contact'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/todos" component={TodoApp} />
        <Route path="/contact" component={Contact} />
      </Switch>
      </div>
      </BrowserRouter>
    )
  }
}
