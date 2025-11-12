import React, { useEffect, useState } from "react";
import { PlusCircle, Globe, Trash2, Edit3, ExternalLink, Loader2 } from "lucide-react";
import {
  getAllWebApps,
  addWebApp,
  deleteWebApp,
  updateWebApp, //   make sure this exists in your API file
} from "../../../api/Services/web&appApi.js";

export default function DWeb() {
  const [websites, setWebsites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState(null); //   track which website is being edited

  const [newWebsite, setNewWebsite] = useState({
    title: "",
    type: "Web",
    description: "",
    techStack: "",
    link: "",
    image: "",
  });

  //   Fetch all websites
  const fetchWebsites = async () => {
    setLoading(true);
    try {
      const data = await getAllWebApps();
      setWebsites(data);
    } catch (error) {
      console.error("Error fetching websites:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWebsites();
  }, []);

  // Add or Update Website
  const handleSaveWebsite = async () => {
    if (!newWebsite.title || !newWebsite.description)
      return alert("Title and description are required");

    const payload = {
      title: newWebsite.title,
      type: newWebsite.type,
      description: newWebsite.description,
      techStack: newWebsite.techStack
        ? newWebsite.techStack.split(",").map((t) => t.trim())
        : [],
      link: newWebsite.link,
      image: newWebsite.image,
    };

    try {
      if (editingId) {
        // Update mode
        const updated = await updateWebApp(editingId, payload);
        setWebsites((prev) =>
          prev.map((site) => (site._id === editingId ? updated : site))
        );
        setEditingId(null);
      } else {
        // Add mode
        const added = await addWebApp(payload);
        setWebsites((prev) => [...prev, added]);
      }

      // Reset form after save
      setNewWebsite({
        title: "",
        type: "Web",
        description: "",
        techStack: "",
        link: "",
        image: "",
      });
    } catch (error) {
      console.error("Error saving website:", error);
    }
  };

  //   Edit Website (populate form)
  const handleEdit = (site) => {
    setEditingId(site._id);
    setNewWebsite({
      title: site.title,
      type: site.type,
      description: site.description,
      techStack: site.techStack?.join(", ") || "",
      link: site.link || "",
      image: site.image || "",
    });

    // Auto scroll to top where form is
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  //   Delete Website
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this website?")) return;
    try {
      await deleteWebApp(id);
      setWebsites((prev) => prev.filter((site) => site._id !== id));
    } catch (error) {
      console.error("Error deleting website:", error);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
          <Globe className="text-indigo-600" /> Websites / Web-App Projects
        </h1>
      </div>

      {/* Add / Edit Website Form */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          {editingId ? "Edit Project" : "Add New Project"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <input
            type="text"
            placeholder="Title"
            value={newWebsite.title}
            onChange={(e) => setNewWebsite({ ...newWebsite, title: e.target.value })}
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <select
            value={newWebsite.type}
            onChange={(e) => setNewWebsite({ ...newWebsite, type: e.target.value })}
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="Web">Web</option>
            <option value="App">App</option>
            <option value="Both">Both</option>
          </select>

          <input
            type="text"
            placeholder="Tech Stack (comma separated)"
            value={newWebsite.techStack}
            onChange={(e) => setNewWebsite({ ...newWebsite, techStack: e.target.value })}
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="url"
            placeholder="Live Link (optional)"
            value={newWebsite.link}
            onChange={(e) => setNewWebsite({ ...newWebsite, link: e.target.value })}
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="text"
            placeholder="Description"
            value={newWebsite.description}
            onChange={(e) =>
              setNewWebsite({ ...newWebsite, description: e.target.value })
            }
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          onClick={handleSaveWebsite}
          className={`mt-4 flex items-center gap-2 ${editingId
              ? "bg-yellow-500 hover:bg-yellow-600"
              : "bg-indigo-600 hover:bg-indigo-700"
            } text-white px-4 py-2 rounded-lg transition`}
        >
          {editingId ? (
            <>
              <Edit3 size={18} /> Update Project
            </>
          ) : (
            <>
              <PlusCircle size={18} /> Add Project
            </>
          )}
        </button>
      </div>

      {/* Websites List */}
      {loading ? (
        <div className="flex justify-center py-10">
          <Loader2 className="animate-spin text-indigo-600" size={30} />
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {websites.map((site) => (
            <div
              key={site._id}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition"
            >
              <div className="mb-3">
                <h3 className="text-lg font-semibold text-gray-800">{site.title}</h3>
                <p className="text-sm text-gray-500">{site.type}</p>
              </div>
              <p className="text-gray-600 text-sm mb-3">{site.description}</p>

              {site.link && (
                <a
                  href={site.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                >
                  Visit Project <ExternalLink size={14} className="ml-1" />
                </a>
              )}

              <div className="flex justify-end gap-3 mt-4">
                <button
                  onClick={() => handleEdit(site)}
                  className="p-2 rounded-lg text-gray-500 hover:text-yellow-500 transition"
                  title="Edit"
                >
                  <Edit3 size={18} />
                </button>

                <button
                  onClick={() => handleDelete(site._id)}
                  className="p-2 rounded-lg text-gray-500 hover:text-red-600 transition"
                  title="Delete"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
