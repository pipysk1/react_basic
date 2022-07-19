import React, { Component } from "react"
import "./Nav.scss"
import { NavLink } from "react-router-dom"

class Nav extends Component {
  render() {
    return (
      <div className="topnav">
        <NavLink activeClassName="active" to="/" exact={true}>Home</NavLink>
        <NavLink activeClassName="active" to="/todo">Todo</NavLink>
        <NavLink activeClassName="active" to="/about">About</NavLink>
        <NavLink activeClassName="active" to="/user">Users</NavLink>

      </div>
    )
  }
}

export default Nav
