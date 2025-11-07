import React, { useState } from "react";
import { Plus, X, Megaphone } from "lucide-react";

export default function Dmarketing() {
    const [plans, setPlans] = useState([
        {
            id: 1,
            name: "Basic Plan",
            price: "₹9,999 / month",
            features: [
                "Social Media Management (2 Platforms)",
                "Basic SEO Optimization",
                "Monthly Performance Report",
            ],
        },
        {
            id: 2,
            name: "Advanced Plan",
            price: "₹19,999 / month",
            features: [
                "Social Media Management (4 Platforms)",
                "Full SEO + Keyword Targeting",
                "Weekly Reports & Analytics",
                "Google Ads Setup",
            ],
        },
        {
            id: 3,
            name: "Premium Plan",
            price: "₹29,999 / month",
            features: [
                "Complete Digital Branding",
                "All Platform Management",
                "Influencer Marketing",
                "Video Ads + Paid Campaigns",
                "Dedicated Marketing Manager",
            ],
        },
    ]);

    const [newPlan, setNewPlan] = useState({
        name: "",
        price: "",
        features: "",
    });

    const [isAdding, setIsAdding] = useState(false);

    const handleAddPlan = () => {
        if (!newPlan.name || !newPlan.price) return;
        const featuresArray = newPlan.features
            .split(",")
            .map((f) => f.trim())
            .filter(Boolean);
        setPlans([...plans, { ...newPlan, id: Date.now(), features: featuresArray }]);
        setNewPlan({ name: "", price: "", features: "" });
        setIsAdding(false);
    };

    const handleDelete = (id) => {
        setPlans(plans.filter((plan) => plan.id !== id));
    };

    return (
        <div className="p-6 text-gray-200">
            {/* Header Section */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-indigo-400 flex items-center gap-2">
                    <Megaphone className="w-6 h-6 text-indigo-500" />
                    Digital Marketing Plans
                </h2>

                <button
                    onClick={() => setIsAdding(!isAdding)}
                    className="flex items-center bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-xl text-white font-medium transition"
                >
                    {isAdding ? <X className="w-4 h-4 mr-2" /> : <Plus className="w-4 h-4 mr-2" />}
                    {isAdding ? "Cancel" : "Add New Plan"}
                </button>
            </div>

            {/* Add Plan Form */}
            {isAdding && (
                <div className="bg-gray-800 p-5 rounded-xl mb-6">
                    <input
                        type="text"
                        placeholder="Plan Name (e.g. Premium Plan)"
                        value={newPlan.name}
                        onChange={(e) => setNewPlan({ ...newPlan, name: e.target.value })}
                        className="w-full mb-3 p-2 rounded bg-gray-700 text-white focus:outline-none"
                    />
                    <input
                        type="text"
                        placeholder="Price (e.g. ₹25,000 / month)"
                        value={newPlan.price}
                        onChange={(e) => setNewPlan({ ...newPlan, price: e.target.value })}
                        className="w-full mb-3 p-2 rounded bg-gray-700 text-white focus:outline-none"
                    />
                    <textarea
                        placeholder="Add features (comma separated)"
                        value={newPlan.features}
                        onChange={(e) => setNewPlan({ ...newPlan, features: e.target.value })}
                        className="w-full mb-3 p-2 rounded bg-gray-700 text-white focus:outline-none"
                    />
                    <button
                        onClick={handleAddPlan}
                        className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg font-medium"
                    >
                        Save Plan
                    </button>
                </div>
            )}

            {/* Marketing Plan Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {plans.map((plan) => (
                    <div
                        key={plan.id}
                        className="bg-linear-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition relative border border-gray-700"
                    >
                        <button
                            onClick={() => handleDelete(plan.id)}
                            className="absolute top-3 right-3 text-red-400 hover:text-red-600"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <h3 className="text-xl font-semibold text-white mb-1">{plan.name}</h3>
                        <p className="text-indigo-400 font-medium mb-4">{plan.price}</p>

                        <ul className="text-gray-300 text-sm space-y-2">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-center">
                                    <span className="mr-2 text-emerald-400">✔</span> {feature}
                                </li>
                            ))}
                        </ul>

                        <button className="w-full mt-6 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition">
                            Choose {plan.name}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
