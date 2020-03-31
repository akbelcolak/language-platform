import React from "react";
import Joi from "joi";
import {
  getGender,
  getLocation,
  getNativeLanguage,
  getLanguageToLearn,
  getSkill
} from "../services/services";
import Form from "./common/form";
import { register } from "../services/userService";
import { toast } from "react-toastify";
export default class RegisterationForm extends Form {
  state = {
    data: {
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
      birthdate: ""
    },
    errors: {}
  };
  schema = {
    firstName: Joi.string()
      .required()
      .max(25)
      .label("First Name"),
    lastName: Joi.string()
      .required()
      .max(25)

      .label("Last Name"),
    phoneNumber: Joi.number()
      .required()
      
      .label("Phone Number"),
    email: Joi.string()
      .email({ minDomainAtoms: 2 })
      .label("E-mail"),
    password: Joi.string()
      .max(15)
      .required()
      .label("Password"),
    birthdate: Joi.string()
      .required()
      .label("BirthDate"),
    Gender: Joi.string()
      .required()
      .label("Gender"),
    languageToLearn: Joi.string()
      .required()
      .label("languageToLearn"),
    location: Joi.string()
      .required()
      .label("Location"),
    nativeLanguage: Joi.string()
      .required()
      .label("nativeLanguage"),
    skill: Joi.string()
      .required()
      .label("skill")
  };

  doSubmit = async () => {
try{
  await register(this.state.data);
  toast.success("Student Created !", {
    position: toast.POSITION.TOP_CENTER
  });
}catch(ex){
  if(ex.response && ex.response.status === 400){
    const errors = {...this.state.errors}
    errors.email  = ex.response.data;
    this.setState({errors})
  }
  if(ex.response && ex.response.status === 200){
    const errors = {...this.state.errors}
   return(!errors?toast.info("Student Created!"):null);
  }
}
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div className="form-group">
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("firstName", "First Name")}
          {this.renderInput("lastName", "Last Name")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("birthdate", "Birthdate", "date")}
          {this.renderInput("phoneNumber", "Phone Number", "number")}
          {this.renderInput("email", "E-mail", "email")}
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <select
              name="location"
              id="location"
              onChange={this.handleChange}
              className="form-control"
              value={data.location}
            >
              {getLocation().map(option => (
                <option key={option.id} value={option.name}>
                  {option.name}
                </option>
              ))}
            </select>
            {errors.location && (
              <div className="alert alert-danger">{errors.location}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="nativeLanguage">Native Language</label>
            <select
              name="nativeLanguage"
              id="nativeLanguage"
              onChange={this.handleChange}
              className="form-control"
              value={data.nativeLanguage}
            >
              {getNativeLanguage().map(option => (
                <option key={option.id} value={option.name}>
                  {option.name}
                </option>
              ))}
            </select>
            {errors.nativeLanguage && (
              <div className="alert alert-danger">{errors.nativeLanguage}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="languageToLearn">Language To Learn</label>
            <select
              name="languageToLearn"
              id="languageToLearn"
              onChange={this.handleChange}
              className="form-control"
              value={data.languageToLearn}
            >
              {getLanguageToLearn().map(option => (
                <option key={option.id} value={option.name}>
                  {option.name}
                </option>
              ))}
            </select>
            {errors.languageToLearn && (
              <div className="alert alert-danger">{errors.languageToLearn}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="skill">Skill</label>
            <select
              name="skill"
              id="skill"
              onChange={this.handleChange}
              className="form-control"
              value={data.skill}
            >
              {getSkill().map(option => (
                <option key={option.id} value={option.name}>
                  {option.name}
                </option>
              ))}
            </select>
            {errors.skill && (
              <div className="alert alert-danger">{errors.skill}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="Gender">Gender</label>
            <select
              name="Gender"
              id="Gender"
              onChange={this.handleChange}
              className="form-control"
              value={data.Gender}
            >
              {getGender().map(option => (
                <option key={option.id} value={option.name}>
                  {option.name}
                </option>
              ))}
            </select>
            {errors.Gender && (
              <div className="alert alert-danger">{errors.Gender}</div>
            )}
          </div>

          {this.renderButton("Create User")}
        </form>
      </div>
    );
  }
}
