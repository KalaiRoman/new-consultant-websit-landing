import React, { Suspense } from "react";

import { Route, Routes } from "react-router-dom";
import { Home,Aboutus,Contactus,Careers,Technologies,Services, Software, Softwaredevelopment, It, Cloud, Quality, Mobile, Sales, Javaj2ee, Cybersecurity, Python, Reactjs, Clinicalsas } from "../pages/Pages";





function Routing() {
  return (
    <div>
         <Suspense
        fallback={
          <div>
            Loaindg...
          </div>
        }
      >

<Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aboutus" element={<Aboutus />}></Route>
          <Route path="/contactus" element={<Contactus />}></Route>
          <Route path="/careers" element={<Careers />}></Route>
          <Route path="" element={<Technologies />}>
          <Route index path="/sales-force" element={<Sales />}></Route>
          <Route exact path="/java" element={<Javaj2ee />}></Route>
          <Route exact path="/cyber-security" element={<Cybersecurity />}></Route>
          <Route exact path="/python" element={<Python />}></Route>
          <Route exact path="/reactjs" element={<Reactjs />}></Route>
          <Route exact path="/clinicalsas" element={<Clinicalsas />}></Route>
          </Route>
          <Route path="" element={<Services/>}>
          <Route index path="/software-development" element={<Softwaredevelopment />}></Route>
          <Route exact path="/software-testing" element={<Software />}></Route>
          <Route exact path="/it-staff-augement" element={<It />}></Route>
          <Route exact path="/cloud-computing" element={<Cloud />}></Route>
          <Route exact path="/quality-assurance" element={<Quality />}></Route>
          <Route exact path="/mobile-application" element={<Mobile />}></Route>



      




          </Route>

       

          </Routes>
      </Suspense>
    </div>
  )
}

export default Routing