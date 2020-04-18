import React from "react";
import PropTypes from "prop-types";

function Company1title(props) {
  return (
    <div
      style={{
        color: "#04295E",
        textAlign: "center",
        marginTop: "50px",
      }}
    >
      <h2>{props.title}</h2>
    </div>
  );
}
Company1title.propTypes = {
  title: PropTypes.string.isRequired,
};
Company1title.defaultProps = {
  title: "Empty - Linguasphere",
};

export default Company1title;
