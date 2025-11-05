import React from 'react';

// Sample data for rental properties.
// Replace these with your actual property details.
const rentalProperties = [
    {
        id: 1,
        place: 'Peaceful Apartment - New Delhi',
        location: 'Dwarka Sector 7, New Delhi',
        image: 'https://via.placeholder.com/400x250?text=Apartment+Delhi', 
    },
    {
        id: 2,
        place: 'Lake View Villa - Nainital',
        location: 'Mall Road, Nainital',
        image: 'https://via.placeholder.com/400x250?text=Villa+Nainital',
        isVerified: true,
    },
    {
        id: 3,
        place: 'Cozy Studio - Mumbai',
        location: 'Bandra West, Mumbai',
        image: 'https://via.placeholder.com/400x250?text=Studio+Mumbai', 
        isVerified: false,
    },
    {
        id: 4,
        place: 'Family Home - Bangalore',
        location: 'Indiranagar, Bangalore',
        image: 'https://via.placeholder.com/400x250?text=House+Bangalore', 
        isVerified: true,
    },
];

export default function Rentals() {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-6xl mx-auto">

                {/* Header Section */}
                <header className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-teal-700 sm:text-5xl">
                        🏠 All Rental Properties
                    </h1>
                    <p className="mt-3 text-xl text-gray-600">
                        Browse through our verified rental listings with complete details and images.
                    </p>
                </header>

                {/* Property Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {rentalProperties.map((property) => (
                        <div
                            key={property.id}
                            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
                        >
                            {/* Image Section */}
                            <div className="relative h-48">
                                <img
                                    src={property.image}
                                    alt={property.place}
                                    className="w-full h-full object-cover"
                                />

                                {/* Verification Badge */}
                                <div
                                    className={`absolute top-3 right-3 px-3 py-1 text-sm font-semibold rounded-full ${property.isVerified
                                            ? 'bg-green-500 text-white'
                                            : 'bg-yellow-500 text-gray-900'
                                        }`}
                                >
                                    {property.isVerified ? '✅ Verified' : '⚠️ Verification Pending'}
                                </div>
                            </div>

                            {/* Details Section */}
                            <div className="p-4">
                                <h2 className="text-xl font-bold text-gray-900 truncate">
                                    {property.place}
                                </h2>
                                <p className="mt-1 text-sm text-gray-500">
                                    📍 {property.location}
                                </p>

                                <button className="mt-4 w-full bg-teal-600 text-white py-2 rounded-lg font-medium hover:bg-teal-700 transition duration-150">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
