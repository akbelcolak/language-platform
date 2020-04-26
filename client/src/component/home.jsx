import React, { Component } from "react";
import { Link } from "react-router-dom";
import Login from "./login";
import "./assests/home.css";


/* global $ */
class Home extends Component {
  componentDidMount() {
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
    const user = this.props.user;
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
                        <span className="glyphicon glyphicon-home sec"></span>
                        Home
                        <br />
                        <br />
                      </Link>
                      <Link to="/" className="list-group-item sec">
                        <br />
                        <br />
                        <span className="glyphicon glyphicon-tasks sec"></span>
                        Student
                        <br />
                        <br />
                      </Link>
                      <Link to="/" className="list-group-item sec">
                        <br />
                        <br />
                        <span className="glyphicon glyphicon-transfer sec"></span>
                        Offers
                        <br />
                        <br />
                      </Link>
                      <Link to="/" className="list-group-item sec">
                        <br />
                        <br />
                        <span className="glyphicon glyphicon-wrench"></span>
                        <br />
                        <br />
                      </Link>
                    </ul>
                  </div>
                  <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9 bhoechie-tab">
                    {/* <!-- flight section --> */}
                    <div className="bhoechie-tab-content active">
                      <center>
                        <div className="glyphicon glyphicon-user">
                          <p className="p-home">
                            <h3 className="welcome">Welcome</h3>
                            <h5 className="add">
                              <strong style={{ color: "red" }}>
                                Linguasphere
                              </strong>{" "}
                              to provides you the opportunity develope your
                              language skills in a company in your field of
                              expertise
                            </h5>
                          </p>
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

                    <div className="bhoechie-tab-contents">
                      <center></center>
                    </div>
                    <div className="bhoechie-tab-content offers">
                      <center className="center-offers">
                        <span className="glyphicon glyphicon-edit">
                          <h4>
                            volunteer jobs and language internships for the
                            users.
                          </h4>
                        </span>
                        <h5 className="vi">Please visit this link</h5>

                        <button
                          className="offers-btn"
                          onClick={() => {
                            window.open(
                              "https://www.stepstone.be/en/?cid=SEAdvert_Google_SEARCH_EN_General_c_open-vacancies_%2Bvacancies_FP_-_-&gclid=CjwKCAjwv4_1BRAhEiwAtMDLsl_AQVR8rQphUVn1xjabsL_xVZduJc6mfaRbZnljstJBiBubFU3lMxoCd5MQAvD_BwE"
                            );
                          }}
                        >
                          <h5>Job Offers</h5>
                        </button>
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

export default Home;
