import React, { Component } from 'react'
import './Todo.css'
class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditing: false,
            task: this.props.task
        }
        this.handleDelete = this.handleDelete.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleToggle = this.handleToggle.bind(this)
    }

    handleDelete(evt) {
        this.props.removeTodo(this.props.id)
    }

    handleEdit(evt) {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }
    handleUpdate(evt) {
        evt.preventDefault()
        this.props.updateTodo(this.props.id, this.state.task)
        this.handleEdit()
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    handleToggle(evt) {
        this.props.toggleTodo(this.props.id)
    }

    render() {
        let result;
        if(this.state.isEditing) {
            result = (
                <div className="Todo">
                    <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
                        <input type="text" 
                        value={this.state.task} 
                        name='task' 
                        onChange={this.handleChange}/>
                        <button>Save</button>
                    </form>
                    
                </div>
            )
        } else {
            result = (
                <div className="Todo">
                    <li onClick={this.handleToggle}className={this.props.completed ? 'Todo-task Completed' : 'Todo-task'}>{this.props.task}</li>
                    <div className="Todo-buttons">
                    <button onClick={this.handleEdit}>
                        <i class='fas fa-pen' />
                    </button>
                    <button onClick={this.handleDelete}>
                        <i class='fas fa-trash' />
                    </button>
                    </div>
                    
                </div>
            )
        }
        return result
    }
}

export default Todo