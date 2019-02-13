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
      <h2>test</h2>
        {this.state.recentSubmissions.map((recSub, i) => {
          return(
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