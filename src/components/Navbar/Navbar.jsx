import React from 'react';

import './Navbar.css';
import images from '../../constants/images'
{/*import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineRestaurantMenu} from 'react-icons/md' */}


const Navbar = () => (
  <nav className="kws__navbar">
   <div className="kws__navbar-logo">
    <img src ={images.KWS} alt="" />
   </div >
   <ul className="kws__navbar-links">
    <li className="k__nav1"><a href="#home">Home</a></li>
    <li className="k__nav1"><a href="#attractions">Attractions</a></li>
    <li className="k__nav1"><a href="#about">About</a></li>
    <li className="k__nav1"><a href="#awards">Awards</a></li>
    <li className="k__nav1"><a href="#contact">Contact</a></li>
    
    
   </ul>

   <div className="kws__navbar-login">
    <a href="#login" className='k__nav1'>Login/Register</a>
    < div />
    <a href="/" className='k__nav1'>Other parks</a>

   </div>

  </nav>
);

export default Navbar;
