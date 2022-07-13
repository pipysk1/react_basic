import React, { Component } from "react";

export default class ChildComponent extends Component {
  state = {
    showList: false,
  };
  handleShowHide = () => {
    this.setState({
      showList: !this.state.showList,
    });
  };
  render() {
    let { courses } = this.props;
    let { showList } = this.state;

    return (
      <>
        {showList === false ? (
          <div>
            <button onClick={() => this.handleShowHide()}>Show</button>
          </div>
        ) : (
          <>
            {courses.map((course) => (
              <ul key={course.id}>
                <li>
                  {course.name} - {course.price}
                </li>
              </ul>
            ))}
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}
