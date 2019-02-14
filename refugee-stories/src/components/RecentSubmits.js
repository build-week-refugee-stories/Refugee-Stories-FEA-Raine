import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import IndRecSub from './IndRecSub';

class RecentSubmits extends React.Component {
  constructor() {
    super();
    this.state = {
      recentSubmissions: []
    }
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: {
        authorization: token
      }
    }
    axios
      .get('https://refugeestories.herokuapp.com/api/allstories', requestOptions)
      .then(response => {
        this.setState({
          recentSubmissions: response.data
        })
      })
      .catch(error => console.log(error))
  }

  updateStory = (event, id) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: {
        authorization: token
      }
    }
    axios
      .put(`https://refugeestories.herokuapp.com/api/updatestory${id}`, requestOptions)
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }

  render() {
    console.log(this.state.recentSubmissions);
    return (
      <div>
        <IndRecSub addedStory={this.state} />
        <Route
          exact path="/allstories/:id"
          component={IndRecSub}
        />
      </div>
    )
  }
}

export default RecentSubmits;