import React, { Component } from "react";
import { withFormik, Form } from "formik";
import { FormikTextField, FormikSelectField } from "formik-material-fields";
import * as AuthActions from "../store/actions/authActions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import * as Yup from "yup";
import { withStyles, Paper } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import "./assests/profile.css";

const styles = (theme) => ({
  container: {
    position: "relative",
    top: "-15px",
    borderStyle: "hidden",
    left: "0px",
    display: "flex",
    hieght: "50%",
    width: "100%",
    backgroungColor: "none",
  },
  Save: {
    position: "relative",
    top: "50px",
    right: "-5px",
  },

  leftSide: {
    flex: 2,
    borderStyle: "hidden",
    backgroungColor: "none",
    position: "relative",
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
  rightSide: {
    flex: 2,
    position: "relative",
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
});
class Profile extends Component {
  componentDidMount() {
    try {
      if (this.props.auth.token){
    this.props.getUsers(this.props.auth.token)
    }} catch (ex) {}
  }

  render() {
    const users = this.props.auth.user;
    console.log('users',users)
    const { classes } = this.props;
    // const birthDate = users.birthdate.slice(0, 10);
    return (
      <div className="container">
        <div className="well span8 offset2">
          <div className="row-fluid user-row">
            <div className="span1 dropdown-user" data-for=".cyruxx">
              <i className="icon-chevron-down text-muted"></i>
            </div>
          </div>
          <div className="row-fluid user-infos cyruxx">
            <div className="span10 offset1">
              <div className="panel panel-primary st">
                <div className="panel-heading">
                  <h3 className="panel-title">User information</h3>
                </div>
                <div className="panel-body">
                  <div className="row-fluid">
                    <div className="f1">
                      <div className="span3"></div>
                      <div className="span6">
                        <br className="br" />
                        <table className="table table-condensed table-responsive table-user-information">
                          <tbody>
                            <tr className="flash">
                              <td>User Name:</td>
                              <td>{this.props.values.firstName}</td>
                            </tr>
                            <tr className="flash2">
                              <td>E-mail:</td>
                              <td>{users.email}</td>
                            </tr>
                            <tr className="flash">
                              <td>Birthdate:</td>
                              <td>{this.props.values.birthdate}</td>
                            </tr>
                            <tr className="flash">
                              <td>Topics</td>
                              <td>0</td>
                            </tr>
                            <tr className="flash">
                              <td>Warnings</td>
                              <td>0</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* This is the border */}
        <div className="well span8 offset2 sec">
          <div className="row-fluid user-row">
            <div className="span1 dropdown-user" data-for=".cyruxx">
              <i className="icon-chevron-down text-muted"></i>
            </div>
          </div>
          <div className="row-fluid user-infos cyruxx sec">
            <div className="span10 offset1 sec">
              <div className="panel panel-primary sec">
                <div className="panel-heading sec">
                  <div className="panel-title sec" />
                </div>
                <div className="panel-body sec">
                  <div className="row-fluid">
                    <div className="span3"></div>
                    <div className="span6">
                      <br />
                      <Form
                        onSubmit={async (e) => {
                          e.preventDefault();
                          // await this.props.getSingleUser(
                          //   this.props.auth.user.userId,
                          //   this.props.values,
                          //   this.props.auth.token
                          // );
                          // console.log("props", this.props);
                          // console.log("set");
                        }}
                        className={classes.container}
                      >
                        <Paper className={classes.leftSide}>
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
                            className={classes.birth}
                            type="date"
                            name="birthdate"
                            label="Birthdate"
                            htmlFor="birthdate"
                            id="birthdate"
                            margin="normal"
                            onChange={this.props.handleChange}
                            value={this.props.values.birthdate}
                            fullWidth
                          />
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
                        </Paper>
                        <Paper className={classes.rightSide}>
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
                              {
                                value: "Flamish-Brabant",
                                label: "Flamish-Brabant",
                              },
                              { value: "Antwerp", label: "Antwerp" },
                              { value: "Limburg", label: "Limburg" },
                              { value: "Luik(Liege)", label: "Luik(Liege)" },
                              {
                                value: "West-Flanders",
                                label: "West-Flanders",
                              },
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
                              { label: "Arabic", value: "Arabic" },
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
                              { label: "Arabic", value: "Arabic" },
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
                              { label: "Administration", value: "Administration" },
                            ]}
                            fullWidth
                          />

                          <div className={classes.Save}>
                            <span className="pull-right">
                              <Button
                                className="btn btn-dark"
                                type="button"
                                data-toggle="tooltip"
                                data-original-title="Edit this user"
                              >
                                <SaveIcon /> <strong>Save</strong>
                              </Button>
                            </span>
                          </div>
                        </Paper>
                      </Form>
                      <footer className="panel-footer">
                        <span></span>
                      </footer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
const mapDispatchToProps = (dispatch) => ({
  getUsers: (token) => {
    dispatch(AuthActions.getUsers(token));
  }
});
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(
    withFormik({
      mapPropsToValues: (props) => ({
        firstName: props.auth.user.firstName || "Hamdan",
        lastName: props.auth.user.lastName || "Ramadan",
        location: props.auth.user.location || "Brussels",
        nativeLanguage: props.auth.user.nativeLanguage || "Arabic",
        languageToLearn: props.auth.user.languageToLearn || "French",
        phoneNumber: props.auth.user.phoneNumber || "012345678",
        Gender: props.auth.user.Gender || "male",
        skill: props.auth.user.skill || "IT",
        birthdate:'1991-04-26',
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
        birthdate: Yup.date().required(),
      }),
      handleSubmit: async (values, { setSubmitting, props }) => {
        console.log("values", values);
      },
    })(withStyles(styles)(Profile))
  )
);
