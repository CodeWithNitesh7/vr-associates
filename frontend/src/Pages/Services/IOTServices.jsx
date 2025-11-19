import React from 'react';

// Product Data (Same as before, but highly recommended to put this in a separate data file)
const iotProducts = [
  {
    id: 1,
    name: 'Smart Home Automation Hub',
    description: 'Central control unit offering seamless integration and remote access via our mobile app.',
    features: ['Voice Control', 'Energy Monitoring', 'Security Alerts'],
    image: '🏠',
    link: '#home-hub' 
  },
  {
    id: 2,
    name: 'Industrial IoT (IIoT) Sensor Kit',
    description: 'Ruggedized sensors for real-time monitoring of machinery and environmental conditions.',
    features: ['Predictive Maintenance', 'Asset Tracking', 'Long-Range Connectivity'],
    image: '🏭',
    link: '#industrial-kit' 
  },
  {
    id: 3,
    name: 'Connected Health Monitor',
    description: 'Wearable device providing continuous tracking of vital signs, sleep patterns, and activity.',
    features: ['ECG Monitoring', 'Fall Detection', 'Secure Data Encryption'],
    image: '❤️',
    link: '#health-monitor' 
  },
  {
    id: 4,
    name: 'Agricultural Drones',
    description: 'Automated drones for field mapping, crop health analysis, and precise irrigation control.',
    features: ['GPS Mapping', 'Pest Detection', 'Autonomous Flight'],
    image: '🌾',
    link: '#agri-drone' 
  },
];

// -------------------------------------------------------------
// Advanced Product Card Component
// -------------------------------------------------------------
const AdvancedProductCard = ({ product }) => (
  // Modern Card Design: Rounded corners, subtle shadow, and a smooth hover transition
  <div className="
    bg-white p-6 rounded-xl shadow-lg 
    hover:shadow-2xl hover:scale-[1.02] transition duration-300 
    border border-gray-100 flex flex-col
  ">
    
    {/* Product Image/Icon */}
    <div className="text-4xl mb-4 p-3 bg-sky-100 rounded-full w-fit">
      {/* Real image/SVG should replace this emoji in a real app */}
      {product.image}
    </div>

    {/* Product Name */}
    <h3 className="text-xl font-bold text-gray-800 mb-2">
      {product.name}
    </h3>

    {/* Description */}
    <p className="text-gray-600 mb-4 flex-grow">
      {product.description}
    </p>

    {/* Key Features (Modern List Style) */}
    <div className="mb-4">
      <ul className="space-y-1 text-sm text-gray-700">
        {product.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            {/* Sky-300 Checkmark Icon */}
            <svg className="w-5 h-5 mr-2 flex-shrink-0 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>

   
  </div>
);

// -------------------------------------------------------------
// Main IOTServices Component
// -------------------------------------------------------------
export default function IOTServices() {
  return (
    // Main Container with padding and light background
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Hero / Header Section */}
        <header className="text-center mb-16">
          <p className="text-sm font-semibold uppercase text-sky-600 tracking-wider mb-2">
            IoT Innovation
          </p>
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Connecting the Future, Today.
          </h1>
          {/* Subtitle using Sky-300 accent */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive suite of Internet of Things (IoT) services drives efficiency, safety, and intelligence across industries.
          </p>
          <hr className="w-24 h-1 bg-sky-300 mx-auto mt-4 rounded-full" />
        </header>

        {/* Products Grid Section */}
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {iotProducts.map(product => (
            <AdvancedProductCard key={product.id} product={product} />
          ))}
        </main>
        
        {/* Call to Action Footer */}
        <footer className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Ready to Implement Smart Solutions?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
                Contact our experts to tailor an IoT strategy that fits your unique business needs.
            </p>
            <a 
            href='/Contact'
            className="
                inline-flex items-center justify-center px-8 py-3 border border-transparent 
                text-base font-medium rounded-full text-white bg-sky-600 
                hover:bg-sky-700 shadow-xl transition duration-300
                focus:outline-none focus:ring-4 focus:ring-sky-300
            ">
                Get Started
            </a>
        </footer>

      </div>
    </div>
  );
}