import React from 'react';

const RightArrow = (props) => {
  return (
    <div className='nextArrow' onClick={props.nextSlide}>
      <i className="arrow far fa-arrow-alt-circle-right"></i>
    </div>
  );
}

export default RightArrow;