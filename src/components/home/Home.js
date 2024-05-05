import React from 'react'
import Slider from "react-slick";
import './styles/Home.scss';
import { slider1,slider2 } from '../../assests/images';
import Ourservices from './components/ourservices/Ourservices';
import Homepage1 from './components/Homepage1/Homepage1';
import Help from './components/help/Help';
import Microhaze from './components/Microhaze/Microhaze';
import Testinmonials from './components/testimonials/Testinmonials';
import Ourtechnologies from './components/ourtestimonials/Ourtechnologies';
function Home() {

  return (
    <div className='main-home-page'>
<Homepage1/>
<Microhaze/>
    <Ourservices/>
    <Help/>
    <Ourtechnologies/>
    <Testinmonials/>
    </div>

  )
}

export default Home