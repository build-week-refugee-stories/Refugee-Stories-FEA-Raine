import React from 'react';
import axios from 'axios';

import RecentSubmit from './RecentSubmit';

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

  render() {
    return (
      <div>
        {this.state.recentSubmissions.map((recStory, index) => {
          return (
          <RecentSubmit 
            recStory={recStory}
            key={index}
          />
        )
        })}
        <div className='padding'>

        </div>
      </div>
    )
  }
}

export default RecentSubmits;