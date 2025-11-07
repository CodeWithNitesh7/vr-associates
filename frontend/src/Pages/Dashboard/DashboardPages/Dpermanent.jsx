import React, { useState } from "react";
import { Plus, X, Briefcase } from "lucide-react";

export default function Permanent() {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Full Stack Developer",
      company: "TechSphere Pvt. Ltd.",
      location: "Bangalore",
      description: "Work on MERN stack projects with modern cloud technologies.",
    },
    {
      id: 2,
      title: "UI/UX Designer",
      company: "DesignHub",
      location: "Pune",
      description: "Create intuitive and modern user experiences for web apps.",
    },
  ]);

  const [newJob, setNewJob] = useState({
    title: "",
    company: "",
    location: "",
    description: "",
  });

  const [isAdding, setIsAdding] = useState(false);

  const handleAddJob = () => {
    if (!newJob.title || !newJob.company) return;
    setJobs([...jobs, { ...newJob, id: Date.now() }]);
    setNewJob({ title: "", company: "", location: "", description: "" });
    setIsAdding(false);
  };

  const handleDelete = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
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
          <textarea
            placeholder="Job Description"
            value={newJob.description}
            onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
            className="w-full mb-3 p-2 rounded bg-gray-700 text-white focus:outline-none"
          />
          <button
            onClick={handleAddJob}
            className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg font-medium"
          >
            Save Job
          </button>
        </div>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-gray-800 p-5 rounded-xl shadow hover:shadow-lg transition relative"
          >
            <h3 className="text-lg font-semibold text-white mb-1">{job.title}</h3>
            <p className="text-sm text-gray-400 mb-1">Company: {job.company}</p>
            <p className="text-sm text-gray-400 mb-1">Location: {job.location}</p>
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
    </div>
  );
}
