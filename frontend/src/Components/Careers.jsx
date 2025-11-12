// // components/Careers.jsx
// import React, { useState } from "react";

// // Mock Data for Open Positions (You should replace this with data fetched from an API)
// const mockOpenPositions = [
//   { id: 1, title: "Senior VR Developer (Unity/Unreal)", department: "Technology", location: "Remote" },
//   { id: 2, title: "Recruitment Specialist - Tech Staffing", department: "Staffing", location: "New York, NY" },
//   { id: 3, title: "UX/UI Designer (VR/AR)", department: "Design", location: "San Francisco, CA" },
// ];

// export default function Careers() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     positionId: '', // If applying for a specific role
//     resume: null,
//   });
//   const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error', or null

//   // --- Form Handlers ---
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e) => {
//     setFormData(prev => ({ ...prev, resume: e.target.files[0] }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmissionStatus(null); // Reset status

//     if (!formData.name || !formData.email || !formData.resume) {
//       setSubmissionStatus('error: Please fill in all required fields and upload a resume.');
//       return;
//     }

//     // *** IMPORTANT: This is where you connect to your backend API ***
//     console.log("Submitting Data:", formData);

//     // Placeholder for actual API call (e.g., using Fetch or Axios)
//     try {
//       // Example:
//       // const response = await fetch('/api/upload-resume', { 
//       //     method: 'POST', 
//       //     body: formData // FormData handles file upload automatically
//       // });
//       // if (!response.ok) throw new Error('Upload failed');

//       // Mock success after a delay
//       await new Promise(resolve => setTimeout(resolve, 1500));

//       setSubmissionStatus('success');
//       setFormData({ name: '', email: '', positionId: '', resume: null }); // Clear form
//     } catch (error) {
//       console.error("Submission Error:", error);
//       setSubmissionStatus(`error: Submission failed. ${error.message}`);
//     }
//   };

//   return (
//     <section id="careers" className="py-20 bg-linear-to-r from-indigo-50 via-blue-100 to-blue-50">

//       {/* --- Join Our Team Headline --- */}
//       <div className="text-center mb-12 px-4">
//         <h2 className="text-4xl font-bold text-blue-700 mb-3">Join Our Team</h2>
//         <p className="max-w-2xl mx-auto text-gray-600 text-lg">
//           Explore opportunities to grow with VR Associates and make a difference in the world of staffing and recruitment.
//         </p>
//       </div>

//       {/* --- Open Positions Section --- */}
//       <div className="max-w-4xl mx-auto px-4 mb-16">
//         <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">Current Openings</h3>

//         <div className="space-y-4">
//           {mockOpenPositions.map((job) => (
//             <div key={job.id} className="bg-white p-5 shadow rounded-lg flex justify-between items-center transition duration-300 hover:shadow-md border border-blue-200">
//               <div>
//                 <p className="text-lg font-bold text-blue-600">{job.title}</p>
//                 <p className="text-sm text-gray-500 mt-1">
//                   {job.department} | {job.location}
//                 </p>
//               </div>
//               <button
//                 onClick={() => setFormData(prev => ({ ...prev, positionId: String(job.id) }))}
//                 className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium hover:bg-indigo-200 transition"
//               >
//                 Apply Now
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* General Link as Fallback */}
//         <div className="mt-8 text-center">
//           {/* <a
//             href="/login" // Keep your original link for a portal if needed
//             className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center"
//           >
//             Or explore our candidate portal <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
//           </a> */}
//         </div>
//       </div>

//       {/* --- Resume Upload Section --- */}
//       <div className="max-w-2xl mx-auto px-4">
//         <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">General Resume Submission</h3>

//         <form onSubmit={handleSubmit} className="bg-white p-8 shadow-xl rounded-xl space-y-6 border-t-4 border-blue-600">

//           {/* Status Message */}
//           {submissionStatus && (
//             <div className={`p-3 rounded-lg text-sm font-medium ${submissionStatus.startsWith('success')
//               ? 'bg-green-100 text-green-800'
//               : 'bg-red-100 text-red-800'
//               }`}>
//               {submissionStatus.startsWith('success') ? '  Your resume has been submitted successfully!' : `❌ Error: ${submissionStatus.replace('error:', '').trim()}`}
//             </div>
//           )}

//           {/* Name Field */}
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
//             <input
//               type="text"
//               name="name"
//               id="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//               placeholder="Your Full Name"
//             />
//           </div>

//           {/* Email Field */}
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//               placeholder="you@example.com"
//             />
//           </div>

