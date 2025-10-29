import React from "react";
import { Star } from "lucide-react";

export default function Clients() {
  const clients = [
    {
      name: "TechNova Solutions",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      feedback:
        "VR Associates helped us scale our engineering team with exceptional talent. Their process is smooth and transparent.",
      rating: 5,
    },
    {
      name: "HealthFirst Hospitals",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Google-favicon-vector.png",
      feedback:
        "We’ve partnered with VR Associates for years — their healthcare staffing solutions are reliable and fast.",
      rating: 5,
    },
    {
      name: "FinEdge Capital",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Microsoft_logo.svg",
      feedback:
        "Their professional approach and talent network helped us find skilled financial analysts quickly.",
      rating: 4,
    },
    {
      name: "SkyLog Logistics",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      feedback:
        "VR Associates understood our niche requirements perfectly. Great communication and results!",
      rating: 5,
    },
  ];

  return (
    <section id="clients" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-6">Our Clients</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Trusted by industry leaders across technology, healthcare, finance, and logistics —
          VR Associates is proud to be a staffing partner for global organizations.
        </p>

        {/* Client Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center justify-center mb-16">
          {clients.map((client, i) => (
            <div
              key={i}
              className="bg-blue-50 rounded-2xl p-6 hover:shadow-xl transition-all flex flex-col items-center"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-20 h-20 object-contain mb-3"
              />
              <p className="font-semibold text-blue-700">{client.name}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <h3 className="text-2xl font-semibold text-gray-800 mb-8">What Our Clients Say</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {clients.map((client, i) => (
            <div
              key={i}
              className="bg-blue-50 rounded-2xl p-8 shadow hover:shadow-xl transition-all text-left"
            >
              <div className="flex items-center mb-4">
                {[...Array(client.rating)].map((_, index) => (
                  <Star key={index} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">“{client.feedback}”</p>
              <p className="text-blue-700 font-semibold">{client.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
