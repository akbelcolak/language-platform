import React, { Component } from "react";
import PropTypes from "prop-types";

class Companylist extends Component {
  state = {
    isVisible: false,
  };

  onClickEvent = (e) => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  render() {
    //destructing
    const { company, details, location, sector, language, extra } = this.props;
    const { isVisible } = this.state;

    return (
      <div className="row" style={{ marginLeft: "60px" }}>
        <div
          className="col-3"
          style={{ fontSize: "15px", color: "#04295E", fontWeight: "bold" }}
        >
          <div
            className="card"
            style={
              isVisible ? { backgroundColor: "#f6a801", color: "white" } : null
            }
          >
            <div className="card-header d-flex">
              <p className="d-inline" onClick={this.onClickEvent}>
                {company}
              </p>
            </div>
          </div>
        </div>

        <div className="col-8" style={{ fontSize: "13px", color: "#04295E" }}>
          <div
            className="card"
            style={
              isVisible ? { backgroundColor: "#04295E", color: "white" } : null
            }
          >
            <div className="card-header d-flex">
              <p className="d-inline" onClick={this.onClickEvent}>
                {details}
              </p>
            </div>
            {isVisible ? (
              <div
                className="card-body"
                style={{ backgroundColor: "white", color: "#04295E" }}
              >
                <p className="card-text">
                  * {location}
                  <br />* {sector}
                  <br />* {language}
                  <br />* {extra}
                  <br />
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}
Companylist.defaultProps = {
  company: "Empty - company",
  details: "Empty - details",
  location: "Empty - location",
  sector: "Empty - sector",
  language: "Empty - language",
  extra: "Empty - extra",
};

Companylist.propTypes = {
  company: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  sector: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  extra: PropTypes.string.isRequired,
};
export default Companylist;
