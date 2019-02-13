import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';


import Navigation from './components/Navigation';
import Home from './components/homeComponents/Home';
import StoryList from './components/StoryList';
import SubmitStory from './components/SubmitStory';
import Login from './components/loginComponents/Login';
import IndStory from './components/IndStory';
import './App.css';
import RecentSubmits from './components/RecentSubmits';
import IndRecSub from './components/IndRecSub';

class App extends Component {
  state = {
    stories: [],
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
          render={props => (
            <Home {...props} stories={this.state.stories} />
          )}
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
        <Route 
          exact path="/login" 
          component={Login}
        />
        <Route 
          exact path="/recent-stories" 
          component={RecentSubmits}
        />
        <Route 
          path="/stories/:id"
          component={IndStory}
        />
        <Route 
          exact path="/allstories/:id"
          render={props => (
            <IndRecSub {...props} />
          )}
        />
      </div>
    );
  }
}

export default App;
