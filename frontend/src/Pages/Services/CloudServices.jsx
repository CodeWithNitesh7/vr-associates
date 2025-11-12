import React from 'react';

export default function CloudServices() {
    // Array of cloud service data
    const services = [
        {
            title: 'SaaS (Software as a Service)',
            description: 'Provides you with a complete, ready-to-use software application. You just use it over the internet.',
            examples: 'Gmail, Salesforce, Dropbox',
            color: 'bg-red-500',
        },
        {
            title: 'PaaS (Platform as a Service)',
            description: 'Offers a complete environment for developing, running, and managing applications without managing the infrastructure.',
            examples: 'AWS Elastic Beanstalk, Heroku, Google App Engine',
            color: 'bg-blue-500',
        },
        {
            title: 'IaaS (Infrastructure as a Service)',
            description: 'Provides the basic computing infrastructure—like virtual machines, storage, and networks—over the internet.',
            examples: 'Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP)',
            color: 'bg-green-500',
        },
    ];

    return (
        <div className="p-8 bg-gray-50 min-h-screen">

            {/* --- Header Section --- */}
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">
            Cloud Service Models
            </h1>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
                Understanding the core models: SaaS, PaaS, and IaaS, which form the foundation of cloud computing.
            </p>

            {/* --- Cards Grid Section --- */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-xl p-6 transition duration-300 ease-in-out transform hover:scale-[1.03] hover:shadow-2xl border-t-4 border-b-4 border-transparent hover:border-blue-600"
                    >
                        {/* Colored Tag/Indicator */}
                        <div className={`w-12 h-12 ${service.color} rounded-full flex items-center justify-center mb-4`}>
                            <span className="text-white font-bold text-lg">
                                {service.title.substring(0, 4)} {/* Displays SaaS, PaaS, IaaS */}
                            </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl font-bold text-gray-900 mb-3 border-b pb-2">
                            {service.title}
                        </h2>

                        {/* Description */}
                        <p className="text-gray-700 mb-4">
                            {service.description}
                        </p>

                        {/* Examples */}
                        <div className="mt-4 pt-3 border-t border-gray-100">
                            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                                Popular Examples:
                            </p>
                            <p className="text-base font-medium text-gray-800">
                                {service.examples}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            {/* --- End of Cards Grid Section --- */}

        </div>
    );
}