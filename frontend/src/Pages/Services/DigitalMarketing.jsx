import React, { useState } from "react";
import { CheckCircleIcon, ArrowRightIcon, StarIcon } from "@heroicons/react/24/solid";

const plans = [
    {
        name: "Basic",
        price: "$299/mo",
        tagline: "Perfect for startups looking to build a digital presence.",
        features: [
            "Initial SEO Audit",
            "Monthly Content Strategy (4 ideas)",
            "Social Media Management (1 Platform)",
            "Standard Monthly Reporting",
            "Email Support (48-hour response)",
        ],
        color: "border-blue-500",
        bg: "bg-blue-50",
    },
    {
        name: "Advanced",
        price: "$799/mo",
        tagline: "Accelerate growth with multi-channel marketing excellence.",
        features: [
            "Comprehensive SEO & Keyword Research",
            "High-Value Content Creation (8 blogs/posts)",
            "Social Media Management (3 Platforms)",
            "Dedicated Account Manager",
            "Advanced Conversion Rate Optimization (CRO)",
            "Priority Support (12-hour response)",
        ],
        color: "border-indigo-600",
        bg: "bg-indigo-50",
        isPopular: true,
    },
    {
        name: "Premium",
        price: "$1499/mo",
        tagline: "Enterprise-grade growth with full-funnel automation.",
        features: [
            "Full-Scale Technical & On-Page SEO",
            "Unlimited Content Strategy & Creation",
            "Omnichannel Marketing & Paid Ads Management",
            "Bi-Weekly Strategy Calls",
            "Custom AI/Automation Integration",
            "24/7 VIP Support",
        ],
        color: "border-pink-600",
        bg: "bg-pink-50",
    },
];

export default function SubscribeForm() {
    const [selectedPlan, setSelectedPlan] = useState(plans[1].name);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        paymentMethod: "Credit Card",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Subscription submitted:", { plan: selectedPlan, data: formData });
        alert(`Thank you for choosing the ${selectedPlan} plan! We'll be in touch soon.`);
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-indigo-50 py-16 px-4 sm:px-10 font-inter">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <header className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
                        Choose Your{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-indigo-800">
                            Digital Marketing
                        </span>{" "}
                        Plan
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Power your growth with tailored marketing strategies designed to scale your brand visibility and ROI.
                    </p>
                </header>

                {/* Plan Selection */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            onClick={() => setSelectedPlan(plan.name)}
                            className={`relative p-8 rounded-2xl border-4 transition-all duration-300 cursor-pointer backdrop-blur-md
              ${plan.bg} ${plan.color} 
              ${selectedPlan === plan.name
                                    ? "shadow-2xl ring-4 ring-offset-4 ring-sky-500 scale-105"
                                    : "hover:shadow-xl hover:scale-[1.02]"
                                }`}
                        >
                            {plan.isPopular && (
                                <div className="absolute -top-3 right-5 flex items-center bg-sky-600 text-white text-xs px-3 py-1 rounded-full font-medium shadow-md">
                                    <StarIcon className="h-4 w-4 mr-1" /> Most Popular
                                </div>
                            )}
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-3xl font-bold text-gray-900">{plan.name}</h2>
                                <p className="text-3xl font-extrabold text-indigo-700">{plan.price}</p>
                            </div>
                            <p className="text-gray-600 italic mb-6">{plan.tagline}</p>

                            <ul className="space-y-3">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start text-gray-700">
                                        <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                type="button"
                                onClick={() => setSelectedPlan(plan.name)}
                                className={`mt-8 w-full py-3 rounded-lg font-semibold transition-all duration-300 
                ${selectedPlan === plan.name
                                        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-400/50 hover:bg-sky-700"
                                        : "bg-white text-sky-600 border border-sky-600 hover:bg-sky-50"
                                    }`}
                            >
                                {selectedPlan === plan.name ? "Selected Plan" : "Select Plan"}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Checkout Form */}
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-10 border border-gray-100">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-3">
                        Checkout —{" "}
                        <span className="text-indigo-700 font-extrabold">{selectedPlan}</span> Plan
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Contact Info */}
                        <section>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Contact Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="Full Name *"
                                    required
                                    className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Business Email *"
                                    required
                                    className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone Number *"
                                    required
                                    className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                                />
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder="Company / Business Name *"
                                    required
                                    className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                                />
                            </div>
                        </section>

                        {/* Payment Method */}
                        <section>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">2. Payment Method</h3>
                            <div className="flex flex-wrap gap-6">
                                {["Credit Card", "PayPal", "Invoice"].map((method) => (
                                    <label
                                        key={method}
                                        className={`flex items-center gap-2 px-4 py-2 border rounded-lg cursor-pointer transition
                    ${formData.paymentMethod === method
                                                ? "border-indigo-600 bg-indigo-50 text-indigo-700"
                                                : "border-gray-300 text-gray-700 hover:border-indigo-300"
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value={method}
                                            checked={formData.paymentMethod === method}
                                            onChange={handleChange}
                                            className="form-radio text-indigo-600"
                                        />
                                        {method}
                                    </label>
                                ))}
                            </div>
                            <p className="mt-2 text-sm text-gray-500">
                                You’ll enter your payment details securely on the next step.
                            </p>
                        </section>

                        {/* Terms */}
                        <section className="pt-4 border-t">
                            <label className="flex items-start">
                                <input
                                    type="checkbox"
                                    required
                                    className="h-5 w-5 text-indigo-600 rounded mt-1 focus:ring-indigo-500"
                                />
                                <span className="ml-3 text-gray-700 text-sm">
                                    I agree to the{" "}
                                    <a href="#" className="text-indigo-600 hover:underline font-medium">
                                        Terms of Service
                                    </a>{" "}
                                    and{" "}
                                    <a href="#" className="text-indigo-600 hover:underline font-medium">
                                        Privacy Policy
                                    </a>{" "}
                                    of VR Associates.
                                </span>
                            </label>
                        </section>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full flex justify-center items-center gap-3 py-3 px-6 rounded-lg text-lg font-medium
              text-white bg-linear-to-r from-indigo-600 to-indigo-800 hover:from-indigo-700 hover:to-indigo-900 
              shadow-lg hover:shadow-indigo-500/40 transition-all duration-300"
                        >
                            Subscribe to {selectedPlan} Plan <ArrowRightIcon className="h-5 w-5" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
