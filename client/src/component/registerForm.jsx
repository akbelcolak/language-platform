import React from "react";
import Form from "./common/form";
import Joi from "joi";
import { register } from "../services/userService";

export default class RegisterationForm extends Form {
  state = {
    data: {
      firstName: "",
      lastName: "",
      location: [
        { id: "0", name: "Brussels" },
        { id: "1", name: "Flamish Brabant" },
        { id: "2", name: "Antwerp" },
        { id: "3", name: "Limburg" },
        { id: "4", name: "Luik (Liege)" },
        { id: "5", name: "West Flanders" }
      ],
      nativeLanguage: [
        { id: "0", name: "Dutch" },
        { id: "1", name: "French" },
        { id: "2", name: "German" },
        { id: "3", name: "English" }
      ],
      languageToLearn: [
        { id: "0", name: "Dutch" },
        { id: "1", name: "French" },
        { id: "2", name: "German" },
        { id: "3", name: "English" }
      ],
      phoneNumber: "",
      Gender: [
        { id: "xy", name: "male" },
        { id: "xx", name: "female" }
      ],
      skill: [
        { id: "0", name: "IT" },
        { id: "1", name: "Health" },
        { id: "2", name: "Law" },
        { id: "3", name: "Sports" },
        { id: "4", name: "Journalism" },
        { id: "5", name: "Education" },
        { id: "6", name: "Literature" }
      ],
      email: "",
      password: "",
      birthdate: ""
    },
    errors: {}
  };
  schema = {
    firstName: Joi.string()
      .required()
      .min(3)
      .max(25)
      .label("First Name"),
    lastName: Joi.string()
      .required()
      .min(3)
      .max(25)
      .label("Last Name"),
    phoneNumber: Joi.number()
      .required()
      .min(9)
      .label("Phone Number"),
    email: Joi.string()
      .email({ minDomainAtoms: 2 })
      .label("E-mail"),
    password: Joi.string()
      .min(8)
      .max(15)
      .label("Password"),
    birthdate: Joi.string()
      .required()
      .label("BirthDate"),
    id: Joi.string(),
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
    console.log("submmited");

    await register(this.state.data);
  };

  render() {
    return (
      <div className="form-group">
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("firstName", "First Name")}
          {this.renderInput("lastName", "Last Name")}
          {this.renderInput("password", "Password", "password")}
          {this.renderSelect("Gender", "Gender",this.state.data.Gender)}
          {this.renderInput("birthdate", "Birthdate", "date")}
          {this.renderInput("phoneNumber", "Phone Number", "number")}
          {this.renderInput("email", "E-mail", "email")}
          {/* {this.renderSelect("location", "Location")}
          {this.renderSelect("nativeLanguage", "Native Language")}
          {this.renderSelect("languageToLearn", "Language To Learn")}
          {this.renderSelect("skill", "Skills")} */}
          {this.renderButton("Create User")}
        </form>
      </div>
    );
  }
}
