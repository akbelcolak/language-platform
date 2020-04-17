import React from "react";
const Logout = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        window.localStorage.clear();
        window.location = "/";
        
      }}
      style={{marginTop:'8px'}}
    >
      <button
        title="Log Out"
        style={{
          background: "none",
          border: "none",
          color: "red",
        }}
      >
        <i className="fa fa-sign-out" aria-hidden="true"></i>
      </button>
    </form>
  );
};

export default Logout;
