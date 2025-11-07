import React, { useState } from "react";
import { PlusCircle, Edit3, Trash2, Zap } from "lucide-react";

export default function Dservices() {
    const [services, setServices] = useState([
        {
            id: 1,
            name: "Web Development",
            price: "₹15,000",
            description: "Modern, responsive websites built with React and Node.js.",
        },
        {
            id: 2,
            name: "Mobile App Development",
            price: "₹25,000",
            description: "Cross-platform mobile apps using React Native.",
        },
        {
            id: 3,
            name: "UI/UX Design",
            price: "₹10,000",
            description: "Clean, intuitive, and user-friendly interface design.",
        },
    ]);

    const [newService, setNewService] = useState({
        name: "",
        price: "",
        description: "",
    });

    const handleAddService = () => {
        if (!newService.name || !newService.price || !newService.description) return;
        setServices([
            ...services,
            { id: Date.now(), ...newService },
        ]);
        setNewService({ name: "", price: "", description: "" });
    };

    const handleDelete = (id) => {
        setServices(services.filter((s) => s.id !== id));
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
                    <Zap className="text-indigo-600" /> My Services
                </h1>
            </div>

            {/* Add New Service */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                    Add New Service
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                        type="text"
                        placeholder="Service Name"
                        value={newService.name}
                        onChange={(e) => setNewService({ ...newService, name: e.target.value })}
                        className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <input
                        type="text"
                        placeholder="Price"
                        value={newService.price}
                        onChange={(e) => setNewService({ ...newService, price: e.target.value })}
                        className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <input
                        type="text"
                        placeholder="Description"
                        value={newService.description}
                        onChange={(e) => setNewService({ ...newService, description: e.target.value })}
                        className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <button
                    onClick={handleAddService}
                    className="mt-4 flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                    <PlusCircle size={18} /> Add Service
                </button>
            </div>

            {/* Services List */}
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition"
                    >
                        <div className="flex justify-between items-start mb-3">
                            <h3 className="text-lg font-semibold text-gray-800">{service.name}</h3>
                            <span className="text-sm font-medium text-indigo-600">{service.price}</span>
                        </div>
                        <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                        <div className="flex justify-end gap-3">
                            <button
                                className="p-2 rounded-lg text-gray-500 hover:text-indigo-600 transition"
                                title="Edit"
                            >
                                <Edit3 size={18} />
                            </button>
                            <button
                                onClick={() => handleDelete(service.id)}
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
