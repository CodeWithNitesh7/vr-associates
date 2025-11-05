import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Dashboard from "./Pages/DashboardComponents/Dashboard";
import Login from "./Pages/Login";
import AdminLogin from "./Pages/AdminLogin";
import DigitalMarketing from "./Pages/Services/DigitalMarketing";
import Seo from "./Pages/Services/Seo";
import Permanents from "./Pages/Services/Permanents";
import ContractStaffing from "./Pages/Services/ContractStaff";
import Rentals from "./Pages/Services/Rentals";
import WebAppDevelopment from "./Pages/Services/WebAppDevelopement";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/digitalMarketing" element={<DigitalMarketing />} />
        <Route path="/seo" element={<Seo />} />
        <Route path="/permanents" element={<Permanents/>} />
        <Route path="/contractsStaff" element={<ContractStaffing/>} />
        <Route path="/webAndapp" element={<WebAppDevelopment/>} />
        <Route path="/rentals" element={<Rentals/>} />
      </Routes>
    </Router>
  );
}
