import React from 'react';
import PropTypes from "prop-types";

function Navbar(props) {

        return (
            <div style= {{
                color : "#04295E", 
                textAlign : "center", 
                marginTop : "50px"
                }}>
                <h2>{props.title}</h2>
            </div>
        )
    }
    Navbar.propTypes = {
        title : PropTypes.string.isRequired
    }
    Navbar.defaultProps = {
        title : "Empty - Linguasphere"
    }

export default Navbar;