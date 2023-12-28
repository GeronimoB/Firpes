import React from 'react';
import CardFAQ from '../molecules/CardFAQ';
import '../../styles/styleFAQ.css';

const FAQ = () => {
  const preguntas = [
    '¿Cómo sé qué espacios están disponibles?',
    'Otra pregunta frecuente',
    'Y otra más...',
  ];

  return (
    <div className='Faqmenu'>
      <p className='basictitle linetextfaq'>¿Tienes dudas? Tal vez encuentres la respuesta aquí</p>
      <div className='flexfaq'>
        {preguntas.map((pregunta, index) => (
          <CardFAQ key={index} pregunta={pregunta} />
        ))}
      </div>
      <p className='textclassmorefaw'>Mas preguntas &gt;</p>
    </div>
  );
};

export default FAQ;
