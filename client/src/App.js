import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
// import NavBar from "./component/navBar";
import Singup from "./component/Signup";
import LogInForm from "./component/common/logInForm";
import Home from "./component/home";
import AdminWrapper from "./component/admin/AdminWrappers";
import Dashboard from "./component/admin/Dashboard";
import LoginWrapper from "./component/common/loginWrapper";
import Users from "./component/admin/users";
import Posts from "./component/admin/posts";
import AddPost from './component/admin/addPost';
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <ToastContainer />

        <Route path="/home" component={Home}/>
        <Route
                

          path="/admin/users"
          render={props => {
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
          exact
          path="/signup"
          render={props =>{
            if(this.props.auth.token){
              return(
                <Redirect to='/home' />
              )
            }else{
              return(
                <LoginWrapper>
                    <Singup />
                  </LoginWrapper>
              )
            }
          }
          }
          />

         <Route path='/admin/posts/:view/:id?' exact={true} render={props=>{
          return(
            <div>
            {this.props.auth.token ?  
              <AdminWrapper>
                <AddPost />
              </AdminWrapper>
            : 
              <LoginWrapper>
                <LogInForm />
              </LoginWrapper>
            }
          </div>
          )
        }}/> 
        <Route
          path="/admin/posts"
          exact={true}
          render={props => {
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
        <Route
          exact
          path="/admin"
          render={props => {
            return (
              <div>
                {this.props.auth.token ? 
                  <AdminWrapper>
                    <Dashboard />
                  </AdminWrapper>
                 : 
                  <LoginWrapper>
                    <LogInForm />
                  </LoginWrapper>
                }
              </div>
            );
          }}
        />

      </Router>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth,
    admin:state.admin
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

// <Redirect from="/" exact to="/home" /> line 117
