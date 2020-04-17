import React, { Component } from "react";
import { connect } from "react-redux";
import * as AdminActions from "../store/actions/adminAction";
import { NavLink } from "react-router-dom";
import Logout from "./logout";


class NavBar extends Component {
  async componentDidMount() {
    if (this.props.auth.token)
      await this.props.getSingleUser(
        this.props.auth.user.userId,
        this.props.auth.token
      );
  }
  render() {
    const users = this.props.admin.user;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="collapse navbar-collapse" id="navbarText">
          <div className="navbar-nav mr-auto">
            {!users.id && (
              <React.Fragment>
                <NavLink
                  style={{
                    fontWeight: "bold",
                    fontSize: "35px",
                    position: "absolute",
                    right: "90px",
                    color: "lightGreen",
                    display: "flex",
                  }}
                  className="nav-link"
                  to="/login"
                >
                  <i
                    className="fa fa-sign-in"
                    aria-hidden="true"
                    title="Login"
                  />
                </NavLink>
                <NavLink
                  style={{
                    fontWeight: "bold",
                    fontSize: "35px",
                    position: "absolute",
                    right: "40px",
                    color: "lightGreen",
                    display: "flex",
                  }}
                  className="nav-link"
                  to="/Signup"
                >
                  <i
                    className="fa fa-user-plus"
                    aria-hidden="true"
                    title="Signup"
                  />
                </NavLink>
                <NavLink
                  style={{
                    fontWeight: "bold",
                    fontSize: "35px",
                    position: "absolute",
                    right: "0px",
                    color: "purple",
                    display: "flex",
                  }}
                  className="nav-link"
                  to="/home"
                >
                  <i className="fa fa-home" aria-hidden="true" title="Home" />
                </NavLink>
              </React.Fragment>
            )}
            {users.id && (
              <React.Fragment>
                <NavLink
                  style={{
                    fontWeight: "bold",
                    fontSize: "35px",
                    position: "absolute",
                    right: "0px",
                    color: "purple",
                    display: "flex",
                  }}
                  className="nav-link"
                  to="/home"
                >
                  <i className="fa fa-home" aria-hidden="true" title="Home" />
                </NavLink>
                <div
                  style={{
                    position: "absolute",
                    left: "20px",
                  }}
                >
                  <span
                    style={{
                      color: "red",
                      fontSize: "20px",
                      position: "absolute",
                      left: "0px",
                      top: "10px",
                    }}
                  >
                    Welcome&nbsp;<span style={{color:'yellow'}}>!</span>
                  </span>
                  <span
                    style={{
                      color: "gray",
                      fontSize: "20px",
                      position: "absolute",
                      left: "100px",
                      top: "10px",
                    }}
                  >
                    {users.firstName.toUpperCase()}
                  </span>
                </div>
                <NavLink
                  style={{
                    fontWeight: "bold",
                    fontSize: "35px",
                    position: "absolute",
                    right: "40px",
                    color: "lightBlue",
                    display: "flex",
                  }}
                  className="nav-link"
                  to="/profile"
                >
                  <i
                    className="fa fa-user"
                    aria-hidden="true"
                    title="Profile"
                  />
                </NavLink>
                <Logout />
              </React.Fragment>
            )}
          </div>
        </div>
      </nav>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    admin: state.admin,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getSingleUser: (id, token) => {
      dispatch(AdminActions.getSingleUser(id, token));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
