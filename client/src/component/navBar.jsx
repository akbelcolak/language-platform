import React from "react";
import { NavLink } from "react-router-dom";
import Logout from "./logout";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./assests/logout.css"
const NavBar = ({ user }) => {
  console.log('user',user)
  return (
    <nav style={{fontWeight: 'bold',fontSize:'35px' ,position:'absolute',right:'0px'}} className="navbar navbar-expand-lg navbar-dark ">
      <div className="collapse navbar-collapse" id="navbarText">
        <div className="navbar-nav mr-auto">
        {!user && (
            <React.Fragment>
              <NavLink style={{color:'purple'}} className="nav-link" to="/home">
            <i class="fa fa-home" aria-hidden="true"></i>
              </NavLink>
              <NavLink style={{color:'lightGreen'}} className="nav-link" to="/Signup" placeholder="Sign Up" >
              <i className="fa fa-user-plus" aria-hidden="true"></i>
              </NavLink>
              <NavLink style={{color:'lightGreen'}} className="nav-link" to="/login">
              <i className="fa fa-sign-in" aria-hidden="true" title="Login"></i>
              </NavLink>
            </React.Fragment>
             )}
          {user && (
            <React.Fragment>
              <NavLink style={{color:'purple'}} className="nav-link" to="/home">
            <i class="fa fa-home" aria-hidden="true"></i>
              </NavLink>
              <NavLink style={{color:'lightBlue'}} className="nav-link" to="/profile">
              <i className="fa fa-user" aria-hidden="false" title="Profile"> </i>
              </NavLink>
              <Logout  />
              </React.Fragment>
          )}
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
