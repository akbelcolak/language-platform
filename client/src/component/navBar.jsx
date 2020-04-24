import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as AdminActions from "../store/actions/adminAction";
import Logout from "./logout";

import "./assests/nav.css";

/* global $ */
class NavBar extends Component {
  componentDidMount() {
    $(".menu").click(function () {
      $(this).parent().toggleClass("close");
    });
    // try {
    //   if (this.props.auth.token)
    //     this.props.getSingleUser(
    //       this.props.auth.user.userId,
    //       this.props.auth.token
    //     );
    // } catch (ex) {
    // }
    if (this.props.auth.token) {
      const pro = this.props.getProfiles(this.props.auth.token);
      console.log("pro", pro);
    }
  }
  render() {
    // const user = this.props.auth.token;
    // const users = this.props.admin.user;

    console.log("users", this.props.admin);
    const logout = () => {
      window.localStorage.clear();
      window.location = "/";
    };
    return (
      <React.Fragment>
        <div
          style={{
            position: "absolute",
            right: "10px",
            fontSize: "35px",
          }}
        >
          <Link style={{ color: "#dd1350" }} to="/home">
            <i className="fa fa-home" aria-hidden="true" title="Home"></i>
          </Link>
        </div>
        <div className="base">
          <div className="menu">
            <div className="icon">
              <div className="bar"></div>
            </div>
          </div>
          <div className="icons">
            <i className="fa fa-user" aria-hidden="true" title="Profile"></i>
            <i
              class="fa fa-american-sign-language-interpreting"
              aria-hidden="true"
            ></i>

            <i
              className="fa fa-sign-out"
              aria-hidden="true"
              title="signOut"
            ></i>
          </div>
          <div className="section">
            <div className="cover1">
              <div className="cover2">
                <Link className="content" to="/match"></Link>
              </div>
            </div>
          </div>
          <Link className="section-static top" to="/profile"></Link>
          <Link
            className="section-static bottom"
            onClick={() => logout()}
            to="/home"
          >
            <Logout />
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    profiles: state.profiles,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getProfiles: (token) => {
      dispatch(AdminActions.getProfiles(token));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
