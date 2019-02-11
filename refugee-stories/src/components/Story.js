import React from 'react';

const Story = props => {
  return (
    <div>
      <h3>{props.title}</h3>
      <h4>{props.author}</h4>
      <p>{props.snippet}</p>
    </div>
  )
}

export default Story;