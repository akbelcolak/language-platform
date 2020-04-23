import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import NavBar from "./component/NavBar";
import { ToastContainer } from "react-toastify";
import Signup from "./component/Signup";
import Home from "./component/home";
import Profile from "./component/profile";
// import NotFound from "./component/notFound";
import "react-toastify/dist/ReactToastify.css";
import "font-awesome/css/font-awesome.css";
import "./component/assests/home.css";
import Logout from "./component/logout";
class App extends Component {
  componentDidMount() {
    return window.localStorage.clear();
  }
  render() {
    return (
      <div>
        {this.props.auth.token && <NavBar />}
        <ToastContainer />
        <div className="container">
          <Switch>
            {this.props.auth.token && (
              <Route path="/profile" component={Profile} />
            )}
            <Route
              path="/home"
              render={(props) => {
                if (this.props.auth.token) {
                  return <Route path="/test" component={Profile} />;
                } else {
                  return <Route path="/home" component={Home} />;
                }
              }}
            />
            <Route path="/logout" component={Logout} />
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
