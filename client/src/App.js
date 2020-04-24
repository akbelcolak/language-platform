import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import NavBar from "./component/navBar";
import { ToastContainer } from "react-toastify";
import Signup from "./component/Signup";
import Home from "./component/home";
import Profile from "./component/profile";
// import NotFound from "./component/notFound";
import Partner from './component/partner';
import "react-toastify/dist/ReactToastify.css";
import "font-awesome/css/font-awesome.css";
import Match from './component/match';
import Home2 from './component/home2';
class App extends Component {
  componentDidMount() {
    return window.localStorage.clear();
  }
  render() {
    const user = this.props.auth.token;
    return (
      <div>
        {this.props.auth.token && <NavBar /> }
        <ToastContainer />
        <div className="container">
          <Switch>
            {this.props.auth.token && (
              <Route path="/profile" component={Profile} />
            )}
              {this.props.auth.token && (
              <Route path="/home" component={Home2} />
            )}
            <Route
              path="/home" render={(props)=><Home user={user} />}
            />
            <Route path="/signup" component={Signup} />
            <Route path="/partner" component={Partner} />
            <Route path="/match" component={Match} />
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
