import React from "react";
// we used func component because we work by controlled component so we don't need states

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label style={{ marginTop: "20px" }} htmlFor={name}>
        {label}
      </label>
      <input
        {...rest}
        name={name}
        className="form-control"
        id={name}
        placeholder={label}
        style={{ width: "300px", padding: "10px", marginTop: "20px" }}
      />
    </div>
  );
};

export default Input;
