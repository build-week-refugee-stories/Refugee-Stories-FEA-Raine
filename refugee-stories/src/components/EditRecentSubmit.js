import React from 'react';
import axios from 'axios';

class EditRecentSubmit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      story: {
        author: '',
        title: '',
        snippet: '',
        approved: false,
        body: '',
        country: '',
        url_picture: '',
        url_thumbnail: ''
      }
    }
  }

  componentDidMount() {
    // if this component is a route
    // this.setState({
    //   story: this.props.stories.find(story => `${story.id}` === this.props.match.id)
    // })

    // if story is passed as prop
    this.setState({
      story: this.props.story
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  updateStory = (event, id) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: { autorization: token }
    };
    axios
      .put(`https://refugeestories.herokuapp.com/api/updatestory/${id}`, this.state.story, requestOptions)
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
        <form onSubmit={this.updateStory}>
          <input 
            name='title'
            placeholder='Title'
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input 
            name='author'
            placeholder='Author'
            value={this.state.author}
            onChange={this.handleChange}
          />
          <input 
            name='country'
            placeholder='Country'
            value={this.state.country}
            onChange={this.handleChange}
          />
          <input 
            name='snippet'
            placeholder='Snippet'
            value={this.state.snippet}
            onChange={this.handleChange}
          />
          <input 
            name='body'
            placeholder='Body'
            value={this.state.body}
            onChange={this.handleChange}
          />
          <input 
            name='url_picture'
            placeholder='Image URL'
            value={this.state.url_image}
            onChange={this.handleChange}
          />
          <input 
            name='url_thumbnail'
            placeholder='Thumbnail URL'
            value={this.state.url_thumbnail}
            onChange={this.handleChange}
          />
          <input 
            type='checkbox'
            name='approved'
            value={this.state.approved}
            onChange={this.handleChange}
          />
        </form>
      </div>
    )
  }
}

export default EditRecentSubmit;