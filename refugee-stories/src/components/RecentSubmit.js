import React from 'react';
import { Link } from 'react-router-dom';

class RecentSubmit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recStory: this.props.recStory
    }
  }

  render() {
    return (
      <div>
        <Link to={`/recent-stories/${this.props.recStory.id}`} key={this.state.recStory.id}>
          <h3>{this.state.recStory.author}</h3>
          <h3>{this.state.recStory.title}</h3>
          <p>{this.state.recStory.body}</p>
        </Link>
      </div>
    )
  }
}

export default RecentSubmit;