import React from 'react';
import '../../styles/stylecardour.css'

const Cards = ({ cardInfo }) => {

  const { imgSrc, title, subtitle } = cardInfo;


  return (
    <div className='Cardcontainer' style={{ backgroundImage: `url(${imgSrc})` }}>
      <img src="/ourcardsvg.svg" alt='Card' />
      <p className='printext'>{title}</p>
      <p className='printsub'>{subtitle}</p>
      <button className='ourbutton'>&#62;</button>
      <p className='titlecard'>Trabaja en equipo</p>
    </div>
  );
};

export default Cards;
