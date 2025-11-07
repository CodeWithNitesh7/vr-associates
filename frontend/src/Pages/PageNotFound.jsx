import React from "react";
import { ArrowLeft, Search } from "lucide-react"; // ✅ using lucide-react (better and smaller)
import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
    return (
        <div className="min-h-screen bg-linear-to-br from-indigo-50 to-gray-100 flex items-center justify-center p-4">
            <div className="max-w-xl w-full bg-white rounded-2xl shadow-2xl p-10 sm:p-16 text-center transform transition duration-500 hover:scale-[1.01]">

                {/* Error Code Display */}
                <p className="text-8xl sm:text-9xl font-extrabold text-sky-600 mb-4 select-none">
                    404
                </p>

                {/* Main Heading */}
                <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-3">
                    Oops! Page Not Found
                </h1>

                {/* Explanation */}
                <p className="text-lg text-gray-600 mb-8">
                    It looks like the page you’re looking for has either moved or doesn’t exist. Don’t worry — it happens to the best of us!
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    {/* Go Home Button */}
                    <a
                        href="/"
                        className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-lg
                         text-white bg-sky-600 hover:bg-indigo-700 transition duration-200"
                    >
                        <ArrowLeft className="h-5 w-5 mr-2" />
                        Go Back Home
                    </a>

                    {/* Search/Contact CTA */}
                    <button
                        onClick={() => console.log("go to contact page ")}
                        className="flex items-center justify-center px-6 py-3 border border-indigo-600 text-base font-medium rounded-lg text-indigo-700 bg-white hover:bg-indigo-50 transition duration-200 shadow-md"
                    >
                        <Search className="h-5 w-5 mr-2" />
                        Search Site
                    </button>
                </div>

                {/* Footer Note */}
                <p className="mt-8 text-sm text-gray-400">
                    If you believe this is an error on our site, please let us know.
                </p>
            </div>
        </div>
    );
}
