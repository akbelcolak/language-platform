import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";
import NavBar from "./component/navBar";
import { ToastContainer } from "react-toastify";
import Home from "./component/home";
import Signup from "./component/Signup";
import Login from "./component/login";
import Profile from "./component/profile";
import NotFound from "./component/notFound";
import LoginWrapper from "./component/common/loginWrapper";
import "react-toastify/dist/ReactToastify.css";
import "font-awesome/css/font-awesome.css";

class App extends Component {
  render() {
    // console.log("user/app", this.props.auth.user.name);
    return (
      <React.Fragment>
        <NavBar />
        <ToastContainer />
        <main className="container">
          <Switch>
            <Route
              path="/Signup"
              render={(props) => {
                return (
                  <div>
                    {this.props.auth.token ? <Redirect to="/" /> : <Signup />}
                  </div>
                );
              }}
            />
            <Route path="/home" component={Home} />
            <Route path="/profile" component={Profile} />

            <Route
              path="/login"
              render={(props) => {
                return (
                  <div>
                    {this.props.auth.token ? (
                      <Redirect to="/" />
                    ) : (
                      <LoginWrapper>
                        <Login />
                      </LoginWrapper>
                    )}
                  </div>
                );
              }}
            />
            <Route path="/NOT-FOUND" component={NotFound} />
            <Redirect from="/" exact to="/home" />
            <Redirect to="/NOT-FOUND" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
