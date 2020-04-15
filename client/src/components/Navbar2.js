import React from 'react';
import PropTypes from "prop-types";

function Navbar2(props) {

        return (
            <div style= {{
                color : "#04295E", 
                marginTop : "10px"
                }}>
                <table>
                <tr>
                    <td>
                <h2 style= {{width: "900px", textAlign: "center", marginLeft: "100px"}}>{props.title2}</h2>
                </td>
              
                </tr>
                </table>
            </div>
        )
    }
    Navbar2.propTypes = {
        title2 : PropTypes.string.isRequired
        
    }
    Navbar2.defaultProps = {
        title2 : "Empty - Companies"
        
    }

export default Navbar2;