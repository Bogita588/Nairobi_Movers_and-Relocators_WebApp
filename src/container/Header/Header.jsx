import React from 'react';

import './Header.css';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const Header = () => (
  <div className="kws__header app__wrapper section__padding" id="home">
    <div className="kws__wrapper_info">
      <SubHeading title="Here is the Magic that is in Nairobi"/>
      <h1>Welcome to Nairobi city!</h1>
      <p className="opensans" style={{margin: '2rem 0'}}>Welcome to Nairobi National Park: Where Wilderness Meets the City! Explore the heart of Kenya's vibrant capital and witness the incredible harmony between urban life and untamed nature</p>
      <button type="button" className='click__button'>Explore the Park</button>





    </div>
    <div className="kws__wrapper_img">
      <img src={images.Nairobi} alt="welcome" />

    </div>

  </div>

);

export default Header;
