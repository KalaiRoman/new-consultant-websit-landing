import React from 'react'
import Slider from "react-slick";
import './Home1.scss';
import { slider1,slider2 } from '../../../../assests/images';
import SlideNextArrow from './slidenextarrow/SlideNextArrow';
import SlidePreArrow from './slideprearrow/SlidePreArrow';
import { useNavigate } from 'react-router-dom';
function Homepage1() {

  const history=useNavigate();
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SlideNextArrow />,
        prevArrow: <SlidePreArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className='main-home1'>
        <Slider {...settings}>
      <div className='box' onClick={()=>history("/software-development")}>
        <div>
      <img src={slider1} alt="no image" className='image'/>

        </div>
      <div className='title-section'>
        <div className='lists'>
          <h2>

          Welcome to Microhaze Technologies

          </h2>
        </div>
        <div className='lists'>
          <h1>
          Software Development
          </h1>
        </div>
        <div className='btn-read lists' onClick={()=>history("/software-development")}>
          <div>Read More
          </div>
         <div>
         <i class="fa-solid fa-arrow-right-long"></i>
         </div>
        </div>
      </div>
      </div>
      <div className='box' onClick={()=>history("/sales-force")}>
      <img src={slider2} alt="no image" className='image'/>
      <div className='title-section'>
        <div className='lists '>
          <h2>
          Welcome to Microhaze Technologies
          </h2>
        </div>
        <div className='lists'>
          <h1>
          Software Development
          </h1>
        </div>
        <div className='btn-read lists' onClick={()=>history("/sales-force")}>
          <div>Read More
          </div>
         <div>
         <i class="fa-solid fa-arrow-right-long"></i>
         </div>
        </div>
      </div>
      </div>
    </Slider>
    </div>
  )
}

export default Homepage1