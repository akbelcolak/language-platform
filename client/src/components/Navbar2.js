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
                <h2 style= {{width: "280px", textAlign: "center", marginLeft: "50px"}}>{props.title2}</h2>
                </td>
                <td>
                <h2 style= {{width: "700px", textAlign: "center"}}>{props.title3}</h2>
                </td>
                </tr>
                </table>
            </div>
        )
    }
    Navbar2.propTypes = {
        title2 : PropTypes.string.isRequired,
        title3 : PropTypes.string.isRequired
    }
    Navbar2.defaultProps = {
        title2 : "Empty - Companies",
        title3 : "Empty - Offers"
    }

export default Navbar2;