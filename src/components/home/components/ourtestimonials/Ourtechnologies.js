import React from 'react'
import './Ourtechono.scss';
import { four, one, three, two } from '../../../../assests/images';
function Ourtechnologies() {
    const arrayData=[
        {
          id:1,
          name:"Salesforce",
          path:"/software-development",
          image:one,
          title:"Salesforce.com is the customer success platform of choice for many organizations, when it comes. "
        },
        {
          id:2,
          name:"Java/J2EE",
          path:"/software-testing",
          image:two,
          title:"SungrowTechnologies service offerings in Java technology span across architecture definition, assessment."
    
        },
        {
          id:3,
          name:"Cyber Security",
          path:"/it-staff-augement",
          image:three,
          title:"An IT security audit goes beyond deploying just a firewall. It identifies real-time risks that can compromise confidentiality."
    
        },
        {
          id:4,
          name:"Python",
          path:"/cloud-computing",
          image:four,
          title:"This platform allows professionals to express core concepts just in fewer lines of code. It is integrated with a dynamic type system."
        }
      ]
  return (
    <div className='main-our'>
<div className='inside-our-tech'>
<div className='left-our-tech'>
<div className='our-texts1'>
Our Technologies
</div>
<div className='mt-5'>
SungrowTechnologies is committed to making your business software more technologically advanced than your. Utilizing leading edge collaboration software, SungrowTechnologies delivers an integrated suite of world-class enterprise applications that are affordable, scalable and manageable.
</div>
<div className='read-more-button mt-5'>
    READ MORE <span><i class="fa-solid fa-arrow-right"></i></span>
</div>
</div>
<div className='right-our-tech'>
<div>
   <div className='inside-right-tech row '>
   {arrayData?.map((item,index)=>{
        return(
            <div className='boxlisst mb-4 mt-4'>
               
               <div className='left-boxess'>
<img src={item?.image} alt="no image" className='icon-boxess'/>
               </div>
               <div className='right-boxess'>
<div className='bttitle'>
    {item?.name}
</div>
<div className='mt-3 mb-3'>
    {item?.title}
</div>
               </div>
                
            </div>
        )
    })}
   </div>
</div>
</div>
</div>
    </div>
  )
}

export default Ourtechnologies