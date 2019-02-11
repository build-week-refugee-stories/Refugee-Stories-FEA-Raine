import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: []
    }
  }

  componentDidMount = () => {
    axios
      .get('https://refugeestories.herokuapp.com/api/stories')
      .then(response => {
        this.setState({
          stories: response.data
        });
      })
      .catch(error => {
        console.log(error);
      })
  };

  render() {
    return (
      <div className="App">
        <h1>Welcome to Build Week!</h1>
      </div>
    );
  }
}

export default App;
