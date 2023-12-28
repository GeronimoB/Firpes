import React from 'react';
const Arrows = () => {

  return (
    <div>
        <span className='right position1' onClick={handlePrev}>&#8592;</span>
        <span className='left position' onClick={handleNext}>&#8594;</span>
    </div>
  );
};

export default Arrows;