import React, { Component } from 'react';

class SubmitStory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>Add Your Story</h2>
        <form>
          <input 
          type="text"
          name="author"
          placeholder="Author" 
          />
          <input 
          type="text"
          name="title"
          placeholder="Title" 
          />
          <input 
          type="text"
          name="country"
          placeholder="Country" 
          />
          <input 
          type="text"
          name="snippet"
          placeholder="Snippet (optional)" 
          />
          <input 
          type="text"
          name="body"
          placeholder="Tell us your story..." 
          />
          
        </form>
      </div>
    );
  }
}

export default SubmitStory;