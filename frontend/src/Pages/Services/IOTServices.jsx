import React from 'react';

// -------------------------------------------------------------
// Product Data - New Security & Access Control Products
// -------------------------------------------------------------
// Note: Organized into logical categories for better presentation.
const securityProducts = [
  // Access Control & Entry Management
  {
    id: 1,
    category: 'Access & Entry Management',
    name: 'Automatic Number Plate Recognition (ANPR) Camera',
    description: 'High-speed camera for vehicle identification and access logging, crucial for parking and security management.',
    features: ['Real-time Blacklist/Whitelist', 'Vehicle Flow Analysis', 'Day/Night Mode'],
    image: '📸',
    link: '#anpr-camera',
  },
  {
    id: 2,
    category: 'Access & Entry Management',
    name: 'Automatic Bollards',
    description: 'Retractable security bollards for high-level perimeter protection and traffic flow control.',
    features: ['Hydraulic Operation', 'Anti-Ram Certified', 'Emergency Fast Operation'],
    image: '⬆️',
    link: '#automatic-bollards',
  },
  {
    id: 5,
    category: 'Access & Entry Management',
    name: 'Boom Barrier',
    description: 'Automated road barrier for controlling vehicle access at entry/exit points in commercial and residential areas.',
    features: ['Fast Open/Close', 'Anti-Crush Safety Sensor', 'Remote Control'],
    image: '🚫',
    link: '#boom-barrier',
  },
  {
    id: 18,
    category: 'Access & Entry Management',
    name: 'Sliding Gate System',
    description: 'Heavy-duty automated system for seamless and secure entry control of large access points.',
    features: ['Industrial Grade Motor', 'Obstacle Detection', 'Manual Override'],
    image: '↔️',
    link: '#sliding-gate-system',
  },
  {
    id: 21,
    category: 'Access & Entry Management',
    name: 'Tyre Killer',
    description: 'High-security, one-way spike barrier designed to instantly stop unauthorized vehicle entry.',
    features: ['Surface or Sub-surface Mount', 'Heavy Duty Spikes', 'Integrated with Access Control'],
    image: '🔪',
    link: '#tyre-killer',
  },

  // Pedestrian Access Control
  {
    id: 11,
    category: 'Pedestrian Control',
    name: 'Flap Barrier',
    description: 'A stylish and fast turnstile for pedestrian access control in high-traffic lobbies and corporate environments.',
    features: ['Anti-Tailgating Sensor', 'Rapid Throughput', 'Emergency Egress'],
    image: '🚪',
    link: '#flap-barrier',
  },
  {
    id: 12,
    category: 'Pedestrian Control',
    name: 'Full Height Turnstile',
    description: 'Maximum security pedestrian barrier for unattended entries, preventing unauthorized entry or exit.',
    features: ['Bi-Directional Access', 'Robust Steel Construction', 'Weatherproof'],
    image: '🛑',
    link: '#full-height-turnstile',
  },
  {
    id: 13,
    category: 'Pedestrian Control',
    name: 'Swing Barrier',
    description: 'Wide-lane access gate for wheelchairs, luggage, and large groups, often paired with standard turnstiles.',
    features: ['ADA Compliant Width', 'Silent Operation', 'Custom Finishes'],
    image: '🔄',
    link: '#swing-barrier',
  },
  {
    id: 20,
    category: 'Pedestrian Control',
    name: 'Tripod Turnstile',
    description: 'Standard, cost-effective pedestrian access control for stadiums, offices, and industrial facilities.',
    features: ['Fail-Safe/Fail-Lock Option', 'Smooth Rotation', 'Integrated LED Indicators'],
    image: '🚶',
    link: '#tripod-turnstile',
  },

  // Surveillance & Detection
  {
    id: 3,
    category: 'Surveillance & Detection',
    name: 'Baggage Scanner (X-Ray)',
    description: 'Advanced X-ray inspection system for screening bags and parcels at airports, stations, and secure facilities.',
    features: ['Material Discrimination', 'Threat Detection Algorithms', 'Compact Design'],
    image: '💼',
    link: '#baggage-scanner',
  },
  {
    id: 6,
    category: 'Surveillance & Detection',
    name: 'CCTV (Closed-Circuit Television)',
    description: 'Comprehensive video surveillance systems for monitoring and recording activities across all environments.',
    features: ['4K Resolution', 'Remote Viewing', 'Video Analytics Integration'],
    image: '👁️',
    link: '#cctv',
  },
  {
    id: 7,
    category: 'Surveillance & Detection',
    name: 'Door Frame Metal Detector (DFMD)',
    description: 'Walk-through metal detector for identifying concealed metallic items on a person.',
    features: ['Multi-Zone Detection', 'High Sensitivity', 'Traffic Counter'],
    image: '🚨',
    link: '#dfmd',
  },
  {
    id: 16,
    category: 'Surveillance & Detection',
    name: 'Pole Metal Detector',
    description: 'Handheld or mobile metal detector for targeted search and screening applications.',
    features: ['High Accuracy', 'Adjustable Sensitivity', 'Rechargeable Battery'],
    image: '🔍',
    link: '#pole-metal-detector',
  },
  {
    id: 17,
    category: 'Surveillance & Detection',
    name: 'PTZ (Pan-Tilt-Zoom) Camera',
    description: 'Remotely controllable surveillance camera offering wide-area coverage and high-detail zoom capabilities.',
    features: ['360° Continuous Pan', '30x Optical Zoom', 'Auto-Tracking'],
    image: '🔄',
    link: '#ptz-camera',
  },

  // Identity & Physical Security
  {
    id: 4,
    category: 'Identity & Physical Security',
    name: 'Biometric Scanner',
    description: 'High-security device using fingerprint, face, or iris recognition for reliable identity verification.',
    features: ['Anti-Spoofing Technology', 'Rapid Verification', 'Large User Capacity'],
    image: '👤',
    link: '#biometric-scanner',
  },
  {
    id: 8,
    category: 'Identity & Physical Security',
    name: 'Electric Fencing System',
    description: 'Perimeter security system that delivers a non-lethal shock and triggers an alarm upon breach.',
    features: ['High Voltage Pulse', 'Zoned Monitoring', 'Weather Resistant'],
    image: '⚡',
    link: '#electric-fencing-system',
  },
  {
    id: 9,
    category: 'Identity & Physical Security',
    name: 'Electronic Anti-Theft System (EAS)',
    description: 'Retail security gates and tags designed to prevent shoplifting at store exits.',
    features: ['RF/AM Technology', 'High Detection Rate', 'Aesthetic Design'],
    image: '🛍️',
    link: '#anti-theft-system',
  },
  {
    id: 14,
    category: 'Identity & Physical Security',
    name: 'Glass Door Lock System',
    description: 'Sleek, secure locking mechanism specifically designed for frameless glass doors in modern offices.',
    features: ['Keypad/Card Access', 'Fail-Safe Locking', 'Easy Installation'],
    image: '🔐',
    link: '#glass-door-lock-system',
  },
  {
    id: 15,
    category: 'Identity & Physical Security',
    name: 'Guard Patrol System',
    description: 'Electronic system for monitoring security guard routes, ensuring patrols are completed as scheduled.',
    features: ['GPS Tracking', 'Real-time Reporting', 'Proof of Presence'],
    image: '🛡️',
    link: '#guard-petrol-system',
  },
  {
    id: 14,
    category: 'Identity & Physical Security',
    name: 'Hotel Door Lock System',
    description: 'Smart electronic lock solution optimized for the hospitality industry, using key cards or mobile access.',
    features: ['Audit Trail Logging', 'Energy Saving Integration', 'Fire-Rated'],
    image: '🛎️',
    link: '#hotel-door-lock-system',
  },
  {
    id: 15,
    category: 'Identity & Physical Security',
    name: 'Lift Access Control',
    description: 'System that restricts lift access to authorized floors only, enhancing building security and privacy.',
    features: ['Floor Zoning', 'Integrated with Biometrics', 'Scheduled Access'],
    image: '⏫',
    link: '#lift-acess-control',
  },
  {
    id: 22,
    category: 'Identity & Physical Security',
    name: 'UHF RFID Reader',
    description: 'Long-range radio-frequency identification reader for hands-free vehicle or asset tracking.',
    features: ['Up to 12m Read Range', 'High-Speed Tag Reading', 'Weatherproof Housing'],
    image: '📡',
    link: '#uhf-rfid-reader',
  },
];

