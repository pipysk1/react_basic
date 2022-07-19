import React, { Component } from "react"

export default class ChildComponent extends Component {
  state = {
    showList: false,
  }

  handleShowHide = () => {
    this.setState({
      showList: !this.state.showList,
    })
  }

  handleDelete = (course) => {
    this.props.deleteCourse(course)
  }

  render() {

    let { courses } = this.props
    let { showList } = this.state

    return (
      <>
        {showList === false ? (
          <div>
            <button onClick={() => this.handleShowHide()}>Show</button>
          </div>
        ) : (
          <>
            {courses.map((course) => (
              <div key={course.id}>
                {course.name} - {course.price} ${" "}
                <span
                  onClick={() => this.handleDelete(course)}
                  style={{ cursor: "pointer", color: "red" }}
                >
                  {" "}
                  &times{" "}
                </span>
              </div>
            ))}
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        )}
      </>
    )
  }
}
