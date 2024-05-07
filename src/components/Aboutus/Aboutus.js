import React from 'react'
import './styles/Aboutus.scss';
import { about1, about2, about3, aboutbg,aboutimage } from '../../assests/images';
function Aboutus() {
  return (
    <div className='carrer-main'>
<div className='inside-carrer'>
  <div className='carrer-banner-images'>
  <img src={aboutbg} alt="no image" className='carrer-banner-image'/>
  <div className='abouts-texts'>
   <h1> About Us</h1>
   <div>
    HOME {">"} ABOUT US
   </div>
  </div>
  </div>
  <div className='carrer-texts'>
    <div className='left-box'>
    <img src={aboutimage} alt="no image" className='carrerimage'/>

    </div>
    <div className='right-box'>

<div className='career-firsts'>
<h3>SungrowTechnologies</h3>
</div>
<div className='look-text mt-3'>
SungrowTechnologies is a global company specializing in software product and technology. SungrowTechnologies offers customized software product and IT services. We provide "cutting- edge" solutions that deliver competitive advantage to our valued clients. Our disciplined management techniques, domain knowledge and holistic approach constantly develop ways to enhance value to our clients.

</div>
</div>
    </div>
    <div className='container row gap-4 mx-auto mb-5'>
   {Array(3)?.fill("null")?.map((item,index)=>{
    return(
      <div className='cards col-lg-4'>
       {index===0?<>
       <div className='mb-3'>
        <img src={about1} alt="no image"/>
       </div>
       <div>
        <h2>Our Strategy</h2>
       </div>
       <div  className='mt-3 to'>
       To provide complete, competitive and sustainable solutions IT challenges. We aim to simplify.
       </div>
       </>:null}
       {index===1?<>
        <div className='mb-3'>
        <img src={about2} alt="no image"/>
       </div>
       <div>
        <h2>Our Mission</h2>
       </div>
       <div  className='mt-3 to'>
       Provide custom, secure, reliable and scalable IT solutions based on clients' business and environment.
       </div>
       </>:null}
       {index===2?<>
        <div className='mb-3'>
        <img src={about3} alt="no image"/>
       </div>
       <div>
        <h2>Our Achievements</h2>
       </div>
       <div className='mt-3 to'>
       Implementation with Intellect and Ideas yields an Ideal Solution. Sustainability, Integrity and Quality.
       </div>
       </>:null}
      </div>
    )
   })}
    </div>
  </div>

    </div>
  )
}

export default Aboutus