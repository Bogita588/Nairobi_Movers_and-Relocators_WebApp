import React from 'react';

import { AboutUs, Chef, Mission, FindUs, Testimony, Footer, Services, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar, Contactme } from './components';
import './App.css';

const App = () => (
  <div>
    <Contactme />
    <Navbar />
    <Header />
    <AboutUs />
    <Services />
    <Testimony />
    <Mission />
    {/*<Chef />
    <Intro />
    <Laurels />
<Gallery />*/}
    <FindUs />
    <Footer />
  </div>
);

export default App;
