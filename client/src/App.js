import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import NavBar from "./component/navBar";
import Singup from "./component/Signup";
import LogInForm from "./component/common/logInForm";
import Home from "./component/home";
import AdminWrapper from "./component/admin/AdminWrappers";
import Dashboard from "./component/admin/Dashboard";
import NotFound from "./component/common/notFound";
import LoginWrapper from "./component/common/loginWrapper";
import Users from "./component/admin/users";
import Posts from "./component/admin/posts";
import AddPost from "./component/admin/addPost";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <ToastContainer />
          <Switch>
            <Route path="/home" component={Home} />
            <Route
              path="/Signup"
              render={(props) => {
                if (this.props.auth.token) {
                  return <Redirect to="/home" />;
                } else {
                  return (
                    <LoginWrapper>
                      <Singup />
                    </LoginWrapper>
                  );
                }
              }}
            />
            <Route
              path="/login"
              render={(props) => {
                return (
                  <LoginWrapper>
                    <LogInForm />
                  </LoginWrapper>
                );
              }}
            />
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
                        <LogInForm />
                      </LoginWrapper>
                    )}
                  </div>
                );
              }}
            />
            <Route
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
                        <LogInForm />
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
                        <LogInForm />
                      </LoginWrapper>
                    )}
                  </div>
                );
              }}
            />
            <Route
              path="/admin/posts"
              exact={true}
              render={(props) => {
                return (
                  <div>
                    {this.props.auth.token ? (
                      <AdminWrapper>
                        <Posts />
                      </AdminWrapper>
                    ) : (
                      <LoginWrapper>
                        <LogInForm />
                      </LoginWrapper>
                    )}
                  </div>
                );
              }}
            />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" to="/home" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
