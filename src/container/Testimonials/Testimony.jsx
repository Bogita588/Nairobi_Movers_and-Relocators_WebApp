import React, { useState } from 'react';
import './testimony.css'; // Import your CSS file for styling
import gallery01 from '../../assets/gallery01.png';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    title: 'Satisfied Customer',
    location: 'New York',
    image: gallery01,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio nec est interdum tempus.',
  },
  {
    id: 2,
    name: 'John Doe',
    title: 'Satisfied Customer',
    location: 'New York',
    image: gallery01,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio nec est interdum tempus.',
  },
  // Add more testimonials here...
];

const Testimony = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  return (
    <div className="testimonial-carousel">
      <h2 className="carousel-title">What Our Clients Say</h2>
      <div className="carousel">
        <button className="carousel-button" onClick={prevSlide}>
          &lt;
        </button>
        <div className="carousel-content">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={index === activeIndex ? 'slide active' : 'slide'}
            >
              <div className="testimonial-image">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name} Avatar`}
                />
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <p className="testimonial-author">{testimonial.name}</p>
              <p className="testimonial-title">{testimonial.title}</p>
              <p className="testimonial-location">{testimonial.location}</p>
            </div>
          ))}
        </div>
        <button className="carousel-button" onClick={nextSlide}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Testimony;
