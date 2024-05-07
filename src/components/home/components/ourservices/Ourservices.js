import React from 'react'
import './styles/Ourservices.scss';
import { Parallax } from 'react-parallax';
import { countryimage, ser1,ser2,ser3,ser4,ser5,ser6 } from '../../../../assests/images';
import { useNavigate } from 'react-router-dom';

function Ourservices() {

  const history=useNavigate();
  const arrayData=[
    {
      id:1,
      name:"Software Development",
      path:"/software-development",
      image:ser1,
      title:"SungrowTechnologies delivers cost effective and reliable software development services."
    },
    {
      id:2,
      name:"Software Testing",
      path:"/software-testing",
      image:ser2,
      title:"SungrowTechnologies uses a risk-based prioritization approach to get to the right answers."

    },
    {
      id:3,
      name:"IT Staff Augment",
      path:"/it-staff-augement",
      image:ser3,
      title:"Every organization today requires skilled resources on demand and craves for cost effective."

    },
    {
      id:4,
      name:"Cloud Computing",
      path:"/cloud-computing",
      image:ser4,
      title:"The objective of Cloud Computing is to enable clients to take beneﬁt from these advancements."

    },
    {
      id:5,
      name:"Quality Assurance",
      path:"/quality-assurance",
      image:ser5,
      title:"In software development, validation and verification take up 40 % of the effort, time and resources."

    },
    {
      id:6,
      name:"Mobile Application",
      path:"/mobile-application",
      image:ser6,
      title:"Our dedicated team has an expertise in delivering products and professional services to wireless."

    },
    

  ]


  const navigatePath=(path)=>{
    history(path);
  }
  return (
    <div className='main-ourservice'>
<div className='inside-ourservice'>
<Parallax blur={{max: 15 }} bgImage={countryimage} bgImageAlt="the cat" strength={200}>
       <div 
       
       style={{
        width:  "100%",
        color:"white",
        padding:"100px 10px"
    }}>
        
        <div className='our-texts'>
          <h1>Our Services</h1>
        </div>
        <div className='row our-boxs mt-5'>
          {arrayData?.map((item,index)=>{
            return(
              <div className="cards" key={index} onClick={()=>navigatePath(item?.path)}>
             <div className='left-ourbox'>
              <img src={item?.image} alt="no image"/>
             </div>
             <div className='right-ourbox'>
<div>
  <h2>{item?.name}</h2>
</div>
<div className='mt-2 grey-text'>
  {item?.title}
</div>
<div className='mt-3 read-button' onClick={()=>navigatePath(item?.path)}>
  Read More <span className='color-icon'><i class="fa-solid fa-arrow-right"></i></span>
</div>
             </div>
              </div>
            )
          })}
        </div>
       </div>
    </Parallax>
</div>
    </div>
  )
}

export default Ourservices