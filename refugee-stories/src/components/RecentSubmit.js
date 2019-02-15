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
      <div className='recentStoryCard'>
        <Link to={`/recent-stories/${this.props.recStory.id}`} key={this.state.recStory.id}>
          <h3 className='RSCTop'>{this.state.recStory.author}</h3>
          <h3 className='RSCTop'>{this.state.recStory.title}</h3>
          <p className='RSCBottom'>{this.state.recStory.body}</p>
        </Link>
      </div>
    )
  }
}

export default RecentSubmit;