import React from 'react';

const LeftArrow = (props) => {
  return (
    <div className='backArrow' onClick={props.prevSlide}>
      <i className="far fa-arrow-alt-circle-left"></i>
    </div>
  );
}

export default LeftArrow;