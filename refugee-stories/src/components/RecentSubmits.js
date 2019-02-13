import React from 'react';
import axios from 'axios';

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

  deleteStory = (event, id) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: { 
        authorization: token 
      }
    }
    axios
      .delete(`https://refugeestories.herokuapp.com/api/deletestory/${id}`, requestOptions)
      .then(response => {
        this.props.history.push('/recent-stories')
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
      .catch(error => console.log(error));
  }

  render() {
    console.log(this.state.recentSubmissions);
    return (
      <div>
        {this.state.recentSubmissions.map((recSub, i) => {
          return (
            <IndRecSub
              recSub={recSub}
              key={i}
            />
          )
        })}
      </div>
    )
  }
}

export default RecentSubmits;