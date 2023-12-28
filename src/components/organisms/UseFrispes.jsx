import Logos from '../molecules/Logos'
import React from 'react';
import '../../styles/styleUsefrispes.css'

const UseFripes = () => {


  return (
    <div className='Usefriesmenu'>
        <p className='basictitle centertextfrries'>Empresas que han usado nuestros espacios</p>
        <p className='basicsubtitle marginfries'>Grandes marcas, pequeñas empresas, nuevas empresas y particulares</p>
        <Logos/>
    </div>
  );
};

export default UseFripes;