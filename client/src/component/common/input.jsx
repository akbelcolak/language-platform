import React from "react";

// we used func component because we work by controlled component so we don't need states

const Input = ({name, label , value , onChange ,type,style}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        onChange={onChange}
        value={value}
        name={name}
        style={style}
        type={type}
        className="form-control"
        id={name}
        placeholder={label}
      />
    </div>
  );
};

export default Input;
