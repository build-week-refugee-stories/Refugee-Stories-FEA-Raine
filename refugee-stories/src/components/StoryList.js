import React, { Component } from 'react';


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
              <Story 
                story={story} 
                key={story.id}
                title={story.title}
                author={story.author}
                snippet={story.snippet}
              />
            );
          })}
        </ul>
      </div>
    )
  }
}


export default StoryList;