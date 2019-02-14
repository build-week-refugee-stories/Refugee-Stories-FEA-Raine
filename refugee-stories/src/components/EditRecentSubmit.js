import React from 'react';
import axios from 'axios';

class EditRecentSubmit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  updateStory = (event,id) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: { autorization: token }
    };
    axios
      .put(`https://refugeestories.herokuapp.com/api/updatestory/${id}`, requestOptions)
      .then(response => this.setState({
        stories: response.data
      }))
      .then(() => {
        this.props.history.push('/stories');
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}

export default EditRecentSubmit;