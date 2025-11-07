import React from 'react';

// Sample Data for your built applications
const projects = [
    {
        id: 1,
        name: 'Invoicely - Billing Platform',
        type: 'Web Application',
        techStack: 'React, Node.js, PostgreSQL',
        description: 'A secure, cloud-based invoicing and expense tracking system for SMEs.',
        imageUrl: 'https://via.placeholder.com/600x400?text=Web+App:+Invoicing',
        isFeatured: true,
    },
    {
        id: 2,
        name: 'FitTrack Pro',
        type: 'Web Application',
        techStack: 'React Native, Firebase',
        description: 'A cross-platform fitness tracker focusing on real-time workout synchronization.',
        imageUrl: 'https://via.placeholder.com/600x400?text=Mobile+App:+Fitness',
        isFeatured: false,
    },
    {
        id: 3,
        name: 'Internal CRM Dashboard',
        type: 'Web Application',
        techStack: 'Vue.js, Tailwind CSS, REST API',
        description: 'Custom internal dashboard for managing client relations and sales pipelines.',
        imageUrl: 'https://via.placeholder.com/600x400?text=Web+App:+CRM',
        isFeatured: true,
    },
    {
        id: 4,
        name: 'LocalConnect',
        type: 'Web Application',
        techStack: 'Swift, Backend Microservices',
        description: 'Location-based discovery app for local events and services.',
        imageUrl: 'https://via.placeholder.com/600x400?text=Mobile+App:+Local',
        isFeatured: false,
    },
];

export default function Websites() {
    // Filter featured projects for a separate section if desired
    const featuredProjects = projects.filter(p => p.isFeatured);
    const regularProjects = projects.filter(p => !p.isFeatured);

    return (
        <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
            <div className="max-w-6xl mx-auto">

                {/* Header Section */}
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-sky-600 sm:text-5xl">
                        Our Web Applications
                    </h1>
                    <p className="mt-3 text-xl text-gray-600">
                        Explore the high-quality web applications built by our expert teams.
                    </p>
                </header>

                {/* Featured Projects Section */}
                {featuredProjects.length > 0 && (
                    <>
                        <h2 className="text-3xl font-bold text-sky-600 mb-6 border-b pb-2">
                            ⭐ Featured Projects
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
                            {featuredProjects.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    </>
                )}

                {/* All Other Projects Section */}
                <h2 className="text-3xl font-bold text-gray-700 mb-6 border-b pb-2 mt-8">
                    All Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {regularProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

            </div>
        </div>
    );
}

// Reusable Card Component for better organization
const ProjectCard = ({ project }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl transform hover:-translate-y-1">

        {/* Image Area */}
        <div className="h-48 bg-gray-200">
            <img
                src={project.imageUrl}
                alt={project.name}
                className="w-full h-full object-cover"
            />
        </div>

        {/* Details */}
        <div className="p-5">
            <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>

            {/* Type Badge */}
            <span className={`inline-block mt-1 px-3 py-1 text-xs font-semibold rounded-full 
          ${project.type.includes('Mobile') ? 'bg-indigo-100 text-indigo-800' : 'bg-green-100 text-green-800'}`}
            >
                {project.type}
            </span>

            <p className="mt-3 text-gray-600 text-sm italic">"{project.description}"</p>

            {/* Tech Stack */}
            <div className="mt-3 pt-3 border-t border-gray-100">
                <p className="text-xs font-medium text-gray-500 mb-1">Tech Stack:</p>
                <p className="text-sm font-mono text-sky-600">{project.techStack}</p>
            </div>
        </div>
    </div>
);