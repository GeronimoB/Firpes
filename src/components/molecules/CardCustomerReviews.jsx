import React from 'react';
import Cliendcad from '../atoms/Customeuser'
import '../../styles/styleCustomerReview.css'
const CurtomerCardentire = ({ description, image, name, profession, uniqueKey }) => {

  return (
    <div className='CardPersonreview'>
      <p className='textdescription'>{description}</p>
      <Cliendcad
        key={uniqueKey}
        image={image}
        name={name}
        profession={profession}/>
    </div>

  );
};

export default CurtomerCardentire;