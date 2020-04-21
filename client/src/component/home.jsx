import React, { Component } from "react";
import { Link } from "react-router-dom";
import Login from "./login";
import "./assests/home.css";
/* global $ */
class Home extends Component {
  render() {
    $(document).ready(function() {
        $("div.bhoechie-tab-menu>ul.list-group>a").click(function(e) {
            e.preventDefault();
            $(this).siblings('a.active').removeClass("active");
            $(this).addClass("active");
            var index = $(this).index();
            $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
            $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
        });
    });
    return (
      <React.Fragment>
        <div id="fullscreen_bg" className="fullscreen_bg" />
        <nav className='nav'>
        <img width='200px' height='70px' src='https://cdn.glitch.com/323a5f71-5800-4689-9792-0fed771775d5%2FScreenshot_2020-04-14%20Ads%C4%B1z%20tasar%C4%B1m(4).png?v=1587500516478' alt='Lingaspher'></img>
        </nav>
        <div className="container">
          <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 bhoechie-tab-menu">
                <ul className="list-group">
                  <Link to="#home" className="list-group-item active">
                   
                    <div className="glyphicon glyphicon-home">Home</div> 
                   
                  </Link>
                  <Link to="#" className="list-group-item ">
                  
                    <div className="glyphicon glyphicon-home">Student</div> 
                   
                  </Link>
                  <Link to="#" className="list-group-item ">
                  
                    <div className="glyphicon glyphicon-home">Company</div> 
                   
                  </Link>
                  <Link to="#" className="list-group-item">
          
                    <div className="glyphicon glyphicon-home">Offers</div> 
                    
              
                  </Link>
                </ul>
              </div>
              <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9 bhoechie-tab">
                <div className="bhoechie-tab-content active">
                  <center >
                    <div className="glyphicon glyphicon-user"></div>
                    <h2 className="heads">Welcome</h2>
                    <h3 className="heads">User HomePage</h3>
                  </center>
                </div>

                <div className="bhoechie-tab-content">
                  <center>
                    <div
                      className="glyphicon glyphicon-tasks"
                    ></div>
                  
                    <h3 className="tasks"><Login/></h3>
                  </center>
                </div>

                <div className="bhoechie-tab-content">
                  <center>
                    <div className="glyphicon glyphicon-edit">  <h3 className='hds'>MY Trips </h3></div>
                  </center>
                </div>

                <div className="bhoechie-tab-content">
                  <center>
                    <div
                      className="glyphicon glyphicon-edit"
                    ></div>
                        <h3 className='hds'>
                      information Settings
                    </h3>
                  </center>
                </div>
              </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
