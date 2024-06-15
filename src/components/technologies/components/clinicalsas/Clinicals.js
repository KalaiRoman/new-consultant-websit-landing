import React from 'react'
import { s16 } from '../../../../assests/images'
import { Outlet, useNavigate } from 'react-router-dom'
import '../../../services/styles/Service.scss';
import { s1, s2, s3, s4, s5, s6 } from '../../../../assests/images';
function Clinicals() {
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
<img src={s16} alt="no image" className='cm'/>
      </div>
      <div className='mb-4'>
        <h3>Clinical SAS</h3>
      </div>
      <div className='grey-text mb-3 mt-2'>
      SAS Clinical / Clinical SAS is the application of SAS technology to clinical domain for clinical trial data analysis in pharmaceutical/biotech and clinical research companies.Familiarity with clinical trial aspects combined with knowledge of SAS can lead to a challenging and rewarding career that also positively impacts & transforms patient's lives.
      </div>

      <div className='grey-text mb-3 mt-2'>
      Our dedicated team has vast experience in coordinating phase trials on both national and international scales. We can perform all stages of clinical trials – from feasibility to final study report – to the highest quality standards.
      </div>

      <div className='grey-text mb-3 mt-2'>
      We have wide therapeutic experience, excellent cooperation with site staff, and in-depth knowledge of local requirements. Our core expertise and focus is in the South and South East Asia, however we are able to cover the whole of Asia and many other countries through our partner CROs. Our resourcing model provides both the flexibility and local knowledge of each country that the study requires.
      </div>

      <div className='grey-text mb-3 mt-2'>
      Monitor plays a significant role to ensure the project success. As a company commitment to Clinical Research Excellence, we designed the role of our monitors to go beyond, than simply meeting the technical accuracy demanded by the research.
      </div>
      </div>
    </div>
</div>
</div>
</div>
  )
}

export default Clinicals