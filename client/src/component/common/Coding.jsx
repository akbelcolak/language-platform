import React from "react";
import { Link } from "react-router-dom";
import NavBar from './../navBar';

const Coding = () => {
  return (
    <React.Fragment>
      <NavBar/>
      <div style={{ padding: "200px", marginLeft: "150px", fontSize: "25px" }}>
        <div>
          <h3>Sorry , This page is not ready to render </h3>
        </div>
        <div style={{ marginLeft: "150px", marginTop: "100px" }}>
          <Link style={{ color: "red" }} to="/admin">
            Admin Dashboard
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Coding;
