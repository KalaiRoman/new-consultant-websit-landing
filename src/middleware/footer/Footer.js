import React from 'react'
import './styles/Footer.scss';
import { useNavigate } from 'react-router-dom';
function Footer() {

  const history=useNavigate();

  const PathChange=(path)=>{
    history(path);
  }
  return (
    <div className='main-footer-section'>
      <div className='inside-footer-section'>
        <div className='footer-1'>
          <div className='footer-title'>
          About us
          </div>
          <div className='mt-3 mic'>
        Microhaze Technologies, a leading IT service provider in India is proficient in simplifying the client demands with sustainable and personalized IT solutions globally.
        </div>
        </div>
       
        <div className='footer-2'>
        <div className='footer-title mb-3'>
        Services
          </div>
          <div className='box-split mb-3 mt-2' onClick={()=>PathChange("/software-development")}>
            <div>
            <i class="fa-solid fa-circle-arrow-right"></i>
            </div>
            <div>
            Software Development
            </div>
          </div>
          <div className='box-split mb-3 mt-2' onClick={()=>PathChange("/software-testing")}>
            <div>
            <i class="fa-solid fa-circle-arrow-right"></i>
            </div>
            <div>
            Software Testing
            </div>
          </div>
          <div className='box-split mb-3 mt-2' onClick={()=>PathChange("/it-staff-augement")}>
            <div>
            <i class="fa-solid fa-circle-arrow-right"></i>
            </div>
            <div>
            IT Staff Augment
            </div>
          </div>
          <div className='box-split mb-3 mt-2' onClick={()=>PathChange("/cloud-computing")}>
            <div>
            <i class="fa-solid fa-circle-arrow-right"></i>
            </div>
            <div>
            Cloud Computing
            </div>
          </div>
          <div className='box-split mb-3 mt-2' onClick={()=>PathChange("/quality-assurance")}>
            <div>
            <i class="fa-solid fa-circle-arrow-right"></i>
            </div>
            <div>
            Quality Assurance
            </div>
          </div>
          <div className='box-split mb-3 mt-2' onClick={()=>PathChange("/mobile-application")}>
            <div>
            <i class="fa-solid fa-circle-arrow-right"></i>
            </div>
            <div>
            Mobile Application
            </div>
          </div>
        </div>
        <div className='footer-3'>
        <div className='footer-title mb-3'>
        Technologies
          </div>
          <div className='box-split mb-3 mt-2' onClick={()=>PathChange("/sales-force")}>
            <div>
            <i class="fa-solid fa-circle-arrow-right"></i>
            </div>
            <div>
            Salesforce
            </div>
          </div>
          <div className='box-split mb-3 mt-2' onClick={()=>PathChange("/java")}>
            <div>
            <i class="fa-solid fa-circle-arrow-right"></i>
            </div>
            <div>
            Java/J2EE
            </div>
          </div>
          <div className='box-split mb-3 mt-2' onClick={()=>PathChange("/cyber-security")}>
            <div>
            <i class="fa-solid fa-circle-arrow-right"></i>
            </div>
            <div>
            Cyber Security
            </div>
          </div>
          <div className='box-split mb-3 mt-2' onClick={()=>PathChange("/python")}>
            <div>
            <i class="fa-solid fa-circle-arrow-right"></i>
            </div>
            <div>
            Python
            </div>
          </div>
          <div className='box-split mb-3 mt-2' onClick={()=>PathChange("/reactjs")}>
            <div>
            <i class="fa-solid fa-circle-arrow-right"></i>
            </div>
            <div>
            ReactJS
            </div>
          </div>
          <div className='box-split mb-3 mt-2' onClick={()=>PathChange("/clinicalsas")}>
            <div>
            <i class="fa-solid fa-circle-arrow-right"></i>
            </div>
            <div>
            Clinical SAS
            </div>
          </div>
        </div>
        <div className='footer-4'>
        <div className='footer-title mb-3'>
        Get In Touch
          </div>
          <div className='box-split-last'>
            <div className='icon-color'>
            <i class="fa-solid fa-house"></i>
            </div>
            <div>

            Corporate Office
Level 3, 824, HRBR Layout, Block I Extension, Kalyan Nagar, Bengaluru, Karnataka - 560 043.

            </div>
          </div>
          <div className='box-split-last'>
            <div className='icon-color'>
            <i class="fa-solid fa-phone"></i>
            </div>
            <div>

            Reach Us
080-46837130

            </div>
          </div>
          <div className='box-split-last'>
            <div className='icon-color'>
            <i class="fa-solid fa-envelope"></i>
            </div>
            <div>

            Email
hr@microhaze.com

            </div>
          </div>
          <div className='follow-text'>
            FOLLOW US : <span>
  <i class="fa-brands fa-twitter"></i>

            </span>
            <span>
  <i class="fa-brands fa-facebook-f"></i>

            </span>
            <span>
  <i class="fa-brands fa-instagram"></i>

            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer