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
    email: "",
    industry: "",
    testimonial: "",
    rating: 5,
    project: "",
    logo: "",
    status: "Active",
    notes: "",
  });

  const [editingClient, setEditingClient] = useState(null);

  // Fetch all clients
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

  // Add new client
  const handleAddClient = async () => {
    if (!newClient.name || !newClient.email || !newClient.industry || !newClient.project) {
      return alert("Please fill required fields (Name, Email, Industry, Project)");
    }

    try {
      const saved = await addClient(newClient);
      setClients([...clients, saved]);

      setNewClient({
        name: "",
        email: "",
        industry: "",
        testimonial: "",
        rating: 5,
        project: "",
        logo: "",
        status: "Active",
        notes: "",
      });
    } catch (error) {
      console.error("Failed to add client:", error);
    }
  };

  // Delete client
  const handleDelete = async (id) => {
    try {
      await deleteClient(id);
      setClients(clients.filter((c) => c._id !== id));
    } catch (error) {
      console.error("Failed to delete client:", error);
    }
  };

  // Edit client
  const handleEdit = (client) => {
    setEditingClient(client);
    setNewClient({
      name: client.name,
      email: client.email,
      industry: client.industry,
      testimonial: client.testimonial,
      rating: client.rating,
      project: client.project,
      logo: client.logo,
      status: client.status,
      notes: client.notes,
    });
  };

  // Update client
  const handleUpdateClient = async () => {
    if (!editingClient) return;

    try {
      const updated = await updateClient(editingClient._id, newClient);
      setClients(
        clients.map((c) => (c._id === editingClient._id ? updated : c))
      );

      setEditingClient(null);
      setNewClient({
        name: "",
        email: "",
        industry: "",
        testimonial: "",
        rating: 5,
        project: "",
        logo: "",
        status: "Active",
        notes: "",
      });
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

      {/* Add/Edit Form */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">
          {editingClient ? "Edit Client" : "Add New Client"}
        </h2>

        <div className="grid md:grid-cols-3 gap-4">

          <input
            type="text"
            placeholder="Client Name *"
            value={newClient.name}
            onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
            className="border rounded-lg px-4 py-2"
          />

          <input
            type="email"
            placeholder="Email *"
            value={newClient.email}
            onChange={(e) => setNewClient({ ...newClient, email: e.target.value })}
            className="border rounded-lg px-4 py-2"
          />

          <input
            type="text"
            placeholder="Industry *"
            value={newClient.industry}
            onChange={(e) => setNewClient({ ...newClient, industry: e.target.value })}
            className="border rounded-lg px-4 py-2"
          />

          <input
            type="text"
            placeholder="Project Name *"
            value={newClient.project}
            onChange={(e) => setNewClient({ ...newClient, project: e.target.value })}
            className="border rounded-lg px-4 py-2"
          />

          <input
            type="number"
            placeholder="Rating (1–5)"
            min="1"
            max="5"
            value={newClient.rating}
            onChange={(e) => setNewClient({ ...newClient, rating: e.target.value })}
            className="border rounded-lg px-4 py-2"
          />

          <input
            type="text"
            placeholder="Logo URL"
            value={newClient.logo}
            onChange={(e) => setNewClient({ ...newClient, logo: e.target.value })}
            className="border rounded-lg px-4 py-2"
          />

          <select
            value={newClient.status}
            onChange={(e) => setNewClient({ ...newClient, status: e.target.value })}
            className="border rounded-lg px-4 py-2"
          >
            <option>Active</option>
            <option>Inactive</option>
          </select>

          <textarea
            placeholder="Testimonial"
            value={newClient.testimonial}
            onChange={(e) =>
              setNewClient({ ...newClient, testimonial: e.target.value })
            }
            className="border rounded-lg px-4 py-2 md:col-span-3"
          />

          <textarea
            placeholder="Notes"
            value={newClient.notes}
            onChange={(e) =>
              setNewClient({ ...newClient, notes: e.target.value })
            }
            className="border rounded-lg px-4 py-2 md:col-span-3"
          />

        </div>

        {/* Buttons */}
        <div className="mt-4 flex gap-4">
          <button
            onClick={editingClient ? handleUpdateClient : handleAddClient}
            className="bg-cyan-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <PlusCircle size={18} />
            {editingClient ? "Update Client" : "Add Client"}
          </button>

          {editingClient && (
            <button
              onClick={() => {
                setEditingClient(null);
                setNewClient({
                  name: "",
                  email: "",
                  industry: "",
                  testimonial: "",
                  rating: 5,
                  project: "",
                  logo: "",
                  status: "Active",
                  notes: "",
                });
              }}
              className="bg-gray-300 px-4 py-2 rounded-lg"
            >
              Cancel
            </button>
          )}
        </div>
      </div>

      {/* Client Cards */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {clients.map((client) => (
          <div
            key={client._id}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border"
          >
            {client.logo && (
              <img
                src={client.logo}
                className="w-16 h-16 mb-3 object-contain rounded-full"
              />
            )}

            <h3 className="text-lg font-semibold">{client.name}</h3>
            <p className="text-sm text-gray-500">{client.industry}</p>

            <p className="text-gray-600 text-sm mt-2">
              <span className="font-semibold">Email:</span> {client.email}
            </p>

            <p className="text-gray-600 text-sm">
              <span className="font-semibold">Project:</span> {client.project}
            </p>

            <p className="text-gray-600 text-sm">
              <span className="font-semibold">Rating:</span> ⭐ {client.rating}
            </p>

            <p className="text-gray-600 text-sm mt-2 h-16 overflow-hidden italic">
              “{client.testimonial}”
            </p>

            <div className="flex justify-end gap-3 mt-3">
              <button
                onClick={() => handleEdit(client)}
                className="p-2 hover:text-cyan-600"
              >
                <Edit3 size={18} />
              </button>

              <button
                onClick={() => handleDelete(client._id)}
                className="p-2 hover:text-red-600"
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
