import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import NavBar from "./component/navBar";
import { ToastContainer } from "react-toastify";
import Signup from "./component/Signup";
// import LogInForm from "./component/common/logInForm";
import Home from "./component/home";
// import AdminWrapper from "./component/admin/AdminWrappers";
// import Dashboard from "./component/admin/Dashboard";
import Profile from "./component/profile";
// import NotFound from "./component/notFound";
// import LoginWrapper from "./component/common/loginWrapper";
// import Users from "./component/admin/users";
// import Posts from "./component/admin/posts";
// import AddPost from "./component/admin/addPost";
import "react-toastify/dist/ReactToastify.css";
import "font-awesome/css/font-awesome.css";
import "./component/assests/home.css";
class App extends Component {
  componentDidMount() {
    return window.localStorage.clear();
  }
  render() {
    // console.log("props", this.props.auth.user);
    return (
      <div>
        <NavBar />
        <ToastContainer />
        <div className="container">
          <Switch>
            <Route path="/profile" component={Profile} />
            <Route
              path="/home"
              render={(props) => {
                if (this.props.auth.token) {
                  return <Route path="/profile" component={Profile} />
                } else {
                  return  <Route path="/home" component={Home} />
                }
              }}
            />
            <Route path="/signup" component={Signup} />
            <Redirect from="/" to="/home" />
          </Switch>
        </div>
      </div>
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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