//           {/* Position ID Field (Hidden or Select Dropdown) */}
//           {formData.positionId && (
//             <input type="hidden" name="positionId" value={formData.positionId} />
//           )}

//           {/* Resume Upload Field */}
//           <div>
//             <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">Upload Resume (PDF, DOCX) <span className="text-red-500">*</span></label>
//             <input
//               type="file"
//               name="resume"
//               id="resume"
//               accept=".pdf,.doc,.docx"
//               onChange={handleFileChange}
//               required
//               className="block w-full text-sm text-gray-500
//                 file:mr-4 file:py-2 file:px-4
//                 file:rounded-full file:border-0
//                 file:text-sm file:font-semibold
//                 file:bg-blue-50 file:text-blue-700
//                 hover:file:bg-blue-100
//               "
//             />
//             {formData.resume && (
//               <p className="mt-1 text-xs text-gray-500">Selected: {formData.resume.name}</p>
//             )}
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             disabled={submissionStatus === 'success'}
//             className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-md text-base font-medium text-white transition duration-150 ${submissionStatus === 'success'
//               ? 'bg-green-500 cursor-not-allowed'
//               : 'bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
//               }`}
//           >
//             {submissionStatus === 'success' ? 'Submitted Successfully!' : 'Submit Resume'}
//           </button>

//         </form>
//       </div>
//     </section>
//   );
// }












