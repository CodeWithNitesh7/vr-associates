import React, { useEffect, useState } from "react";
import { getAllContractStaff } from "../../api/Services/contractStaffapi.js"; //   adjust path if needed
import { useNavigate } from "react-router-dom";

export default function ContractStaffing() {
  const naviagte = useNavigate();
  const [contractJobs, setContractJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🧠 Fetch contract job data from backend
  useEffect(() => {
    const fetchContractJobs = async () => {
      try {
        const data = await getAllContractStaff();
        setContractJobs(data || []);
      } catch (error) {
        console.error("  Error fetching Contract Jobs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchContractJobs();
  }, []);

  // 🌀 Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <h2 className="text-2xl font-semibold text-sky-600 animate-pulse">
          Loading Contract Staffing Opportunities...
        </h2>
      </div>
    );
  }

  // 🚨 No jobs available
  if (contractJobs.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <h2 className="text-2xl font-semibold text-gray-700">
          No Contract Staffing Opportunities Available
        </h2>
        <p className="text-gray-500 mt-2">Please check back later.</p>
      </div>
    );
  }

  //   Main UI (same as your original static version)
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

        {/* Job Listings */}
        <div className="space-y-6">
          {contractJobs.map((job) => (
            <div
              key={job._id}
              className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-l-4 border-sky-500"
            >
              <div className="flex justify-between items-start mb-3">

                {/* Job Title and Company */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {job.title}
                  </h2>
                  <p className="text-md text-sky-600 mt-1">{job.company}</p>
                </div>

                {/* Urgent Badge */}
                {job.urgent && (
                  <span className="inline-flex items-center px-3 py-1 text-sm font-bold bg-sky-500 text-white rounded-full shadow-md">
                    URGENT HIRE
                  </span>
                )}
              </div>

              {/* Key Details */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-gray-700 text-sm mb-4 border-t pt-4 border-gray-200">
                <span className="flex items-center">
                  <span className="text-sky-500 mr-2">🗓️</span> Duration:{" "}
                  {job.duration}
                </span>
                {job.compensation && (
                  <span className="flex items-center">
                    <span className="text-sky-500 mr-2">💲</span> Compensation:{" "}
                    {job.compensation}
                  </span>
                )}
                <span className="flex items-center">
                  <span className="text-sky-500 mr-2">📍</span> Location:{" "}
                  {job.location}
                </span>
              </div>

              {/* Role Summary */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Role Summary
                </h3>
                <p className="text-gray-600 leading-relaxed bg-orange-50 p-3 rounded-md border border-orange-100">
                  {job.description}
                </p>
              </div>

              {/* Apply Button */}
              <button
                onClick={() => naviagte('/apply')}
                className="mt-5 w-full bg-sky-600 text-white py-2.5 rounded-lg font-semibold hover:bg-sky-700 transition duration-150 shadow-lg">
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
