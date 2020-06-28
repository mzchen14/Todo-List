import React, { Component } from 'react'
import NewTodoListForm from './NewTodoForm'
import Todo from './Todo'
import "./TodoList.css"

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: []
        }

        this.create = this.create.bind(this)
        this.remove = this.remove.bind(this)
        this.update = this.update.bind(this)
        this.toggleCompletion = this.toggleCompletion.bind(this)
    }

    create(newTodo) {
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    remove(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    update(id, updatedTask) {
        const updatedTodos = this.state.todos.map(task => {
            if(task.id === id) {
                return {...task, todo: updatedTask}
            }
            return task
        })
        this.setState({
            todos: updatedTodos
        })
    }

    toggleCompletion(id) {
        const updatedTodos = this.state.todos.map(task => {
            if(task.id === id) {
                return {...task, completed: !task.completed}
            }
            return task
        })
        this.setState({
            todos: updatedTodos
        })
    }

    render() {
        const tasks = this.state.todos.map(task => (
            <Todo 
                key={task.id} 
                id={task.id} 
                task={task.todo} 
                completed={task.completed}
                removeTodo={this.remove}
                updateTodo={this.update}
                toggleTodo={this.toggleCompletion}
            />
        ))
        return(
            <div className="TodoList">
                <h1>To-do List<span>Plan your day.</span></h1>
                <NewTodoListForm createTodo={this.create}/>
                <ul>{tasks}</ul>
            </div>
        )
    }
}

export default TodoList