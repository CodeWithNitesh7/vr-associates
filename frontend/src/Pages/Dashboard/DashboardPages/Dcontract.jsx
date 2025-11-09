import React, { useState, useEffect } from "react";
import { Plus, X, FileCheck2 } from "lucide-react";
import {
  getAllContractStaff,
  addContractStaff,
  deleteContractStaff,
} from "../../../api/Services/contractStaffapi.js"; // Make sure the path is correct

export default function Dcontract() {
  const [contracts, setContracts] = useState([]);
  const [newContract, setNewContract] = useState({
    title: "",
    company: "",
    duration: "",
    compensation: "",
    location: "",
    urgent: false,
    description: "",
  });
  const [isAdding, setIsAdding] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch all contract jobs on mount
useEffect(() => {
  const fetchContracts = async () => {
    try {
      const data = await getAllContractStaff();
      // Backend returns an array directly (not inside data.jobs)
      setContracts(
        data.map((job) => ({
          id: job._id,
          title: job.title, // your backend has 'name', not 'title'
          company: job.company || "N/A", // optional, if you don’t have this field
          duration: job.duration || "N/A",
          compensation: job.compensation || "N/A",
          location: job.location || "N/A",
          urgent: job.urgent || false,
          description: job.description,
        }))
      );
    } catch (error) {
      console.error("Error fetching contract jobs:", error);
      setContracts([]);
    } finally {
      setLoading(false);
    }
  };

  fetchContracts();
}, []);


  // Add new contract job
  const handleAddContract = async () => {
    if (!newContract.title || !newContract.company || !newContract.duration || !newContract.location || !newContract.description) {
      alert("Title, Company, Duration, Location, and Description are required");
      return;
    }

    try {
      const response = await addContractStaff(newContract);

      if (response && response.job) {
        setContracts([
          ...contracts,
          {
            id: response.job._id,
            ...newContract,
          },
        ]);

        alert(response.message || "Contract job added successfully");

        // Reset form
        setNewContract({
          title: "",
          company: "",
          duration: "",
          compensation: "",
          location: "",
          urgent: false,
          description: "",
        });
        setIsAdding(false);
      } else {
        alert("Something went wrong, job not added");
      }
    } catch (error) {
      console.error("Error adding contract job:", error);
      alert(error?.message || "Failed to add contract job");
    }
  };

  // Delete contract job
  const handleDelete = async (id) => {
    try {
      const response = await deleteContractStaff(id);
      alert(response.message || "Contract job deleted successfully");
      setContracts(contracts.filter((job) => job.id !== id));
    } catch (error) {
      console.error("Error deleting contract job:", error);
      alert(error?.message || "Failed to delete contract job");
    }
  };

  return (
    <div className="p-6 text-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-indigo-400 flex items-center gap-2">
          <FileCheck2 className="w-6 h-6 text-indigo-500" />
          Contract Jobs
        </h2>
        <button
          onClick={() => setIsAdding(!isAdding)}
          className="flex items-center bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-xl text-white font-medium transition"
        >
          {isAdding ? <X className="w-4 h-4 mr-2" /> : <Plus className="w-4 h-4 mr-2" />}
          {isAdding ? "Cancel" : "Add New Contract"}
        </button>
      </div>

      {isAdding && (
        <div className="bg-gray-800 p-5 rounded-xl mb-6">
          <input
            type="text"
            placeholder="Contract Job Title"
            value={newContract.title}
            onChange={(e) => setNewContract({ ...newContract, title: e.target.value })}
            className="w-full mb-3 p-2 rounded bg-gray-700 text-white focus:outline-none"
          />
          <input
            type="text"
            placeholder="Company Name"
            value={newContract.company}
            onChange={(e) => setNewContract({ ...newContract, company: e.target.value })}
            className="w-full mb-3 p-2 rounded bg-gray-700 text-white focus:outline-none"
          />
          <input
            type="text"
            placeholder="Duration (e.g. 3 Months)"
            value={newContract.duration}
            onChange={(e) => setNewContract({ ...newContract, duration: e.target.value })}
            className="w-full mb-3 p-2 rounded bg-gray-700 text-white focus:outline-none"
          />
          <input
            type="text"
            placeholder="Compensation"
            value={newContract.compensation}
            onChange={(e) => setNewContract({ ...newContract, compensation: e.target.value })}
            className="w-full mb-3 p-2 rounded bg-gray-700 text-white focus:outline-none"
          />
          <input
            type="text"
            placeholder="Location"
            value={newContract.location}
            onChange={(e) => setNewContract({ ...newContract, location: e.target.value })}
            className="w-full mb-3 p-2 rounded bg-gray-700 text-white focus:outline-none"
          />
          <label className="flex items-center gap-2 mb-3">
            <input
              type="checkbox"
              checked={newContract.urgent}
              onChange={(e) => setNewContract({ ...newContract, urgent: e.target.checked })}
              className="w-4 h-4 accent-indigo-500"
            />
            <span>Mark as Urgent</span>
          </label>
          <textarea
            placeholder="Job Description"
            value={newContract.description}
            onChange={(e) => setNewContract({ ...newContract, description: e.target.value })}
            className="w-full mb-3 p-2 rounded bg-gray-700 text-white focus:outline-none"
          />
          <button
            onClick={handleAddContract}
            className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg font-medium"
          >
            Save Contract
          </button>
        </div>
      )}

      {loading ? (
        <p className="text-gray-400 text-center mt-10">Loading contract jobs...</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contracts.map((job) => (
            <div
              key={job.id}
              className="bg-gray-800 p-5 rounded-xl shadow hover:shadow-lg transition relative"
            >
              <h3 className="text-lg font-semibold text-white mb-1">{job.title}</h3>
              <p className="text-sm text-gray-400 mb-1">Company: {job.company}</p>
              <p className="text-sm text-gray-400 mb-1">Duration: {job.duration}</p>
              <p className="text-sm text-gray-400 mb-1">Compensation: {job.compensation}</p>
              <p className="text-sm text-gray-400 mb-1">Location: {job.location}</p>
              {job.urgent && <p className="text-sm text-red-500 font-semibold mb-1">URGENT!</p>}
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
