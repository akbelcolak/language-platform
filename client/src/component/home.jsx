import React, { Component } from "react";
import { Link } from "react-router-dom";
import Login from "./login";
import { connect } from "react-redux";
import * as AdminActions from "../store/actions/adminAction";
// import { NavLink } from "react-router-dom";
// import Logout from "./logout";
import "./assests/home.css";
import IamCompany from "./IamCompany";
/* global $ */

class Home extends Component {
  componentDidMount() {
    try {
      if (this.props.auth.token)
        this.props.getSingleUser(
          this.props.auth.user.userId,
          this.props.auth.token
        );
    } catch (ex) {
      console.log("ex", ex);
    }

    $("div.bhoechie-tab-menu>ul.list-group>a").click(function (e) {
      e.preventDefault();
      $(this).siblings("a.active").removeClass("active");
      $(this).addClass("active");
      var index = $(this).index();
      $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
      $("div.bhoechie-tab>div.bhoechie-tab-content")
        .eq(index)
        .addClass("active");
    });

   
  }
  render() {
    const user = this.props.auth.token;
    // const users = this.props.admin.user;
    return (
      <React.Fragment>
        {!user && (
          <React.Fragment>
            <div id="fullscreen_bg" className="fullscreen_bg" />
            <div className="container">
              <nav className="nav">
                <img
                  src="https://cdn.glitch.com/323a5f71-5800-4689-9792-0fed771775d5%2FScreenshot_2020-04-14%20Ads%C4%B1z%20tasar%C4%B1m(4).png?v=1587500516478"
                  alt="nav"
                  width="210"
                  height="75"
                />
              </nav>
              <div className="row">
                <div className="col-lg-5 col-md-12 col-sm-8 col-xs-9 bhoechie-tab-container">
                  <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 bhoechie-tab-menu">
                    <ul className="list-group sec">
                      <Link to="/" className="list-group-item active sec">
                        <br />
                        <br />
                        <span className="glyphicon glyphicon-home sec"></span>{" "}
                        Home
                        <br />
                        <br />
                      </Link>
                      <Link to="/" className="list-group-item sec">
                        <br />
                        <br />
                        <span className="glyphicon glyphicon-tasks sec"></span>{" "}
                        Student
                        <br />
                        <br />
                      </Link>
                      <Link to="/" className="list-group-item sec">
                        <br />
                        <br />
                        <span className="glyphicon glyphicon-transfer sec"></span>{" "}
                        Company
                        <br />
                        <br />
                      </Link>
                      <Link to="/" className="list-group-item sec">
                        <br />
                        <br />
                        <span className="glyphicon glyphicon-wrench"></span>{" "}
                        Offers <br />
                        <br />
                      </Link>
                    </ul>
                  </div>
                  <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9 bhoechie-tab">
                    {/* <!-- flight section --> */}
                    <div className="bhoechie-tab-content active">
                      <center>
                        <div className="glyphicon glyphicon-user">
                          <h2 className="heads">Welcome</h2>
                        </div>
                      </center>
                    </div>

                    <div className="bhoechie-tab-content">
                      <center>
                        <span className="glyphicon glyphicon-tasks"></span>
                        <h3>
                          <Login />
                        </h3>
                      </center>
                    </div>

                    <div className="bhoechie-tab-content">
                      <center>
                        <h3 className="heads"> <IamCompany /> </h3>
                      </center>
                    </div>
                    <div className="bhoechie-tab-content">
                      <center>
                        <span className="glyphicon glyphicon-edit"></span>
                        <h3 className="heads">Offers content</h3>
                      </center>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
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
  return {
    getSingleUser: (id, token) => {
      dispatch(AdminActions.getSingleUser(id, token));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
