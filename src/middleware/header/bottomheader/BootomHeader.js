import React, { useState } from 'react'
import './BootomHeader.scss';
import { useNavigate } from 'react-router-dom'
import { logo } from '../../../assests/images';
export default function BootomHeader() {
  const router=window.location.pathname;
  const history=useNavigate()
  const [show,setShow]=useState(false);
  const [indexs,setIndex]=useState(0);
  const data=[
    {
      id:1,
      name:"Home",
      arrayData:[],
      path:"/"
    },
    {
      id:2,
      name:"About Us",
      arrayData:[],
      path:"/aboutus"
    },
    {
      id:3,
      name:"Services",
      arrayData:[
        {
          id:1,
          name:"Software Development",
          paths:"/software-development"
        },
        {
          id:2,
          name:"Software Testing",
          paths:"/software-testing"
        },
        {
          id:3,
          name:"IT Staff Augment",
          paths:"/it-staff-augement"
        },
        {
          id:4,
          name:"Cloud Computing",
          paths:"/cloud-computing"
        },
        {
          id:5,
          name:"Quality Assurance",
          paths:"/quality-assurance"
        },
        {
          id:6,
          name:"Mobile Application",
          paths:"/mobile-application"
        },
        

      ]
    },
    {
      id:4,
      name:"Technologies",
      arrayData:[
        {
          id:1,
          name:"salesforce",
          paths:"/sales-force"
        },
        {
          id:2,
          name:"Java/J2EE",
          paths:"/java"
        },
        {
          id:3,
          name:"Cyber Security",
          paths:"/cyber-security"
        },
        {
          id:4,
          name:"Python",
          paths:"/python"
        },
        {
          id:5,
          name:"ReactJs",
          paths:"/reactjs"
        },
        {
          id:6,
          name:"Clinical SAS",
          paths:"/clinicalsas"
        },
        

      ]
    },
    {
      id:5,
      name:"Careers",
      path:"/careers",
      arrayData:[
       
      ]
    },
    {
      id:6,
      name:"Contact Us",
      path:"/contactus",
      arrayData:[
       
      ]
    }
  ]
  const pathNavigate=(path)=>{

      history(path);
  }
 
  const pathNavigatechild=(path)=>{
    window.location.replace(path);
  }
  return (
    <div className='main-bottom-header' onMouseLeave={()=>{
      setShow(false)
      setIndex(0)
    }}>
      <div className='middle-header-bottom-section'>
<div className='middle-header-bottom-left cursor' onClick={()=>pathNavigate("/")}>
  <img src={logo} alt="no image" className='logo1'/>
 {/* <span className='s'> S</span>ungrow <br/> <span className='s'>C</span>onsulting <span className='s'>S</span>ervices */}
</div>
<div className='middle-header-bottom-middle' >

  {data?.map((item,index)=>{
    return(
      <div key={index} className='box-show' onMouseOverCapture={()=>{
        if(item?.arrayData?.length>0)
        {
          setShow(true);
          setIndex(index)
        }
        else{
          setShow(false);
          setIndex(index)

        }
      }} onClick={()=>pathNavigate(item?.path)}>
       
       <div className={router===item?.path?'activepath':"inactivepath"}>
       {item?.name} {item?.arrayData?.length>0?<>{index===indexs?<i class="fa-solid fa-angle-up"></i>:<i class="fa-solid fa-angle-down"></i>}</>:null}

       </div>
        <div className={show && item?.arrayData?.length>0 && indexs===index?"show":"hide"}>
{item?.arrayData?.map((items,indexss)=>{
  return(
    <div key={indexss} className='border-lists' onClick={()=>pathNavigatechild(items?.paths)}>
      {/* <a className='a' href={items?.path}>{items?.name}</a> */}
      {items?.name}
    </div>
  )
})}
        </div>
      </div>
    )
  })}
</div>


      </div>
    </div>
  )
}
