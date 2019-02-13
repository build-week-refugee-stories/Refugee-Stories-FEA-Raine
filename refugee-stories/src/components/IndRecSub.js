import React from 'react';

function IndRecSub(props) {
  return (
    <div>
      <h3>{props.recSub.author}</h3>
      <h3>{props.recSub.title}</h3>
      <h3>{props.recSub.country}</h3>
      <p>{props.recSub.snippet}</p>
      <p>{props.recSub.body}</p>
      <div>
        <button>Approve Story</button>
        <button>Reject Story</button>
      </div>
    </div>
  )
}

export default IndRecSub;