import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import Story from './Story';

class StoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      snippet: ''
    }
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.stories.map(story => {
            return (
              <Link to={`/stories/${story.id}`} key={story.id}>
                <Story
                  story={story}
                  key={story.id}
                  title={story.title}
                  author={story.author}
                  snippet={story.snippet}
                />
              </Link>
            );
          })}
        </ul>
        
      </div>
    )
  }
}


export default StoryList;