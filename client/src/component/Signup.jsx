import React, { Component } from "react";
import { toast } from "react-toastify";
import NavBar from "./navBar";
import * as AuthAction from "../store/actions/authActions";
import { withRouter } from "react-router-dom";
import { withFormik, Form } from "formik";
import { FormikTextField, FormikSelectField } from "formik-material-fields";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import * as Yup from "yup";
import { withStyles, Paper } from "@material-ui/core";
import Input from "./common/input";
const styles = (theme) => ({
  container: {
    margin: theme.spacing(5),
    display: "flex",
    flexDirection: "row wrap",
    width: "900px",
  },
  Save: {
    padding: theme.spacing(5),
  },
  formControl: {
    margin: theme.spacing(2),
  },
  leftSide: {
    flex: 5,
    height: "100%",
    margin: theme.spacing(2),
    padding: theme.spacing(5),
  },
  rightSide: {
    flex: 2,
    height: "100%",
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
});
class Signup extends Component {
  // componentDidUpdate(props,state){
  //   if (props.isValid === false) {
  //     // when redux state changes post in admin reducer
  //     console.log('post',props.values)
  //     props.setValues(props.values);
  //   }
  // }

  //   handleSubmit = (e) => {
  //     e.preventDefault()

  // console.log('sub')
  //     // try {
  //     //   // await register(this.state.data);
  //     //   toast.success("Student Created !", {
  //     //     position: toast.POSITION.TOP_CENTER,
  //     //   });
  //     // } catch (ex) {
  //     //   // if(ex.response && ex.response.status === 400){
  //     //   // }
  //     //   if (ex.response && ex.response.status === 200) {
  //     //     const errors = { ...this.state.errors };
  //     //     return !errors ? toast.info("Student Created!") : null;
  //     //   }
  //     // }
  //   };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className={classes.container}
        >
          <Paper className={classes.leftSide}>
            <h3>Sign up</h3>
            <FormikTextField
              name="firstName"
              label="First Name"
              margin="normal"
              htmlFor="firstName"
              id="firstName"
              onChange={this.props.handleChange}
              value={this.props.values.firstName}
              errors={this.props.errors.firstName}
              fullWidth
            />
            <FormikTextField
              name="lastName"
              label="Last Name"
              margin="normal"
              htmlFor="lastName"
              id="lastName"
              onChange={this.props.handleChange}
              value={this.props.values.lastName}
              fullWidth
            />
            <FormikTextField
              name="birthday"
              htmlFor="birthday"
              id="birthday"
              label="Birthday"
              margin="normal"
              type="date"
              onChange={this.props.handleChange}
              value={this.props.values.birthday}
              fullWidth
            />
            <FormikTextField
              name="phoneNumber"
              htmlFor="phoneNumber"
              id="phoneNumber"
              type="number"
              label="Phone Number"
              margin="normal"
              onChange={this.props.handleChange}
              value={this.props.values.phoneNumber}
              fullWidth
            />
            <FormikTextField
              name="email"
              htmlFor="email"
              id="email"
              label="E-mail"
              margin="normal"
              onChange={this.props.handleChange}
              value={this.props.values.email}
              fullWidth
            />
            <Input
              key={2}
              type="password"
              name="password"
              htmlFor="password"
              id="password"
              label="Password"
              onChange={this.props.handleChange}
              onBlur={this.props.handleBlur}
              touched={this.props.touched.password}
              errors={this.props.errors.password}
            />
          </Paper>
          <Paper className={classes.rightSide}>
            <FormikSelectField
              name="Gender"
              htmlFor="Gender"
              id="Gender"
              label="Gender"
              margin="normal"
              onChange={this.props.handleChange}
              value={this.props.values.Gender}
              options={[
                { label: "male", value: "male" },
                { label: "female", value: "female" },
              ]}
              fullWidth
            />
            <FormikSelectField
              name="location"
              htmlFor="location"
              id="location"
              label="Location"
              margin="normal"
              onChange={this.props.handleChange}
              value={this.props.values.location}
              options={[
                { value: "Brussels", label: "Brussels" },
                { value: "Flamish-Brabant", label: "Flamish-Brabant" },
                { value: "Antwerp", label: "Antwerp" },
                { value: "Limburg", label: "Limburg" },
                { value: "Luik(Liege)", label: "Luik(Liege)" },
                { value: "West-Flanders", label: "West-Flanders" },
              ]}
              fullWidth
            />
            <FormikSelectField
              name="nativeLanguage"
              htmlFor="nativeLanguage"
              id="nativeLanguage"
              label="Native Language"
              margin="normal"
              onChange={this.props.handleChange}
              value={this.props.values.nativeLanguage}
              options={[
                { label: "Dutch", value: "Dutch" },
                { label: "French", value: "French" },
                { label: "German", value: "German" },
                { label: "English", value: "English" },
              ]}
              fullWidth
            />
            <FormikSelectField
              name="languageToLearn"
              htmlFor="languageToLearn"
              id="languageToLearn"
              label="Language To Learn"
              margin="normal"
              onChange={this.props.handleChange}
              value={this.props.values.languageToLearn}
              options={[
                { label: "Dutch", value: "Dutch" },
                { label: "French", value: "French" },
                { label: "German", value: "German" },
                { label: "English", value: "English" },
              ]}
              fullWidth
            />
            <FormikSelectField
              name="skill"
              htmlFor="skill"
              id="skill"
              label="Skill"
              margin="normal"
              onChange={this.props.handleChange}
              value={this.props.values.skill}
              options={[
                { label: "IT", value: "IT" },
                { label: "Health", value: "Health" },
                { label: "Law", value: "Law" },
                { label: "Sports", value: "Sports" },
                { label: "Journalism", value: "Journalism" },
                { label: "Education", value: "Education" },
                { label: "Literature", value: "Literature" },
              ]}
              fullWidth
            />
            <div className={classes.Save}>
              <Button
                type="submit"
                disabled={this.props.pristine || this.props.submitting}
                variant="contained"
                color="secondary"
                onClick={(e) => this.props.handleSubmit()}
              >
                Sign up
              </Button>
            </div>
          </Paper>
        </Form>
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
    register: (
      firstName,
      lastName,
      location,
      nativeLanguage,
      languageToLearn,
      phoneNumber,
      Gender,
      skill,
      email,
      password,
      birthday
    ) => {
      dispatch(
        AuthAction.register(
          firstName
          // lastName,
          // location,
          // nativeLanguage,
          // languageToLearn,
          // phoneNumber,
          // Gender,
          // skill,
          // email,
          // password,
          // birthday
        )
      );
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  withFormik({
    mapPropsToValues: (props) => ({
      firstName: "",
      // lastName: "",
      // location: "",
      // nativeLanguage: "",
      // languageToLearn: "",
      // phoneNumber: "",
      // Gender: "",
      // skill: "",
      // email: "",
      // password:"",
      // birthday: '',
    }),
    // validationSchema: Yup.object().shape({
    //   firstName: Yup.string().required(),
    //   lastName: Yup.string().required(),
    //   location: Yup.string().required(),
    //   nativeLanguage: Yup.string().required(),
    //   languageToLearn: Yup.string().required(),
    //   phoneNumber: Yup.string().required(),
    //   Gender: Yup.string().required(),
    //   skill: Yup.string().required(),
    //   email: Yup.string().email("E-mail is invalid").required(),
    //   password: Yup.string().min(8, "Password at least 8 chars").required(),
    //   birthday: Yup.date().required(),
    // }),
    handleSubmit: (values, { setSubmitting, props }) => {
      console.log("values", values, "props", props);

      props.register(values, props.auth.token);
    },
  })(withStyles(styles)(Signup))
);
