import React, { Component } from "react";
import { register } from "../services/userService";
import Input from "./common/input";
export default class RegisterationForm extends Component {
  state = {
    data: {
      username: "",
      email: "",
      password: "",
      birthdate: ""
    }
  };

  handleSubmit = async e => {
    e.preventDefault();
    await register(this.state.data);
  };
  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };
  render() {
    const { data } = this.state;
    const style = { width: "300px", backgroundColor: "black", color: "white" };
    return (
      <div style={{ margin: "100px", marginLeft: "500px" }}>
        <form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="username"
            value={data.username}
            label="Username"
            onChange={this.handleChange}
            style={style}
          />
          <Input
            type="text"
            name="password"
            value={data.password}
            label="Password"
            onChange={this.handleChange}
            style={style}
          />
          <Input
            type="email"
            name="email"
            value={data.email}
            label="E-mail"
            onChange={this.handleChange}
            style={style}
          />
          <Input
            type="date"
            name="birthdate"
            value={data.birthdate}
            label="Birthdate"
            onChange={this.handleChange}
            style={style}
          />
          <button
            style={{ marginLeft: "80px" }}
            onClick={this.handleSubmit}
            type="button"
            className="btn btn-primary"
          >
            Create Account
          </button>
        </form>
      </div>
    );
  }
}
