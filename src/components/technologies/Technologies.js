import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import '../services/styles/Service.scss';
import { banner1,banner2,banner3,banner4,banner5,banner6, s1, s2, s3, s4, s5, s6 } from '../../assests/images';
function Technologies() {
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
    {
      id:5,
      name:"ReactJs",
      path:"/reactjs",
      image:s5

    },
    {
      id:6,
      name:"Clinical SAS",
      path:"/clinicalsas",
      image:s6

    },
    

  ]

  const pathNavigate=(path)=>{
   
    history(path);


}
  return (
    <div>
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
<Outlet/>

</div>
      </div>
    </div>
    </div>
  )
}

export default Technologies