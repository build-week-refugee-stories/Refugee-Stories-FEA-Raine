import React from 'react';

const Story = props => {
  return (
    <div className='storyTitlesSec'>
      <h3 className='storyTitlesTitle'>{props.title}</h3>
      <h4 className='storyTitlesAuthor'>{props.author}</h4>
      <p className='storyTitlesSnippet'>{props.snippet}</p>
    </div>
  )
}

export default Story;