import React, { Component } from "react";
import { register } from "../services/userService";

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
    const style = { width: "300px", backgroundColor: "black", color: "white" };
    return (
      <div style={{ margin: "100px", marginLeft: "500px" }}>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">User Name</label>
            <input
              onChange={this.handleChange}
              value={this.state.data.username}
              name="username"
              style={style}
              type="text"
              className="form-control"
              id="username"
              placeholder="User Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              onChange={this.handleChange}
              value={this.state.data.password}
              name="password"
              style={style}
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="E-mail">E-mail</label>
            <input
              onChange={this.handleChange}
              value={this.state.data.email}
              name="email"
              style={style}
              type="email"
              className="form-control"
              id="E-mail"
              placeholder="E-mail"
            />
          </div>
          <div className="form-group">
            <label htmlFor="birthdate">Birthdate</label>
            <input
              onChange={this.handleChange}
              value={this.state.data.date}
              name="birthdate"
              style={style}
              type="date"
              className="form-control"
              id="birthdate"
            />
          </div>
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
