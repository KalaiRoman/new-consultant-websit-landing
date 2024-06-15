import React from 'react'
import { s13 } from '../../../../assests/images'
import { Outlet, useNavigate } from 'react-router-dom'
import '../../../services/styles/Service.scss';
import { s1, s2, s3, s4, s5, s6 } from '../../../../assests/images';
function Cybersecurity() {
  const location=window.location.pathname;

  const history=useNavigate();
  const data=[
    {
      id:1,
      name:"salesforce",
      path:"/sales-force",
      image:s1
    },
    {
      id:2,
      name:"Java/J2EE",
      path:"/java",
      image:s2

    },
    {
      id:3,
      name:"Cyber Security",
      path:"/cyber-security",
      image:s3

    },
    {
      id:4,
      name:"Python",
      path:"/python",
      image:s4

    },
    // {
    //   id:5,
    //   name:"ReactJs",
    //   path:"/reactjs",
    //   image:s5

    // },
    // {
    //   id:6,
    //   name:"Clinical SAS",
    //   path:"/clinicalsas",
    //   image:s6

    // },
    

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
{item?.path==location?<> HOME {">"} {"Technologies"} {">"} {item?.name}</>:null}
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
<img src={s13} alt="no image" className='cm'/>
      </div>
      <div className='mb-4'>
        <h3>Cyber Security</h3>
      </div>
      <div className='grey-text mb-3 mt-2'>
      An IT security audit goes beyond deploying just a firewall. It identifies real-time risks that can compromise confidentiality, integrity, or availability of data. From the proactive security of information assets to data encryption services, we provide a holistic approach along with the best technology thus build a sound security strategy to keep business information safe and secure.
      </div>
      

      <div className='mt-4 orange-text mb-2'>
      Our Services
      </div>
      <div className='grey-text mb-3 mt-2'>
      SungrowTechnologies’s security audit services combine the industry expertise with advanced business insights that help you to unlock the power of your data. We ensure the security solutions based on your enterprise are fully dedicated to risk profile and technology landscape
      </div>

      <div className='mt-4 orange-text mb-2'>
      Web Security
      </div>
      <div className='grey-text mb-3 mt-2'>
      The website security audit services will enable your organization to prevent breaches and downtime by protecting your data in the web applications.
      </div>

      <div className='mt-3 d-flex  gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        Security against various web attacks, DDoS & site scraping
        </div>
      </div>

      <div className='mt-3 d-flex  gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        Assess the web applications for vulnerabilities
        </div>
      </div>

      <div className='mt-3 d-flex  gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        Protecting data against unauthorized access/exposure
        </div>
      </div>

      <div className='mt-3 d-flex  gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        Understand the security of apps handling critical data
        </div>
      </div>

      <div className='mt-4 orange-text mb-2'>
      Mobility Security
      </div>
      <div className='grey-text mb-3 mt-2'>
      The mobility security audit offers end-to-end services including application mapping and reverses engineering to identify technical vulnerabilities in your mobile applications.
      </div>

      <div className='mt-3 d-flex  gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        Review mobile app security requirements
        </div>
      </div>

      <div className='mt-3 d-flex  gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        Identify risk with newly built mobile apps
        </div>
      </div>

      <div className='mt-3 d-flex  gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        Eliminate security vulnerabilities
        </div>
      </div>

      <div className='mt-3 d-flex  gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        Uncover gap in existing security defenses
        </div>
      </div>
    </div>
    </div>

</div>
</div>
</div>
  )
}

export default Cybersecurity