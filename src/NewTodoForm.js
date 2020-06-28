import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './NewTodoForm.css'
class NewTodoListForm extends Component {
    constructor(props){
        super(props)
        this.state = {
           todo: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(evt){
        evt.preventDefault()
        const newTodo = {...this.state, id: uuidv4(), completed: false}
        this.props.createTodo(newTodo)
        this.setState({
            todo: ''
        })

    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })

    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="NewTodoForm">
                    <input 
                    type="text" 
                    name="todo" 
                    value={this.state.todo} 
                    id="todo" 
                    onChange={this.handleChange} 
                    />
                    <button>Add To-do</button>
                </div>
            </form>
        )
    }
}

export default NewTodoListForm
