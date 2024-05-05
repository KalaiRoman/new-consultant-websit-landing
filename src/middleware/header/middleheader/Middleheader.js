import React from 'react'
import './styles/Middleheader.scss';
function Middleheader() {
  return (
    <div className='middle-main-header'>
      <div className='inside-middle-header'>
<div className='d-flex gap-2 cursor icon'>
  <span><i class="fa-regular fa-envelope"></i></span> Poovarasan@gmail.com
</div>
<div className='right-middle-header'>
  <div className='d-flex gap-2 cursor'>
  <span><i class="fa-solid fa-phone"></i></span>Call us at: +91  8778377119
  </div>
  <div>
    |
  </div>
  <div className='cursor icon'>
  <i class="fa-brands fa-twitter"></i>
  </div>
  
  <div className='cursor icon'>
  <i class="fa-brands fa-facebook-f"></i>
  </div>
  <div className='cursor icon'>
  <i class="fa-brands fa-instagram"></i>
  </div>
</div>
      </div>
    </div>
  )
}

export default Middleheader
