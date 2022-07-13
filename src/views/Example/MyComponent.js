import React, { Component } from "react";
import ChildComponent from "./ChildComponent";
import FuncChildComponent from "./FuncChildComponent";
import AddComponent from "./AddComponent";
export default class MyComponent extends Component {
  state = {
    courses: [
      { id: 1, name: "PHP,CSS", price: "520 $" },
      { id: 2, name: "Javascript", price: "520 $" },
      { id: 3, name: "ReactJS", price: "520 $" },
      { id: 4, name: "Golang", price: "520 $" },
    ],
  };

  render() {
    console.log(">>> call render: ", this.state);
    return (
      <>
        <AddComponent />

        <ChildComponent
          fname={this.state.firstName}
          lname={this.state.lastName}
          courses={this.state.courses}
        />
      </>
    );
  }
}
