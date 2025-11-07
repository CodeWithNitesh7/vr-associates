import React from "react";
import { Link } from "react-router-dom";
import { Smartphone, Globe } from "lucide-react";

export default function WebandApp() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-br from-gray-50 via-indigo-50 to-white px-4 sm:px-8 py-16">

            {/* Heading */}
            <div className="text-center mb-14">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-3">
                    Our <span className="text-sky-600">Digital Solutions</span>
                </h1>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Transform your ideas into powerful digital experiences with our top-notch Web and Mobile App development services.
                </p>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full">

                {/* Mobile App Development */}
                <Link
                    to="/app"
                    className="group relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-lg border border-indigo-100 shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-1"
                >
                    <div className="absolute inset-0 bg-linear-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative p-8 flex flex-col items-start">
                        <div className="p-4 mb-5 rounded-xl bg-indigo-100 text-indigo-700 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                            <Smartphone size={40} />
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-700">
                            Mobile Applications
                        </h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Build high-performance native and cross-platform mobile apps for Android and iOS with seamless UI/UX.
                        </p>

                        <span className="text-indigo-700 font-semibold flex items-center group-hover:underline transition-all">
                            Explore Mobile Apps
                            <svg
                                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </span>
                    </div>
                </Link>

                {/* Web App Development */}
                <Link
                    to="/web"
                    className="group relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-lg border border-teal-100 shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-1"
                >
                    <div className="absolute inset-0 bg-linear-to-br from-teal-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative p-8 flex flex-col items-start">
                        <div className="p-4 mb-5 rounded-xl bg-teal-100 text-teal-700 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                            <Globe size={40} />
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-teal-700">
                            Web Applications
                        </h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Develop scalable, modern, and secure web applications using the latest frameworks and best practices.
                        </p>

                        <span className="text-teal-700 font-semibold flex items-center group-hover:underline transition-all">
                            Explore Web Solutions
                            <svg
                                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </span>
                    </div>
                </Link>


                {/* Integradted Services  */}

                
            
           

                {/* Mobile App Development */}
                <Link
                    to="/app"
                    className="group relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-lg border border-indigo-100 shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-1"
                >
                    <div className="absolute inset-0 bg-linear-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative p-8 flex flex-col items-start">
                        <div className="p-4 mb-5 rounded-xl bg-indigo-100 text-indigo-700 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                            <Smartphone size={40} />
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-700">
                            Integrated Solutions
                        </h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Choose high-performance services  with seamless UI/UX.
                        </p>

                        <span className="text-indigo-700 font-semibold flex items-center group-hover:underline transition-all">
                            Explore Integrated Services 
                            <svg
                                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
}
