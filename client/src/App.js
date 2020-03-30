import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {ToastContainer} from 'react-toastify'
import NavBar from "./component/navBar";
import RegisterationForm from './component/registerForm';
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  render() {
    return (
      <Router>
        <ToastContainer />
        <Route path="/" component={NavBar} />
        <Route path="/users" component={RegisterationForm} />
      </Router>
    );
  }
}

export default App;
