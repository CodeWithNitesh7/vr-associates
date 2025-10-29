// components/Navbar.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["Home", "About", "Services", "Industries", "Clients", "Careers", "Contact"];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-700">VR Associates</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-blue-600 font-medium transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden focus:outline-none z-50"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Off-Canvas Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40
          ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col mt-4">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="px-6 py-3 border-b hover:bg-blue-50 font-medium"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-30"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </nav>
  );
}
