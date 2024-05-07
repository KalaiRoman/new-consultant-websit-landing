import React from 'react'
import './styles/Carrer.scss';
import { carrer,carrerimage } from '../../assests/images';
function Careers() {
  return (
    <div className='carrer-main'>
<div className='inside-carrer'>
  <div className='carrer-banner-images'>
  <img src={carrer} alt="no image" className='carrer-banner-image'/>
  <div className='abouts-texts'>
   <h1>Careers</h1>
   <div>
    HOME {">"} CAREERS
   </div>
  </div>
  </div>

  <div className='carrer-texts'>
    <div className='left-box'>
    <img src={carrerimage} alt="no image" className='carrerimage'/>

    </div>
    <div className='right-box'>

<div className='career-first'>
<h3>  Careers</h3>
</div>
<div className='look-text mt-3'>
Looking for the best and brightest professionals committed to creating, developing and implementing innovative technology and business solutions for our customers. Learning mentality is imperative and is presently a typical attrib among corporate world. What is more vital is learning over the aggressive edge. SungrowTechnologies Group has been developing at an exceptionally gigantic rate, this is conceivable in light of the fact that we have individuals who can get a handle on innovation and additionally spaces at incredible speed.

</div>
</div>
    </div>
  </div>

    </div>
  )
}

export default Careers