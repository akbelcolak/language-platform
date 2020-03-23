
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>Language Platform</div>
          <p>
            {this.state.wow}
          </p>
        </header>
      </div>
    )
  }

  state = {
    wow: ''
  };

  componentDidMount() {
    fetch('./api')
      .then(res => res.json())
      .then(parsed => {
        this.setState({ wow: parsed.wow })
      })
      .catch(err => console.log(err));
  }
}


export default App;
