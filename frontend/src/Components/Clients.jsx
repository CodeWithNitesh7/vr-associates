import React from "react";
import { Star } from "lucide-react";

// ⭐ Rating Component
const RatingStars = ({ rating, size = 18 }) => (
  <div className="flex items-center justify-center space-x-0.5">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={size}
        className={`transition-colors duration-200 ${i < rating ? "text-amber-500 fill-amber-500" : "text-gray-300 fill-gray-300"
          }`}
      />
    ))}
  </div>
);

export default function Clients() {
  const clients = [
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", feedback: "VR Associates helped us build a high-performing development team rapidly. Their professionalism and speed set a new standard.", rating: 5, industry: "Technology" },
    { name: "TCS", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Tata_Consultancy_Services_Logo.svg", feedback: "A dependable partner for technical staffing and contract resources. Excellent communication and on-time delivery every time.", rating: 5, industry: "IT Services" },
    { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Accenture.svg", feedback: "Their agile and data-driven hiring process perfectly aligns with our global standards. Truly seamless collaboration!", rating: 5, industry: "Consulting" },
    { name: "Deloitte", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Deloitte_Logo.svg", feedback: "VR Associates has been instrumental in helping us find top analysts and tech leads. Professional, fast, and precise.", rating: 5, industry: "Finance & Consulting" },
    { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/8/85/Infosys_logo.svg", feedback: "We were impressed by their attention to detail and the quality of candidates sourced within tight timelines.", rating: 4, industry: "Technology" },
    { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg", feedback: "They understood our niche requirements for AI engineers perfectly. Excellent partner for long-term hiring.", rating: 5, industry: "Software & AI" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", feedback: "Their end-to-end hiring solutions helped us scale operations quickly while maintaining quality. Highly recommended!", rating: 5, industry: "E-commerce" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", feedback: "Top-notch collaboration and a deep understanding of our technical needs. Efficient and reliable staffing partner.", rating: 5, industry: "Technology" },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-blue-50 to-blue-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 text-center">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-sky-500 mb-6">
          Our Clients
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-base sm:text-lg leading-relaxed mb-12">
          We are proud to collaborate with some of the most respected global brands — helping them achieve their staffing and growth goals through precision, speed, and trust.
        </p>

        {/* Client Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center p-6 text-center"
            >
              <div className="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 mb-4 rounded-full bg-white p-3 shadow-inner">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              <h3 className="text-lg font-semibold text-sky-500">{client.industry}</h3>
              <p className="text-gray-600 text-sm italic mt-3 leading-snug">
                “{client.feedback.slice(0, 80)}...”
              </p>

              <div className="mt-3">
                <RatingStars rating={client.rating} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
  