import React from 'react'
import './services.css'

import gallery01 from '../../assets/gallery01.png';
import gallery02 from '../../assets/gallery02.png';
import gallery03 from '../../assets/gallery03.png';
import gallery04 from '../../assets/gallery04.png';


const servicesData = [
    {
      id: 1,
      heading: 'Local Moving',
      paragraph: 'Efficient local moving services within your city or town.',
      image: gallery01, // Replace with an appropriate image
    },
    {
      id: 2,
      heading: 'Long-Distance Moving',
      paragraph: 'Reliable long-distance moving across regions and states.',
      image: gallery02, // Replace with an appropriate image
    },
    {
      id: 3,
      heading: 'Packing and Unpacking',
      paragraph: 'Professional packing and unpacking services for your convenience.',
      image: gallery03, // Replace with an appropriate image
    },
    {
      id: 4,
      heading: 'Furniture Assembly',
      paragraph: 'Assembly and disassembly of furniture during the move.',
      image: gallery04, // Replace with an appropriate image
    },
    {
      id: 5,
      heading: 'Storage Solutions',
      paragraph: 'Secure storage options for your belongings during the transition.',
      image: 'storage-solutions.jpg', // Replace with an appropriate image
    },
    {
      id: 6,
      heading: 'Corporate Relocation',
      paragraph: 'Efficient relocation services for businesses and offices.',
      image: 'corporate-relocation.jpg', // Replace with an appropriate image
    },
  ];

const Services = () => {
  return (
    <div className="services-container">
      
      
       <div className="service-grid">
     
      
     {servicesData.map((service) => (
       
       <div key={service.id} className="service-item">
          
 
        
         
         <h3>{service.heading}</h3>
         <div className="service-image">
           <img src={service.image} alt={service.heading} />
         </div>
         <p>{service.paragraph}</p>
         <button type="button" className='custom__button'>Contact Agents</button>
       </div>
     ))}
   </div>
    

    </div>
    

    
  )
}

export default Services