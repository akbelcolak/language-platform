import React, {Component} from 'react';
import PropTypes from "prop-types";

class Offerlist extends Component {

    state = {
        isVisible : false
    }

    
    onClickEvent = (e) => {
      this.setState({
          isVisible : !this.state.isVisible
      })
        

    }

    render() {

        //destructing
        const {offer,company,details,location,time,capacity,language,sector,phone,extra,extra2} = this.props;
        const {isVisible} = this.state;

        return (
            
            <div className="row" style= {{marginLeft: "60px"}}>

                <div className = "col-3" style= {{fontSize : "15px", color: "#04295E"}}>
                <div className= "card" style= {isVisible ? {backgroundColor : "#f6a801", color : "white"} : null}>
                    <div className="card-header d-flex">
                        <p className="d-inline" onClick = {this.onClickEvent}>{company}</p>
                        

                    </div>
                    
                    
            </div>    
            </div>



            <div className = "col-8" style= {{fontSize : "13px", color: "#04295E"}}>
                <div className= "card" style= {isVisible ? {backgroundColor : "#04295E", color : "white"} : null}>
                    <div className="card-header d-flex">
                        <p className="d-inline" onClick = {this.onClickEvent}>{offer}<br/>{details}</p>
                        

                    </div>
                    {
                        isVisible ? <div className="card-body" style= {{backgroundColor : "white", color : "#04295E"}}>
                        <p className="card-text">* {location}<br/>
                                                 * {time}<br/>
                                                 * {capacity}<br/>
                                                 * {language}<br/>
                                                 * {sector}<br/>
                                                 * {phone}<br/>
                                                 * {extra}<br/>
                                                 * {extra2}</p>
                        
    
                    </div> : null
                    }
                    
            </div>    
            </div>

            
            </div>
        )
    }
}
Offerlist.defaultProps = {
    offer : "Empty - offer",
    company : "Empty - company",
    details : "Empty - details",
    location : "Empty - location",
    time : "Empty - time",
    capacity : "Empty - capacity",
    language : "Empty - language",
    sector : "Empty - sector",
    phone : "Empty - phone",
    extra : "Empty - extra",
    extra2 : "Empty - extra2"
}

Offerlist.propTypes = {
    offer : PropTypes.string.isRequired,
    company : PropTypes.string.isRequired,
    details : PropTypes.string.isRequired,
    location : PropTypes.string.isRequired,
    time : PropTypes.string.isRequired,
    capacity : PropTypes.string.isRequired,
    language : PropTypes.string.isRequired,
    sector : PropTypes.string.isRequired,
    phone : PropTypes.string.isRequired,
    extra : PropTypes.string.isRequired,
    extra2 : PropTypes.string.isRequired
    
}
export default Offerlist;

