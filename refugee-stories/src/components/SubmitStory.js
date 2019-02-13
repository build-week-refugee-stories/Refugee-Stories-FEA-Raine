import React, { Component } from 'react';
import axios from 'axios';

class SubmitStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      title: '',
      country: '',
      snippet: '',
      body: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  addNewStory = event => {
    event.preventDefault();
    axios
      .post('https://refugeestories.herokuapp.com/api/submit', this.state)
      .then(response => {
        this.setState({
          stories: response.data
        })
        this.props.history.push('/')
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <h2>Add Your Story</h2>
        <form onSubmit={this.addNewStory}>
          <input 
          type="text"
          name="author"
          placeholder="Author" 
          />
          <input 
          type="text"
          name="title"
          placeholder="Title" 
          />
          <input 
          type="text"
          name="country"
          placeholder="Country" 
          />
          <input 
          type="text"
          name="snippet"
          placeholder="Snippet (optional)" 
          />
          <input 
          type="text"
          name="body"
          placeholder="Tell us your story..." 
          />
          <button type='submit'> Add Story!</button>
        </form>
      </div>
    );
  }
}

export default SubmitStory;