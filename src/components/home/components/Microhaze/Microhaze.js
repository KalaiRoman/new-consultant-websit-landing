import React from 'react'
import './Micro.scss';
import { aboutmen, app1, app2, app3, type1, type2 } from '../../../../assests/images';
function Microhaze() {

    const arrayData=[
        {
          id:1,
          title:"Our Strategy",
          des:"To provide complete, competitive and sustainable solutions IT challenges. We aim to simplify.",
          image:app1
        },
        {
          id:2,
          title:"Our Mission",
          des:"Provide custom, secure, reliable and scalable IT solutions based on clients' business and environment.",
          image:app2
  
    
        },
        {
          id:3,
          title:"Our Achievements",
          des:"Implementation with Intellect and Ideas yields an Ideal Solution. Sustainability, Integrity and Quality.",
          image:app3
  
    
        },
       
        
    
      ]

      const arrayData1=[
        {
          id:1,
          title:"Satisfied Clients",
          des:"Always give people more than they expect to get. “The single most important thing is to make people happy.",
          image:type1
        },
        {
          id:2,
          title:"Best Quality",
          des:"Quality means doing it right when no one is looking.",
          image:type2
        }
      
      ]
  return (
    <div className='main-Sungrow'>
<div className='inside-main-Sungrow'>
    <div className='common-inside-section'>
    <div className='mic-box'>
        {arrayData?.map((item,index)=>{
            return(
                <div className='mic-cards'>
                    <div className='first-box-mic'>
<div className='first-left'>
<img src={item?.image} alt="no image"/>
</div>
<div className='first-right'>
<div>STEP 0{index+1}</div>
<div >
  {item?.title}
</div>
</div>
                    </div>
                    <div className='second-box-mic'>
<div className='grey-text'>
  {item?.des}
</div>

<div className='mt-5'>
  READ MORE <span><i class="fa-solid fa-arrow-right"></i></span>
</div>
<div className='number-box'>
  0{index+1}
</div>
</div>
                </div>
            )
        })}
    </div>
    </div>
    
    <div className='micro-box mt-4'>
  <div className='left-micro-box'>
    <div className='career-firsts'>
      <h3>

    Sungrow Technologies

      </h3>
    </div>
    <div className='grey-text mt-5'>
    SungrowTechnologies is a global company specializing in software product and technology. SungrowTechnologies offers customized software product and IT services. We provide "cutting- edge" solutions that deliver competitive advantage to our valued clients. Our disciplined management techniques, domain knowledge and holistic approach constantly develop ways to enhance value to our clients. 
    </div>
    <div>
      {arrayData1?.map((items,index)=>{
        return(
          <div className='mic-sat1 mb-3 mt-5'>
            <div className='mic-sat11'>
<img src={items?.image} alt="no image"/>
            </div>
            <div className='mic-sat12'>
<div>
  <h5>{items?.title}</h5>
</div>
<div className='grey-text'>
  {items?.des}
</div>
            </div>

          </div>
        )
      })}
    </div>
  </div>
  <div className='right-micro-box'>
    <img src={aboutmen}  alt="no image"
    className='about-imag'
    />
  </div>

</div>
</div>

    </div>
  )
}

export default Microhaze