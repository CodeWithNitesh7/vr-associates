import React from 'react';

// Data for Contract Staff Job Openings (in English)
const contractJobs = [
    {
        id: 101,
        title: 'Data Entry Specialist (3 Months Contract)',
        company: 'Global Data Services',
        location: 'Remote (Anywhere in India)',
        duration: '3 Months',
        rate: '₹40,000 - ₹55,000 per month',
        jd: 'Accurate and timely data input for CRM updates. Proficiency in MS Excel is mandatory. Attention to detail required.',
        isUrgent: true, // Urgent status for contract roles
    },
    {
        id: 102,
        title: 'Project Manager (IT Implementation)',
        company: 'InnoSoft Tech',
        location: 'Pune, Maharashtra',
        duration: '6 Months',
        rate: 'Negotiable based on experience',
        jd: 'Manage the full lifecycle of a cloud migration project. PMP certification preferred. Strong stakeholder management skills.',
        isUrgent: false,
    },
    {
        id: 103,
        title: 'Content Writer (Part-Time Contract)',
        company: 'Digital Marketing Agency',
        location: 'Remote',
        duration: 'Ongoing (Max 20 hrs/week)',
        rate: 'Per article basis or hourly rate',
        jd: 'Produce engaging, SEO-friendly blog posts and website copy. Native English fluency essential.',
        isUrgent: true,
    },
    {
        id: 104,
        title: 'Quality Assurance (QA) Tester',
        company: 'AppBuild Labs',
        location: 'Hyderabad, Telangana',
        duration: '4 Months',
        rate: '₹50,000 - ₹70,000 per month',
        jd: 'Execute test cases, report bugs using JIRA, and perform regression testing on mobile applications.',
        isUrgent: false,
    },
];

export default function ContractStaffing() {
    return (
        <div className="min-h-screen bg-white p-8">
            <div className="max-w-4xl mx-auto">

                {/* Header Section */}
                <header className="text-center mb-10">
                    <h1 className="text-4xl font-extrabold text-sky-700 sm:text-5xl">
                        Contract Staffing Opportunities
                    </h1>
                    <p className="mt-3 text-xl text-gray-600">
                        Short-term, high-impact roles available across various industries.
                    </p>
                </header>

                {/* Job Listings (List Layout) */}
                <div className="space-y-6">
                    {contractJobs.map((job) => (
                        <div
                            key={job.id}
                            className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-l-4 border-sky-500"
                        >
                            <div className="flex justify-between items-start mb-3">

                                {/* Job Title and Company */}
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900">
                                        {job.title}
                                    </h2>
                                    <p className="text-md text-sky-600 mt-1">
                                        {job.company}
                                    </p>
                                </div>

                                {/* Urgent Badge (Conditional) */}
                                {job.isUrgent && (
                                    <span className="inline-flex items-center px-3 py-1 text-sm font-bold bg-sky-500 text-white rounded-full shadow-md">
                                         URGENT HIRE
                                    </span>
                                )}
                            </div>

                            {/* Key Details (Duration and Rate) */}
                            <div className="flex flex-wrap gap-x-6 gap-y-2 text-gray-700 text-sm mb-4 border-t pt-4 border-gray-200">
                                <span className="flex items-center">
                                    <span className="text-sky-500 mr-2">🗓️</span> Duration: {job.duration}
                                </span>
                                <span className="flex items-center">
                                    <span className="text-sky-500 mr-2">💲</span> Compensation: {job.rate}
                                </span>
                                <span className="flex items-center">
                                    <span className="text-sky-500 mr-2">📍</span> Location: {job.location}
                                </span>
                            </div>

                            {/* Job Description (JD) */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    Role Summary
                                </h3>
                                <p className="text-gray-600 leading-relaxed bg-orange-50 p-3 rounded-md border border-orange-100">
                                    {job.jd}
                                </p>
                            </div>

                            {/* Apply Button */}
                            <button className="mt-5 w-full bg-sky-600 text-white py-2.5 rounded-lg font-semibold hover:bg-sky-700 transition duration-150 shadow-lg">
                                Apply for this Contract Role
                            </button>
                        </div>
                    ))}
                </div>

                {/* Footer Note */}
                <div className="text-center mt-12 pt-6 border-t border-gray-200">
                    <p className="text-md text-gray-500">
                        We specialize in filling short-term, mission-critical roles quickly.
                    </p>
                </div>

            </div>
        </div>
    );
}