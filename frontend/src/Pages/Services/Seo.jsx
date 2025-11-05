import React from 'react';

export default function Seo() {
    // A sample array of websites and a brief description
    const projects = [
        { name: 'E-commerce Solutions Pro', url: 'https://ecommercepro.com', description: 'Improved organic search ranking by 40% for key product categories.' },
        { name: 'Local Cafe & Bistro', url: 'https://localbistro.net', description: 'Focused on local SEO, resulting in a 75% increase in map views and calls.' },
        { name: 'Tech Startup Blog', url: 'https://techblogx.co', description: 'Developed a comprehensive content strategy and optimized 50+ articles for better visibility.' },
        { name: 'Fitness & Wellness Hub', url: 'https://fitwellhub.org', description: 'Conducted a full site audit and technical SEO cleanup, reducing page load time by 30%.' },
    ];

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-4xl mx-auto">

                {/* Header Section */}
                <header className="text-center mb-10">
                    <h1 className="text-4xl font-extrabold text-indigo-700 sm:text-5xl">
                        📈 **SEO Projects I've Handled**
                    </h1>
                    <p className="mt-3 text-xl text-gray-600">
                        A showcase of the websites and businesses I've helped grow their organic presence.
                    </p>
                </header>

                {/* Projects List */}
                <div className="space-y-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border-l-4 border-indigo-500"
                        >
                            <div className="flex justify-between items-start">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900">
                                        {project.name}
                                    </h2>
                                    <p className="mt-1 text-sm text-indigo-600 hover:text-indigo-800 transition duration-150">
                                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                                            {project.url.replace('https://', '').replace('http://', '')}
                                        </a>
                                    </p>
                                </div>
                                {/* A simple badge to highlight the work */}
                                <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-indigo-100 text-indigo-800 rounded-full">
                                    SEO Optimized
                                </span>
                            </div>

                            <p className="mt-4 text-gray-700 border-t pt-4 border-gray-100">
                                **Key Achievements:** {project.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Call to Action/Footer Note */}
                <div className="text-center mt-12 pt-6 border-t border-gray-200">
                    <p className="text-lg text-gray-500">
                        Want to see your website here? **Let's connect!**
                    </p>
                </div>

            </div>
        </div>
    );
}