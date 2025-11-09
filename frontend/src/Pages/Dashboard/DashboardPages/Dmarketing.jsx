import React, { useState, useEffect } from "react";
import { Plus, X, Megaphone } from "lucide-react";
import {
  getAllDigitalMarkets,
  addDigitalMarket,
  deleteDigitalMarket,
} from "../../../api/Services/digimarket.js";

export default function Dmarketing() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newPlan, setNewPlan] = useState({ name: "", price: "", features: "" });
  const [isAdding, setIsAdding] = useState(false);

  // ✅ Fetch all plans on component mount
  useEffect(() => {
    const fetchPlans = async () => {
      setLoading(true);
      const data = await getAllDigitalMarkets();
      setPlans(data);
      setLoading(false);
    };
    fetchPlans();
  }, []);

  const handleAddPlan = async () => {
    if (!newPlan.name || !newPlan.price) return;

    const featuresArray = newPlan.features
      .split(",")
      .map((f) => f.trim())
      .filter(Boolean);

    const payload = {
      name: newPlan.name,
      price: newPlan.price,
      features: featuresArray,
      icon: "fa-solid fa-bullhorn", // default icon, replace if needed
    };

    try {
      const savedPlan = await addDigitalMarket(payload);
      setPlans([...plans, savedPlan]);
      setNewPlan({ name: "", price: "", features: "" });
      setIsAdding(false);
    } catch (error) {
      console.error("Error saving plan:", error.response?.data || error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDigitalMarket(id);
      setPlans(plans.filter((plan) => plan._id !== id));
    } catch (error) {
      console.error("Error deleting plan:", error);
    }
  };

  if (loading) return <div className="p-6 text-gray-200">Loading plans...</div>;

  return (
    <div className="p-6 text-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-indigo-400 flex items-center gap-2">
          <Megaphone className="w-6 h-6 text-indigo-500" /> Digital Marketing Plans
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
            placeholder="Plan Name"
            value={newPlan.name}
            onChange={(e) => setNewPlan({ ...newPlan, name: e.target.value })}
            className="w-full mb-3 p-2 rounded bg-gray-700 text-white focus:outline-none"
          />
          <input
            type="text"
            placeholder="Price"
            value={newPlan.price}
            onChange={(e) => setNewPlan({ ...newPlan, price: e.target.value })}
            className="w-full mb-3 p-2 rounded bg-gray-700 text-white focus:outline-none"
          />
          <textarea
            placeholder="Features (comma separated)"
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

      {/* Plan Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan._id}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition relative border border-gray-700"
          >
            <button
              onClick={() => handleDelete(plan._id)}
              className="absolute top-3 right-3 text-red-400 hover:text-red-600"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-semibold text-white mb-1">{plan.name}</h3>
            <p className="text-indigo-400 font-medium mb-4">₹{plan.price}</p>

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
