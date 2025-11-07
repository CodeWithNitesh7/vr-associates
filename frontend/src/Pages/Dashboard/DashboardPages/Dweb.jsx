import React, { useState } from "react";
import { PlusCircle, Globe, Trash2, Edit3, ExternalLink } from "lucide-react";

export default function DWeb() {
  const [websites, setWebsites] = useState([
    {
      id: 1,
      title: "VR Associates",
      category: "Business Website",
      url: "https://vrassociates.in",
      description: "A professional business website showcasing VR Associates’ services and clients.",
    },
    {
      id: 2,
      title: "FitLife Gym",
      category: "Fitness Website",
      url: "https://fitlifegym.com",
      description: "A modern fitness club website with plans, trainers, and membership options.",
    },
  ]);

  const [newWebsite, setNewWebsite] = useState({
    title: "",
    category: "",
    url: "",
    description: "",
  });

  const handleAddWebsite = () => {
    if (!newWebsite.title || !newWebsite.category || !newWebsite.url || !newWebsite.description) return;
    setWebsites([
      ...websites,
      { id: Date.now(), ...newWebsite },
    ]);
    setNewWebsite({ title: "", category: "", url: "", description: "" });
  };

  const handleDelete = (id) => {
    setWebsites(websites.filter((site) => site.id !== id));
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
          <Globe className="text-indigo-600" /> Websites Built
        </h1>
      </div>

      {/* Add Website Form */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Add New Website</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Website Title"
            value={newWebsite.title}
            onChange={(e) => setNewWebsite({ ...newWebsite, title: e.target.value })}
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Category (e.g. Portfolio, Business)"
            value={newWebsite.category}
            onChange={(e) => setNewWebsite({ ...newWebsite, category: e.target.value })}
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="url"
            placeholder="Website URL"
            value={newWebsite.url}
            onChange={(e) => setNewWebsite({ ...newWebsite, url: e.target.value })}
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Short Description"
            value={newWebsite.description}
            onChange={(e) => setNewWebsite({ ...newWebsite, description: e.target.value })}
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          onClick={handleAddWebsite}
          className="mt-4 flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          <PlusCircle size={18} /> Add Website
        </button>
      </div>

      {/* Websites List */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {websites.map((site) => (
          <div
            key={site.id}
            className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition"
          >
            <div className="mb-3">
              <h3 className="text-lg font-semibold text-gray-800">{site.title}</h3>
              <p className="text-sm text-gray-500">{site.category}</p>
            </div>
            <p className="text-gray-600 text-sm mb-3">{site.description}</p>
            <a
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800 text-sm font-medium"
            >
              Visit Website <ExternalLink size={14} className="ml-1" />
            </a>

            <div className="flex justify-end gap-3 mt-4">
              <button
                className="p-2 rounded-lg text-gray-500 hover:text-indigo-600 transition"
                title="Edit"
              >
                <Edit3 size={18} />
              </button>
              <button
                onClick={() => handleDelete(site.id)}
                className="p-2 rounded-lg text-gray-500 hover:text-red-600 transition"
                title="Delete"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
