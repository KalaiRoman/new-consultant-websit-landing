import React from 'react'
import { s12 } from '../../../../assests/images'
import { Outlet, useNavigate } from 'react-router-dom'
import '../../../services/styles/Service.scss';
import { s1, s2, s3, s4, s5, s6 } from '../../../../assests/images';
function Javaj2ee() {
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
<img src={s12} alt="no image" className='cm'/>
      </div>
      <div className='mb-4'>
        <h3>Java/J2EE</h3>
      </div>
      <div className='grey-text mb-3 mt-2'>
      SungrowTechnologies service offerings in Java technology span across architecture definition, assessment, application development & maintenance, business process integration and reengineering. SungrowTechnologiesconsultants have deep expertise in developing large and complex transaction processing and database oriented N-tier applications.
      </div>
      <div className='grey-text mb-3 mt-2'>
      You can leverage SungrowTechnologies's Java Excellence Center to leverage industry best practices, architect and designs robust applications to successfully deliver complex enterprise-scale solutions. SungrowTechnologies Java consultants continuously evaluate new technologies and develop best in class offerings for our clients.
      </div>
      <div className='grey-text mb-3 mt-2'>
      SungrowTechnologies's Java/J2EE Center of Excellence (J-CoE) is comprised of an amalgamation of well defined processes, tools and technologies and a team of highly experienced Java consultants that aid in developing solutions for our clients' rapidly evolving business requirements. We use Java/J2EE as an enabling technology to reduce a client's total cost of ownership.
      </div>

      <div className='mt-4 orange-text mb-2'>
      Java Center of Excellence Help You?
      </div>

      <div className='mt-3 d-flex  gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        Design and Develop J2EE based: 
        </div>
      </div>

      <div className='ms-5'>
      <div className='mt-3 d-flex  gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        Enterprise Java Applications
        </div>
      </div>
      <div className='mt-3 d-flex  gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        Software Products 
        </div>
      </div>
      <div className='mt-3 d-flex  gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        e-Business applications and
        </div>
      </div>
      <div className='mt-3 d-flex  gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        Portals
        </div>
      </div>
      </div>

      <div className='mt-3 d-flex  gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        Build collaborative Systems by integrating discrete systems via web services. 
        </div>
      </div>

      <div className='mt-3 d-flex  gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        Build web and mobile applications
        </div>
      </div>

      <div className='mt-3 d-flex  gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        Use Proprietary Frameworks to build scalable solutions that reduce your Total Cost of Ownership
        </div>
      </div>

      <div className='mt-3 d-flex  gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        Build automation into code development, testing and application monitoring and control
        </div>
      </div>

      <div className='mt-3 d-flex  gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        Manage application upgrades
        </div>
      </div>

      <div className='mt-3 d-flex  gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        Develop application interfaces (APIs)
        </div>
      </div>

      <div className='mt-4 orange-text mb-2'>
      Tools, Technologies and Frameworks
      </div>
      <div className='grey-text mb-3 mt-2'>
      SungrowTechnologiesleverages both commercial and inhouse tools and frameworks to rapidly deploy enterprise solutions on J2EE platform.
      </div>

      <div className='mt-4 orange-text mb-2'>
      IBM Websphere
      </div>
      <div className='grey-text mb-3 mt-2'>
      SungrowTechnologieshas expertise on IBM WebSphere technologies developing scalable, secure enterprise-class applications on various WebSphere products helping companies leverage technology to deliver against specific business challenges.
      </div>
    </div>
    </div>

</div>
</div>
</div>
  )
}

export default Javaj2ee