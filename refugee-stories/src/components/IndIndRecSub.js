import React from 'react';

const IndIndRecSub = props => {
  return (
    <div>
      <div>
        
      </div>
      <div>
        <form className='submitStoryForm'>
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
          <button type='submit' onClick={(event) => props.updateStory(event, props.story.id)}>Update Story</button>
          <button onClick={(event) => props.deleteStory(event, props.story.id)}>Reject Story</button>
        </form>
      </div>
    </div>
  )

}

export default IndIndRecSub;