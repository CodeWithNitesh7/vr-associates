import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Twitter,
  ArrowRight,
} from "lucide-react";
import { href, useNavigate } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate(); //   fixed spelling (was 'naviagte')

  // Quick navigation links
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Clients & Success", href: "#clients" },
    { name: "Careers", href: "#careers" },
    { name: "Blog", href: "#blog" },
  ];

  const bottomLinks = [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/term&conditions" }
  ]

  // Service navigation links
  const serviceLinks = [
    { name: "Web Development", path: "/web" },
    { name: "Digital Marketing", path: "/digital-marketing" },
    { name: "App Development", path: "/app" },
    { name: "Contract Hiring", path: "/contract-staff" },
    { name: "Permanent Placement", path: "/permanents" },
    { name: "Cloud Solutions", path: "/cloud" },
    { name: "Infrastructure & IoT", path: "/iot" },
  ];

  // Component for each link section
  const FooterLinkList = ({ title, links, isInternal }) => (
    <div>
      <h4 className="text-lg font-bold text-gray-100 mb-6 border-b-2 border-sky-500/50 pb-2 inline-block">
        {title}
      </h4>
      <ul className="space-y-4">
        {links.map((link, index) => (
          <li key={index}>
            {isInternal ? (
              <button
                onClick={() => navigate(link.path)}
                className="text-gray-300 hover:text-teal-400 transition-colors duration-200 flex items-center text-sm"
              >
                <ArrowRight className="w-3 h-3 mr-2 opacity-70" />
                {link.name}
              </button>
            ) : (
              <a
                href={link.href}
                className="text-gray-300 hover:text-teal-400 transition-colors duration-200 flex items-center text-sm"
              >
                <ArrowRight className="w-3 h-3 mr-2 opacity-70" />
                {link.name}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-8 border-t-4 border-sky-500">
      <div className="container mx-auto px-6 lg:px-8">
        {/* --- Main Grid: Branding, Links, Contact --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-gray-800">
          {/* Branding */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-3xl font-extrabold text-white">
              VR<span className="text-sky-500"> Associates</span>
            </h3>
            <p className="text-gray-400 max-w-sm text-sm">
              We are a global recruitment & staffing agency connecting
              businesses with high-impact professionals to drive growth and
              innovation.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 pt-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-indigo-400 transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-teal-400 transition-colors duration-300"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-indigo-400 transition-colors duration-300"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <FooterLinkList title="Quick Links" links={quickLinks} />

          {/* Services */}
          <FooterLinkList title="Our Services" links={serviceLinks} isInternal />

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-gray-100 mb-6 border-b-2 border-teal-500/50 pb-2 inline-block">
              Get in Touch
            </h4>
            <p className="flex items-start text-sm text-gray-400">
              <MapPin size={18} className="text-teal-500 mr-3 mt-1" />
              B-20, H-160, BSI Business Park, Sector-63, Noida, India
            </p>
            <p className="flex items-center text-sm text-gray-400">
              <Phone size={18} className="text-teal-500 mr-3" />
              +91 9369518210
            </p>
            <p className="flex items-center text-sm text-gray-400">
              <Mail size={18} className="text-teal-500 mr-3" />
              info@vrassociates.io
            </p>
          </div>
        </div>

        {/* --- Bottom Bar --- */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-sm text-gray-500">
          <p className="mb-4 md:mb-0">
            © {currentYear} <span className="font-semibold text-white">VR Associates</span>. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {bottomLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="hover:text-teal-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
