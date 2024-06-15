import React from 'react'
import { cloudimage } from '../../../assests/images'
import { Outlet, useNavigate } from 'react-router-dom'
import '../styles/Service.scss';
import { banner1,banner2,banner3,banner4,banner5,banner6 } from '../../../assests/images';
function CloudComputing() {
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
<img src={cloudimage} alt="no image" className='cm'/>
      </div>
      <div>
        <h3>
        Cloud Computing
        </h3>
      </div>
      <div className='grey-text mb-3 mt-2'>
      The objective of Cloud Computing is to enable clients to take beneﬁt from these advancements, without the requirement for profound information about or mastery with every single one of them. Cloud execution is an intricate procedure and its numerous choices have prompted perplexity about how to actualize Cloud reasonably. IT and business groups take after various methodologies for Cloud execution. An IT group's essential test is to enhance productivity by building and mechanizing framework without bargaining security and administrative consistence needs.
      </div>
      <div className='grey-text mb-3 mt-2'>
      The business group, then again, would like to actualize Cloud rapidly to dispatch propelled business frameworks and augment business esteem. Henceforth, SungrowTechnologies utilize Cloud figuring to interface individuals and associations inside, between, and past the mists to the client.
      </div>

      <div className='grey-text mb-3 mt-2'>
      Utilizing our mastery and Industry encounter, ventures can likewise assemble a private Cloud that enhances there profitability and lessens costs. Furthermore, SungrowTechnologies can help specialist co-ops to exploit new business open doors for adapting distributed computing administrations, by offering facilitated benefits on an open Cloud.
      </div>


      <div className='mt-4 orange-text mb-2'>
      Cloud processing administrations
      </div>
      <div className='mt-3 d-flex ms-3 gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        Framework as an administration (IaaS) 
        </div>
      </div>
      <div className='mt-3 d-flex ms-3 gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        Stage as an administration (PaaS) 
        </div>
      </div>
      <div className='mt-3 d-flex ms-3 gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        Programming as an administration (SaaS) 
        </div>
      </div>
      <div className='mt-3 d-flex ms-3 gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        Work area as a Service(DaaS) 
        </div>
      </div>
      <div className='mt-3 d-flex ms-3 gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        Venture Integrated Services on Cloud
        </div>
      </div>
    </div>
</div>
      </div>
    </div>
   
  )
}

export default CloudComputing