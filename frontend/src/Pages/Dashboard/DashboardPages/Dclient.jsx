import React, { useState } from "react";
import { PlusCircle, Edit3, Trash2, Users } from "lucide-react";

export default function Dclients() {
    const [clients, setClients] = useState([
        {
            id: 1,
            name: "Rohit Sharma",
            company: "TechWave Solutions",
            email: "rohit@techwave.in",
            project: "E-Commerce Web App",
        },
        {
            id: 2,
            name: "Priya Verma",
            company: "CloudNest Pvt Ltd",
            email: "priya@cloudnest.com",
            project: "Mobile App Development",
        },
        {
            id: 3,
            name: "Arjun Mehta",
            company: "FinPro Systems",
            email: "arjun@finpro.io",
            project: "Finance Dashboard",
        },
    ]);

    const [newClient, setNewClient] = useState({
        name: "",
        company: "",
        email: "",
        project: "",
    });

    const handleAddClient = () => {
        if (!newClient.name || !newClient.company || !newClient.email || !newClient.project) return;
        setClients([
            ...clients,
            { id: Date.now(), ...newClient },
        ]);
        setNewClient({ name: "", company: "", email: "", project: "" });
    };

    const handleDelete = (id) => {
        setClients(clients.filter((client) => client.id !== id));
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
                    <Users className="text-cyan-600" /> Clients
                </h1>
            </div>

            {/* Add New Client */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                    Add New Client
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <input
                        type="text"
                        placeholder="Client Name"
                        value={newClient.name}
                        onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
                        className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                    <input
                        type="text"
                        placeholder="Company"
                        value={newClient.company}
                        onChange={(e) => setNewClient({ ...newClient, company: e.target.value })}
                        className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={newClient.email}
                        onChange={(e) => setNewClient({ ...newClient, email: e.target.value })}
                        className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                    <input
                        type="text"
                        placeholder="Project Name"
                        value={newClient.project}
                        onChange={(e) => setNewClient({ ...newClient, project: e.target.value })}
                        className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                </div>
                <button
                    onClick={handleAddClient}
                    className="mt-4 flex items-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition"
                >
                    <PlusCircle size={18} /> Add Client
                </button>
            </div>

            {/* Clients List */}
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {clients.map((client) => (
                    <div
                        key={client.id}
                        className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition"
                    >
                        <div className="mb-3">
                            <h3 className="text-lg font-semibold text-gray-800">{client.name}</h3>
                            <p className="text-sm text-gray-500">{client.company}</p>
                        </div>
                        <p className="text-gray-600 text-sm mb-2">
                            <span className="font-medium text-gray-700">Email:</span> {client.email}
                        </p>
                        <p className="text-gray-600 text-sm mb-4">
                            <span className="font-medium text-gray-700">Project:</span> {client.project}
                        </p>
                        <div className="flex justify-end gap-3">
                            <button
                                className="p-2 rounded-lg text-gray-500 hover:text-cyan-600 transition"
                                title="Edit"
                            >
                                <Edit3 size={18} />
                            </button>
                            <button
                                onClick={() => handleDelete(client.id)}
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
