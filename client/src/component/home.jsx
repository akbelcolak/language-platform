import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <h1
          style={{
            color: "red",
            position: "absolute",
            top: "150px",
            left: "300px",
            margin: "auto",
          }}
        >
         <span style={{
            color: "red",
            position: "absolute",
            left: "200px",
            marginTop: "-50px",
          }}>Welcome Home</span> 
         This Page are going to be ready Soon ...!
        </h1>
      </div>
    );
  }
}

export default Home;
