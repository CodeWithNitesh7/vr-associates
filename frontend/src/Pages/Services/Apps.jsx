import React, { useEffect, useState } from "react";
import { getAllWebApps } from "../../api/Services/web&appApi.js"; // Import your API

export default function Apps() {
  const [allProjects, setAllProjects] = useState([]);
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch from DB when component loads
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllWebApps();

        // Filter App type for featured section
        const appOnly = data.filter((item) => item.type === "App");

        // Use first two App items as featured (or customize logic later)
        setFeaturedProjects(appOnly.slice(0, 2));

        // Show all in "All Projects" (App + Web + Both)
        setAllProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-sky-600 text-xl font-semibold">
        Loading App Projects...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-sky-600 sm:text-5xl">
            Our App (Android & iOS)
          </h1>
          <p className="mt-3 text-xl text-gray-600">
            Explore high-quality mobile and web applications built by our expert teams.
          </p>
        </header>

        {/* Featured Projects Section (App only) */}
        {featuredProjects.length > 0 && (
          <>
            <h2 className="text-3xl font-bold text-sky-600 mb-6 border-b pb-2">
              ⭐ Featured App Projects
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
              {featuredProjects.map((project) => (
                <ProjectCard key={project._id} project={project} showType={true} />
              ))}
            </div>
          </>
        )}

        {/* All Other Projects Section (Web + App + Both) */}
        <h2 className="text-3xl font-bold text-gray-700 mb-6 border-b pb-2 mt-8">
          All Projects
        </h2>

        {allProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allProjects.map((project) => (
              <ProjectCard key={project._id} project={project} showType={false} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center mt-6">
            No projects available yet.
          </p>
        )}
      </div>
    </div>
  );
}

// Reusable Card Component
const ProjectCard = ({ project, showType }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl transform hover:-translate-y-1">
    {/* Image */}
    <div className="h-48 bg-gray-200">
      <img
        src={
          project.image ||
          "https://via.placeholder.com/600x400?text=App+Preview"
        }
        alt={project.title}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Details */}
    <div className="p-5">
      <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>

      {/* Optional Type Badge */}
      {showType && (
        <span
          className={`inline-block mt-1 px-3 py-1 text-xs font-semibold rounded-full ${
            project.type === "App"
              ? "bg-indigo-100 text-indigo-800"
              : "bg-green-100 text-green-800"
          }`}
        >
          {project.type}
        </span>
      )}

      <p className="mt-3 text-gray-600 text-sm italic">
        "{project.description}"
      </p>

      {/* Tech Stack */}
      {project.techStack?.length > 0 && (
        <div className="mt-3 pt-3 border-t border-gray-100">
          <p className="text-xs font-medium text-gray-500 mb-1">Tech Stack:</p>
          <p className="text-sm font-mono text-sky-600">
            {project.techStack.join(", ")}
          </p>
        </div>
      )}

      {/* Optional Project Link */}
      {project.link && (
        <div className="mt-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-600 text-sm font-semibold hover:underline"
          >
            🔗 View Project
          </a>
        </div>
      )}
    </div>
  </div>
);
