import React, { useState, useEffect } from "react";
import { Plus, X, Edit3 } from "lucide-react";
import {
  getAllWebApps,
  addWebApp,
  updateWebApp,
  deleteWebApp,
} from "../../../api/Services/web&appApi.js";

export default function Dapp() {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [editingApp, setEditingApp] = useState(null);
  const [newApp, setNewApp] = useState({
    title: "",
    type: "App", // default
    description: "",
    techStack: "", // free text
    link: "",
  });

  useEffect(() => {
    const fetchApps = async () => {
      setLoading(true);
      try {
        const data = await getAllWebApps();
        setApps(data);
      } catch (error) {
        console.error("Error fetching apps:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchApps();
  }, []);

  const handleSaveApp = async () => {
    // ✅ Validation
    if (!newApp.title || !newApp.type || !newApp.description) {
      alert("Please fill all required fields (Title, Type, Description)");
      return;
    }

    const payload = {
      title: newApp.title,
      type: newApp.type,
      description: newApp.description,
      techStack: newApp.techStack ? [newApp.techStack] : [],
      link: newApp.link || "",
    };

    try {
      if (editingApp) {
        const updated = await updateWebApp(editingApp._id, payload);
        setApps(apps.map((app) => (app._id === editingApp._id ? updated : app)));
        setEditingApp(null);
      } else {
        const saved = await addWebApp(payload);
        setApps([...apps, saved]);
      }
      setNewApp({ title: "", type: "App", description: "", techStack: "", link: "" });
      setIsAdding(false);
    } catch (error) {
      console.error("Error saving app:", error.response?.data || error.message);
    }
  };

  const handleEdit = (app) => {
    setEditingApp(app);
    setNewApp({
      title: app.title,
      type: app.type,
      description: app.description,
      techStack: app.techStack?.join(", ") || "",
      link: app.link || "",
    });
    setIsAdding(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteWebApp(id);
      setApps(apps.filter((app) => app._id !== id));
    } catch (error) {
      console.error("Error deleting app:", error);
    }
  };

  if (loading) return <div className="p-6">Loading apps...</div>;

  return (
    <div className="p-6 text-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-indigo-400">Apps We Built</h2>
        <button
          onClick={() => {
            setIsAdding(!isAdding);
            setEditingApp(null);
            setNewApp({ title: "", type: "App", description: "", techStack: "", link: "" });
          }}
          className="flex items-center bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-xl text-white font-medium transition"
        >
          {isAdding ? <X className="w-4 h-4 mr-2" /> : <Plus className="w-4 h-4 mr-2" />}
          {isAdding ? "Cancel" : "Add New App"}
        </button>
      </div>

      {/* Add/Edit Form */}
      {isAdding && (
        <div className="bg-gray-800 p-4 rounded-xl mb-6">
          <input
            type="text"
            placeholder="App Title"
            value={newApp.title}
            onChange={(e) => setNewApp({ ...newApp, title: e.target.value })}
            className="w-full mb-3 p-2 rounded bg-gray-700 text-white focus:outline-none"
          />

          {/* Dropdown for type */}
          <select
            value={newApp.type}
            onChange={(e) => setNewApp({ ...newApp, type: e.target.value })}
            className="w-full mb-3 p-2 rounded bg-gray-700 text-white focus:outline-none"
          >
            <option value="Web">Web</option>
            <option value="App">App</option>
            <option value="Both">Both</option>
          </select>

          <textarea
            placeholder="Description"
            value={newApp.description}
            onChange={(e) => setNewApp({ ...newApp, description: e.target.value })}
            className="w-full mb-3 p-2 rounded bg-gray-700 text-white focus:outline-none"
          />

          {/* Tech stack as free text */}
          <input
            type="text"
            placeholder="Tech / Tools used"
            value={newApp.techStack}
            onChange={(e) => setNewApp({ ...newApp, techStack: e.target.value })}
            className="w-full mb-3 p-2 rounded bg-gray-700 text-white focus:outline-none"
          />

          <input
            type="text"
            placeholder="Link (optional)"
            value={newApp.link}
            onChange={(e) => setNewApp({ ...newApp, link: e.target.value })}
            className="w-full mb-3 p-2 rounded bg-gray-700 text-white focus:outline-none"
          />

          <button
            onClick={handleSaveApp}
            className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg font-medium"
          >
            {editingApp ? "Update App" : "Save App"}
          </button>
        </div>
      )}

      {/* Apps List */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {apps.map((app) => (
          <div
            key={app._id}
            className="bg-gray-800 p-5 rounded-xl shadow hover:shadow-lg transition relative"
          >
            <h3 className="text-lg font-semibold text-white mb-1">{app.title}</h3>
            <p className="text-sm text-gray-400 mb-2">Type: {app.type}</p>
            {app.techStack?.length > 0 && (
              <p className="text-gray-300 text-sm mb-2">Tech: {app.techStack.join(", ")}</p>
            )}
            <p className="text-gray-300 text-sm mb-4">{app.description}</p>
            {app.link && (
              <a
                href={app.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 underline text-sm mb-2 block"
              >
                View
              </a>
            )}
            <div className="flex justify-end gap-3">
              <button
                onClick={() => handleEdit(app)}
                className="text-gray-500 hover:text-cyan-600 transition"
                title="Edit"
              >
                <Edit3 size={18} />
              </button>
              <button
                onClick={() => handleDelete(app._id)}
                className="text-red-400 hover:text-red-600 transition"
                title="Delete"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
