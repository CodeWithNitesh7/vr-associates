import React, { useEffect, useState } from "react";
import { Mail, Phone, User, Trash2, MessageCircle } from "lucide-react";
import axios from "axios";

export default function Dleads() {
    const [leads, setLeads] = useState([]);
    const [loading, setLoading] = useState(true);

    // ✅ Fetch leads from backend API
    useEffect(() => {
        const fetchLeads = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/contact/getContactDetails");
                setLeads(response.data || []);
            } catch (error) {
                console.error("Error fetching leads:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchLeads();
    }, []);

    // ✅ Delete lead
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this lead?")) {
            try {
                await axios.delete(`http://localhost:5000/api/contact/delete/${id}`);
                setLeads(leads.filter((lead) => lead._id !== id));
            } catch (error) {
                console.error("Error deleting lead:", error);
            }
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-full">
                <p className="text-gray-500 text-lg">Loading leads...</p>
            </div>
        );
    }

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
                    <MessageCircle className="text-red-500" /> Contact Leads
                </h1>
            </div>

            {/* Leads List */}
            {leads.length === 0 ? (
                <p className="text-gray-500">No contact leads found.</p>
            ) : (
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {leads.map((lead) => (
                        <div
                            key={lead._id}
                            className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition"
                        >
                            <div className="mb-3">
                                <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                                    <User className="text-indigo-500" /> {lead.name}
                                </h3>
                                <p className="text-sm text-gray-500">Lead ID: {lead._id}</p>
                            </div>

                            <p className="text-gray-600 text-sm mb-2 flex items-center gap-2">
                                <Mail className="w-4 h-4 text-gray-400" /> {lead.email}
                            </p>
                            <p className="text-gray-600 text-sm mb-2 flex items-center gap-2">
                                <Phone className="w-4 h-4 text-gray-400" /> {lead.phone}
                            </p>
                            <p className="text-gray-600 text-sm mb-4">
                                <span className="font-medium text-gray-700">Message:</span>{" "}
                                {lead.message}
                            </p>

                            <div className="flex justify-end">
                                <button
                                    onClick={() => handleDelete(lead._id)}
                                    className="p-2 rounded-lg text-gray-500 hover:text-red-600 transition"
                                    title="Delete Lead"
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
