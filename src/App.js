import React from 'react'
import './App.scss';
import Routing from './Routing/Routing';
import Footer from './middleware/footer/Footer';
import Middleheader from './middleware/header/middleheader/Middleheader';
import BootomHeader from './middleware/header/bottomheader/BootomHeader';
import MobileHeader from './middleware/header/mobileheader/MobileHeader';
function App() {
  return (
    <div>
      <div className='d-none d-lg-block'>
<Middleheader/>
<BootomHeader/>
      </div>
      <div className='d-block d-lg-none'>
        <MobileHeader/>
      </div>
      <div>
      <Routing/>
      </div>
      <div>
<Footer/>
      </div>
    </div>
  )
}

export default App
