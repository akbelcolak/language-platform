import React, { Component } from "react";
import { connect } from "react-redux";
import * as AdminActions from "../store/actions/adminAction";
import { NavLink } from "react-router-dom";
import Logout from "./logout";

class NavBar extends Component {

componentDidMount() {
    try{
      if (this.props.auth.token)
       this.props.getSingleUser(
        this.props.auth.user.userId,
        this.props.auth.token
      );
    }catch(ex){
      console.log('ex',ex)
    }
   
  }
  render() {
    const user = this.props.auth.token;
    const users = this.props.admin.user;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="collapse navbar-collapse" id="navbarText">
          <div className="navbar-nav mr-auto">
            {!user && (
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
            {user && (
              <React.Fragment>
               <NavLink
                    to={`/home/${users.id}`}
                    className="nav-link"
                    style={{
                      fontWeight: "bold",
                      fontSize: "35px",
                      position: "absolute",
                      right: "0px",
                      color: "purple",
                      display: "flex",
                    }}
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
                    Welcome&nbsp;<span style={{ color: "yellow" }}>!</span>
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
                    <p key={user}>{this.props.admin.user.firstName}</p>
                  </span>
                </div>
                <NavLink
                    to={`/profile/${users.id}`}
                    className="nav-link"
                    style={{
                      fontWeight: "bold",
                      fontSize: "35px",
                      position: "absolute",
                      right: "40px",
                      color: "lightBlue",
                      display: "flex",
                    }}
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
