import React from "react";
import { Menu } from "lucide-react";

export default function Header({ onMenuClick }) {
  const handleLogout = () => {
    sessionStorage.removeItem("token"); // clear token if used
    window.location.href = "/login"; // redirect to login page
  };

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
          Admin <span className="text-gray-700">Dashboard</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4 text-gray-600">
        

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-sm transition"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
