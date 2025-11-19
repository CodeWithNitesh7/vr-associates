import React from "react";
import { Menu } from "lucide-react";

export default function Header({ onMenuClick }) {
  
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    window.location.href = "/admin";
  };

  return (
    <header className="flex items-center justify-between bg-white shadow-sm px-4 lg:px-6 py-3 sticky top-0 z-50 border-b border-gray-200">
      
      {/* Left */}
      <div className="flex items-center space-x-3">
        
        {/* Mobile menu button */}
        <button
          onClick={onMenuClick}
          className="p-2 rounded-lg hover:bg-gray-100 transition lg:hidden"
        >
          <Menu className="w-6 h-6 text-gray-700" />
        </button>

        <div className="text-lg lg:text-xl font-bold text-indigo-600">
          Admin <span className="text-gray-700">Dashboard</span>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center space-x-4">
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
