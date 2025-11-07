// import React, { useState } from 'react';
// import { CheckCircleIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

// const plans = [
//     {
//         name: 'Basic',
//         price: '$299/mo',
//         tagline: 'Foundational Presence & Visibility',
//         features: [
//             'Initial SEO Audit',
//             'Monthly Content Strategy (4 ideas)',
//             'Social Media Management (1 Platform)',
//             'Standard Monthly Reporting',
//             'Email Support (48-hour response)',
//         ],
//         color: 'border-blue-500',
//         bg: 'bg-blue-50',
//     },
//     {
//         name: 'Advanced',
//         price: '$799/mo',
//         tagline: 'Accelerated Growth & Lead Generation',
//         features: [
//             'Comprehensive SEO & Keyword Research',
//             'High-Value Content Creation (8 blogs/posts)',
//             'Social Media Management (3 Platforms)',
//             '**Dedicated Account Manager**',
//             'Advanced Conversion Rate Optimization (CRO)',
//             'Priority Support (12-hour response)',
//         ],
//         color: 'border-indigo-600',
//         bg: 'bg-indigo-50',
//         isPopular: true,
//     },
//     {
//         name: 'Premium',
//         price: '$1499/mo',
//         tagline: 'Enterprise Solution & Full-Funnel Mastery',
//         features: [
//             'Full-Scale Technical & On-Page SEO',
//             'Unlimited Content Strategy & Creation',
//             'Omnichannel Marketing & Paid Ads Management',
//             'Bi-Weekly Strategy Calls',
//             'Custom AI/Automation Integration',
//             '24/7 VIP Support',
//         ],
//         color: 'border-pink-600',
//         bg: 'bg-pink-50',
//     },
// ];

// export default function SubscribeForm() {
//     const [selectedPlan, setSelectedPlan] = useState(plans[1].name);
//     const [formData, setFormData] = useState({
//         fullName: '',
//         email: '',
//         phone: '',
//         company: '',
//         paymentMethod: 'Credit Card',
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // In a real application, you would send formData and selectedPlan to your backend/API
//         console.log('Subscription submitted:', { plan: selectedPlan, data: formData });
//         alert(`Thank you for choosing the ${selectedPlan} plan! We'll be in touch soon.`);
//     };

//     return (
//         <div className="min-h-screen bg-gray-50 p-4 sm:p-10">
//             <div className="max-w-6xl mx-auto">
//                 {/* Header Section */}
//                 <header className="text-center mb-12">
//                     <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
//                         Choose Your <span className="text-indigo-600">Digital Marketing</span> Plan
//                     </h1>
//                     <p className="mt-3 text-xl text-gray-500">
//                         VR Associates is ready to power your growth. Select a plan to get started.
//                     </p>
//                 </header>

//                 {/* Plan Selection Section (Cards) */}
//                 <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 mb-12">
//                     {plans.map((plan) => (
//                         <div
//                             key={plan.name}
//                             className={`relative p-8 rounded-xl shadow-2xl transition-all duration-300 cursor-pointer 
//                             ${plan.bg} border-4 ${plan.color} 
//                             ${selectedPlan === plan.name ? 'ring-4 ring-offset-4 ring-indigo-600' : 'hover:shadow-indigo-300/50'}
//                             `}
//                             onClick={() => setSelectedPlan(plan.name)}
//                         >
//                             {plan.isPopular && (
//                                 <span className="absolute top-0 right-0 -mt-3 -mr-3 px-3 py-1 text-sm font-semibold text-white bg-indigo-600 rounded-full shadow-md transform rotate-3">
//                                     Most Popular
//                                 </span>
//                             )}
//                             <div className="flex justify-between items-center mb-4">
//                                 <h2 className="text-3xl font-bold text-gray-900">{plan.name}</h2>
//                                 <p className="text-4xl font-extrabold text-gray-900">{plan.price}</p>
//                             </div>
//                             <p className="text-gray-600 mb-6 font-medium italic">{plan.tagline}</p>

