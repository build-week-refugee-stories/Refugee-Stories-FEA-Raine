import React, { Component } from 'react';
import axios from 'axios';

class IndStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      story: null
    };
  };

  componentDidMount(props) {
    const id = this.props.match.params.id;
    this.fetchStory(id);
  };

  fetchStory = id => {
    axios
      .get(`https://refugeestories.herokuapp.com/api/stories/${id}`)
      .then(response => {
        this.setState(() => ({ story: response.data }));
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    if (!this.state.story) {
      return <div>Loading Story...</div>;
    }
    const { url_thumbnail, title, author, country, body } = this.state.story;
    return (
      <div>
        <img src={url_thumbnail} alt="Story-img" />
        <h2>{title}</h2>
        <h3>{author}</h3>
        <h3>{country}</h3>
        <p>{body}</p>
      </div>
    )
  }
}

export default IndStory;