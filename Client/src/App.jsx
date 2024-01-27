import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard"
import Donation from "./Pages/Donation"
import PrayerService from "./Pages/PrayerService";
import JoinUs from "./Pages/JoinUs";
import Registration from "./Pages/Registration";
import RegistrationConnectGroup from "./Pages/RegisterConnectGroup"
import RegisterAdmin from "./Pages/RegisterAdmin";
import {Toaster} from 'react-hot-toast';

import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true

function App() {


  return (
    <>
    <Toaster position="bottom-right" toastOptions={{duration:2000}}/> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/donate" element={<Donation />} /> 
          <Route path="/prayer" element={<PrayerService />} /> 
          <Route path="/dashboard" element={<Dashboard />} /> 
          <Route path="/joinus" element={<JoinUs />} /> 
          <Route path="/registration" element={<Registration />} />
          <Route path="/registrationconnectgroup" element={<RegistrationConnectGroup />} />
          <Route path="/registeradmin" element={<RegisterAdmin />} /> 

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
