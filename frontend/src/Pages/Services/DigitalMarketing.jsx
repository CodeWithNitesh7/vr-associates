import React, { useState, useEffect } from 'react';

export default function DigitalMarketing() {
    // 1. State to hold the data
    const [stats, setStats] = useState({
        numberOfPlans: 0,
        numberOfClients: 0,
        clientNames: [],
        loading: true, // Loading state to show user feedback
        error: null,   // Error state for handling API failures
    });

    // 2. Simulate fetching data from an API using useEffect
    useEffect(() => {
        // This function simulates an API call (e.g., using fetch or axios)
        const fetchMarketingData = async () => {
            try {
                // Simulate network delay
                await new Promise(resolve => setTimeout(resolve, 1500));

                // --- Simulated API Response Data ---
                const apiData = {
                    plans: 7, // New dynamic plan count
                    clientsCount: 18, // New dynamic client count
                    clientList: ["TechNova Solutions", "Global Commerce Inc.", "FutureStream Media", "Elite Fitness Co.", "SmartHome Systems", "GreenEarth Organics"]
                };
                // -----------------------------------

                // Update the state with fetched data
                setStats({
                    numberOfPlans: apiData.plans,
                    numberOfClients: apiData.clientsCount,
                    clientNames: apiData.clientList,
                    loading: false, // Data successfully loaded
                    error: null,
                });

            } catch (err) {
                // Handle any errors during fetching
                setStats(prevStats => ({
                    ...prevStats,
                    loading: false,
                    error: "डेटा लाने में समस्या आई। कृपया बाद में प्रयास करें।",
                }));
                console.error("Fetching error:", err);
            }
        };

        fetchMarketingData();
    }, []); // Empty dependency array means this runs ONCE after initial render

    // --- Conditional Rendering based on state ---

    if (stats.loading) {
        return (
            <div className="max-w-4xl mx-auto p-8 text-center bg-white shadow-lg rounded-lg my-10">
                <p className="text-lg text-indigo-600 font-medium animate-pulse">डेटा लोड हो रहा है... कृपया प्रतीक्षा करें।</p>
                {/*  */}
            </div>
        );
    }

    if (stats.error) {
        return (
            <div className="max-w-4xl mx-auto p-8 bg-red-100 border border-red-400 text-red-700 rounded-lg my-10">
                <h3 className="font-bold">त्रुटि (Error)</h3>
                <p>{stats.error}</p>
            </div>
        );
    }

    // --- Main Display (When loading is false and no error) ---
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-lg my-10 font-sans">

            <h1 className="text-3xl font-bold text-indigo-700 mb-6 border-b pb-2">
                📊 गतिशील डिजिटल मार्केटिंग आँकड़े
            </h1>

            {/* प्लान्स सेक्शन */}
            <div className="p-5 bg-indigo-50 border-l-4 border-indigo-500 rounded-md mb-6 transition duration-300 hover:shadow-md">
                <h2 className="text-xl font-semibold text-indigo-800 mb-1">
                    📈 उपलब्ध डिजिटल मार्केटिंग प्लान्स
                </h2>
                <p className="text-gray-700 text-lg">
                    आपके पास **
                    <span className="text-4xl font-extrabold text-indigo-600 ml-2">
                        {stats.numberOfPlans}
                    </span>** प्लान्स हैं।
                </p>
            </div>

            {/* क्लाइंट्स सेक्शन */}
            <div className="p-5 bg-green-50 border-l-4 border-green-500 rounded-md transition duration-300 hover:shadow-md">
                <h2 className="text-xl font-semibold text-green-800 mb-2">
                    🤝 कुल डिजिटल मार्केटिंग क्लाइंट्स
                </h2>
                <p className="text-gray-700 text-lg mb-3">
                    आपने **
                    <span className="text-4xl font-extrabold text-green-600 mr-2">
                        {stats.numberOfClients}
                    </span>** क्लाइंट्स को सेवा प्रदान की है।
                </p>

                {/* क्लाइंट्स के नाम की सूची */}
                {stats.numberOfClients > 0 && (
                    <>
                        <p className="text-sm font-medium text-gray-600 mt-4 border-t pt-2">सर्वाइव किए गए क्लाइंट्स:</p>
                        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
                            {stats.clientNames.map((name, index) => (
                                <li key={index} className="bg-white text-gray-800 p-2 rounded text-sm shadow-sm border border-gray-200 truncate">
                                    {name}
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </div>
    );
}