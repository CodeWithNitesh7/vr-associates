// import React from "react";
// import { Star, Quote, CheckCircle, ArrowRight, TrendingUp } from "lucide-react";

// // ⭐ Rating Component
// const RatingStars = ({ rating, size = 18 }) => (
//   <div className="flex items-center space-x-0.5">
//     {[...Array(5)].map((_, i) => (
//       <Star
//         key={i}
//         size={size}
//         className={`transition-colors duration-200 ${i < rating
//             ? "text-amber-500 fill-amber-500"
//             : "text-gray-300 fill-gray-300"
//           }`}
//       />
//     ))}
//   </div>
// );

// // ♾️ Animated Logo Scroll
// const LogoScroll = ({ clients }) => (
//   <div className="relative overflow-hidden py-12">
//     <div className="absolute inset-y-0 left-0 w-32 z-20 bg-gradient-to-r from-gray-50 to-transparent"></div>
//     <div className="absolute inset-y-0 right-0 w-32 z-20 bg-gradient-to-l from-gray-50 to-transparent"></div>

//     <div
//       className="flex w-full animate-[logo-slide_30s_linear_infinite]"
//       style={{ whiteSpace: "nowrap" }}
//     >
//       {[...clients, ...clients].map((client, i) => (
//         <div key={i} className="flex-shrink-0 w-44 mx-6">
//           <img
//             src={client.logo}
//             alt={`${client.name} Logo`}
//             className="w-full h-12 object-contain mx-auto opacity-50 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
//           />
//         </div>
//       ))}
//     </div>
//   </div>
// );

// export default function Clients() {
//   const clients = [
//     {
//       name: "Google",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
//       feedback:
//         "VR Associates helped us build a high-performing development team rapidly. Their professionalism and speed set a new standard.",
//       rating: 5,
//       industry: "Technology",
//     },
//     {
//       name: "Tata Consultancy Services (TCS)",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Tata_Consultancy_Services_Logo.svg",
//       feedback:
//         "A dependable partner for technical staffing and contract resources. Excellent communication and on-time delivery every time.",
//       rating: 5,
//       industry: "IT Services",
//     },
//     {
//       name: "Accenture",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Accenture.svg",
//       feedback:
//         "Their agile and data-driven hiring process perfectly aligns with our global standards. Truly seamless collaboration!",
//       rating: 5,
//       industry: "Consulting",
//     },
//     {
//       name: "Deloitte",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Deloitte_Logo.svg",
//       feedback:
//         "VR Associates has been instrumental in helping us find top analysts and tech leads. Professional, fast, and precise.",
//       rating: 5,
//       industry: "Finance & Consulting",
//     },
//     {
//       name: "Infosys",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/8/85/Infosys_logo.svg",
//       feedback:
//         "We were impressed by their attention to detail and the quality of candidates sourced within tight timelines.",
//       rating: 4,
//       industry: "Technology",
//     },
//     {
//       name: "IBM",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
//       feedback:
//         "They understood our niche requirements for AI engineers perfectly. Excellent partner for long-term hiring.",
//       rating: 5,
//       industry: "Software & AI",
//     },
//     {
//       name: "Amazon",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
//       feedback:
//         "Their end-to-end hiring solutions helped us scale operations quickly while maintaining quality. Highly recommended!",
//       rating: 5,
//       industry: "E-commerce",
//     },
//     {
//       name: "Microsoft",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
//       feedback:
//         "Top-notch collaboration and a deep understanding of our technical needs. Efficient and reliable staffing partner.",
//       rating: 5,
//       industry: "Technology",
//     },
//     {
//       name: "Meta",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo.svg",
//       feedback:
//         "Their team provided exceptional recruitment support for specialized software roles. Truly a world-class experience.",
//       rating: 5,
//       industry: "Social Media",
//     },
//   ];

//   return (
//     <section className="relative overflow-hidden bg-gray-50 py-24 md:py-36 text-gray-900">
//       {/* Decorative glow */}
//       <div className="absolute top-1/4 right-0 w-72 h-72 bg-indigo-300/20 rounded-full mix-blend-multiply blur-3xl animate-pulse"></div>

