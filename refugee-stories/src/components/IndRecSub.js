import React from 'react';
import axios from 'axios';
import IndIndRecSub from './IndIndRecSub';

class IndRecSub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addedStory: {
        author: '',
        title: '',
        country: '',
        snippet: '',
        body: ''
      }
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchStory(id)
  }

  fetchStory = id => {
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: {
        authorization: token
      }
    }
    axios
      .get(`https://refugeestories.herokuapp.com/api/allstories/${id}`, requestOptions)
      .then(response => {
        this.setState({
          addedStory: response.data
        });
      })
      .catch(error => console.log(error));
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

  render() {
    return (
      <div>
        <IndIndRecSub
          story={this.state.addedStory}
          deleteStory={this.deleteStory}
          id={this.state.addedStory.id}
        />
      </div>
    )
  }
}

export default IndRecSub;