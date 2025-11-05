import React from 'react';


const permanentJobs = [
    {
        id: 1,
        title: 'Web Developer(Full Stack)',
        company: 'TechSolutions Pvt. Ltd.',
        location: 'bengalauru',
        salary: '₹18 - ₹25 LPA',
        jd: 'JavaScript, React',
        isHot: true, // हाईलाइट करने के लिए
    },
    {
        id: 2,
        title: 'Account manager (Finance)',
        company: 'Global FinServe',
        location: 'Mumbai',
        salary: '₹12 - ₹16 LPA',
        jd: 'hello js ',
        isHot: false,
    },
    {
        id: 3,
        title: 'digital Marketings Head',
        company: 'EcomGrowth Hub',
        location: 'Hzriyana ',
        salary: '₹15 - ₹22 LPA',
        jd: "asdfjklkjhgfdertyui"
        , isHot: true,
    },
    {
        id: 4,
        title: 'Talent Hirings ',
        company: 'Innovate HR Services',
        location: 'Maharastra',
        salary: '₹6 - ₹9 LPA',
        jd: 'ent to end jobs djhskdjskjdnm',
        isHot: false,
    },
];

export default function Permanents() {
    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-4xl mx-auto">

                {/* Header Section */}
                <header className="text-center mb-10">
                    <h1 className="text-4xl font-extrabold text-blue-800 sm:text-5xl">
                        Permanents Jobs Openings
                    </h1>
                    <p className="mt-3 text-xl text-gray-600">
                        Our Best Companies for staffings
                    </p>
                </header>

                {/* Job Listings (List Layout) */}
                <div className="space-y-6">
                    {permanentJobs.map((job) => (
                        <div
                            key={job.id}
                            className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 border-l-4 border-blue-500"
                        >
                            <div className="flex justify-between items-start mb-3">

                                {/* Job Title and Company */}
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900">
                                        {job.title}
                                    </h2>
                                    <p className="text-md text-blue-600 mt-1">
                                        {job.company}
                                    </p>
                                </div>

                                {/* Hot Job Badge (Conditional) */}
                                {job.isHot && (
                                    <span className="inline-flex items-center px-3 py-1 text-sm font-bold bg-red-100 text-red-800 rounded-full animate-pulse">
                                        Urgent Openings
                                    </span>
                                )}
                            </div>

                            {/* Key Details (Location and Salary) */}
                            <div className="flex flex-wrap gap-x-6 gap-y-2 text-gray-700 text-sm mb-4 border-t pt-4 border-gray-100">
                                <span className="flex items-center">
                                    <span className="text-blue-500 mr-2">📍</span> Location: {job.location}
                                </span>
                                <span className="flex items-center">
                                    <span className="text-blue-500 mr-2">💰</span> Salary(CTC): {job.salary}
                                </span>
                            </div>

                            {/* Job Description (JD) */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    Job Descriptions
                                </h3>
                                <p className="text-gray-600 leading-relaxed bg-blue-50 p-3 rounded-md">
                                    {job.jd}
                                </p>
                            </div>

                            {/* Apply Button */}
                            <button className="mt-5 w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition duration-150 shadow-md">
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>

                {/* Footer Note */}
                <div className="text-center mt-12 pt-6 border-t border-gray-200">
                    <p className="text-md text-sky-500">
                        VR Associates 
                    </p>
                </div>

            </div>
        </div>
    );
}