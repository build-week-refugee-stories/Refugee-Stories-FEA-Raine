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
        <button onClick={(event) => props.deleteStory(event, props.story.id)}>Reject Story</button>
      </div>
      <div>
        <form onSubmit={props.updateStory}>
          <input
            name='title'
            placeholder='Title'
            value={props.story.title}
            onChange={props.handleChange}
          />
          <input
            name='author'
            placeholder='Author'
            value={props.story.author}
            onChange={props.handleChange}
          />
          <input
            name='country'
            placeholder='Country'
            value={props.story.country}
            onChange={props.handleChange}
          />
          <input
            name='snippet'
            placeholder='Snippet'
            value={props.story.snippet}
            onChange={props.handleChange}
          />
          <input
            name='body'
            placeholder='Body'
            value={props.story.body}
            onChange={props.handleChange}
          />
          <input
            name='url_picture'
            placeholder='Image URL'
            value={props.story.url_image}
            onChange={props.handleChange}
          />
          <input
            name='url_thumbnail'
            placeholder='Thumbnail URL'
            value={props.story.url_thumbnail}
            onChange={props.handleChange}
          />
          <input
            type='checkbox'
            name='approved'
            value={props.story.approved}
            onChange={props.handleChange}
          />
          <button type='submit'>Update Story and Add</button>
        </form>
      </div>
    </div>
  )

}

export default IndIndRecSub;