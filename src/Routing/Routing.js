import React, { Suspense } from "react";

import { Route, Routes } from "react-router-dom";
import { Home,Aboutus,Contactus,Careers,Technologies,Services, Software, Softwaredevelopment, It, Cloud, Quality, Mobile, Sales, Javaj2ee, Cybersecurity, Python, Reactjs, Clinicalsas } from "../pages/Pages";


import ClimbingBoxLoader from "react-spinners/ClipLoader";



function Routing() {
  return (
    <div >
         <Suspense
        fallback={
          <div className="loading">
           <ClimbingBoxLoader color="#36d7b7" />
          </div>
        }
      >

<Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aboutus" element={<Aboutus />}></Route>
          <Route path="/contactus" element={<Contactus />}></Route>
          <Route path="/careers" element={<Careers />}></Route>
          <Route path="/sales-force" element={<Sales />}></Route>
          <Route path="/java" element={<Javaj2ee />}></Route>
          <Route path="/cyber-security" element={<Cybersecurity />}></Route>
          <Route path="/python" element={<Python />}></Route>
          <Route path="/reactjs" element={<Reactjs />}></Route>
          <Route path="/clinicalsas" element={<Clinicalsas />}></Route>
          <Route path="/software-development" element={<Softwaredevelopment />}></Route>
          <Route path="/software-testing" element={<Software />}></Route>
          <Route path="/it-staff-augement" element={<It />}></Route>
          <Route path="/cloud-computing" element={<Cloud />}></Route>
          <Route path="/quality-assurance" element={<Quality />}></Route>
          <Route path="/mobile-application" element={<Mobile />}></Route>
          </Routes>
      </Suspense>
    </div>
  )
}

export default Routing