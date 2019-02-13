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
          value={this.state.author}
          onChange={this.handleChange}
          />
          <input 
          type="text"
          name="title"
          placeholder="Title" 
          value={this.state.title}
          onChange={this.handleChange}
          />
          <input 
          type="text"
          name="country"
          placeholder="Country" 
          value={this.state.country}
          onChange={this.handleChange}
          />
          <input 
          type="text"
          name="snippet"
          placeholder="Snippet (optional)" 
          value={this.state.snippet}
          onChange={this.handleChange}
          />
          <input 
          type="text"
          name="body"
          placeholder="Tell us your story..." 
          value={this.state.body}
          onChange={this.handleChange}
          />
          <button type='submit'> Add Story!</button>
        </form>
      </div>
    );
  }
}

export default SubmitStory;