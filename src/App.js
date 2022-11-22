import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/User/HomePage';
import ServicePage from './Pages/User/ServicePage';
import LoginPage from './Pages/User/LoginPage';
import PartnerPage from './Components/Forms/Partner';
import CustomerReq from './Components/Forms/Customer';
import ApplicationsTable from './Components/Tables/Customer';
import PartnersReq from './Components/Tables/partners';
import NewPAN from './Pages/User/NewPAN';
import FingerprintPAN from './Pages/User/FingerprintPAN';
import AadharPAN from './Pages/User/AadharPAN';

import NewPANCorrection from './Pages/User/ManualCorrection';
import FingerprintPANCorrection from './Pages/User/FingerprintCorrection';
import AadharPANCorrection from './Pages/User/AadharCorrection';
import LinkAadharPAN from './Pages/User/LinkAadharPAN';

function App() {
  return (
    <div>
    <BrowserRouter>
        <Routes>
          <Route path="*" element={<HomePage />} />
          {/* <Route path="/service" element={<ServicePage />}/>
          <Route path='/login/admin' element={<LoginPage Title="Admin" isAdmin={true} />}/>
          <Route path='/login/partner' element={<LoginPage Title="Partner" isAdmin={false} />}/>
          <Route path='/WantAPartner' element={<PartnerPage/>}/>
          <Route path='/GetService' element={<CustomerReq/>}/> */}
          <Route path='/CustomerReq' element={<ApplicationsTable/>}/>
          <Route path='/partnerReq' element={<PartnersReq/>}/>
          <Route path='/NewPAN' element={<NewPAN/>}/>
          <Route path='/FingerprintPAN' element={<FingerprintPAN/>}/>
          <Route path='/AadharPAN' element={<AadharPAN/>}/>
          <Route path='/NewPANCorrection' element={<NewPANCorrection/>}/>
          <Route path='/FingerprintPANCorrection' element={<FingerprintPANCorrection/>}/>
          <Route path='/AadharPANCorrection' element={<AadharPANCorrection/>}/>
          <Route path='/LinkAadharPAN' element={<LinkAadharPAN/>}/>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
