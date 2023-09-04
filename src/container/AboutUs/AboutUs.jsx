import React from 'react';

import './AboutUs.css';
import { images } from '../../constants';

const AboutUs = () => (
  <div className="kws__aboutus kws__bg flex__center section__padding" id="about">
        <div className="kws__aboutus-overlay flex__center">
          {/*<img src={images.G} alt="G" /> */}

        </div>

     

        <div className="kws__aboutus-content flex__center">
            <div className="kws__aboutus-content_about">
              <h1>About Us</h1>
              {/*<img src={images.spoon} alt="about__spoon" className="spoon__img" />*/} 
              <p>Welcome to our digital workshop, where we sculpt the future, one line of code at a time. We are passionate creators, dedicated to designing and developing web applications that redefine possibilities. With innovation at our core, we thrive on turning ideas into immersive online experiences. Join us on this exciting journey as we code the future into reality.</p>
              <button type="button" className='custom__button'>Learn More</button>
            </div>
            <div className="kws__aboutus-content_knife flex__center">
              {/*<img src={images.knife} alt="about__knife" /> */}

            </div>
            <div className="kws__aboutus-content_history">
              <h1>Our History</h1>
              {/*<img src={images.spoon} alt="about__spoon" className="spoon__img" /> */}
              <p>Welcome to our digital workshop, where we sculpt the future, one line of code at a time. We are passionate creators, dedicated to designing and developing web applications that redefine possibilities. With innovation at our core, we thrive on turning ideas into immersive online experiences. Join us on this exciting journey as we code the future into reality.</p>
              <button type="button" className='custom__button'>Learn More</button>
            </div>
          
    </div>

  </div>

    

    
  
);

export default AboutUs;
