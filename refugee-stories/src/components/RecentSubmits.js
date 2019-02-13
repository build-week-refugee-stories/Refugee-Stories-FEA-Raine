import React from 'react';
import axios from 'axios';

class RecentSubmits extends React.Component {
  constructor() {
    super();
    this.state = {
      recentStories: []
    }
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers:
        { authorization: token }
    }
    axios
      .get('https://refugeestories.herokuapp.com/api/allstories', requestOptions)
      .then(response => {
        this.setState({
          stories: response.data
        })
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <h1>test</h1>
      </div>
    )
  }
}

export default RecentSubmits;