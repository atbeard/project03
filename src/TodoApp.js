import React, { Component, createRef } from 'react'
import { uuid } from 'uuidv4'
import './App.css'

export default class TodoApp extends Component {
    constructor() {
        super()
        this.state = {
            text: "",
            todos: [],
        }

        this.handleChange = event => {
            this.setState({ text: event.target.value })
        }
        this.todoRef = createRef()
        this.handleAdd = () => {
            console.log('handleAdd called')
            let newTodo = this.todoRef.current.value
            this.setState({ todos: [...this.state.todos, { id: uuid(), newTodo: newTodo, complete: false }], text: "" })
        }
    }

    handleClick = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    return ({
                        ...todo,
                        complete: !todo.complete
                    })
                } else {
                    return todo;
                }
            })
        })
    }

    handleComplete = () => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.complete === true)
                    return (
                        <div>
                        </div>
                    )
                else return todo
            }
            )
        })
    }

    componentDidUpdate() {
        this.state.todos.forEach((todo) => {
            console.log(JSON.stringify(todo))
        })
    }
    render() {
        return (
            <div>
                <form>
                    <input type="text" ref={this.todoRef} value={this.state.text} onChange={this.handleChange} placeholder="enter todo" />
                    <button type="button" onClick={this.handleAdd}>Add Todo</button>
                </form>
                {
                    this.state.todos.map((todo) => {
                        return (
                            <div key={todo.id}>
                                <p style={{textDecoration: todo.complete ? 'line-through' : ''}}>
                                <input type="checkbox" onClick={() => this.handleClick(todo.id)} />
                                {todo.newTodo}
                                </p>    
                            </div>
                        )
                    })
                }
                <button type="button" onClick={this.handleComplete}>Complete</button>
                <button type="button">Not Complete</button>
            </div>

        )
    }
}
