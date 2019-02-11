import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';


import Navigation from './components/Navigation';
import Home from './components/Home';
import StoryList from './components/StoryList';
import SubmitStory from './components/SubmitStory';
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
        <Route 
          path="/" 
          component={Navigation}
        />
        <Route 
          exact path="/" 
          component={Home}
        />
        <Route 
          exact path="/stories" 
          render={props => (
            <StoryList {...props} stories={this.state.stories} />
          )}
        />
        <Route 
          exact path="/submit_story" 
          component={SubmitStory}
        />
      </div>
    );
  }
}

export default App;
