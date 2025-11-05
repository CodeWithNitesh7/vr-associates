import React, { useState } from "react";
import { EnvelopeIcon, LockClosedIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline'; // Importing icons, including one for the placeholder logo

export default function Login() {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (error) setError(null); // error handler 
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null); // Clear previous errors

        try {
            // Simulate an API call
            console.log("Attempting login with:", formData);
            await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay

            // 🔹 Replace with your actual API call
            // const response = await axios.post("/api/auth/login", formData);
            // if (response.data.success) {
            //     console.log("Login successful!");
            //     // Redirect or update auth state
            // } else {
            //     setError(response.data.message || "Login failed. Please check your credentials.");
            // }

            if (formData.email === "user@example.com" && formData.password === "password123") {
                console.log("Login successful!");
                // Using console log instead of alert for better practice in production apps
                console.log("Login Successful! (Demo Credentials)");
                // 🚀 In a real app, you'd redirect here or set a user context
            } else {
                setError("Invalid email or password.");
            }

        } catch (err) {
            console.error("Login error:", err);
            setError("An unexpected error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-100 p-4">
            <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10 w-full max-w-md border border-gray-100 transition-all duration-300 hover:shadow-2xl">
                {/* Logo and Title */}
                <div className="flex flex-col items-center mb-8">
                    {/* Placeholder Logo Icon: Replace this entire block with your own <img> tag pointing to a public URL. */}
                    <div className="h-24 w-24 mb-4 rounded-full p-2 flex items-center justify-center bg-indigo-100 drop-shadow-md">
                        <BuildingOffice2Icon className="h-16 w-16 text-indigo-600" aria-hidden="true" />
                    </div>
                    {/* End Placeholder Logo Icon */}

                    <h1 className="text-3xl font-extrabold text-indigo-700 tracking-tight mb-2">
                        Welcome Back
                    </h1>
                    <p className="text-gray-500 text-md text-center">
                        Sign in to continue to your VR Associates dashboard
                    </p>
                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </div>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out placeholder-gray-400"
                                placeholder="you@example.com"
                                autoComplete="username" // For better browser autofill
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <LockClosedIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </div>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out placeholder-gray-400"
                                placeholder="••••••••"
                                autoComplete="current-password" // For better browser autofill
                            />
                        </div>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm" role="alert">
                            {error}
                        </div>
                    )}

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center space-x-2 text-gray-600">
                            <input
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            />
                            <span>Remember me</span>
                        </label>
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-800 hover:underline transition-colors duration-200">
                            Forgot Password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        className={`w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 ease-in-out
                            ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105 active:scale-95'}`}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Logging in...
                            </>
                        ) : (
                            "Login"
                        )}
                    </button>
                </form>

                {/* Footer */}
                <p className="text-center text-gray-500 text-sm mt-8">
                    Don’t have an account?{" "}
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-800 hover:underline transition-colors duration-200">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
}
