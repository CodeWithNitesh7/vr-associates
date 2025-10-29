import React from "react";

export default function About() {
    return (
        <section
            id="about"
            className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100"
        >
            <div className="container mx-auto px-6 md:px-12 text-center">
                <h2 className="text-4xl font-bold text-blue-700 mb-6">About Us</h2>
                <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed mb-10">
                    <span className="font-semibold text-blue-700">VR Associates</span> is
                    a leading staffing and recruitment solutions provider, connecting top
                    talent with leading companies across multiple industries. Our mission
                    is to empower businesses with exceptional people who drive growth,
                    innovation, and long-term success.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition">
                        <h3 className="text-xl font-semibold text-blue-700 mb-2">
                            Our Vision
                        </h3>
                        <p className="text-gray-600">
                            To be the most trusted partner in talent acquisition and workforce
                            development globally.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition">
                        <h3 className="text-xl font-semibold text-blue-700 mb-2">
                            Our Mission
                        </h3>
                        <p className="text-gray-600">
                            Deliver high-quality staffing services that help businesses and
                            candidates achieve their true potential.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition">
                        <h3 className="text-xl font-semibold text-blue-700 mb-2">
                            Our Values
                        </h3>
                        <p className="text-gray-600">
                            Integrity, transparency, and excellence in every partnership we
                            build.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
