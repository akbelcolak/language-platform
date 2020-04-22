import React, { Component } from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import * as AuthActions from "../store/actions/authActions";
import { Link } from "react-router-dom";
import "./assests/login.css";

class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="d-flex justify-content-center h-100">
            <div style={{ marginTop: "100px" }} className="card">
              <div className="card-header">
                <h3>Sign In</h3>
              </div>
              <div className="card-body">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    this.props.login(
                      this.props.values.email,
                      this.props.values.password
                    );
                  }}
                >
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i
                          style={{ marginLeft: "5px" }}
                          className="fa fa-user-circle-o"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </div>
                    <input
                      className="form-control"
                      key={1}
                      type="email"
                      name="email"
                      placeholder="username"
                      onChange={this.props.handleChange}
                      onBlur={this.props.handleBlur}
                      errors={this.props.errors.email}
                    />
                  </div>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i
                          style={{ marginLeft: "5px" }}
                          className="fa fa-key"
                        />
                      </span>
                    </div>
                    <input
                      key={2}
                      className="form-control"
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={this.props.handleChange}
                      onBlur={this.props.handleBlur}
                      errors={this.props.errors.password}
                    />
                  </div>
                  <div className="row align-items-center remember">
                    <input type="checkbox" />
                    <h5
                      style={{
                        color: "gray",
                        marginBottom: "21px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          position: "absolute",
                          top: "195px",
                        }}
                      >
                        Remember Me
                      </span>
                    </h5>
                  </div>
                  <div className="form-group">
                    <button
                      // className="btn float-right login_btn"
                      style={{ marginLeft: "270px", paddingLeft: "15px" }}
                      className="btn btn-primary"
                    >
                      login
                    </button>
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-center links">
                  Don't have an account?<Link to="/signup">Sign Up</Link>
                </div>
                <div className="d-flex justify-content-center">
                  <Link to="#">Forgot your password?</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, pass) => {
      dispatch(AuthActions.login(email, pass));
    },
  };
};
export default withFormik({
  mapPropsToValues: () => ({
    email: "",
    password: "",
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("E-mail is Invalid")
      .required("The E-mail is required!"),
    password: Yup.string()
      .min(6, "Your Password should be more 6")
      .max(12, "the maximum length of Password is 12")
      .required("Password is required "),
  }),
  handleSubmit: (values, { setSubmitting }) => {
    // console.log("submmited", values);
    // toast.info(`you are logging in `);
  },
})(connect(mapStateToProps, mapDispatchToProps)(Login));
