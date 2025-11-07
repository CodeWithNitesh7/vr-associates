import React, { useState } from "react";
import { Plus, X, FileCheck2 } from "lucide-react";

export default function Dcontract() {
    const [contracts, setContracts] = useState([
        {
            id: 1,
            title: "Frontend Developer (6 Months)",
            company: "BrightCode Solutions",
            duration: "6 Months",
            description: "Responsible for creating responsive web applications using React.js.",
        },
        {
            id: 2,
            title: "Backend Engineer (1 Year)",
            company: "CloudSync Pvt. Ltd.",
            duration: "1 Year",
            description: "Build scalable APIs with Node.js and Express.js on AWS infrastructure.",
        },
    ]);

    const [newContract, setNewContract] = useState({
        title: "",
        company: "",
        duration: "",
        description: "",
    });

    const [isAdding, setIsAdding] = useState(false);

    const handleAddContract = () => {
        if (!newContract.title || !newContract.company) return;
        setContracts([...contracts, { ...newContract, id: Date.now() }]);
        setNewContract({ title: "", company: "", duration: "", description: "" });
        setIsAdding(false);
    };

    const handleDelete = (id) => {
        setContracts(contracts.filter((contract) => contract.id !== id));
    };

    return (
        <div className="p-6 text-gray-200">
            {/* Header Section */}
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

            {/* Add Form */}
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
                        placeholder="Duration (e.g. 6 Months)"
                        value={newContract.duration}
                        onChange={(e) => setNewContract({ ...newContract, duration: e.target.value })}
                        className="w-full mb-3 p-2 rounded bg-gray-700 text-white focus:outline-none"
                    />
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

            {/* Contract Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {contracts.map((contract) => (
                    <div
                        key={contract.id}
                        className="bg-gray-800 p-5 rounded-xl shadow hover:shadow-lg transition relative"
                    >
                        <h3 className="text-lg font-semibold text-white mb-1">{contract.title}</h3>
                        <p className="text-sm text-gray-400 mb-1">Company: {contract.company}</p>
                        <p className="text-sm text-gray-400 mb-1">Duration: {contract.duration}</p>
                        <p className="text-gray-300 text-sm mb-4">{contract.description}</p>
                        <button
                            onClick={() => handleDelete(contract.id)}
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
