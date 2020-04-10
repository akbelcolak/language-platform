import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink style={{ color: "red" }} className="navbar-brand" to="/home">
          Home
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/Signup">
                Signup <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/login">
                Login 
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
