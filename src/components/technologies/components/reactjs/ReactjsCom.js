import React from 'react'
import { s15 } from '../../../../assests/images'
import { Outlet, useNavigate } from 'react-router-dom'
import '../../../services/styles/Service.scss';
import { s1, s2, s3, s4, s5, s6 } from '../../../../assests/images';
function ReactjsCom() {
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
<img src={s15} alt="no image" className='cm'/>
      </div>
      <div className='mb-4'>
        <h3>ReactJS</h3>
      </div>
      <div className='grey-text mb-3 mt-2'>
      Build awesome UI with the best ReactJS web development experts! Hire one of the top reactjs development companies in USA, Canada & India! With the help of this open-source framework, ReactJS developers can dive into providing high-end web and mobile app development solutions.
      </div>
     

      <div className='mt-4 orange-text mb-2'>
      Key Features of ReactJS Development Services
      </div>
      <div className='grey-text mb-3 mt-2'>
      When it comes to developing an effortless HTML website/application, ReactJS web development is your guy. The information is easy to understand, hence, it enables teams to work faster. It allows you to create components in the code that can be reused, without rewriting new code. It is highly adaptable as it can be adopted conveniently and easily.
      </div>

      <div className='mt-4 orange-text mb-2'>
      Pros of Using React.JS
      </div>
      <div className='grey-text mb-3 mt-2'>
      The strong sides of React make it a go-to JS library for the SCAND development team.
      </div>

      <div className='mt-3 d-flex  gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        React’s one-way data flow, where properties flow down and actions flow up, allows  building solutions with a well-structured code.
        </div>
      </div>

      <div className='mt-3 d-flex  gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        React’s Server Side Rendering makes web apps great for search engines.
        </div>
      </div>

      <div className='mt-3 d-flex  gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        Other than knowledge of JSX syntax and the library itself there are no special skills needed to code using React.
        </div>
      </div>

      <div className='mt-3 d-flex  gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        React.js is Open Source with an active 1100+ community of contributors.
        </div>
      </div>

      <div className='mt-3 d-flex  gap-2 grey-text'>
        <div>
        <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div>
        Additional library Redux works as a predictable container for application state. It makes a code more intuitive and protects it from misuse.
        </div>
      </div>
      
    </div>
    </div>

</div>
</div>
</div>
  )
}

export default ReactjsCom