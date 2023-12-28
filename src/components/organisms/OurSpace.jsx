'use client'
import React, { useState } from 'react';
import '../../styles/styleourspace.css';
import Ourtitle from '../atoms/Texts/ourspacetitle';
import OurSubtitle from '../atoms/Texts/Ourspacesubtitle';
import Progres from '../atoms/Progres';
import Cards from '../molecules/CardsOur';
const OurSpace = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsInfo, setCardsInfo] = useState([
    {
      imgSrc: '/card1.png',
      title: 'Set privado 1',
      subtitle: 'Espacio confortable, wifi de alta velocidad, café y aperitivos gratis y mucho más',
    },
    {
      imgSrc: '/card2.png',
      title: 'Set privado 2',
      subtitle: 'Otra descripción para el segundo set privado',
    },
    {
      imgSrc: '/card1.png',
      title: 'Set privado 3',
      subtitle: 'Otra descripción para el tercer set privado',
    },
    {
      imgSrc: '/card1.png',
      title: 'Set privado 3',
      subtitle: 'Otra descripción para el tercer set privado',
    },
  ]);
  
  const cardsToShow = cardsInfo.slice(currentIndex, currentIndex + 3);

  const handleNext = () => {
    if (currentIndex < cardsInfo.length - 3) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className='OurSpace'>
      <div className='Topmenu'>
        <Ourtitle />
        <OurSubtitle />
        <span className='right position1' onClick={handlePrev}>&#8592;</span>
        <span className='left position' onClick={handleNext}>&#8594;</span>
      </div>
      <div className='Boxcards'>
        {cardsToShow.map((card, index) => (
          <Cards key={index} cardInfo={card} />
        ))}
      </div>
      <Progres cardCount={cardsInfo.length} currentIndex={currentIndex} />
    </div>
  );
};

export default OurSpace;