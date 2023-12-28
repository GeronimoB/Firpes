import React from 'react';
import '../../../styles/styleFooter.css';

const Footerlogo = () => {

  return (
    <div className='espacios'>
      <h1>LOGO</h1>
      <p>Ofrecemos espacios confortables, una acogedora cafetería, Internet de alta velocidad, un amplio aparcamiento y mucho más para sus mejores espacios de trabajo y reuniones.</p>
      <div className='sotialicons'>
        <img src="Instagram.svg" alt="" className='socialmedia'/>
        <img src="Youtube.svg" alt="" className='socialmedia'/>
        <img src="/facebook.svg" alt="" className='socialmedia'/>
      </div>
    </div>
  );
};

export default Footerlogo;
