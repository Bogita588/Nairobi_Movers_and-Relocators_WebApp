import React , {useState}from 'react';

import './Navbar.css';
import images from '../../constants/images'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineRestaurantMenu} from 'react-icons/md' 


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

return(

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
   <div className="kws__navbar-smallscreen">
        <GiHamburgerMenu color="white" fontSize={25} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
        <div className="kws__navbar-smallscreen_overlay flex__center slide-bottom">
              <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
              <ul className="kws__navbar-smallscreen-links">
                <li className="k__nav1"><a href="#home">Home</a></li>
                <li className="k__nav1"><a href="#attractions">Attractions</a></li>
                <li className="k__nav1"><a href="#about">About</a></li>
                <li className="k__nav1"><a href="#awards">Awards</a></li>
                <li className="k__nav1"><a href="#contact">Contact</a></li>
                
              
              </ul>
            
        </div>
      )}
    
   </div>

  </nav>
)
}

export default Navbar;
