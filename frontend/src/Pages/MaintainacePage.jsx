import React from 'react';
import { ClockIcon, EnvelopeIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';

export default function MaintenancePage() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="max-w-3xl w-full bg-white rounded-xl shadow-2xl p-8 sm:p-12 text-center">

                {/* Maintenance Icon */}
                <div className="mx-auto w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                    <WrenchScrewdriverIcon className="h-12 w-12 text-indigo-600" />
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
                    🛠️ Site Maintenance In Progress
                </h1>

                {/* Subtitle / Explanation */}
                <p className="text-xl text-gray-600 mb-8">
                    We're making some **major improvements** to enhance your experience. We apologize for the inconvenience and appreciate your patience.
                </p>

                <hr className="my-8 border-gray-200" />

                {/* Estimated Time & Status */}
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-10">

                    <div className="flex items-center justify-center bg-yellow-50 p-4 rounded-lg shadow-md">
                        <ClockIcon className="h-6 w-6 text-yellow-600 mr-3" />
                        <div>
                            <p className="text-sm font-medium text-gray-500">Estimated Downtime</p>
                            <p className="text-lg font-bold text-yellow-800">Back Online by 10:00 AM IST</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-center bg-indigo-50 p-4 rounded-lg shadow-md">
                        <p className="text-sm font-medium text-gray-500">
                            Current Status:
                        </p>
                        <span className="ml-3 px-3 py-1 text-sm font-semibold text-indigo-800 bg-indigo-200 rounded-full">
                            Upgrade Phase
                        </span>
                    </div>
                </div>

                {/* Stay Updated Section */}
                <div className="bg-gray-100 p-6 rounded-lg">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                        Want to know when we're live?
                    </h3>

                    {/* Email Subscription Form */}
                    <form className="mt-4 flex flex-col sm:flex-row max-w-lg mx-auto space-y-3 sm:space-y-0 sm:space-x-3">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="grow p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                        <button
                            type="submit"
                            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-200 flex items-center justify-center"
                        >
                            <EnvelopeIcon className="h-5 w-5 mr-2" /> Notify Me
                        </button>
                    </form>
                    <p className="mt-3 text-sm text-gray-500">
                        We promise no spam, just an alert when the site is back up.
                    </p>
                </div>

                {/* Footer Link (Optional) */}
                <p className="mt-10 text-sm text-gray-500">
                    For urgent inquiries, please contact us directly at <a href="mailto:support@vrassociates.com" className="text-indigo-600 hover:underline">support@vrassociates.com</a>.
                </p>
            </div>
        </div>
    );
}