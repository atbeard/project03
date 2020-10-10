import React, { Component, createRef } from 'react'
import { uuid } from 'uuidv4'

export default class TodoApp extends Component {
    constructor() {
        super()
        this.state = {
            todos: [],
            checked: false
        }

        const checked = [...this.state.checked]
    
        this.todoRef = createRef()
        this.handleAdd = () => {
            console.log('handleAdd called')
            let newTodo = this.todoRef.current.value
            this.setState({ todos: [...this.state.todos, { id: uuid(), newTodo: newTodo }] })
        }
    }
        handleCheck () {
            this.setState({checked : !this.state.checked})
        }
        componentDidUpdate() {
            this.state.todos.forEach( (todo) => {
                console.log(JSON.stringify(todo))
            })
        }
    render() {
        return (
            <div>
                <form>
                <input type="text" ref={this.todoRef} placeholder="enter todo" />
                <button type="button" onClick={this.handleAdd}>Add Todo</button>
                </form>
                {
                    this.state.todos.map((todo, id) => {
                        return (
                            <div key={todo.id}>
                            {todo.newTodo}
                            {this.state.checked ? ' True' : ' False'}
                            <input type="checkbox" onClick={this.handleCheck.bind(this, id)} />
                            </div>
                        )
                    })
                }
                <button type="button">Active</button>
                <button type="button">Completed</button>
            </div>

        )
    }
}


