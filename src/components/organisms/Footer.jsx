import React from 'react';
import '../../styles/styleFooter.css';
import Footercompania from '../molecules/Footer/FooterCompania'
import Footercontactanos from '../molecules/Footer/FooterContactanos'
import Footerespacios from '../molecules/Footer/FooterEspacios'
import Footerlogo from '../molecules/Footer/FooterLogo'
import Footersoporte from '../molecules/Footer/Footersoporte'
const Footer = () => {

  return (
    <div className='Footercontainer'>
        <div className='subcontainerfooter'>
            <Footerlogo />
            <div className='contentfooter'>
            <Footerespacios/>
            <Footercompania/>
            <Footersoporte/>
            <Footercontactanos/>
            </div>
        </div>
    </div>
  );
};

export default Footer;
