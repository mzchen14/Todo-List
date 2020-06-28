import React, { Component } from 'react'
import NewTodoListForm from './NewTodoForm'
import Todo from './Todo'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: []
        }

        this.create = this.create.bind(this)
        this.remove = this.remove.bind(this)
        this.update = this.update.bind(this)
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

        console.log(updatedTodos)
    }

    render() {
        const tasks = this.state.todos.map(task => (
            <Todo 
                key={task.id} 
                id={task.id} 
                task={task.todo} 
                removeTodo={this.remove}
                updateTodo={this.update}
            />
        ))
        return(
            <div>
                <h1>Todo List</h1>
                <NewTodoListForm createTodo={this.create}/>
                {tasks}
            </div>
        )
    }
}

export default TodoList