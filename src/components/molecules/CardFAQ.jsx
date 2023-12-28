import React from 'react';
import '../../styles/styleFAQ.css';

const CardFAQ = ({ pregunta }) => {
  return (
    <div className='CardFaq'>
      <div className='colorcardfaq'>
        <p className='textcardfaq'>
          {pregunta}
        </p>
      </div>
      <button className='buttomfaq'>
        v
      </button>
    </div>
  );
};

export default CardFAQ;
