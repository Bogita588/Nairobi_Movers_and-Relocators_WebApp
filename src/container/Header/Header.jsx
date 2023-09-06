import React from 'react';

import './Header.css';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const Header = () => (
  <div className="kws__header app__wrapper section__padding" id="home">
    <div className="kws__wrapper_info">
      <SubHeading title="Premier Relocation, Transportation and Logistics Kenya"/>
      <h1>Your Premier Relocation Partner</h1>
      <p className="opensans" style={{margin: '2rem 0'}}>We offer a comprehensive range of relocation services designed to make your move effortless and stress-free. From local and long-distance moves to professional packing and unpacking, furniture assembly, secure storage solutions, and efficient corporate relocations, our dedicated team ensures your belongings are handled with care and precision. We are your trusted partner in making transitions smoother, whether you're moving down the street or across the country.</p>
      <button type="button" className='click__button'>Explore the Park</button>





    </div>
    <div className="kws__wrapper_img">
      <img src={images.Nairobi} alt="welcome" />

    </div>

  </div>

);

export default Header;
