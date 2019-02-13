import React from 'react';

const HomeSlide = props => {
  const styles = {
    backgroundImage: `url(${props.url_thumbnail})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%'
  }
  return (
    <div className='slide' style={styles}>
      <p className='slideSnippet'><span>{props.title}</span>: "{props.snippet}" -{props.author}</p>
    </div>
  )
}

export default HomeSlide;