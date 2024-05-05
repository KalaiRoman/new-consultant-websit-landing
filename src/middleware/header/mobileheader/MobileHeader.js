import React,{useState} from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import './styles/Mobileheader.scss';
import { useNavigate } from 'react-router-dom';

function MobileHeader() {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);

    const [indexs,setIndex]=useState(0);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)
    const router=window.location.pathname;
    const history=useNavigate()

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
          path:"/services",
    
          arrayData:[
            {
              id:1,
              name:"Software Development",
              path:""
            },
            {
              id:2,
              name:"Software Testing",
              path:""
            },
            {
              id:3,
              name:"IT Staff Augment",
              path:""
            },
            {
              id:4,
              name:"Cloud Computing",
              path:""
            },
            {
              id:5,
              name:"Quality Assurance",
              path:""
            },
            {
              id:6,
              name:"Mobile Application",
              path:""
            },
            
    
          ]
        },
        {
          id:4,
          name:"Technologies",
          path:"/technologies",
          arrayData:[
            {
              id:1,
              name:"salesforce",
              path:""
            },
            {
              id:2,
              name:"Java/J2EE",
              path:""
            },
            {
              id:3,
              name:"Cyber Security",
              path:""
            },
            {
              id:4,
              name:"Python",
              path:""
            },
            {
              id:5,
              name:"ReactJs",
              path:""
            },
            {
              id:6,
              name:"Clinical SAS",
              path:""
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
      ];
      const pathNavigate=(path,index)=>{

        if(path==="/services" || path==="/technologies")
        {
          setShow1(!show1)
          setIndex(index)
        }
        else{
          history(path);
          setShow(false)

    
        }
      }
  return (
    <div className='mobile-header-section'>
        <div className='left-mobile-header'>
            Logo
        </div>
        <div className='right-mobile-header' onClick={handleShow}>
        <i class="fa-solid fa-bars"></i>
        </div>
        <div>
        <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Mobile Header</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         <div>
         {data?.map((item,index)=>{
    return(
      <div key={index} className='box-shows' onClick={()=>pathNavigate(item?.path,index)}>
       
       <div className={router===item?.path?'activepaths':"inactivepaths"}>
       {item?.name} {item?.arrayData?.length>0?<>{index===indexs?<i class="fa-solid fa-angle-up"></i>:<i class="fa-solid fa-angle-down"></i>}</>:null}

       </div>
        <div className={show1 && item?.arrayData?.length>0 && indexs===index?"shows":"hides"}>
{item?.arrayData?.map((items,indexss)=>{
  return(
    <div key={indexss} className='border-lists'>
      {items?.name}
    </div>
  )
})}
        </div>
      </div>
    )
  })}
         </div>
        </Offcanvas.Body>
      </Offcanvas>
        </div>
    </div>
  )
}

export default MobileHeader