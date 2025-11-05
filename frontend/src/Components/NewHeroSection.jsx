import React from "react";
// Re-using the clean icon requested
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { SparklesIcon, BriefcaseIcon, UserGroupIcon } from '@heroicons/react/24/solid';

// Helper component for the stylized image placeholder, now representing a modern "dashboard" or "solution"
const SolutionMockupCard = () => (
  <div
    className="relative w-full max-w-lg p-3 bg-white border border-gray-200 rounded-3xl shadow-xl 
               transform transition-all duration-700 hover:shadow-2xl hover:-translate-y-1"
  >
    {/* Clean header for the mockup */}
    <div className="flex items-center justify-between p-4 bg-gray-50 border-b border-gray-100 rounded-t-2xl">
      <div className="flex items-center space-x-2">
        <div className="h-2.5 w-2.5 bg-red-500 rounded-full"></div>
        <div className="h-2.5 w-2.5 bg-yellow-500 rounded-full"></div>
        <div className="h-2.5 w-2.5 bg-green-500 rounded-full"></div>
      </div>
      <p className="text-xs font-medium text-gray-500">VR Talent Dashboard</p>
    </div>

    {/* The main content area (placeholder chart/data) */}
    <img
      src="https://placehold.co/600x400/F0F9FF/065F46?text=Talent+Analytics+and+Growth+Projection"
      alt="Talent Acquisition Dashboard Mockup"
      className="w-full h-auto rounded-b-2xl object-cover border-b border-teal-600/10"
    />
    
    {/* Floating Success Indicator */}
    <div className="absolute bottom-6 left-6 flex items-center bg-teal-600 text-white px-4 py-2 rounded-xl shadow-lg shadow-teal-500/50">
      <UserGroupIcon className="h-5 w-5 mr-2" />
      <span className="font-semibold text-sm">98% Success Rate</span>
    </div>
  </div>
);

export default function App() {
  return (
    <section
      id="home"
      // Light background, min-height, professional padding
      className="min-h-screen flex items-center justify-center p-4 md:p-16 relative overflow-hidden bg-white"
    >
      {/* --- Subtle Background Visuals (Clean Gradient Shape) --- */}
      {/* Top right subtle shadow/gradient for depth */}
      <div className="absolute top-0 right-0 h-4/5 w-3/5 bg-teal-50/70 rounded-bl-full transform translate-x-1/3 -translate-y-1/3 filter blur-[120px] opacity-60"></div>

      {/* --- Main Content Grid (Z-index 20 ensures it's above the visuals) --- */}
      <div className="relative z-20 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-16 items-center py-20">

        {/* Left Content (Text and CTAs) - Takes 7 of 12 columns */}
        <div className="lg:col-span-7 text-center lg:text-left space-y-6 md:space-y-8 px-4">
          <p className="text-base font-bold uppercase text-teal-600 tracking-widest flex items-center justify-center lg:justify-start">
            <BriefcaseIcon className="h-5 w-5 mr-2" /> Strategic Talent Partner
          </p>

          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight text-gray-900">
            Precision Recruitment for <span className="text-indigo-700">Pioneering</span>
            <br />
            Business <span className="text-teal-600">Futures</span>.
          </h1>

          <p className="text-xl md:text-2xl max-w-2xl lg:max-w-none text-gray-600 font-light">
            We deliver the executive and technical talent required for high-growth firms, applying **data-driven foresight** to secure leadership that thrives in complexity.
          </p>

          {/* CTA Buttons */}
          <div className="pt-8 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#contact"
              className="px-8 py-3 bg-teal-600 text-white font-bold rounded-lg shadow-lg shadow-teal-500/40 transition-all duration-300 transform hover:bg-teal-700 hover:scale-[1.02] flex items-center justify-center text-lg ring-4 ring-teal-200/50"
            >
              Request Executive Briefing
              <ArrowRightIcon className="h-5 w-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="px-8 py-3 border-2 border-indigo-200 text-indigo-700 font-bold rounded-lg bg-white hover:bg-indigo-50 transition-all duration-300 flex items-center justify-center text-lg shadow-md"
            >
              Download Our Whitepaper
            </a>
          </div>
        </div>

        {/* Right Content (Solution Mockup Card) - Takes 5 of 12 columns */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end px-4">
          <SolutionMockupCard />
        </div>
      </div>
    </section>
  );
}
