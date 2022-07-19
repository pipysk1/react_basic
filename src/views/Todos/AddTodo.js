import React, { Component } from "react"
import { toast } from "react-toastify"
import "./ListTodo.scss"

class AddTodo extends Component {
  state = {
    title: "",
  }

  handleOnChange = (e) => {
    this.setState({
      title: e.target.value,
    })
  }

  handleAddTodos = () => {
    if (!this.state.title) {
      return toast.warning("Missing title")
    }

    let todo = {
      id: Math.floor(Math.random() * 10000),
      title: this.state.title,
    }

    this.props.addNewTodo(todo)
    this.setState({
      title: "",
    })
    toast.success("AddTodo successfully")
  }

  render() {

    let { title } = this.state

    return (
      <div className="add-todo">
        <input
          type="text"
          value={title}
          onChange={(e) => this.handleOnChange(e)}
        />

        <button
          type="button"
          className="add"
          onClick={() => {
            this.handleAddTodos()
          }}
        >
          add
        </button>
      </div>
    )
  }
}

export default AddTodo
