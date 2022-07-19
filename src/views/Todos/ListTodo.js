import React, { Component } from "react"
import AddTodo from "./AddTodo"
import "./ListTodo.scss"
import { toast } from "react-toastify"
import Color from "../Color/Color"

class ListTodo extends Component {
  state = {
    listTodos: [
      {
        id: "todo1",
        title: "Doing something",
      },
      {
        id: "todo2",
        title: "Doing 2 something",
      },
      {
        id: "todo3",
        title: "Doing something bug",
      },
    ],
    editTodo: {},
  }

  addNewTodo = (todo) => {
    this.setState({
      listTodos: [...this.state.listTodos, todo],
    })
  }

  handleDeleteTodo = (todo) => {
    let currentCourse = this.state.listTodos
    currentCourse = currentCourse.filter((item) => item.id !== todo.id)
    this.setState({
      listTodos: currentCourse,
    })
    toast.info("Delete Successfully")
  }
  handleEditTodo = (todo) => {
    let { editTodo, listTodos } = this.state
    let isEmptyObject = Object.keys(editTodo).length === 0
    if (isEmptyObject === false && editTodo.id === todo.id) {
      let listTodo = [...listTodos]
      let indexObj = listTodo.findIndex((item) => item.id === todo.id)
      listTodo[indexObj].title = editTodo.title
      this.setState({
        listTodos: listTodo,
        editTodo: {},
      })
      toast.success("Updated todo list success")
      return
    }
    this.setState({
      editTodo: todo,
    })
  }
  handleOnChangeEditTodo = (event) => {
    let editTodoCoppy = { ...this.state.editTodo }
    editTodoCoppy.title = event.target.value
    this.setState({
      editTodo: editTodoCoppy,
    })
  }
  render() {
    let { listTodos, editTodo } = this.state
    let isEmptyObject = Object.keys(editTodo).length === 0
    console.log(isEmptyObject)
    return (
      <>
        <p>Simple TODO Apps with Lại Văn Mãi</p>
        <div className="list-todo-container">
          <AddTodo addNewTodo={this.addNewTodo} />
          <div className="list-todo-content">
            {listTodos &&
              listTodos.length > 0 &&
              listTodos.map((item, index) => (
                <div className="todo-child" key={item.id}>
                  {isEmptyObject === true ? (
                    <span>
                      {index + 1} - {item.title}
                    </span>
                  ) : (
                    <>
                      {editTodo.id === item.id ? (
                        <span>
                          {index + 1} -{" "}
                          <input
                            value={editTodo.title}
                            onChange={(event) =>
                              this.handleOnChangeEditTodo(event)
                            }
                          />
                        </span>
                      ) : (
                        <span>
                          {index + 1} - {item.title}
                        </span>
                      )}
                    </>
                  )}
                  <button
                    className="edit"
                    onClick={() => this.handleEditTodo(item)}
                  >
                    {isEmptyObject === false && editTodo.id === item.id
                      ? "Save"
                      : "Edit"}
                  </button>
                  <button
                    className="delete"
                    onClick={() => this.handleDeleteTodo(item)}
                  >
                    Delete
                  </button>
                </div>
              ))}
          </div>
        </div>
      </>
    )
  }
}
export default Color(ListTodo)
