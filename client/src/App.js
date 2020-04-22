import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";
import NavBar from "./component/navBar";
import { ToastContainer } from "react-toastify";
import Signup from "./component/Signup";
// import LogInForm from "./component/common/logInForm";
import Home from "./component/home";
import AdminWrapper from "./component/admin/AdminWrappers";
import Dashboard from "./component/admin/Dashboard";
import Login from "./component/login";
import Profile from "./component/profile";
import NotFound from "./component/notFound";
import LoginWrapper from "./component/common/loginWrapper";
import Users from "./component/admin/users";
import Posts from "./component/admin/posts";
import AddPost from "./component/admin/addPost";
import "react-toastify/dist/ReactToastify.css";
import "font-awesome/css/font-awesome.css";

class App extends Component {
  render() {
    // console.log("props", this.props.auth.user);
    return (
      <React.Fragment>
        <NavBar />
        <ToastContainer />
        <main className="container">
          <Switch>
            <Route path="/Signup" component={Signup} />
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
            <Route path="/home/:id?" component={Home} />
            <Route
              path="/profile/:id?"
              render={(props) => {
                return (
                  <div>
                    {this.props.auth.token ? <Profile /> : <Redirect to="/" />}
                  </div>
                );
              }}
            />

           
            <Route
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
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/home" />
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
