import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import Signup from "./component/Signup";
// import LogInForm from "./component/common/logInForm";
import Home from "./component/home";
import AdminWrapper from "./component/admin/AdminWrappers";
import Dashboard from "./component/admin/Dashboard";
import Login from "./component/common/login";
// import NotFound from "./component/common/notFound";
import LoginWrapper from "./component/common/loginWrapper";
import Users from "./component/admin/users";
import Posts from "./component/admin/posts";
import AddPost from "./component/admin/addPost";
import "react-toastify/dist/ReactToastify.css";
import "font-awesome/css/font-awesome.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ToastContainer />
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/Signup" component={Signup} />
          <Route exact={true} path="/login" component={Login} />
          <Route
            exact={true}
            path="/admin"
            render={(props) => {
              return (
                <div>
                  {this.props.auth.token ? (
                    <AdminWrapper>
                      <Dashboard />
                    </AdminWrapper>
                  ) : (
                    <LoginWrapper>
                      <Login />
                    </LoginWrapper>
                  )}
                </div>
              );
            }}
          />
          <Route
            exact={true}
            path="/admin/posts"
            render={(props) => {
              return (
                <div>
                  {this.props.auth.token ? (
                    <AdminWrapper>
                      <Posts />
                    </AdminWrapper>
                  ) : (
                    <LoginWrapper>
                      <Login />
                    </LoginWrapper>
                  )}
                </div>
              );
            }}
          />
          <Route
            exact={true}
            path="/admin/users"
            render={(props) => {
              return (
                <div>
                  {this.props.auth.token ? (
                    <AdminWrapper>
                      <Users />
                    </AdminWrapper>
                  ) : (
                    <LoginWrapper>
                      <Login />
                    </LoginWrapper>
                  )}
                </div>
              );
            }}
          />
          <Route
            path="/admin/posts/:view/:id?"
            exact={true}
            render={(props) => {
              return (
                <div>
                  {this.props.auth.token ? (
                    <AdminWrapper>
                      <AddPost />
                    </AdminWrapper>
                  ) : (
                    <LoginWrapper>
                      <Login />
                    </LoginWrapper>
                  )}
                </div>
              );
            }}
          />

          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
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
