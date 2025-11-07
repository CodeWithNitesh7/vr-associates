import React, { useState } from "react";
import { LayoutDashboard, Zap, Users, Briefcase, Mail } from "lucide-react";

export default function Sidebar({ isOpen, onMenuClick, activeItem }) {
    const sidebarItems = [
        { id: "dashboard", label: "Overview", icon: LayoutDashboard, color: "text-indigo-400" },
        { id: "services", label: "Services", icon: Zap, color: "text-emerald-400" },
        { id: "clients", label: "Clients", icon: Users, color: "text-cyan-400" },
        { id: "app", label: "App", icon: Briefcase, color: "text-amber-400" },
        { id: "marketing", label: "Marketing", icon: Briefcase, color: "text-amber-400" },
        { id: "permanent", label: "Permanent Staff", icon: Briefcase, color: "text-amber-400" },
        { id: "contract", label: "Contract Staff", icon: Briefcase, color: "text-amber-400" },
        { id: "website", label: "Website", icon: Briefcase, color: "text-amber-400" },
        { id: "leads", label: "Contact Leads", icon: Mail, color: "text-red-400" },
    ];

    return (
        <aside
            className={`fixed lg:static top-0 left-0 h-full w-64  bg-linear-to-br from-gray-900 to-gray-800 border-r border-gray-700 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                } lg:translate-x-0 transition-transform duration-300 ease-in-out z-50 shadow-xl`}
        >
            <nav className="p-4 space-y-2 mt-4">
                {sidebarItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => onMenuClick(item.id)}
                        className={`flex items-center w-full p-3 rounded-xl transition-all duration-300 group ${activeItem === item.id
                                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 scale-[1.02]"
                                : "text-gray-400 hover:bg-gray-800 hover:text-white hover:scale-[1.02]"
                            }`}
                    >
                        <item.icon
                            className={`w-5 h-5 mr-3 transition-colors duration-200 ${activeItem !== item.id ? `${item.color} group-hover:text-indigo-400` : ""
                                }`}
                        />
                        <span className="font-medium text-sm">{item.label}</span>
                    </button>
                ))}
            </nav>

            <div className="mt-auto p-4 border-t border-gray-700 text-center text-gray-500 text-xs">
                <p>© 2025 VR Associates</p>
                <p className="text-gray-400">v1.0.0</p>
            </div>
        </aside>
    );
}
