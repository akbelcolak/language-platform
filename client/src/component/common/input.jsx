import React from "react";
// we used func component because we work by controlled component so we don't need states

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div>
      <label htmlFor={name}>
        {label}
      </label>
      <input
        {...rest}
        name={name}
        id={name}
        placeholder={label}
        
      />
    </div>
  );
};

export default Input;
