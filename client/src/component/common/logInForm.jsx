import React, { Component } from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import Input from "./input";
import * as AuthActions from "../../store/actions/authActions";
import { toast } from "react-toastify";
import NavBar from "./../navBar";

class LogInForm extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <form>
          <Input
            key={1}
            type="email"
            name="email"
            label="E-mail"
            onChange={this.props.handleChange}
            onBlur={this.props.handleBlur}
            touched={this.props.touched.email}
            errors={this.props.errors.email}
          />
          {this.props.touched.email && this.props.errors.email && (
            <span className="alert alert-danger">
              {" "}
              {this.props.errors.email}
            </span>
          )}
          <Input
            key={2}
            type="password"
            name="password"
            label="Password"
            onChange={this.props.handleChange}
            onBlur={this.props.handleBlur}
            touched={this.props.touched.password}
            errors={this.props.errors.password}
          />
          {this.props.touched.password && this.props.errors.password && (
            <span className="alert alert-danger">
              {this.props.errors.password}
            </span>
          )}
          <button className="btn btn-primary">login</button>
        </form>
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
    console.log("submmited", values);
    toast.info(`you are logging in `);
  },
})(connect(mapStateToProps, mapDispatchToProps)(LogInForm));