//                             <ul className="space-y-3">
//                                 {plan.features.map((feature, index) => (
//                                     <li key={index} className="flex items-start text-gray-700">
//                                         <CheckCircleIcon className="flex-shrink-0 w-6 h-6 text-green-500 mr-2 mt-0.5" />
//                                         <span dangerouslySetInnerHTML={{ __html: feature }}></span>
//                                     </li>
//                                 ))}
//                             </ul>

//                             {/* Select Button at the bottom of the card */}
//                             <button
//                                 type="button"
//                                 onClick={() => setSelectedPlan(plan.name)}
//                                 className={`mt-8 w-full py-3 rounded-lg font-semibold transition duration-200 
//                                 ${selectedPlan === plan.name
//                                         ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/50'
//                                         : 'bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-50'
//                                     }
//                                 `}
//                             >
//                                 {selectedPlan === plan.name ? 'Selected Plan' : 'Select Plan'}
//                             </button>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Subscription Form Section */}
//                 <div className="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-3xl">
//                     <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-3">
//                         <span className="text-indigo-600">{selectedPlan}</span> Plan Checkout
//                     </h2>

//                     <form onSubmit={handleSubmit} className="space-y-6">
//                         {/* Personal/Contact Info */}
//                         <div>
//                             <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Contact Information</h3>
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                 <input
//                                     type="text"
//                                     name="fullName"
//                                     value={formData.fullName}
//                                     onChange={handleChange}
//                                     placeholder="Full Name *"
//                                     required
//                                     className="p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
//                                 />
//                                 <input
//                                     type="email"
//                                     name="email"
//                                     value={formData.email}
//                                     onChange={handleChange}
//                                     placeholder="Business Email *"
//                                     required
//                                     className="p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
//                                 />
//                                 <input
//                                     type="tel"
//                                     name="phone"
//                                     value={formData.phone}
//                                     onChange={handleChange}
//                                     placeholder="Phone Number *"
//                                     required
//                                     className="p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
//                                 />
//                                 <input
//                                     type="text"
//                                     name="company"
//                                     value={formData.company}
//                                     onChange={handleChange}
//                                     placeholder="Company/Business Name *"
//                                     required
//                                     className="p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
//                                 />
//                             </div>
//                         </div>

//                         {/* Payment Method - Simplified for UI Example */}
//                         <div>
//                             <h3 className="text-xl font-semibold text-gray-800 mb-4">2. Select Payment Method</h3>
//                             <div className="flex flex-wrap gap-4">
//                                 {['Credit Card', 'PayPal', 'Invoice'].map((method) => (
//                                     <label key={method} className="inline-flex items-center">
//                                         <input
//                                             type="radio"
//                                             name="paymentMethod"
//                                             value={method}
//                                             checked={formData.paymentMethod === method}
//                                             onChange={handleChange}
//                                             className="form-radio h-5 w-5 text-indigo-600 border-gray-300 focus:ring-indigo-500"
//                                         />
//                                         <span className="ml-2 text-gray-700 font-medium">{method}</span>
//                                     </label>
//                                 ))}
//                             </div>
//                             <div className="mt-2 text-sm text-gray-500">
//                                 *You will enter your full payment details on the secure next step.
//                             </div>
//                         </div>

//                         {/* Terms & Conditions */}
//                         <div className="pt-4 border-t border-gray-200">
//                             <label className="flex items-start">
//                                 <input
//                                     type="checkbox"
//                                     required
//                                     className="form-checkbox h-5 w-5 text-indigo-600 rounded mt-1.5"
//                                 />
//                                 <span className="ml-3 text-gray-700 text-sm">
//                                     I agree to the **VR Associates** <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">Terms of Service</a> and <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">Privacy Policy</a>.
//                                 </span>
//                             </label>
//                         </div>

//                         {/* Submit Button */}
//                         <button
//                             type="submit"
//                             className="w-full flex justify-center items-center py-3 px-6 border border-transparent 
//                             rounded-lg shadow-xl text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 
//                             focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-offset-2 transition duration-150"
//                         >
//                             Subscribe to {selectedPlan} Plan <ArrowRightIcon className="ml-3 h-5 w-5" />
//                         </button>

//                     </form>
//                 </div>

//             </div>
//         </div>
//     );
// }

import React from 'react'

export default function SubscribeForm() {
  return (
    <div>SubscribeForm</div>
  )
}
