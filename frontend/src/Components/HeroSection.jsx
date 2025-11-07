import React from "react";
import { ArrowRightIcon } from '@heroicons/react/24/outline'; // Using a clean icon
import hero from '../assets/hero_section.png'
export default function HeroSection() {
  return (
    <section
      id="home"
      // Min-height, responsive padding, relative for positioning elements, and clean white background
      className="min-h-screen flex items-center justify-center p-4 md:p-12 relative overflow-hidden bg-white"
    >
      {/* --- Advanced Background Shapes for Visual Interest --- */}
      {/* Top right shape: large, rounded, subtle indigo gradient blur */}
      <div className="absolute top-0 right-0 h-3/4 w-3/5 bg-indigo-50/50 rounded-bl-full transform translate-x-1/4 -translate-y-1/4 filter blur-3xl opacity-70"></div>
      {/* Bottom left shape: smaller, rounded, subtle teal gradient blur */}
      <div className="absolute bottom-0 left-0 h-2/5 w-2/5 bg-teal-50/50 rounded-tr-full transform -translate-x-1/4 translate-y-1/4 filter blur-3xl opacity-70"></div>

      {/* --- Main Content Grid --- */}
      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-20">

        {/* Left Content (Text and CTAs) - Takes 7 of 12 columns on large screens */}
        <div className="lg:col-span-7 text-center lg:text-left space-y-6 md:space-y-8">
          <p className="text-sm font-semibold uppercase text-cy-600 tracking-widest">
            VR Associates: Connecting Talent
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
            Empowering <span className="text-sky-500">Growth</span>
            <br />
            Through Exceptional Talent.
          </h1>

          <p className="text-lg md:text-xl max-w-xl lg:max-w-none text-gray-600">
            We specialize in strategic talent acquisition, pairing top-tier professionals with innovative companies to drive unparalleled success and business transformation.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#contact"
              className="px-8 py-3 bg-sky-500 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              Get Started Today
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </a>
            <a
              href="#services"
              className="px-8 py-3 border-2 border-indigo-200 text-sky-500 font-semibold rounded-xl hover:bg-indigo-50 transition-all duration-300 flex items-center justify-center"
            >
              Explore Our Solutions
            </a>
          </div>
        </div>

        {/* Right Content (Illustration/Image) - Takes 5 of 12 columns on large screens */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          {/* Stylized Image Placeholder Card */}
          <div className="w-full max-w-sm lg:max-w-md bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 transform transition-all duration-500 hover:rotate-1 hover:shadow-3xl">
            <img
              src={hero}
              alt="Professional Consulting Illustration"
              className="w-full h-auto rounded-2xl object-cover"
            />
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-gray-800">Talent Acquisition Done Right</h3>
              <p className="text-sm text-gray-500">Connecting vision with ability.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
