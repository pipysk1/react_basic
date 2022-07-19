import React, { Component } from "react"

export default class AddComponent extends Component {
  state = {
    nameCourse: "",
    price: "",
  }
  handleChangeFname = (event) => {
    this.setState({
      nameCourse: event.target.value,
    })
  }

  handleChangeLname = (event) => {
    this.setState({
      price: event.target.value,
    })
  }

  handleSubmit = (e) => {
    let { nameCourse, price } = this.state
    e.preventDefault()
    !nameCourse || !price
      ? alert("Please input data name and price")
      : this.props.addNewCourse({
        id: Math.floor(Math.random() * 100),
        name: this.state.nameCourse,
        price: this.state.price,
      })
    nameCourse = ""
    price = ""
  }
  render() {
    return (
      <form>
        <label htmlFor="fname">Name Course: </label>
        <br />
        <input
          type="text"
          value={this.state.nameCourse}
          onChange={(event) => this.handleChangeFname(event)}
        />

        <br />
        <br />
        <label htmlFor="fname">Price: </label>
        <br />
        <input
          type="text"
          value={this.state.price}
          onChange={(event) => this.handleChangeLname(event)}
        />
        <br />
        <br />
        <input
          type="submit"
          value="submit"
          onClick={(e) => this.handleSubmit(e)}
        />
      </form>
    )
  }
}