//       <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
//         {/* 🌟 Section Header */}
//         <div className="mb-20 max-w-4xl mx-auto">
//           <p className="text-base font-semibold uppercase text-indigo-600 tracking-widest mb-3 flex items-center justify-center">
//             <TrendingUp className="w-5 h-5 mr-2 text-teal-500" />
//             Our Impact, Their Words
//           </p>
//           <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
//             Powering{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-teal-500">
//               Global Success
//             </span>{" "}
//             with Top Industry Leaders
//           </h2>
//         </div>

//         {/* 🧩 Logo Section */}
//         <h3 className="text-lg font-medium text-gray-500 mb-6 uppercase tracking-wider">
//           Partnered with the Best
//         </h3>
//         <LogoScroll clients={clients} />

//         {/* 💬 Testimonials */}
//         <div className="mt-28">
//           <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
//             Hear Directly from Our Partners
//           </h3>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//             {clients.map((client, i) => (
//               <div
//                 key={i}
//                 className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all text-left relative overflow-hidden ring-1 ring-gray-200 hover:ring-indigo-500/50 transform hover:-translate-y-2 duration-500 group"
//               >
//                 <div className="absolute top-0 right-0 h-16 w-16 bg-indigo-500/5 rounded-bl-3xl"></div>

//                 <Quote className="h-8 w-8 text-indigo-600 mb-6 opacity-70" />

//                 <p className="text-lg italic text-gray-700 leading-relaxed mb-6">
//                   “{client.feedback}”
//                 </p>

//                 <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
//                   <div>
//                     <RatingStars rating={client.rating} size={20} />
//                     <p className="text-lg font-bold text-gray-900 mt-2">
//                       {client.name}
//                     </p>
//                     <p className="text-sm font-semibold text-indigo-600 mt-1">
//                       {client.industry}
//                     </p>
//                   </div>
//                   <CheckCircle className="h-6 w-6 text-green-500" />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* 🚀 CTA */}
//         <div className="mt-32 pt-20 border-t border-gray-200/70 max-w-5xl mx-auto">
//           <div className="bg-gradient-to-r from-indigo-600 to-teal-500 p-10 md:p-14 rounded-3xl text-center shadow-2xl">
//             <p className="text-3xl md:text-4xl font-extrabold text-white mb-6">
//               Ready to Build Your Success Story?
//             </p>
//             <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
//               Partner with us today to accelerate your growth with top-tier
//               talent and seamless staffing excellence.
//             </p>
//             <a
//               href="#contact"
//               className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold rounded-full bg-white text-indigo-700 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-md"
//             >
//               Get Started Now
//               <ArrowRight className="w-5 h-5 ml-2" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }







import React from "react";
import { Star, Quote, CheckCircle, ArrowRight, TrendingUp } from "lucide-react";

// ⭐ Rating Component
const RatingStars = ({ rating, size = 18 }) => (
  <div className="flex items-center space-x-0.5">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={size}
        className={`transition-colors duration-200 ${i < rating
          ? "text-amber-500 fill-amber-500"
          : "text-gray-300 fill-gray-300"
          }`}
      />
    ))}
  </div>
);

