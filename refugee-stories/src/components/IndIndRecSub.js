import React from 'react';

const IndIndRecSub = props => {


    return (
      <div>
      <h3>{props.story.author}</h3>
            <h3>{props.story.title}</h3>
            <h3>{props.story.country}</h3>
            <p>{props.story.snippet}</p>
            <p>{props.story.body}</p>
            <div>
              <button>Approve Story</button>
              <button onClick={(event) => props.deleteStory(event, props.story.id)}>Reject Story</button>
            </div>
      </div>
    )
  
}

export default IndIndRecSub;