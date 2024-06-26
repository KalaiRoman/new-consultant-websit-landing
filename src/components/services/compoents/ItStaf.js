import React from 'react'
import { staffimage } from '../../../assests/images'
import { cloudimage } from '../../../assests/images'
import { Outlet, useNavigate } from 'react-router-dom'
import '../styles/Service.scss';
import { banner1,banner2,banner3,banner4,banner5,banner6 } from '../../../assests/images';
function ItStaf() {
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
       <div className='mt-3 mb-3'>
<img src={staffimage} alt="no image" className='cm'/>
      </div>
      <div>
        <h3>IT Staff Augment</h3>
      </div>
      <div className='grey-text mb-3 mt-2'>
      Every organization today requires skilled resources on demand and craves for cost effective resource utilization. However, the challenge is to find competitively priced, skilled resources with the right domain expertise within a short duration.
      </div>
      <div className='grey-text mb-3 mt-2'>
      Our Resource Augmentation services provide skilled personnel to work under your direction to help you develop, maintain, manage and support your applications. Our skilled application professionals can help you manage fluctuating skill needs, skills gaps and changing staffing needs to meet your aggressive project timelines. Our resources are experienced and certified in key technologies and work with you on-site or remote, depending on your requirement.
      </div>

      <div className='mt-3 d-flex ms-3 gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        Business Analysts
        </div>
      </div>

      <div className='mt-3 d-flex ms-3 gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        Project Managers
        </div>
      </div>

      <div className='mt-3 d-flex ms-3 gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        Technical Leads
        </div>
      </div>
      <div className='mt-3 d-flex ms-3 gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        Developer / Sr. Developers
        </div>
      </div>
      <div className='mt-3 d-flex ms-3 gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        Web Designers
        </div>
      </div>
      <div className='mt-3 d-flex ms-3 gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        Testing Resources
        </div>
      </div>
      <div className='mt-3 d-flex ms-3 gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        Technical Writers
        </div>
      </div>
      <div className='mt-4 orange-text mb-2'>
      Business Benefits:
      </div>
      <div className='mt-3 d-flex ms-3 gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        Higher resource quality due to stringent, uniform screening and selection process
        </div>
      </div>
      <div className='mt-3 d-flex ms-3 gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        Flexibility in Ramping up and down of resource
        </div>
      </div>
      <div className='mt-3 d-flex ms-3 gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        Increased efficiencies drive a better selection ratio reducing the time to hire
        </div>
      </div>
      <div className='mt-3 d-flex ms-3 gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        Quicker and easier replacements due to resource pipeline
        </div>
      </div>
      <div className='mt-3 d-flex ms-3 gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        Savings on Hiring, Administration, Training and Payroll processing Costs
        </div>
      </div>
    </div>
</div>
      </div>
    </div>
   
   
  )
}

export default ItStaf
