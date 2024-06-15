import React from 'react'
import { testingimage } from '../../../assests/images'
import { Outlet, useNavigate } from 'react-router-dom'
import '../styles/Service.scss';
import { banner1,banner2,banner3,banner4,banner5,banner6 } from '../../../assests/images';
function SoftwareTest() {
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
<img src={testingimage} alt="no image" className='cm'/>
      </div>
      <div>
        <h3>Software Testing</h3>
      </div>
      <div className='grey-text mb-3 mt-2'>
      SungrowTechnologies uses a risk-based prioritization approach to get to the right answers and overcome the top reasons for failure. We focus on defect prevention by designing test strategies around the entire development lifecycle and implementing optimized test plans.
      </div>
      <div className='grey-text mt-2'>
      We have a responsive and agile mindset that provides a focused "will succeed" approach to each engagement resulting in customer satisfaction and repeat business. We have a proven track record of delivering on-time and on-budget fixed bid projects.
      </div>
      <div className='mt-4 orange-text mb-2'>
      Outsourced Product Development and IT Services
      </div>
      <div className='grey-text mt-2 mb-3'>
      SungrowTechnologies engineering arm is known for Outsourced Product Development and IT Services. The group provides full-spectrum software product development services to help organizations leverage leading-edge technologies for business improvement.
      </div>
      <div className='mt-4 orange-text mb-2'>
      End-to-End software development services include:
      </div>
      <div className='mt-3 d-flex ms-3 gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        Outsourced Product Development
        </div>
      </div>
      <div className='mt-2 d-flex ms-3 gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        IT Services
        </div>
      </div>
      <div className='mt-2 d-flex ms-3 gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        Resource Augmentation
        </div>
      </div>
      <div className='grey-text mt-2 mb-3'>
      As a proactive Outsourced Product Development & IT Services partner, we empower our global clients with optimal solutions through our focused Competency Centers.
      </div>
     
      <div className='mt-4 orange-text mb-2'>
      Product Re-engineering and Migration
      </div>
      <div className='grey-text mt-2 mb-3'>
      SungrowTechnologies provides Product Re-engineering and Migration services. Our re-engineering & migration services include product and application re-engineering, technology migration, and OS migration services.
      </div>

      <div className='mt-4 orange-text mb-2'>
      Product Re-engineering Services
      </div>
      <div className='grey-text mt-2 mb-3'>
      With product re-engineering services, we help you evaluate customer needs, visualize product roadmap, re-architect the product and develop it using newer technologies.
      </div>
     
      <div className='mt-4 orange-text mb-2'>
      Technology Migration Services
      </div>
      <div className='grey-text mt-2 mb-3'>
      We also offer technology migration services, where we follow a well-defined re-engineering process. To ensure scalability of products, we help customers in migrating their legacy applications to latest technologies.
      </div>
     
    </div>
    </div>
</div>
</div>
</div>

  )
}

export default SoftwareTest