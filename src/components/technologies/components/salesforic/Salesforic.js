import React from 'react'
import { s11 } from '../../../../assests/images'
import { Outlet, useNavigate } from 'react-router-dom'
import '../../../services/styles/Service.scss';
import { s1, s2, s3, s4, s5, s6 } from '../../../../assests/images';
function Salesforic() {
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
      <div className='mt-3 mb-3'>
<img src={s11} alt="no image" className='cm'/>
      </div>
      <div className='mb-4'>
        <h3>Salesforce</h3>
      </div>
      <div className='grey-text mb-3 mt-2'>
      Salesforce.com is the customer success platform of choice for many organizations, when it comes to getting the most out of this powerful tool, experience matters. SungrowTechnologies Salesforce practice helps clients get the best out of their investments. We offer Implementation, Customization, Integration, and Maintenance services for Salesforce Sales Cloud, Services Cloud, Community Cloud and Marketing Cloud. We have deep expertise in Salesforce custom application development using Force.com and in building mobile applications.
      </div>
      <div className='grey-text mb-3 mt-2'>
      Salesforce.com is the customer success platform of choice for many organizations, when it comes to getting the most out of this powerful tool, experience matters. Klaren Salesforce practice helps clients get the best out of their investments.
      </div>
      <div className='grey-text mb-3 mt-2'>
      We offer Implementation, Customization, Integration, and Maintenance services for Salesforce Sales Cloud, Services Cloud, Community Cloud and Marketing Cloud.
      </div>

      <div className='mt-4 orange-text mb-2'>
      Service Offerings
      </div>
      <div className='grey-text mb-3 mt-2'>
      We offer Implementation, Integration and Support services to address the business requirements of our customers. Our unique value-based approach where end-users are brought in at the end of each element ensures that feedback is incorporated as we go along, and there are no surprises at go-live.
      </div>

      <div className='mt-4 orange-text mb-2'>
      Expertise Offerings
      </div>
      <div className='grey-text mb-3 mt-2'>
      We offer Sales Cloud, Services Cloud, Community Cloud and Marketing Cloud expertise to our customers. Capabilities include: Business process modeling in Salesforce, Workflow management through triggers, Workflow processes, Public groups, Sharing rule creation and deploying templates (emails/ letterheads), workflows and approvals, reports and dashboards.
      </div>
    </div>

</div>
</div>
</div>
  )
}

export default Salesforic