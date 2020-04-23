import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as AdminActions from "../store/actions/adminAction";
import "./assests/nav.css";
import Logout from "./logout";

/* global $ */

class NavBar extends Component {
  componentDidMount() {
    $(".menu").click(function () {
      $(this).parent().toggleClass("close");
    });
    try {
      if (this.props.auth.token)
        this.props.getSingleUser(
          this.props.auth.user.userId,
          this.props.auth.token
        );
    } catch (ex) {
      console.log("ex", ex);
    }
  }
  render() {
    const user = this.props.auth.token;
    const users = this.props.admin.user;
    const logout = ()=>{
      window.localStorage.clear()
      window.location = "/"
    }
    return (
      <React.Fragment>
        <div
          style={{
            position: "absolute",
            right: "300px",
          }}
        >
          <span
            style={{
              color: "red",
              fontSize: "20px",
              position: "absolute",
              right: "0px",
              top: "10px",
            }}
          >
            Welcome&nbsp;<span style={{ color: "yellow" }}>!</span>
          </span>
          <span
            style={{
              color: "gray",
              fontSize: "20px",
              position: "absolute",
              left: "10px",
              top: "10px",
            }}
          >
            <p key={user}>{users.firstName}</p>
          </span>
        </div>

        <div className="base">
          <div className="menu">
            <div className="icon">
              <div className="bar"></div>
            </div>
          </div>
          <div className="icons">
            <i className="fa fa-user" aria-hidden="true" title="Profile"></i>
            <i className="fa fa-home" aria-hidden="true" title="Home" ></i>
            <i className="fa fa-sign-out" aria-hidden="true"></i>
          </div>
          <div className="section">
            <div className="cover1">
              <div className="cover2">
                <Link className="content" to="/"></Link>
              </div>
            </div>
          </div>
          <Link className="section-static top" to="/profile"></Link>
          <Link className="section-static bottom" onClick={()=>logout()} to="/home"><Logout/></Link>
        </div>
      </React.Fragment>
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
