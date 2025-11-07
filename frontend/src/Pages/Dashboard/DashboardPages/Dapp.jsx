import React, { useState } from "react";
import { Plus, X } from "lucide-react";

export default function Dapp() {
  const [apps, setApps] = useState([
    { id: 1, name: "VR Fitness Tracker", platform: "iOS", description: "A mobile fitness tracking app with AI workout suggestions." },
    { id: 2, name: "TaskFlow", platform: "Android", description: "Task management app built with Flutter." },
  ]);

  const [newApp, setNewApp] = useState({ name: "", platform: "", description: "" });
  const [isAdding, setIsAdding] = useState(false);

  const handleAddApp = () => {
    if (!newApp.name || !newApp.platform) return;
    setApps([...apps, { ...newApp, id: Date.now() }]);
    setNewApp({ name: "", platform: "", description: "" });
    setIsAdding(false);
  };

  const handleDelete = (id) => {
    setApps(apps.filter((a) => a.id !== id));
  };

  return (
    <div className="p-6 text-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-indigo-400">Apps We Built</h2>
        <button
          onClick={() => setIsAdding(!isAdding)}
          className="flex items-center bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-xl text-white font-medium transition"
        >
          {isAdding ? <X className="w-4 h-4 mr-2" /> : <Plus className="w-4 h-4 mr-2" />}
          {isAdding ? "Cancel" : "Add New App"}
        </button>
      </div>

      {isAdding && (
        <div className="bg-gray-800 p-4 rounded-xl mb-6">
          <input
            type="text"
            placeholder="App Name"
            value={newApp.name}
            onChange={(e) => setNewApp({ ...newApp, name: e.target.value })}
            className="w-full mb-3 p-2 rounded bg-gray-700 text-white focus:outline-none"
          />
          <input
            type="text"
            placeholder="Platform (Android / iOS / Web)"
            value={newApp.platform}
            onChange={(e) => setNewApp({ ...newApp, platform: e.target.value })}
            className="w-full mb-3 p-2 rounded bg-gray-700 text-white focus:outline-none"
          />
          <textarea
            placeholder="Description"
            value={newApp.description}
            onChange={(e) => setNewApp({ ...newApp, description: e.target.value })}
            className="w-full mb-3 p-2 rounded bg-gray-700 text-white focus:outline-none"
          />
          <button
            onClick={handleAddApp}
            className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg font-medium"
          >
            Save App
          </button>
        </div>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {apps.map((app) => (
          <div
            key={app.id}
            className="bg-gray-800 p-5 rounded-xl shadow hover:shadow-lg transition relative"
          >
            <h3 className="text-lg font-semibold text-white mb-1">{app.name}</h3>
            <p className="text-sm text-gray-400 mb-2">Platform: {app.platform}</p>
            <p className="text-gray-300 text-sm mb-4">{app.description}</p>
            <button
              onClick={() => handleDelete(app.id)}
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
