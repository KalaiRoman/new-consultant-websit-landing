import React from 'react'
import { Parallax } from 'react-parallax';
import { useNavigate } from 'react-router-dom';
import { bestbg, h1i, h2i, h3i } from '../../../../assests/images';
import './Help.scss';
function Help() {
    const history=useNavigate();
    const arrayData=[
      {
        id:1,
        title:"Microhaze Technologies",
        des:"On Time Delivery",
        des1:"There is a word that project managers and people involved regularly in projects use all the time; it is delivery.",
        image:h1i
      },
      {
        id:2,
        title:"Microhaze Technologies",
        des:"Hard Work Team",
        des1:"Coming together is a beginning. Keeping together is progress. Working together is success.",
        image:h2i

  
      },
      {
        id:3,
        title:"Microhaze Technologies",
        des:"Best Company",
        des1:"Your business software more technologically advanced than your competitors’ software..",
        image:h3i

  
      },
     
      
  
    ]
  return (
    <div className='main-help-box'>
        <Parallax blur={{max: 15 }} bgImage={bestbg} bgImageAlt="the cat" strength={200}>
       <div 
       
       style={{
        width:  "100%",
        color:"black",
        padding:"100px 10px"
    }}>
        
        <div className='our-texts'>
          <h1>
          How we help of your business
          </h1>
          <h1>
Grow and successful

          </h1>
        </div>
        <div className='help-boxs mt-5'>
          {arrayData?.map((item,index)=>{
            return(
              <div className="cardss" key={index} >
              <img src={item?.image} alt="no image" className='card-image-box'/>
            
           <div className='card-inside'>
           <div className='title mb-2 mt-2'>
                {item?.title}
            </div>
            <div className='mt-3 mb-3'>
                <h2>{item?.des}</h2>
            </div>
            <div className='grey-text'>
                {item?.des1}
            </div>
           </div>
              </div>
            )
          })}
        </div>
       </div>
    </Parallax>
    </div>
  )
}

export default Help