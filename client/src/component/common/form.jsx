import React, { Component } from "react";
import Input from "./input";
// import Joi from "joi";
class Form extends Component {
  state = {
    data: {},
  };

  // validate = () => {
  //   const options = { abortEarly: false };
  //   const { error } = Joi.validate(this.state.data, this.schema, options);
  //   if (!error) return null;

  //   const errors = {};
  //   for (let item of error.details) errors[item.path[0]] = item.message;
  //   return errors;
  // };

  // validateProperty = ({ name, value }) => {
  //   const obj = { [name]: value };
  //   const schema = { [name]: this.schema[name] };
  //   const { error } = Joi.validate(obj, schema);
  //   return error ? error.details[0].message : null;
  // };
  handleChange = ({ currentTarget: input }) => {
    // const errors = { ...this.state.errors };
    // const errorMessage = this.validateProperty(input);
    // if (errorMessage) errors[input.name] = errorMessage;
    // else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    // const errors = this.validate();
    // this.setState({ errors: errors || {} });
    // if (errors) return;

    this.doSubmit();
  };

  //  renderTest = (name)=>{
  //    const {data} = this.state
  //    return(

  //    )
  //  }
  renderInput = (name, label, type = "text") => {
    const { data } = this.state;
    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
      />
    );
  };

  renderButton = (label) => {
    return (
      <button
        // disabled={this.validate()}
        style={{ marginLeft: "340px" }}
        className="btn btn-primary"
      >
        {label}
      </button>
    );
  };
}

export default Form;
