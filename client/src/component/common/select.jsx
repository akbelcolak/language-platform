import React from "react";

const Select = ({ name, label, onChange, value, options, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        onChange={onChange}
        className="form-control"
        value={value}
      >
        {options.map((option, e) => (
          <option key={e} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Select;
