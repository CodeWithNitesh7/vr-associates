import React from "react";

export default function About() {
    return (
        <section
            id="about"
            className="py-16 md:py-24 bg-linear-to-br from-blue-50 via-white to-blue-100"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-sky-500 mb-6">
                    About Us
                </h2>

                {/* Description */}
                <p className="max-w-3xl mx-auto text-gray-600 text-base sm:text-lg leading-relaxed mb-10 px-2">
                    <span className="font-semibold text-sky-500">VR Associates</span> is a
                    leading staffing and recruitment solutions provider, connecting top
                    talent with leading companies across multiple industries. Our mission
                    is to empower businesses with exceptional people who drive growth,
                    innovation, and long-term success.
                </p>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {/* Vision Card */}
                    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-2xl transition-all duration-300">
                        <h3 className="text-lg sm:text-xl font-semibold text-sky-500 mb-2">
                            Our Vision
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base">
                            To be the most trusted partner in talent acquisition and workforce
                            development globally.
                        </p>
                    </div>

                    {/* Mission Card */}
                    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-2xl transition-all duration-300">
                        <h3 className="text-lg sm:text-xl font-semibold text-sky-500 mb-2">
                            Our Mission
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base">
                            Deliver high-quality staffing services that help businesses and
                            candidates achieve their true potential.
                        </p>
                    </div>

                    {/* Values Card */}
                    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-2xl transition-all duration-300">
                        <h3 className="text-lg sm:text-xl font-semibold text-sky-500 mb-2">
                            Our Values
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base">
                            Integrity, transparency, and excellence in every partnership we
                            build.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
