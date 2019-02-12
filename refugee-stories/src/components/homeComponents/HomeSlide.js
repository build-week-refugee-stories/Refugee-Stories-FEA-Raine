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
      <h3>{props.title}</h3>
      <p>{props.snippet}</p>
    </div>
  )
}

export default HomeSlide;