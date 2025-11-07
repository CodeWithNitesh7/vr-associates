// components/Careers.jsx
import React, { useState } from "react";

// Mock Data for Open Positions (You should replace this with data fetched from an API)
const mockOpenPositions = [
  { id: 1, title: "Senior VR Developer (Unity/Unreal)", department: "Technology", location: "Remote" },
  { id: 2, title: "Recruitment Specialist - Tech Staffing", department: "Staffing", location: "New York, NY" },
  { id: 3, title: "UX/UI Designer (VR/AR)", department: "Design", location: "San Francisco, CA" },
];

export default function Careers() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    positionId: '', // If applying for a specific role
    resume: null,
  });
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error', or null

  // --- Form Handlers ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus(null); // Reset status

    if (!formData.name || !formData.email || !formData.resume) {
      setSubmissionStatus('error: Please fill in all required fields and upload a resume.');
      return;
    }

    // *** IMPORTANT: This is where you connect to your backend API ***
    console.log("Submitting Data:", formData);

    // Placeholder for actual API call (e.g., using Fetch or Axios)
    try {
      // Example:
      // const response = await fetch('/api/upload-resume', { 
      //     method: 'POST', 
      //     body: formData // FormData handles file upload automatically
      // });
      // if (!response.ok) throw new Error('Upload failed');

      // Mock success after a delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      setSubmissionStatus('success');
      setFormData({ name: '', email: '', positionId: '', resume: null }); // Clear form
    } catch (error) {
      console.error("Submission Error:", error);
      setSubmissionStatus(`error: Submission failed. ${error.message}`);
    }
  };

  return (
    <section id="careers" className="py-20 bg-linear-to-r from-indigo-50 via-blue-100 to-blue-50">

      {/* --- Join Our Team Headline --- */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl font-bold text-blue-700 mb-3">Join Our Team</h2>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
          Explore opportunities to grow with VR Associates and make a difference in the world of staffing and recruitment.
        </p>
      </div>

      {/* --- Open Positions Section --- */}
      <div className="max-w-4xl mx-auto px-4 mb-16">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">Current Openings</h3>

        <div className="space-y-4">
          {mockOpenPositions.map((job) => (
            <div key={job.id} className="bg-white p-5 shadow rounded-lg flex justify-between items-center transition duration-300 hover:shadow-md border border-blue-200">
              <div>
                <p className="text-lg font-bold text-blue-600">{job.title}</p>
                <p className="text-sm text-gray-500 mt-1">
                  {job.department} | {job.location}
                </p>
              </div>
              <button
                onClick={() => setFormData(prev => ({ ...prev, positionId: String(job.id) }))}
                className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium hover:bg-indigo-200 transition"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>

        {/* General Link as Fallback */}
        <div className="mt-8 text-center">
          <a
            href="/login" // Keep your original link for a portal if needed
            className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center"
          >
            Or explore our candidate portal <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>
      </div>

      {/* --- Resume Upload Section --- */}
      <div className="max-w-2xl mx-auto px-4">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">General Resume Submission</h3>

        <form onSubmit={handleSubmit} className="bg-white p-8 shadow-xl rounded-xl space-y-6 border-t-4 border-blue-600">

          {/* Status Message */}
          {submissionStatus && (
            <div className={`p-3 rounded-lg text-sm font-medium ${submissionStatus.startsWith('success')
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
              }`}>
              {submissionStatus.startsWith('success') ? '✅ Your resume has been submitted successfully!' : `❌ Error: ${submissionStatus.replace('error:', '').trim()}`}
            </div>
          )}

          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your Full Name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@example.com"
            />
          </div>

          {/* Position ID Field (Hidden or Select Dropdown) */}
          {formData.positionId && (
            <input type="hidden" name="positionId" value={formData.positionId} />
          )}

          {/* Resume Upload Field */}
          <div>
            <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">Upload Resume (PDF, DOCX) <span className="text-red-500">*</span></label>
            <input
              type="file"
              name="resume"
              id="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              required
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100
              "
            />
            {formData.resume && (
              <p className="mt-1 text-xs text-gray-500">Selected: {formData.resume.name}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={submissionStatus === 'success'}
            className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-md text-base font-medium text-white transition duration-150 ${submissionStatus === 'success'
              ? 'bg-green-500 cursor-not-allowed'
              : 'bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
              }`}
          >
            {submissionStatus === 'success' ? 'Submitted Successfully!' : 'Submit Resume'}
          </button>

        </form>
      </div>
    </section>
  );
}