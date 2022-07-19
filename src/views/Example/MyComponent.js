import React, { Component } from "react"
import ChildComponent from "./ChildComponent"
import AddComponent from "./AddComponent"
import Color from "../Color/Color"
class MyComponent extends Component {
  state = {
    courses: [
      { id: 1, name: "PHP,CSS", price: "520" },
      { id: 2, name: "Javascript", price: "520" },
      { id: 3, name: "ReactJS", price: "520" },
      { id: 4, name: "Golang", price: "520" },
    ],
  }
  addNewCourse = (job) => {
    this.setState({ courses: [...this.state.courses, job] })
  }

  deleteCourse = (job) => {
    let currentCourse = this.state.courses;
    currentCourse = currentCourse.filter((item) => item.id !== job.id);
    this.setState({
      courses: currentCourse,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(
      ">>> run componentDidUpdate",
      "prev State: ",
      prevState,
      "current state: ",
      this.state
    );
  }
  componentDidMount() {
    console.log(">>>run  componentDidMount");
  }

  render() {
    console.log("Call render");
    return (
      <>
        <AddComponent addNewCourse={this.addNewCourse} />
        <ChildComponent
          deleteCourse={this.deleteCourse}
          courses={this.state.courses}
        />
      </>
    )
  }
}

export default Color(MyComponent)