import React from 'react';
import '../../styles/styleourspace.css';

const Progres = ({ cardCount, currentIndex }) => {
  return (
    <div className='contador-container'>
        <div className='fondobarra'>
            <div className='barra-progreso' style={{ left: `${(currentIndex / (cardCount - 3)) * 80}%` }}>
            </div>
        </div>
        <p id='contador'>{`${currentIndex + 3}/${cardCount}`}</p>
    </div>
  );
};

export default Progres;
