import React from 'react';
import '../../styles/stylefirtcontent.css'
import Texttitle from '../atoms/Texts/TextTitle'
import Subtitle from '../atoms/Texts/TextSubTitle'
const Firstcon = () => {
  return (
    <div className='menu1'>
      <div className='firtsection'>
        <Texttitle />
        <Subtitle/>
      </div>
      <img className='imgmenu1' src="/imgmenu.png" alt="" />
    </div>
  );
};

export default Firstcon;
