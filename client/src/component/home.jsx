import React, { Component } from 'react';
import NavBar from './navBar';

class Home extends Component {
    render() { 
        return ( <div>
            <NavBar/>
            <h1>Welcome Home</h1>
        </div> );
    }
}
 
export default Home;