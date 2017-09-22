import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTodos } from '../reducers/todo'

const TodoItem = ({ name, isComplete }) =>
  <li>
    <input type="checkbox" defaultChecked={isComplete} /> {name}
  </li>

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos()
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
        </ul>
      </div>
    )
  }
}

export default connect(state => ({ todos: state.todo.todos }), {
  fetchTodos
})(TodoList)