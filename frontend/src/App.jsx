import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 🏠 Pages
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import Dashboard2 from "./Pages/Dashboard/Dashboard2.jsx";
import Login from "./Pages/Login";
import AdminLogin from "./Pages/AdminLogin";

// 💼 Services
import DigitalMarketing from "./Pages/Services/DigitalMarketing";
import Permanents from "./Pages/Services/Permanents";
import ContractStaffing from "./Pages/Services/ContractStaff";
import WebandApp from "./Pages/Services/webandApp";
import Websites from "./Pages/Services/Web.jsx";
import Apps from "./Pages/Services/Apps";
import SubscribeForm from "./Pages/Services/SubscribeForm.jsx";

// Maintainace and Page Not Found 
import MaintenancePage from "./Pages/MaintainacePage.jsx";
import PageNotFound from "./Pages/PageNotFound.jsx";
import VRAssociatePrivacyPolicy from "./Pages/PrivacyPolicy.jsx";
import VRAssociateTermsOfService from "./Pages/TermOfServices.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* 🌐 Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminLogin />} />
        {/* Dashboard Components  */}
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Dshboard comp   */}
        <Route path="/dash" element={<Dashboard2 />} />

        {/* 🚀 Services Routes */}
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/permanents" element={<Permanents />} />
        <Route path="/contract-staff" element={<ContractStaffing />} />
        <Route path="/web-and-app" element={<WebandApp />} />
        <Route path="/web" element={<Websites />} />
        <Route path="/app" element={<Apps />} />

        {/* Maintainace */}
        <Route path="/serverdown" element={<MaintenancePage />} />
        <Route path="*" element={<PageNotFound />} />


        {/* privacypolish and term of services */}

        <Route path="/privacy" element={<VRAssociatePrivacyPolicy />} />
        <Route path="/Term-and-conditions" element={<VRAssociateTermsOfService />} />

      </Routes>
    </Router>
  );
}
