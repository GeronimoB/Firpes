import React from 'react';
import '../../styles/styleCustomerReview.css'
const Clientcard = ({ image, name, profession} ) => {

  return (
    <div className='personalinfo'>
      <img src={image} alt="" />
      <div>
        <p className='nameprofile'>{name}</p>
        <p className='proprofile'>{profession}</p>
      </div>
    </div>
  );
};

export default Clientcard;