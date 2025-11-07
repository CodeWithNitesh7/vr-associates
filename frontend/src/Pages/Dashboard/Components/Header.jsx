import React from "react";
import { Bell, Settings, HelpCircle, Menu } from "lucide-react";

export default function Header({ onMenuClick }) {
    return (
        <header className="flex items-center justify-between bg-white shadow-sm px-6 py-3 sticky top-0 z-50 border-b border-gray-200">
            {/* Left Section */}
            <div className="flex items-center space-x-4">
                {/* Menu Button (for mobile toggle) */}
                <button
                    onClick={onMenuClick}
                    className="p-2 rounded-lg hover:bg-gray-100 transition lg:hidden"
                >
                    <Menu className="w-6 h-6 text-gray-600" />
                </button>

                {/* Logo */}
                <div className="text-xl font-bold text-indigo-600 tracking-wide">
                    Admin <span className="text-gray-700"> Dashboard</span>
                </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4 text-gray-600">
                <button
                    className="p-2 rounded-lg hover:bg-gray-100 transition"
                    title="Notifications"
                >
                    <Bell className="w-5 h-5" />
                </button>
                <button
                    className="p-2 rounded-lg hover:bg-gray-100 transition"
                    title="Settings"
                >
                    <Settings className="w-5 h-5" />
                </button>
                <button
                    className="p-2 rounded-lg hover:bg-gray-100 transition"
                    title="Help"
                >
                    <HelpCircle className="w-5 h-5" />
                </button>

                {/* User Avatar */}
                <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 space-x-2 cursor-pointer hover:bg-gray-200 transition">
                    <img
                        src="https://i.pravatar.cc/40"
                        alt="User Avatar"
                        className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="hidden sm:block font-medium text-gray-700">
                        John Doe
                    </span>
                </div>
            </div>
        </header>
    );
}