// Helper to get unique categories
const uniqueCategories = [...new Set(securityProducts.map(p => p.category))];

// -------------------------------------------------------------
// Advanced Product Card Component (Reusable)
// -------------------------------------------------------------
const AdvancedProductCard = ({ product }) => (
  // Modern Card Design: Vibrant border on hover, strong shadow, and an uplift effect
  <div className="
    bg-white p-6 rounded-2xl shadow-xl 
    hover:shadow-sky-400/40 hover:scale-[1.03] transition duration-500 
    border border-gray-100 flex flex-col h-full
  ">

    {/* Product Image/Icon */}
    <div className="text-4xl mb-4 p-4 bg-sky-50 border-2 border-sky-200 text-sky-600 rounded-full w-fit">
      {product.image}
    </div>

    {/* Product Name */}
    <h3 className="text-xl font-extrabold text-gray-800 mb-2 leading-tight">
      {product.name}
    </h3>

    {/* Description */}
    <p className="text-gray-600 mb-4 grow text-sm">
      {product.description}
    </p>

    {/* Key Features (Modern List Style) */}
    <div className="mt-auto"> {/* Push features to the bottom */}
      <h4 className="text-xs font-semibold uppercase text-sky-600 mb-2 border-b border-sky-100 pb-1">Key Features</h4>
      <ul className="space-y-1 text-xs text-gray-700">
        {product.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            {/* Sky-500 Checkmark Icon */}
            <svg className="w-4 h-4 mr-1.5 shrink-0 text-sky-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
// Main SecuritySolutions Component
// -------------------------------------------------------------
export default function SecuritySolutions() {
  return (
    // Main Container with deep padding and a subtle background texture
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto">

        {/* Hero / Header Section */}
        <header className="text-center mb-20">
          <p className="text-sm font-bold uppercase text-red-600 tracking-widest mb-3">
            Perimeter to Interior
          </p>
          <h1 className="text-6xl font-extrabold text-gray-900 mb-4">
            Total Security & Access Control
          </h1>
          {/* Subtitle using a refined text style */}
          <p className="text-xl text-gray-700 max-w-4xl mx-auto mt-4">
            We deliver a comprehensive suite of cutting-edge security products, from intelligent **ANPR cameras** and **Biometric Scanners** to robust **Tyre Killers** and **Full Height Turnstiles**, ensuring unparalleled safety and operational efficiency for every infrastructure.
          </p>
          <hr className="w-32 h-1.5 bg-red-500 mx-auto mt-6 rounded-full" />
        </header>

        {/* Visual of Security System - Optional */}
        {/*  */}

        {/* Products Grid Section - Categorized */}
        <main>
          {uniqueCategories.map(category => (
            <section key={category} className="mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 border-l-4 border-sky-500 pl-4">
                {category} Solutions 🔒
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {securityProducts
                  .filter(product => product.category === category)
                  .map(product => (
                    <AdvancedProductCard key={product.id} product={product} />
                  ))}
              </div>
            </section>
          ))}
        </main>

        {/* Call to Action Footer - Highlighting Security Focus */}
        <footer className="mt-24 text-center bg-gray-50 p-10 rounded-3xl shadow-inner">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Secure Your Assets. Control Your Access.
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our experts specialize in integrating these advanced technologies into a single, cohesive security framework tailored to your needs.
          </p>
          <a
            href='/Contact'
            className="
                inline-flex items-center justify-center px-10 py-4 border border-transparent 
                text-lg font-bold rounded-full text-white bg-red-600 
                hover:bg-red-700 shadow-2xl shadow-red-300/50 transition duration-400
                focus:outline-none focus:ring-4 focus:ring-red-300 transform hover:scale-[1.05]
            ">
            Request a Custom Security Audit & Proposal
          </a>
        </footer>

      </div>
    </div>
  );
}