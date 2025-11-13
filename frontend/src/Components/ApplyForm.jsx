import React, { useState } from 'react';
import { CloudArrowUpIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { submitJobApplication } from '../api/Services/applyPermanentApi.js'; //   Updated to actual API file

export default function ApplyForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    resume: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  // 📝 Handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  // 🚀 Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      // 🧩 Prepare FormData for file upload
      const data = new FormData();
      data.append('fullName', formData.fullName);
      data.append('email', formData.email);
      data.append('phoneNumber', formData.phoneNumber);
      data.append('resume', formData.resume);

      // 📡 Call the API
      const res = await submitJobApplication(data);
      console.log("  Application submitted:", res);

      setStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        resume: null,
      });
    } catch (error) {
      console.error("  Error submitting application:", error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // 🎯 Status messages
  const getStatusMessage = () => {
    if (status === 'success') {
      return (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4 rounded-md flex items-center" role="alert">
          <CheckCircleIcon className="h-6 w-6 mr-3" />
          <div>
            <p className="font-semibold">Application Successful!</p>
            <p className="ml-2 text-sm">Thank you for applying to VR Associate Staffing Services. We'll be in touch soon.</p>
          </div>
        </div>
      );
    }
    if (status === 'error') {
      return (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 rounded-md flex items-center" role="alert">
          <XCircleIcon className="h-6 w-6 mr-3" />
          <div>
            <p className="font-semibold">Submission Failed!</p>
            <p className="ml-2 text-sm">Please check your details and try again.</p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-lg bg-white p-8 sm:p-10 shadow-2xl rounded-xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Join <span className="text-indigo-600">VR Associate</span> Staffing
          </h2>
          <p className="mt-2 text-lg text-gray-500">
            Complete your application in just a few steps.
          </p>
        </div>

        {getStatusMessage()}

        <form onSubmit={handleSubmit} className="space-y-6">
         

          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name *</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-500"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="+91 9876543210"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-500"
            />
          </div>

          {/* Resume Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Upload Resume *</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-lg hover:border-indigo-400">
              <div className="space-y-1 text-center">
                <CloudArrowUpIcon className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="resume"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="resume"
                      name="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleChange}
                      required
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                {formData.resume ? (
                  <p className="text-xs text-gray-500 font-medium">Selected: {formData.resume.name}</p>
                ) : (
                  <p className="text-xs text-gray-500">PDF, DOCX up to 10MB</p>
                )}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-3 px-4 rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400"
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
