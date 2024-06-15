import React from 'react'
import { mobileimage } from '../../../assests/images'
import { cloudimage } from '../../../assests/images'
import { Outlet, useNavigate } from 'react-router-dom'
import '../styles/Service.scss';
import { banner1,banner2,banner3,banner4,banner5,banner6 } from '../../../assests/images';
function MobileApplication() {
  const location=window.location.pathname;

  const history=useNavigate();
  const data= [
    {
      id:1,
      name:"Software Development",
      path:"/software-development",
      image:banner1
    },
    {
      id:2,
      name:"Software Testing",
      path:"/software-testing",
      image:banner2

    },
    {
      id:3,
      name:"IT Staff Augment",
      path:"/it-staff-augement",
      image:banner3

    },
    {
      id:4,
      name:"Cloud Computing",
      path:"/cloud-computing",
      image:banner4

    },
    {
      id:5,
      name:"Quality Assurance",
      path:"/quality-assurance",
      image:banner5

    },
    {
      id:6,
      name:"Mobile Application",
      path:"/mobile-application",
      image:banner6

    },
    

  ]

  const pathNavigate=(path)=>{
   
    history(path);


}
  return (

    <div className='main-sidebar-software'>
      <div>

        {data?.map((item,index)=>{
          return(
            <div>
              {item?.path==location?<>
              <img src={item?.image} alt="no image" className='image-box'/>
              </>:<></>}
              <div className='abouts-texts'>
   <h1>{item?.path==location?<>{item?.name}</>:null}</h1>
   <div>
   {item?.path==location?<> HOME {">"}  {"Services"} {">"} {item?.name}</>:null}
   </div>
  </div>
            </div>
          )
        })}
      </div>
      <div className='inside-sidebar'>
<div className='left-side'>
{data?.map((item,index)=>{
  return(
    <div className={item?.path==location?"active":'list-side-bars'} onClick={()=>pathNavigate(item?.path)}>
      {item?.name}
    </div>
  )
})}
</div>
<div className='right-side'>
<div>
      <div>
      <div className='mt-3 mb-3'>
<img src={mobileimage } alt="no image" className='cm'/>
      </div>
      <div>
        <h3>
        Mobile Application
        </h3>
      </div>
      <div className='grey-text mb-3 mt-2'>
      Our dedicated team has an expertise in delivering products and professional services to wireless customers worldwide. With an extensive experience in mobile application development we can develop usable and reliable mobile applications for your enterprise that are closely integrated with your existing information systems.
      </div>

      <div className='grey-text mb-3 mt-2'>
      Wireless applications development presents daunting application development with the challenges of ever increasing number of devices with different capabilities and display formats, still evolving protocols, emerging standards, new programming languages. It takes skilled, proactive and knowledgeable developers who understand and appreciate the intricacies and complexities of advanced technology who can quickly master wireless application design and development.
      </div>
      


      <div className='mt-4 orange-text mb-2'>
      Our solutions include
      </div>
      <div className='mt-3 d-flex ms-3 gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        Mobile enablement of your enterprise needs
        </div>
      </div>
      <div className='mt-3 d-flex ms-3 gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        SMS Based application development
        </div>
      </div>
      <div className='mt-3 d-flex ms-3 gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        Mobile content generation
        </div>
      </div>
      <div className='mt-3 d-flex ms-3 gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        Mobile gaming
        </div>
      </div>
     
      
      <div className='mt-4 orange-text mb-2'>
      Local and Cross Platform Apps
      </div>
      <div className='grey-text mb-3 mt-2'>
      Our portable application advancement administrations incorporate top of the line exercises, for example, cross stage and additionally local application improvement for Android, iOS and Windows. Our application are insightfully intended to effectively work over all the major cell phones and cell phones and guarantees that your application jam most elevated quality.
      </div>
    
      <div className='mt-4 orange-text mb-2'>
      Study and Research
      </div>
      <div className='grey-text mb-3 mt-2'>
      At SungrowTechnologies, we don't simply outline the Mobile Apps utilizing any accessible formats. Before outlining the application, we think about the customers business and concentrate on the perspectives that catches the client's consideration the most like shading coordination, illustrations, speed, convenience and so on.
      </div>
      <div className='mt-4 orange-text mb-2'>
      Easy to understand Interface
      </div>
      <div className='grey-text mb-3 mt-2'>
      The top of the line versatile applications created by SungrowTechnologies are mindfully intended to guarantee they are easy to understand, bother free and smooth working. Convenience helps in guaranteeing your client doesn't lose enthusiasm for your application and keeps utilizing your application for a more extended period.
      </div>
      <div className='mt-4 orange-text mb-2'>
      Documentations and Testing
      </div>
      <div className='grey-text mb-3 mt-2'>
      Each Mobile App created by SungrowTechnologies is mindfully outlined, reported and created to guarantee all phases of your business are caught and given equivalent significance.
      </div>
    </div>
    </div>
</div>
      </div>
    </div>

  )
}

export default MobileApplication