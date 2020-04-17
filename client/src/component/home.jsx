import React, { Component } from "react";
import NavBar from "./navBar";
//import IamCompany from "./IamCompany";

class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>What is in our home page?</h1>
        <ul>
          <li>Login</li>
          <li> a button directs me SignUp component : I am a language learner and I want to sign up</li>
          <li> a button directs me IamCompany component: I am a company and I want to set an offer for the language lerners</li>
          <li>a button directs me * component : to see all companies</li>
          <li>a button directs me ** component : to see all offers</li>
        </ul>
        
      </div>
    );
  }
}

export default Home;
