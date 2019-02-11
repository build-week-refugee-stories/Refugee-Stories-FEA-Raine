import React from 'react';

const IndStory = props => {
  return (
    <div>
      <img src={props.url_picture} alt="Story-img" />
      <h2>{props.title}</h2>
      <h3>{props.author}</h3>
      <h3>{props.country}</h3>
      <p>{props.body}</p>
    </div>
  )
}

export default IndStory;