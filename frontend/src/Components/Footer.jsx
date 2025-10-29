// components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white py-6 text-center">
      <p>© {new Date().getFullYear()} VR Associates. All Rights Reserved.</p>
    </footer>
  );
}
