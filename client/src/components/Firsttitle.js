import React from 'react';
import PropTypes from "prop-types";

function Firsttitle(props) {

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
    Firsttitle.propTypes = {
        title : PropTypes.string.isRequired
    }
    Firsttitle.defaultProps = {
        title : "Empty - Linguasphere"
    }

export default Firsttitle;