import React, { useState, useEffect } from "react";
import { Plus, X, Briefcase } from "lucide-react";
import {
  getAllPermanentStaff,
  addPermanentStaff,
  deletePermanentStaff,
} from "../../../api/Services/permanentStaffApi.js";

export default function Permanent() {
  const [jobs, setJobs] = useState([]);
  const [newJob, setNewJob] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    description: "",
    urgent: false,
  });
  const [isAdding, setIsAdding] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch jobs from backend
const fetchJobs = async () => {
  try {
    const jobsArray = await getAllPermanentStaff(); // now returns array directly

    const formatted = jobsArray.map((job) => ({
      id: job._id,
      title: job.title,
      company: job.company,
      location: job.location || "N/A",
      salary: job.salary || "N/A",
      description: job.description || "",
      urgent: job.urgent || false,
    }));

    setJobs(formatted);
  } catch (err) {
    console.error("Error fetching jobs:", err);
    setError(err?.message || "Failed to fetch jobs");
    setJobs([]);
  } finally {
    setLoading(false);
  }
};


  useEffect(() => {
    fetchJobs();
  }, []);

  // Add new job
  const handleAddJob = async () => {
    if (!newJob.title || !newJob.company || !newJob.description) {
      alert("Title, Company, and Description are required");
      return;
    }

    try {
      const payload = { ...newJob };
      const response = await addPermanentStaff(payload);

      if (response && response.job) {
        setJobs([
          ...jobs,
          {
            id: response.job._id,
            ...response.job,
          },
        ]);

        alert(response.message || "Job added successfully");

        // Reset form
        setNewJob({
          title: "",
          company: "",
          location: "",
          salary: "",
          description: "",
          urgent: false,
        });
        setIsAdding(false);
      } else {
        alert("Something went wrong, job not added");
      }
    } catch (err) {
      console.error("Error adding job:", err);
      alert(err?.error || "Failed to add job");
    }
  };

  // Delete job
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this job?")) return;
    try {
      const response = await deletePermanentStaff(id);
      alert(response.message || "Job deleted successfully");
      setJobs(jobs.filter((job) => job.id !== id));
    } catch (err) {
      console.error("Error deleting job:", err);
      alert(err?.error || "Failed to delete job");
    }
  };

  return (
    <div className="p-6 text-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-indigo-400 flex items-center gap-2">
          <Briefcase className="w-6 h-6 text-indigo-500" />
          Permanent Jobs
        </h2>
        <button
          onClick={() => setIsAdding(!isAdding)}
          className="flex items-center bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-xl text-white font-medium transition"
        >
          {isAdding ? <X className="w-4 h-4 mr-2" /> : <Plus className="w-4 h-4 mr-2" />}
          {isAdding ? "Cancel" : "Add New Job"}
        </button>
      </div>

      {isAdding && (
        <div className="bg-gray-800 p-5 rounded-xl mb-6">
          <input
            type="text"
            placeholder="Job Title"
            value={newJob.title}
            onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
            className="w-full mb-3 p-2 rounded bg-gray-700 text-white focus:outline-none"
          />
          <input
            type="text"
            placeholder="Company Name"
            value={newJob.company}
            onChange={(e) => setNewJob({ ...newJob, company: e.target.value })}
            className="w-full mb-3 p-2 rounded bg-gray-700 text-white focus:outline-none"
          />
          <input
            type="text"
            placeholder="Location"
            value={newJob.location}
            onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
            className="w-full mb-3 p-2 rounded bg-gray-700 text-white focus:outline-none"
          />
          <input
            type="text"
            placeholder="Salary"
            value={newJob.salary}
            onChange={(e) => setNewJob({ ...newJob, salary: e.target.value })}
            className="w-full mb-3 p-2 rounded bg-gray-700 text-white focus:outline-none"
          />
          <textarea
            placeholder="Job Description"
            value={newJob.description}
            onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
            className="w-full mb-3 p-2 rounded bg-gray-700 text-white focus:outline-none"
          />
          <label className="flex items-center gap-2 mb-3">
            <input
              type="checkbox"
              checked={newJob.urgent}
              onChange={(e) => setNewJob({ ...newJob, urgent: e.target.checked })}
              className="w-4 h-4 accent-indigo-500"
            />
            <span>Mark as Urgent</span>
          </label>
          <button
            onClick={handleAddJob}
            className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg font-medium"
          >
            Save Job
          </button>
        </div>
      )}

      {loading ? (
        <p className="text-gray-400 text-center mt-10">Loading jobs...</p>
      ) : error ? (
        <p className="text-red-500 text-center mt-10">{error}</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-gray-800 p-5 rounded-xl shadow hover:shadow-lg transition relative"
            >
              <h3 className="text-lg font-semibold text-white mb-1">{job.title}</h3>
              <p className="text-sm text-gray-400 mb-1">Company: {job.company}</p>
              <p className="text-sm text-gray-400 mb-1">Location: {job.location}</p>
              <p className="text-sm text-gray-400 mb-1">Salary: {job.salary}</p>
              {job.urgent && <p className="text-sm text-red-500 font-semibold mb-1">Urgent!</p>}
              <p className="text-gray-300 text-sm mb-4">{job.description}</p>
              <button
                onClick={() => handleDelete(job.id)}
                className="absolute top-3 right-3 text-red-400 hover:text-red-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
