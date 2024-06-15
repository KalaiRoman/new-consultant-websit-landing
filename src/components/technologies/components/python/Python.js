import React from 'react'
import { s14 } from '../../../../assests/images'
import { Outlet, useNavigate } from 'react-router-dom'
import '../../../services/styles/Service.scss';
import { s1, s2, s3, s4, s5, s6 } from '../../../../assests/images';
function Python() {
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
<img src={s14} alt="no image" className='cm'/>
      </div>
      <div className='mb-4'>
        <h3>Python</h3>
      </div>
      <div className='grey-text mb-3 mt-2'>
      This platform allows professionals to express core concepts just in fewer lines of code. It is integrated with a dynamic type system and automated memory management. We, at SungrowTechnologies, provide all our programming solutions based on the customized requirements of our valuable clients. Our team of software professionals provides modern programming solutions in the Python programming language. Our Python-based solutions help our clients to meet their business objectives with full assurance.
      </div>
     

      <div className='mt-4 orange-text mb-2'>
      Technologies
      </div>
      <div className='grey-text mb-3 mt-2'>
      Windows, Linux, AWS, Apache, Nginx, Gunicorn, EC2, S3, RDS, ElastiCache, Rackspace, Ubuntu, GAE, FreeBSD, Panda, Numpy, & Scipy 
      </div>

      <div className='mt-4 orange-text mb-2'>
      Frontend
      </div>
      <div className='grey-text mb-3 mt-2'>
      HTML5, CSS3, JavaScript, jQuery, AJAX, XML
      </div>

      <div className='mt-4 orange-text mb-2'>
      Database Management
      </div>
      <div className='grey-text mb-3 mt-2'>
      MySQL, PostgreSQL, MS SQL, GIT, SVN, Cloudscape, Dyanmo DB, Aurora DB, MongoDB, & RDBMS.
      </div>

      <div className='mt-4 orange-text mb-2'>
      Frameworks
      </div>
      <div className='grey-text mb-3 mt-2'>
      Django, CherryPy, Flask, web2py, Nagare, OpenObject, Tornado, Odoo, OAuth 2 & JWT.
      </div>
    </div>
    </div>

</div>
</div>
</div>
  )
}

export default Python