import React from 'react';
import axios from 'axios';

class IndRecSub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addedStory: []
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`https://refugeestories.herokuapp.com/api/allstories/${id}`)
      .then(response => {
        this.setState({
          addedStory: response.data
        });
      })
      .catch(error => console.log(error));
  }

  deleteStory = () => {
    const id = this.props.match.params.id;
    axios
      .delete(`https://refugeestories.herokuapp.com/api/deletestory/${id}`)
      .then(response => {
        this.setState({
          addedStory: response.data
        });
      })
      .then(() => {
        this.props.history.push('/recent-stories')
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <h3>{this.state.addedStory.author}</h3>
        <h3>{this.state.addedStory.title}</h3>
        <h3>{this.state.addedStory.country}</h3>
        <p>{this.state.addedStory.snippet}</p>
        <p>{this.state.addedStory.body}</p>
        <div>
          <button>Approve Story</button>
          <button onClick={this.deleteNote}>Reject Story</button>
        </div>
      </div>
    )
  }
}

export default IndRecSub;