// ♾️ Animated Logo Scroll (MODIFIED FOR CIRCULAR LOGOS)
const LogoScroll = ({ clients }) => (
  <div className="relative overflow-hidden py-12">
    {/* Gradient Fades: Adjusted from-gray-50 to from-white for better visual contrast */}
    <div className="absolute inset-y-0 left-0 w-32 z-20 bg-gradient-to-r from-gray-50 to-transparent"></div>
    <div className="absolute inset-y-0 right-0 w-32 z-20 bg-gradient-to-l from-gray-50 to-transparent"></div>

    <div
      className="flex w-full animate-[logo-slide_30s_linear_infinite]"
      style={{ whiteSpace: "nowrap" }}
    >
      {[...clients, ...clients].map((client, i) => (
        <div key={i} className="flex-shrink-0 w-40 mx-6 flex items-center justify-center">
          {/* Circular Logo Container */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-white p-2 shadow-md transition-all duration-500 hover:shadow-lg hover:ring-2 hover:ring-indigo-300/50">
            <img
              src={client.logo}
              alt={`${client.name} Logo`}
              // Image styling for circular fit and professional look
              className="w-full h-full object-contain mx-auto opacity-70 hover:opacity-100 transition-opacity duration-500 filter grayscale hover:grayscale-0"
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function Clients() {
  // Data (Kept the new data with well-known company logos)
  const clients = [
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", feedback: "VR Associates helped us build a high-performing development team rapidly. Their professionalism and speed set a new standard.", rating: 5, industry: "Technology" },
    { name: "TCS", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Tata_Consultancy_Services_Logo.svg", feedback: "A dependable partner for technical staffing and contract resources. Excellent communication and on-time delivery every time.", rating: 5, industry: "IT Services" },
    { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Accenture.svg", feedback: "Their agile and data-driven hiring process perfectly aligns with our global standards. Truly seamless collaboration!", rating: 5, industry: "Consulting" },
    { name: "Deloitte", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Deloitte_Logo.svg", feedback: "VR Associates has been instrumental in helping us find top analysts and tech leads. Professional, fast, and precise.", rating: 5, industry: "Finance & Consulting" },
    { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/8/85/Infosys_logo.svg", feedback: "We were impressed by their attention to detail and the quality of candidates sourced within tight timelines.", rating: 4, industry: "Technology" },
    { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg", feedback: "They understood our niche requirements for AI engineers perfectly. Excellent partner for long-term hiring.", rating: 5, industry: "Software & AI" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", feedback: "Their end-to-end hiring solutions helped us scale operations quickly while maintaining quality. Highly recommended!", rating: 5, industry: "E-commerce" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", feedback: "Top-notch collaboration and a deep understanding of our technical needs. Efficient and reliable staffing partner.", rating: 5, industry: "Technology" },
    { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo.svg", feedback: "Their team provided exceptional recruitment support for specialized software roles. Truly a world-class experience.", rating: 5, industry: "Social Media" },
  ];

  return (
    <section className="relative overflow-hidden bg-gray-50 py-24 md:py-36 text-gray-900">
      {/* Decorative glow */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-indigo-300/20 rounded-full mix-blend-multiply blur-3xl animate-pulse"></div>

      <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
        {/* 🌟 Section Header */}
        <div className="mb-20 max-w-4xl mx-auto">
          <p className="text-base font-semibold uppercase text-indigo-600 tracking-widest mb-3 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 mr-2 text-teal-500" />
            Our Impact, Their Words
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Powering{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-teal-500">
              Global Success
            </span>{" "}
            with Top Industry Leaders
          </h2>
        </div>

        {/* --- Logo Section (Circular & Animated) --- */}
        <h3 className="text-lg font-medium text-gray-500 mb-6 uppercase tracking-wider">
          Partnered with the Best
        </h3>
        <LogoScroll clients={clients} />

        {/* --- Testimonials --- */}
        <div className="mt-28">
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
            Hear Directly from Our Partners
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {clients.slice(0, 3).map((client, i) => ( // Showing only 3 curated testimonials for cleaner look
              <div
                key={i}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all text-left relative overflow-hidden ring-1 ring-gray-200 hover:ring-indigo-500/50 transform hover:-translate-y-2 duration-500 group"
              >
                <div className="absolute top-0 right-0 h-16 w-16 bg-indigo-500/5 rounded-bl-3xl"></div>

                <Quote className="h-8 w-8 text-indigo-600 mb-6 opacity-70" />

                <p className="text-lg italic text-gray-700 leading-relaxed mb-6">
                  “{client.feedback}”
                </p>

                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <RatingStars rating={client.rating} size={20} />
                    <p className="text-lg font-bold text-gray-900 mt-2">
                      {client.name}
                    </p>
                    <p className="text-sm font-semibold text-indigo-600 mt-1">
                      {client.industry}
                    </p>
                  </div>
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🚀 CTA (Retained the professional gradient style) */}
        <div className="mt-32 pt-20 border-t border-gray-200/70 max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-indigo-600 to-teal-500 p-10 md:p-14 rounded-3xl text-center shadow-2xl">
            <p className="text-3xl md:text-4xl font-extrabold text-white mb-6">
              Ready to Build Your Success Story?
            </p>
            <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
              Partner with us today to accelerate your growth with top-tier talent and seamless staffing excellence.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold rounded-full bg-white text-indigo-700 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}