import React, {Component} from 'react';
import './App.css';
import Company1title from "./components/Company1title";
import Company2title from "./components/Company2title";
import Companies from "./components/Companies";



class App extends Component {

  state = {
    companies: [
      {
      id: 51,
      company: "GAMMA Company",
      details: "Details... >>",
      location: "GAMMA company provides service in Gent and Duffel cities of Belgium.",
      sector: "We work in IT, Sports and many other sectors.",
      language: "Our employees can speak both Dutch and English within the study area.",
      extra: "We would like to support everyone who wants to learn a new language."
    
      
    },

    {
      id: 52,
      company: "FCR Media Group",
      details: "Details... >>",
      location: "FCR Media Group provides service in Gent and Antwerpen cities of Belgium.",
      sector: "We work in IT, Media and many other sectors.",
      language: "Our employees can speak both Dutch and English within the study area.",
      extra: "We would like to support everyone who wants to learn a new language."
    
      
    },
    {
      id: 53,
      company: "CRONOS Company",
      details: "Details... >>",
      location: "CRONOS Company provides service in Mechelen and Antwerpen cities of Belgium.",
      sector: "We work in IT, Education and many other sectors.",
      language: "Our employees can speak both Dutch and French within the study area.",
      extra: "We would like to support everyone who wants to learn a new language."
    
      
    },
    {
      id: 54,
      company: "ADIDAS Company",
      details: "Details... >>",
      location: "ADIDAS Company provides service in Turnhout and Antwerpen cities of Belgium.",
      sector: "We work in Transportation, Sports and many other sectors.",
      language: "Our employees can speak both Dutch and English within the study area.",
      extra: "We would like to support everyone who wants to learn a new language."
    
      
    },
    {
      id: 55,
      company: "Colruyt Group",
      details: "Details... >>",
      location: "Colruyt Group provides service in Mechelen and Duffel cities of Belgium.",
      sector: "We work in IT, Transportation and many other sectors.",
      language: "Our employees can speak both Dutch and French within the study area.",
      extra: "We would like to support everyone who wants to learn a new language."
    
      
    }
     
    ]
  }

  render() {

  return (
    <div className="container">
      <Company1title 
      title= "Linguasphere"
      />

      <hr/>
      <Company2title 
      title2= "Companies"
      

      />
      <hr/>
      <Companies companies = {this.state.companies}/>

      

    </div>
  )
}
}

export default App;
