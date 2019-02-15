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
      },
      prepopulatedStory: {
        author: "Anonomous",
        title: "Bitcoin",
        snippet: "I was able to...",
        approved: false,
        body: "...A friends of mine, ...",
        country: "Afghdfanistan",
        url_picture: 'www.hello.com/fred.gif',
        url_thumbnail: 'www.hello.com/fred_small.gif'
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

  updateStory = (event, id) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: { autorization: token }
    };
    const addedStory = {
      ...this.state.prepopulatedStory,
      approved: true,
      title: this.state.addedStory.title,
      author: this.state.addedStory.author,
      country: this.state.addedStory.country,
      body: this.state.addedStory.body,
      snippet: this.state.addedStory.snippet,
      url_picture: this.state.addedStory.url_picture,
      url_thumbnail: this.state.addedStory.url_thumbnail,
      id: this.state.addedStory.id
    };
    axios
      .put(`https://refugeestories.herokuapp.com/api/updatestory/${id}`, addedStory, requestOptions)
      .then(response => this.setState({
        pPaddedStory: response.data
      }))
      .then(() => {
        this.props.history.push('/stories');
      })
      .catch(error => console.log(error));
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <IndIndRecSub
          story={this.state.addedStory}
          deleteStory={this.deleteStory}
          updateStory={this.updateStory}
          handleChange={this.handleChange}
          id={this.state.addedStory.id}
        />
      </div>
    )
  }
}

export default IndRecSub;