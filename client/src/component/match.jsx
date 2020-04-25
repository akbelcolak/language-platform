import React, { Component } from 'react';
import './assests/match.css'
class Match extends Component {
    render() { 
        return ( 
            <div className='head'>
          <h3 className='h3'>Explore the world’s largest language exchange community</h3>
          <select className="custom-select Language">
              <option selected>Language</option>
              <option value="1">Dutch</option>
              <option value="2">French</option>
              <option value="3">German</option>
              <option value="4">English</option>
              <option value="5">Turkish</option>
              <option value="6">Arabic</option>
              <option value="7">Pashto</option>
              <option value="8">Polish</option>
              <option value="9">Rushian</option>
              <option value="10">Swahili</option>
              <option value="11">Chinese</option>
              <option value="12">Hindi</option>
              <option value="13">Urdu</option>
              <option value="14">Indonesian</option>
          </select>
          <select className="custom-select Region">
              <option selected>Region</option>
              <option value="1">Brussels</option>
              <option value="2">Flamish-Brabant</option>
              <option value="3">Antwerp</option>
              <option value="4">Limburg</option>
              <option value="5">Luik(Liege)</option>
              <option value="6">West-Flanders</option>
              <option value="7">East-Flanders</option>
              <option value="8">Luxembourg</option>
              <option value="9">Namur</option>
              <option value="10">Waloon-Brabant</option>
              <option value="11">Chinese</option>
              <option value="12">Hindi</option>
              <option value="13">Urdu</option>
              <option value="14">Indonesian</option>
          </select>

          <button type="button" onClick={()=>window.location="/partner"} className="btn btn-primary third">Find a Partner</button>

        </div>
         );
    }
}
 
export default Match;