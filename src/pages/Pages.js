import {  lazy } from "react";

const Home = lazy(() =>
  import("../components/home/Home")
);
const Aboutus = lazy(() =>
  import("../components/Aboutus/Aboutus")
);
const Contactus = lazy(() =>
  import("../components/contactus/Contactus")
);
const Careers = lazy(() =>
  import("../components/careers/Careers")
);
const Technologies = lazy(() =>
  import("../components/technologies/Technologies")
);
const Services = lazy(() =>
  import("../components/services/Services")
);

const Software = lazy(() =>
  import("../components/services/compoents/SoftwareTest")
);
const Softwaredevelopment = lazy(() =>
  import("../components/services/compoents/Softwaredevelopment")
);
const It = lazy(() =>
  import("../components/services/compoents/ItStaf")
);
const Cloud = lazy(() =>
  import("../components/services/compoents/CloudComputing")
);
const Quality = lazy(() =>
  import("../components/services/compoents/QualityAssurance")
);
const Mobile = lazy(() =>
  import("../components/services/compoents/MobileApplication")
);

const Sales = lazy(() =>
  import("../components/technologies/components/salesforic/Salesforic")
);

const Javaj2ee = lazy(() =>
  import("../components/technologies/components/javaj2ee/Javaj2ee")
);

const Cybersecurity = lazy(() =>
  import("../components/technologies/components/cybersecurity/Cybersecurity")
);

const Python = lazy(() =>
  import("../components/technologies/components/python/Python")
);

const Reactjs = lazy(() =>
  import("../components/technologies/components/reactjs/ReactjsCom")
);

const Clinicalsas = lazy(() =>
  import("../components/technologies/components/clinicalsas/Clinicals")
);
export {Home,Aboutus,Contactus,Careers,Technologies,Services,Software,Softwaredevelopment,It,Cloud,Mobile,Quality,
  Sales,Javaj2ee,Cybersecurity,Python,Reactjs,Clinicalsas

}