import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Users from "./components/Users";
// import User from "./components/User";


class App extends Component {

  state = {
    users: [
      {
      id: 1,
      company: "GAMMA Company",
      offer: "We are looking for someone who wants to learn Dutch, for 30 days as volunteers in the IT sector...",
      details: "Details... >>",
      location: "The location of the company is Duffel.",
      time: "We give 30 days of work experience.",
      capacity: "We only have 5 people capacity.",
      language: "In the company, we communicate in the Dutch language.",
      sector: "We work in the IT sector.",
      phone: "The phone-number: 8112 ",
      extra: "We want to help people who want to learn a new language.",
      extra2: "If you are experienced in the IT sector and are ready to learn a new language, We are waiting.."
      
    },

      {
      id: 2,
      company: "FCR Media Group",
      offer: "We are looking for someone who wants to learn English, for 7 days as volunteers in the Media sector...",
      details: "Details... >>",
      location: "The location of the company is Gent.",
      time: "We give 7 days of work experience.",
      capacity: "We only have 3 people capacity.",
      language: "In the company, we communicate in the English language.",
      sector: "We work in the Media sector.",
      phone: "The phone-number: 8212 ",
      extra: "We want to help people who want to learn a new language.",
      extra2: "If you are experienced in the Media sector and are ready to learn a new language, We are waiting.."
      
        },
    {
      id: 3,
      company: "ADIDAS Company",
      offer: "We are looking for someone who wants to learn English, for 7 days as volunteers in the Sport sector...",
      details: "Details... >>",
      location: "The location of the company is Turnhout.",
      time: "We give 7 days of work experience.",
      capacity: "We only have 10 people capacity.",
      language: "In the company, we communicate in the English language.",
      sector: "We work in the Sport sector.",
      phone: "The phone-number: 8312 ",
      extra: "We want to help people who want to learn a new language.",
      extra2: "If you are experienced in the Sport sector and are ready to learn a new language, We are waiting.."
          
            },
    {
     id: 4,
     company: "GAMMA Company",
     offer: "We are looking for someone who wants to learn English,for 60 days as volunteers in the Sport sector...",
     details: "Details... >>",
     location: "The location of the company is Gent.",
     time: "We give 60 days of work experience.",
     capacity: "We only have 1 people capacity.",
     language: "In the company, we communicate in the English language.",
     sector: "We work in the Sport sector.",
     phone: "The phone-number: 8111 ",
     extra: "We want to help people who want to learn a new language.",
     extra2: "If you are experienced in the Sport sector and are ready to learn a new language, We are waiting.."
                  
      },
      {
        id: 5,
        company: "Colruyt Group",
        offer: "We are looking for someone who wants to learn French, for 14 days as volunteers in the Transportation sector...",
        details: "Details... >>",
        location: "The location of the company is Mechelen.",
        time: "We give 14 days of work experience.",
        capacity: "We only have 20 people capacity.",
        language: "In the company, we communicate in the French language.",
        sector: "We work in the Transportation sector.",
        phone: "The phone-number: 8411 ",
        extra: "We want to help people who want to learn a new language.",
        extra2: "If you are experienced in the Transportation sector and are ready to learn a new language, We are waiting.."
                     
         },
      {
       id: 6,
       company: "CRONOS Company",
       offer: "We are looking for someone who wants to learn French, for 20 days as volunteers in the Education sector..",
       details: "Details... >>",
       location: "The location of the company is Mechelen.",
       time: "We give 20 days of work experience.",
       capacity: "We only have 5 people capacity.",
       language: "In the company, we communicate in the French language.",
       sector: "We work in the Education sector.",
       phone: "The phone-number: 8511 ",
       extra: "We want to help people who want to learn a new language.",
       extra2: "If you are experienced in the Education sector and are ready to learn a new language, We are waiting.."
                       
           },
      {
        id: 7,
        company: "Colruyt Group",
        offer: "We are looking for someone who wants to learn French, for 7 days as volunteers in the IT sector...",
        details: "Details... >>",
        location: "The location of the company is Mechelen.",
        time: "We give 7 days of work experience.",
        capacity: "We only have 3 people capacity.",
        language: "In the company, we communicate in the French language.",
        sector: "We work in the IT sector.",
        phone: "The phone-number: 8411 ",
        extra: "We want to help people who want to learn a new language.",
        extra2: "If you are experienced in the IT sector and are ready to learn a new language, We are waiting.."
                            
        },
    {
      id: 8,
      company: "FCR Media Group",
      offer: "We are looking for someone who wants to learn Dutch, for 30 days as volunteers in the IT sector..",
      details: "Details... >>",
      location: "The location of the company is Antwerpen.",
      time: "We give 30 days of work experience.",
      capacity: "We only have 5 people capacity.",
      language: "In the company, we communicate in the Dutch language.",
      sector: "We work in the IT sector.",
      phone: "The phone-number: 8211 ",
      extra: "We want to help people who want to learn a new language.",
      extra2: "If you are experienced in the IT sector and are ready to learn a new language, We are waiting.."
                              
          },
    {
      id: 9,
      company: "ADIDAS Company",
      offer: "We are looking for someone who wants to learn English, for 15 days as volunteers in the Sport sector...",
      details: "Details... >>",
      location: "The location of the company is Antwerpen.",
      time: "We give 15 days of work experience.",
      capacity: "We only have 11 people capacity.",
      language: "In the company, we communicate in the English language.",
      sector: "We work in the Sport sector.",
      phone: "The phone-number: 8312 ",
      extra: "We want to help people who want to learn a new language.",
      extra2: "If you are experienced in the Sport sector and are ready to learn a new language, We are waiting.."
                                    
      },

     {
      id: 10,
      company: "FCR Media Group",
      offer: "We are looking for someone who wants to learn English, for 5 days as volunteers in the IT sector...",
      details: "Details... >>",
      location: "The location of the company is Gent.",
      time: "We give 5 days of work experience.",
      capacity: "We only have 3 people capacity.",
      language: "In the company, we communicate in the English language.",
      sector: "We work in the IT sector.",
      phone: "The phone-number: 8212 ",
      extra: "We want to help people who want to learn a new language.",
      extra2: "If you are experienced in the IT sector and are ready to learn a new language, We are waiting.."
                                      
        },
    {
      id: 11,
      company: "Colruyt Group",
      offer: "We are looking for someone who wants to learn Dutch, for 60 days as volunteers in the Transportation sector...",
      details: "Details... >>",
      location: "The location of the company is Duffel.",
      time: "We give 60 days of work experience.",
      capacity: "We only have 10 people capacity.",
      language: "In the company, we communicate in the Dutch language.",
      sector: "We work in the Transportation sector.",
      phone: "The phone-number: 8412 ",
      extra: "We want to help people who want to learn a new language.",
      extra2: "If you are experienced in the Transportation sector and are ready to learn a new language, We are waiting.."
                                          
      },
    {
      id: 12,
      company: "CRONOS Company",
      offer: "We are looking for someone who wants to learn Dutch, for 14 days as volunteers in the IT sector...",
      details: "Details... >>",
      location: "The location of the company is Antwerpen.",
      time: "We give 14 days of work experience.",
      capacity: "We only have 7 people capacity.",
      language: "In the company, we communicate in the Dutch language.",
      sector: "We work in the IT sector.",
      phone: "The phone-number: 8512 ",
      extra: "We want to help people who want to learn a new language.",
      extra2: "If you are experienced in the IT sector and are ready to learn a new language, We are waiting.."
                                              
      },
    {
      id: 13,
      company: "GAMMA Company",
      offer: "We are looking for someone who wants to learn English, for 40 days as volunteers in the IT sector...",
      details: "Details... >>",
      location: "The location of the company is Gent.",
      time: "We give 40 days of work experience.",
      capacity: "We only have 3 people capacity.",
      language: "In the company, we communicate in the English language.",
      sector: "We work in the IT sector.",
      phone: "The phone-number: 8111 ",
      extra: "We want to help people who want to learn a new language.",
      extra2: "If you are experienced in the IT sector and are ready to learn a new language, We are waiting.."
                                                  
    },

    {
      id: 14,
      company: "ADIDAS Company",
      offer: "We are looking for someone who wants to learn Dutch, for 10 days as volunteers in the Transportation sector...",
      details: "Details... >>",
      location: "The location of the company is Antwerpen.",
      time: "We give 10 days of work experience.",
      capacity: "We only have 15 people capacity.",
      language: "In the company, we communicate in the Dutch language.",
      sector: "We work in the Transportation sector.",
      phone: "The phone-number: 8312 ",
      extra: "We want to help people who want to learn a new language.",
      extra2: "If you are experienced in the Transportation sector and are ready to learn a new language, We are waiting.."
                                              
      },
    {
      id: 15,
      company: "FCR Media Group",
      offer: "We are looking for someone who wants to learn Dutch, for 20 days as volunteers in the Media sector...",
      details: "Details... >>",
      location: "The location of the company is Antwerpen.",
      time: "We give 20 days of work experience.",
      capacity: "We only have 8 people capacity.",
      language: "In the company, we communicate in the Dutch language.",
      sector: "We work in the Media sector.",
      phone: "The phone-number: 8211 ",
      extra: "We want to help people who want to learn a new language.",
      extra2: "If you are experienced in the Media sector and are ready to learn a new language, We are waiting.."
                                                  
    },
    ]
  }

  render() {

  return (
    <div className="container">
      <Navbar 
      title= "Linguasphere"
      />

      <hr/>
      <Navbar2 
      title2= "Companies"
      title3= "Offers"

      />
      <hr/>
      <Users users = {this.state.users}/>

      

    </div>
  )
}
}

export default App;
