import React from 'react'
import './styles/Contact.scss';
import { contactbanner } from '../../assests/images';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
function Contactus() {
  return (
    <div className='main-contact'>
      <div className='inside-contact-main'>
        <div>
          <img src={contactbanner} alt="no image" className='carrer-banner-image'/>
          <div className='abouts-texts'>
   <h1>Contact Us</h1>
   <div>
    HOME {">"} CONTACT US
   </div>
  </div>
        </div>
        
        <div className='split-contact'>
         <div className='left-contact'>
<div className='mb-4'>
<h3>Keep in touch with us</h3>
</div>
<div>
<Row>
  <Col xs={12} lg={6}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter Name" className='form-box'/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
  </Col>
  <Col xs={12} lg={6}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter Email" className='form-box'/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
  </Col>
</Row>
<Row>
  <Col xs={12} lg={6}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter Phone" className='form-box' />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
  </Col>
  <Col xs={12} lg={6}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter Subject" className='form-box'/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
  </Col>
</Row>
<Row>
  <Col xs={12}>
  <FloatingLabel controlId="floatingTextarea2" label="Your Message">
        <Form.Control
          as="textarea"
          placeholder="Your Message"
          style={{ height: '120px' }}
        />
      </FloatingLabel>
  </Col>
</Row>
<div className='send-button mt-4'>
  <div>
  Send Message

  </div>
  <div>
  <i class="fa-solid fa-arrow-right"></i>

  </div>
</div>
</div>
         </div>
         <div className='right-contact'>
<div className='mb-4'>
  <h3>
Contact Details

  </h3>
</div>
<div className='reach-text'>
Reach out to us for questions and feedback. ... For more specific questions and contact details,
</div>
<div className='split-box-contact mt-4'>
  <div>
  <i class="fa-solid fa-location-dot"></i>
  </div>
  <div>
  201, NTR residency, Chembanahalli village, Sarjapura Road , Bangalore 562125
  </div>
</div>
<div className='split-box-contact'>
  <div>
  <i class="fa-solid fa-phone"></i>
  </div>
  <div>
  080-46837130
  </div>
</div>
<div className='split-box-contact'>
  <div>
  <i class="fa-solid fa-envelope"></i>
  </div>
  <div>
  hr@microhaze.com
  </div>
</div>
         </div>
        </div>
        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497700.1123260245!2d77.30126801478288!3d12.95379020059968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1714888764423!5m2!1sen!2sin" width="100%" height="500px" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contactus
