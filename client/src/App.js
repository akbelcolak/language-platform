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
import Login from "./component/login";
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
  render() {
    // console.log("props", this.props.auth.user);
    return (
      
      <div>
        <NavBar />
        <ToastContainer />
        <div className="container">
        <Switch>
        <Route exact={true} path='/signup' render={(props)=>{
          if(!this.props.auth.token){
            return <Signup/>
          }else{
            return <Login/>
          }
        }}/>
        <Route path='/login' component={Login}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/' component={Home}/>
        <Redirect  to='/'/>
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
