import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {ToastContainer} from 'react-toastify'
import NavBar from "./component/navBar";
import RegisterationForm from './component/registerForm';
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from './component/common/form';
class App extends Component {
  render() {
    return (
      <Router>
        <ToastContainer />
        <Route path="/" component={NavBar} />
        <Route path="/users" component={RegisterationForm} />
        <Route path="/users/:id" component={Form} />

      </Router>
    );
  }
}

export default App;
