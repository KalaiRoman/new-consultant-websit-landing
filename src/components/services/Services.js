import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import './styles/Service.scss';
import { banner1,banner2,banner3,banner4,banner5,banner6 } from '../../assests/images';
function Services() {

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
<Outlet/>

</div>
      </div>
    </div>
  )
}

export default Services
