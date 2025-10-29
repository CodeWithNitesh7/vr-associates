// App.jsx
import React from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import About from "../Components/About";
import Services from "../Components/Services";
import Industries from "../Components/Industries";
import Clients from "../Components/Clients";
import Careers from "../Components/Careers";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

export default function Home() {
    return (
        <div className="bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-900">
            <Navbar />
            <HeroSection />
            <About />
            <Services />
            <Industries />
            <Clients />
            <Careers />
            <Contact />
            <Footer />
        </div>
    )
}
