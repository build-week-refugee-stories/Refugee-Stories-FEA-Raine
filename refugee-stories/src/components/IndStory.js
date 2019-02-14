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
      <div className='indStoryWrapper'>
        <div className='indStoryTop'>
          <div>
            <img className='indStoryImg' src={url_thumbnail} alt="Story-img" />
          </div>
          <div>
            <h2 className='indStoryTitle'>{title}</h2>
            <h3 className='indStoryAuthor'>{author}</h3>
            <h3 className='indStoryCountry'>{country}</h3>
          </div>
        </div>
        <p className='indStoryBody'>{body}</p>
      </div>
    )
  }
}

export default IndStory;