// components/Careers.jsx
import React, { useState } from "react";
import {
  Briefcase,
  MapPin,
  Mail,
  User,
  Upload,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { submitJobApplication } from "../api/Services/applyPermanentApi.js"; // ✅ Correct API import

// Mock Data (can be fetched from backend later)
const mockOpenPositions = [
  {
    id: 1,
    title: "Senior VR Developer (Unity/Unreal)",
    department: "Technology",
    location: "Remote",
  },
  {
    id: 2,
    title: "Recruitment Specialist - Tech Staffing",
    department: "Staffing",
    location: "New York, NY",
  },
  {
    id: 3,
    title: "UX/UI Designer (VR/AR)",
    department: "Design",
    location: "San Francisco, CA",
  },
];

export default function Careers() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    positionId: "", // Stores selected job ID
    resume: null,
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 🔹 Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 🔹 Handle Resume Upload
  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, resume: e.target.files[0] }));
  };

  // 🔹 Find job title by ID
  const getPositionTitle = (id) => {
    const job = mockOpenPositions.find((p) => String(p.id) === id);
    return job ? job.title : "General Submission";
  };

  // 🔹 Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus(null);

    if (isSubmitting) return;

    if (!formData.name || !formData.email || !formData.resume) {
      setSubmissionStatus(
        "error: Please fill all required fields and upload a resume."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const formToSend = new FormData();
      formToSend.append("fullName", formData.name);
      formToSend.append("email", formData.email);
      formToSend.append("resume", formData.resume);

      // ✅ Dynamically set job title or fallback
      formToSend.append("jobTitle", getPositionTitle(formData.positionId));

      const res = await submitJobApplication(formToSend);
      console.log("✅ Submission Success:", res);

      setSubmissionStatus("success");
      setFormData({ name: "", email: "", positionId: "", resume: null });
    } catch (error) {
      console.error("❌ Submission Failed:", error);
      setSubmissionStatus(
        `error: ${error.response?.data?.message || error.message}`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="careers" className="py-24 bg-gray-50 overflow-hidden">
      {/* ---- Header ---- */}
      <div className="text-center mb-16 px-4 max-w-4xl mx-auto">
        <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest bg-blue-100 py-1 px-3 rounded-full inline-block mb-3">
          Opportunities
        </span>
        <h2 className="text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          Shape the Future with Us
        </h2>
        <p className="max-w-3xl mx-auto text-xl text-gray-500">
          Explore opportunities to grow with VR Associates and make a difference
          in the world of staffing and cutting-edge technology.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* ---- Open Positions ---- */}
        <div>
          <h3 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <Briefcase className="w-6 h-6 mr-3 text-blue-600" /> Current Open
            Roles
          </h3>

          <div className="space-y-4">
            {mockOpenPositions.map((job) => (
              <div
                key={job.id}
                className={`p-6 border border-gray-200 rounded-xl transition duration-300 transform 
                  ${
                    String(job.id) === formData.positionId
                      ? "bg-blue-50 shadow-lg scale-[1.01] border-blue-400"
                      : "bg-white shadow-md hover:shadow-lg hover:scale-[1.01]"
                  }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xl font-semibold text-gray-800">
                      {job.title}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 mt-2 space-x-4">
                      <span className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-1 text-blue-500" />{" "}
                        {job.department}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1 text-blue-500" />{" "}
                        {job.location}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        positionId: String(job.id),
                      }))
                    }
                    className={`ml-4 px-5 py-2 text-sm font-medium rounded-full transition duration-300 whitespace-nowrap 
                      ${
                        String(job.id) === formData.positionId
                          ? "bg-blue-600 text-white shadow-md hover:bg-blue-700"
                          : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                      }`}
                  >
                    {String(job.id) === formData.positionId
                      ? "Selected"
                      : "Apply Now"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center lg:text-left">
            <p className="text-sm text-gray-500">
              Can’t find your fit? Submit a general application below.
            </p>
          </div>
        </div>

        {/* ---- Resume Submission Form ---- */}
        <div className="sticky top-10 self-start">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">
            <Upload className="w-6 h-6 mr-3 text-blue-600 inline-block" /> Resume
            Submission
          </h3>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-10 shadow-2xl rounded-2xl space-y-7 border border-gray-100"
          >
            {/* ---- Submission Status ---- */}
            {submissionStatus && (
              <div
                className={`p-4 rounded-lg flex items-center text-sm font-semibold transition-all duration-300
                ${
                  submissionStatus.startsWith("success")
                    ? "bg-green-50 border border-green-300 text-green-700"
                    : "bg-red-50 border border-red-300 text-red-700"
                }`}
              >
                {submissionStatus.startsWith("success") ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <p>
                      Application for{" "}
                      <strong>
                        {getPositionTitle(formData.positionId)}
                      </strong>{" "}
                      submitted successfully!
                    </p>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 mr-2" />
                    <p>
                      Error: {submissionStatus.replace("error:", "").trim()}
                    </p>
                  </>
                )}
              </div>
            )}

            {/* ---- Applying For ---- */}
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-500 font-medium">Applying For:</p>
              <p className="text-lg font-bold text-blue-600">
                {getPositionTitle(formData.positionId)}
              </p>
            </div>

            {/* ---- Name ---- */}
            <div className="relative">
              <label
                htmlFor="name"
                className="block text-xs font-medium text-gray-500 mb-1"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                  placeholder="John Doe"
                />
              </div>
            </div>

            {/* ---- Email ---- */}
            <div className="relative">
              <label
                htmlFor="email"
                className="block text-xs font-medium text-gray-500 mb-1"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* ---- File Upload ---- */}
            <div>
              <label
                htmlFor="resume"
                className="block text-xs font-medium text-gray-500 mb-2"
              >
                Upload Resume (PDF, DOCX){" "}
                <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center space-x-3">
                <div className="flex-grow">
                  <input
                    type="file"
                    name="resume"
                    id="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    required
                    className="hidden"
                  />
                  <label
                    htmlFor="resume"
                    className={`flex items-center justify-center w-full py-3 px-4 border-2 ${
                      formData.resume
                        ? "border-blue-500 bg-blue-50 text-blue-700"
                        : "border-dashed border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
                    } rounded-lg cursor-pointer transition duration-200`}
                  >
                    <Upload className="w-5 h-5 mr-2" />
                    <span className="text-sm font-medium">
                      {formData.resume
                        ? `File Selected: ${formData.resume.name.substring(
                            0,
                            30
                          )}${
                            formData.resume.name.length > 30 ? "..." : ""
                          }`
                        : "Click to Browse or Drag & Drop"}
                    </span>
                  </label>
                </div>
              </div>
              <p className="mt-1 text-xs text-gray-400">
                Max file size 5MB. Acceptable formats: .pdf, .doc, .docx
              </p>
            </div>

            {/* ---- Submit Button ---- */}
            <button
              type="submit"
              disabled={isSubmitting || submissionStatus === "success"}
              className={`w-full flex items-center justify-center py-3 px-4 rounded-lg shadow-lg text-lg font-bold text-white transition duration-200 
                ${
                  isSubmitting
                    ? "bg-blue-400 cursor-wait"
                    : submissionStatus === "success"
                    ? "bg-green-600 hover:bg-green-700 cursor-not-allowed shadow-green-400/50"
                    : "bg-blue-600 hover:bg-blue-700 shadow-blue-400/50"
                }`}
            >
              {isSubmitting ? (
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : submissionStatus === "success" ? (
                <>
                  <CheckCircle className="w-5 h-5 mr-2" /> Submitted
                  Successfully!
                </>
              ) : (
                "Submit Application"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
