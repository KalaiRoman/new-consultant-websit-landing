import React from 'react'
import './Testinmonial.scss';
import Slider from "react-slick";
import SlideNextArrow from './slidenextarrow/SlideNextArrow';
import SlidePreArrow from './slideprearrow/SlidePreArrow';
import { client1 } from '../../../../assests/images';
function Testinmonials() {
  const settings = {
    dots: true,
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


  const datas=[
    {
      id:1,
      name:"kalai",
      des:"“ Must explain to you how mistaken idea denouncing pleasure &amp; praising pain was born &amp; we will give expound actual human happiness. ”"
    },
    {
      id:1,
      name:"kalai",
      des:"“ Must explain to you how mistaken idea denouncing pleasure &amp; praising pain was born &amp; we will give expound actual human happiness. ”"
    },
    {
      id:1,
      name:"kalai",
      des:"“ Must explain to you how mistaken idea denouncing pleasure &amp; praising pain was born &amp; we will give expound actual human happiness. ”"
    }
  ]
  return (
    <div className='main-testimonials'>
      <div className='inside-main-testmonials'>
<div>
<div className='our-texts mt-5'>
          <h1>
          Our Testimonials
          </h1>
         
        </div>

        <div>
        <Slider {...settings}>
        {datas?.map((item,index)=>{
          return(
            <div className='inside-slide-box-test'>
              <div className='quotes-box'>
                <img src={client1} alt="no image"/>
                <div className='quote-arrow'>
                <i class="fa-solid fa-quote-left"></i>
                </div>
              </div>
              <div className='grey-text mt-2 mb-3'>
                {item?.des}
              </div>
              <div>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
              </div>
              <div className='mt-2 mb-3 name'>
                {item?.name}
              </div>
            </div>
          )
        })}
      </Slider>
        </div>
</div>
      </div>
    </div>
  )
}

export default Testinmonials