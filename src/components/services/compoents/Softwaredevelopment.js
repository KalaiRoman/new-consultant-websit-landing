import React from 'react'
import { softwareimage } from '../../../assests/images'
import { Outlet, useNavigate } from 'react-router-dom'
import '../styles/Service.scss';
import { banner1,banner2,banner3,banner4,banner5,banner6 } from '../../../assests/images';
function Softwaredevelopment() {
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
<img src={softwareimage} alt="no image" className='cm'/>
      </div>
      <div>
        <h3>Software Development</h3>
      </div>
      <div className='grey-text mb-3 mt-2'>
      SungrowTechnologies delivers cost effective and reliable software development services, from total solution configuration, software development, e-com solutions, e-service implementation & maintenance as per customer needs.
      </div>
      <div className='grey-text mt-2'>
      We are not just another software development or web design company. We know that success involves a lot more than just being competent in a specific language or application development tool. Our success comes from thorough analysis of specifications, well established test-driven development process, expert management, and strong experience with the latest technologies. We are a company dedicated to quality, a company that will always provide greatest return on investment.
      </div>
      <div className='mt-4 orange-text mb-2'>
      .NET Software Development
      </div>
      <div className='grey-text mt-2 mb-3'>
      SungrowTechnologies has completed a number of successful .NET projects for our customers. By using .NET technologies we make sure that our customers get the most advantages from this choice.Our .NET team of developers develops and delivers comprehensive solutions utilizing the full range of .NET functionality.
      </div>
      <div className='mt-4 orange-text mb-2'>
      PHP Software Development
      </div>
      <div className='grey-text mt-2 mb-3'>
      PHP is widely used for developing dynamic, database-driven web pages. SungrowTechnologies has completed a number of successful projects using PHP & MySQL. Our dedicated team of PHP engineers will develop reliable and scalable solutions as per your requirements.
      </div>
      <div className='mt-4 orange-text mb-2'>
      JAVA Development
      </div>
      <div className='grey-text mt-2 mb-3'>
      Our team of developers provide solutions by using and implementing Java technology. JSP, J2EE migration, the Struts Framework or Java Swing.
      </div>
      <div className='mt-3 d-flex ms-3 gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        Quick, cost-effective development cycle
        </div>
      </div>
      <div className='mt-2 d-flex ms-3 gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        Experience across a broad range of industries
        </div>
      </div>
      <div className='mt-2 d-flex ms-3 gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        Large library of component code
        </div>
      </div>
      <div className='mt-2 d-flex ms-3 gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        Efficient management structure
        </div>
      </div>
      <div className='mt-2 d-flex ms-3 gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        Comprehensive suite of services
        </div>
      </div>
    </div>

</div>
</div>
</div>
  )
}

export default Softwaredevelopment
