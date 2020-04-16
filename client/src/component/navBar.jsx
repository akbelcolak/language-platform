import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink style={{ color: "red" }} className="navbar-brand" to="/">
              <i className="fa fa-home" aria-hidden="true"> Home</i>
              </NavLink>
            </li>

            <li className="nav-item active">
              <NavLink className="nav-link" to="/login">
              <i className="fa fa-sign-in" aria-hidden="true"> Login</i>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
