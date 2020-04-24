import React from "react";
// import { Link } from '@material-ui/core';
import './assests/home2.css'
const Home2 = () => {
  return (
    <div className='main'>
      <h1>Linguasphere LANGUAGE EXCHANGE</h1>
      <h2>Practice languages with native speakers</h2>
      <button type="button" onClick={()=>window.location="/match"} className="btn btn-dark sec">Go To Match</button>

    </div>
  );
};

export default Home2;
