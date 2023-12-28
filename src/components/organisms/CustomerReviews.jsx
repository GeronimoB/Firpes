import React from 'react';
import CurtomerCardentire from '../molecules/CardCustomerReviews'
import '../../styles/styleCustomerReview.css'
import Progres from '../atoms/Progres';
const Curtomerevies = () => {
  const reviewsData = [
    {
      uniqueKey: '1',
      description: 'Our team has been working at frispes for almost 2 months because our office still closed. During working at frispes, we feel a new experience, we can feel working with a beautiful, modern, and comfortable space. And cozy cafe with high-speed internet  in there. Thank you for frispes and team.',
      image: '/profileclient.png',
      name: 'Pedro Ibanez',
      profession: 'UI Designer at Google',
    },
    {
      uniqueKey: '2',
      description: 'The high-speed internet at frispes was so amazing. I can get best experience when running video call with my clients. Frispes has spacious and safe parking area, that’s what i need because i used to work as freelancer for a long time.',
      image: '/profileclient.png',
      name: 'Pedro Ibanez',
      profession: 'UI Designer at Google',
    },
    {
      uniqueKey: '3',
      description: 'Just three words : Frispes is Awesome!',
      image: '/profileclient.png',
      name: 'Pedro Ibanez',
      profession: 'UI Designer at Google',
    },
  ];


  return (
    <div className='containerreviews'>
      <div>
        <p className='basictest'>Testimonios</p>
        <h2 className='basictitle titlereview'>Lo que nuestros clientes dicen de nosotros</h2>
      </div>
      <div className='reviews'>
        {reviewsData.map((review, index) => (
          <CurtomerCardentire
            key={index}
            description={review.description}
            image={review.image}
            name={review.name}
            profession={review.profession}
            uniqueKey={review.uniqueKey}
          />
        ))}
      </div>
      <Progres cardCount={reviewsData.length} currentIndex={reviewsData.length -5} />
    </div>
    
  );
};

export default Curtomerevies;