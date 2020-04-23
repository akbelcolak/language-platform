import React, { Component } from "react";
import { withFormik } from "formik";
import { FormikTextField, FormikSelectField } from "formik-material-fields";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import * as Yup from "yup";
import { withStyles, Paper } from "@material-ui/core";
import API from "./../utils/api";
import "./assests/signup.css";
import { Link } from "react-router-dom";
const styles = (theme) => ({
  container: {
    position: "fixed",
    top: "100px",
    left: "150px",
    display: "flex",
    flexDirection: "row wrap",
    width: "70%",
    opacity: "80%",
  },
  Save: {
    position: "relative",
    top: "70px",
    left: "100px",
    height: "120px",
  },

  leftSide: {
    flex: 2,
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
  rightSide: {
    flex: 1,
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
});

class Signup extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className="fullscreen_bg">
          <div className="nav">
            <Link to="/home">
              <img
                src="https://cdn.glitch.com/323a5f71-5800-4689-9792-0fed771775d5%2FScreenshot_2020-04-14%20Ads%C4%B1z%20tasar%C4%B1m(4).png?v=1587500516478"
                alt="nav"
                width="210"
                height="75"
              />
            </Link>
          </div>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              await API.register(this.props.values);
            }}
            className={classes.container}
          >
            <Paper className={classes.leftSide}>
              <h3 style={{ color: "purple" }}>Sign up</h3>
              <FormikTextField
                name="firstName"
                label="First Name"
                margin="normal"
                htmlFor="firstName"
                id="firstName"
                onChange={this.props.handleChange}
                value={this.props.values.firstName}
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
              <FormikTextField
                type="password"
                name="password"
                htmlFor="password"
                id="password"
                label="Password"
                margin="normal"
                onChange={this.props.handleChange}
                onBlur={this.props.handleBlur}
                fullWidth
              />
              <FormikTextField
                className={classes.birth}
                type="date"
                name="birthdate"
                htmlFor="birthdate"
                id="birthdate"
                margin="normal"
                onChange={this.props.handleChange}
                value={this.props.values.birthdate}
                fullWidth
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
                  { value: "East-Flanders", label: "East-Flanders" },
                  { value: "Luxembourg", label: "Luxembourg" },
                  { value: "Namur", label: "Namur" },
                  { value: "Waloon-Brabant", label: "Waloon-Brabant" },
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
                  { label: "Turkish", value: "Turkish" },
                  { label: "Arabic", value: "Arabic" },
                  { label: "Spanish", value: "Spanish" },
                  { label: "Pashto", value: "Pashto" },
                  { label: "Polish", value: "Polish" },
                  { label: "Rushian", value: "Rushian" },
                  { label: "Swahili", value: "Swahili" },
                  { label: "Chinese", value: "Chinese" },
                  { label: "Hindi", value: "Hindi" },
                  { label: "Urdu", value: "Urdu" },
                  { label: "Indonesian", value: "Indonesian" },
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
                  { label: "Administration", value: "Administration" },
                  { label: "Education", value: "Education" },
                  { label: "Engineering", value: "Engineering" },
                  { label: "Health Care", value: "Health Care" },
                  { label: "IT", value: "IT" },
                  { label: "Law", value: "Law" },
                  { label: "Literature", value: "Literature" },
                  { label: "Media", value: "Media" },
                  { label: "Sports", value: "Sports" },
                  { label: "Salesperson", value: "Salesperson" },
                ]}
                fullWidth
              />
              <div className={classes.Save}>
                <Button
                  type="submit"
                  disabled={this.props.pristine || this.props.submitting}
                  variant="contained"
                  color="secondary"
                >
                  Sign up
                </Button>
              </div>
            </Paper>
          </form>
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
export default connect(mapStateToProps)(
  withFormik({
    mapPropsToValues: (props) => ({
      firstName: "",
      lastName: "",
      location: "",
      nativeLanguage: "",
      languageToLearn: "",
      phoneNumber: "",
      Gender: "",
      skill: "",
      email: "",
      password: "",
      birthdate: "",
    }),
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required(),
      lastName: Yup.string().required(),
      location: Yup.string().required(),
      nativeLanguage: Yup.string().required(),
      languageToLearn: Yup.string().required(),
      phoneNumber: Yup.string().required(),
      Gender: Yup.string().required(),
      skill: Yup.string().required(),
      email: Yup.string().email("E-mail is invalid").required(),
      password: Yup.string().min(6, "Password at least 8 chars").required(),
      birthdate: Yup.date().required(),
    }),
    handleSubmit: async (values, { setSubmitting, props }) => {},
  })(withStyles(styles)(Signup))
);
