import React, { useState, useEffect } from "react";
import { PlusCircle, Edit3, Trash2, Users } from "lucide-react";
import {
  getAllClients,
  addClient,
  deleteClient,
  updateClient,
} from "../../../api/Services/clientApi.js";

export default function Dclients() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newClient, setNewClient] = useState({
    name: "",
    company: "",
    email: "",
    project: "",
    logo: "",
  });
  const [editingClient, setEditingClient] = useState(null);

  // 🔹 Fetch clients from backend
  useEffect(() => {
    const fetchClients = async () => {
      setLoading(true);
      try {
        const data = await getAllClients();
        setClients(data);
      } catch (error) {
        console.error("Error fetching clients:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchClients();
  }, []);

  // 🔹 Add a new client
  const handleAddClient = async () => {
    if (!newClient.name || !newClient.company || !newClient.email || !newClient.project) {
      alert("Please fill all required fields!");
      return;
    }

    try {
      const savedClient = await addClient(newClient);
      setClients([...clients, savedClient]);
      setNewClient({ name: "", company: "", email: "", project: "", logo: "" });
    } catch (error) {
      console.error("Failed to add client:", error);
    }
  };

  // 🔹 Delete client
  const handleDelete = async (id) => {
    try {
      await deleteClient(id);
      setClients(clients.filter((client) => client._id !== id));
    } catch (error) {
      console.error("Failed to delete client:", error);
    }
  };

  // 🔹 Edit Client
  const handleEdit = (client) => {
    setEditingClient(client);
    setNewClient({
      name: client.name,
      company: client.company,
      email: client.email,
      project: client.project,
      logo: client.logo || "",
    });
  };

  // 🔹 Update Client
  const handleUpdateClient = async () => {
    if (!editingClient) return;
    try {
      const updated = await updateClient(editingClient._id, newClient);
      setClients(
        clients.map((c) => (c._id === editingClient._id ? updated : c))
      );
      setEditingClient(null);
      setNewClient({ name: "", company: "", email: "", project: "", logo: "" });
    } catch (error) {
      console.error("Error updating client:", error);
    }
  };

  if (loading) return <div className="p-6">Loading clients...</div>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
          <Users className="text-cyan-600" /> Clients
        </h1>
      </div>

      {/* Add or Edit Client Form */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          {editingClient ? "Edit Client" : "Add New Client"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <input
            type="text"
            placeholder="Client Name"
            value={newClient.name}
            onChange={(e) =>
              setNewClient({ ...newClient, name: e.target.value })
            }
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <input
            type="text"
            placeholder="Company"
            value={newClient.company}
            onChange={(e) =>
              setNewClient({ ...newClient, company: e.target.value })
            }
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <input
            type="email"
            placeholder="Email"
            value={newClient.email}
            onChange={(e) =>
              setNewClient({ ...newClient, email: e.target.value })
            }
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <input
            type="text"
            placeholder="Project Name"
            value={newClient.project}
            onChange={(e) =>
              setNewClient({ ...newClient, project: e.target.value })
            }
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <input
            type="text"
            placeholder="Logo URL (optional)"
            value={newClient.logo}
            onChange={(e) =>
              setNewClient({ ...newClient, logo: e.target.value })
            }
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>
        <button
          onClick={editingClient ? handleUpdateClient : handleAddClient}
          className="mt-4 flex items-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition"
        >
          <PlusCircle size={18} /> {editingClient ? "Update Client" : "Add Client"}
        </button>
        {editingClient && (
          <button
            onClick={() => {
              setEditingClient(null);
              setNewClient({ name: "", company: "", email: "", project: "", logo: "" });
            }}
            className="mt-4 ml-4 bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
          >
            Cancel
          </button>
        )}
      </div>

      {/* Clients List */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {clients.map((client) => (
          <div
            key={client._id}
            className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition"
          >
            {client.logo && (
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="w-16 h-16 object-contain mb-3 rounded-full border"
              />
            )}
            <div className="mb-3">
              <h3 className="text-lg font-semibold text-gray-800">
                {client.name}
              </h3>
              <p className="text-sm text-gray-500">{client.company}</p>
            </div>
            <p className="text-gray-600 text-sm mb-2">
              <span className="font-medium text-gray-700">Email:</span>{" "}
              {client.email}
            </p>
            <p className="text-gray-600 text-sm mb-4">
              <span className="font-medium text-gray-700">Project:</span>{" "}
              {client.project}
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => handleEdit(client)}
                className="p-2 rounded-lg text-gray-500 hover:text-cyan-600 transition"
                title="Edit"
              >
                <Edit3 size={18} />
              </button>
              <button
                onClick={() => handleDelete(client._id)}
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
