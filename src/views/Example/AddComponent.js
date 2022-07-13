import React, { Component } from "react";

export default class AddComponent extends Component {
  state = {
    nameCourse: "",
    price: "",
  };
  handleChangeFname = (event) => {
    this.setState({
      nameCourse: event.target.value,
    });
  };

  handleChangeLname = (event) => {
    this.setState({
      price: event.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert("Click me");
  };
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
    );
  }
}
