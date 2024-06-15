import React from 'react'
import { qualityimage } from '../../../assests/images'
import { Outlet, useNavigate } from 'react-router-dom'
import '../styles/Service.scss';
import { banner1,banner2,banner3,banner4,banner5,banner6 } from '../../../assests/images';
function QualityAssurance() {
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
<img src={qualityimage} alt="no image" className='cm'/>
      </div>
      <div>
        <h3>
        Quality Assurance
        </h3>
      </div>
      <div className='grey-text mb-3 mt-2'>
      In software development, validation and verification take up 40 % of the effort, time and resources. Testing, as a major component of these activities, must ensure quality and cost-effectiveness to provide a good return on investment over the long term. The quality of testing can be improved by adopting a systematic testing approach, whereas cost-effectiveness can be improved by test automation and by using offshore services.
      </div>
      


      <div className='mt-4 orange-text mb-2'>
      We help you out in:
      </div>
      <div className='mt-3 d-flex ms-3 gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        White-box and black-box testing
        </div>
      </div>
      <div className='mt-3 d-flex ms-3 gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        Alpha, Beta, and Gamma testing
        </div>
      </div>
      <div className='mt-3 d-flex ms-3 gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        Regression testing
        </div>
      </div>
      <div className='mt-3 d-flex ms-3 gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        Building test cases, suites, scripts and scenarios
        </div>
      </div>
      <div className='mt-3 d-flex ms-3 gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        Overcoming time-to-market constraints on new releases of products or application suites
        </div>
      </div>
      <div className='mt-3 d-flex ms-3 gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        Your special needs like performance benchmarking and volume/stress testing
        </div>
      </div>
      <div className='mt-3 d-flex ms-3 gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        Improvements that are possible in your existing testing processes, tools and techniques
        </div>
      </div>
      <div className='mt-4 orange-text mb-2'>
      Testing Services
      </div>
      <div className='grey-text mb-3 mt-2'>
      At SungrowTechnologies, we strive to derive quality in your web and mobile applications by aligning our dedicated team of software testers to create an end-to-end process to ensure a secure online presence of your business.
      </div>
      <div className='grey-text mb-3 mt-2'>
      Our state-of-the-art Software Testing Services are designed with a solitary motive to reach client’s expectations. We put together test cases, test executions, defect analysis, bug reporting, risk assessment all together to deliver flawless end products.
      </div>
      <div className='mt-4 orange-text mb-2'>
      Functional Testing Services
      </div>
      <div className='grey-text mb-3 mt-2'>
      Functional testing is more of a specification based testing where our expert testers make sure that your web/mobile application meets the functional expectations for an enhanced user experience.
      </div>
      <div className='mt-4 orange-text mb-2'>
      Performance Testing Services
      </div>
      <div className='grey-text mb-3 mt-2'>
      Our performance testers ensure that the end product delivered is highly responsive, intuitive, reliable and extensively scalable. A comprehensive analysis is done over product improvements and production readiness. 
      </div>
    </div>
</div>
</div>
</div>
  )
}

export default QualityAssurance
