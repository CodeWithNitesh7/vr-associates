import React, { useEffect, useState } from "react";
import { getAllWebApps } from "../../api/Services/web&appApi.js"; // same API file

export default function Websites() {
  const [allProjects, setAllProjects] = useState([]);
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getAllWebApps();

        // Filter Web-only projects for featured section
        const webOnly = data.filter((item) => item.type === "Web");

        // Mark top 2 as featured (or any rule)
        setFeaturedProjects(webOnly.slice(0, 2));

        // Show all (Web + App + Both) in All Projects
        setAllProjects(data);
      } catch (error) {
        console.error("Error fetching web projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-sky-600 text-xl font-semibold">
        Loading Web Projects...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-sky-600 sm:text-5xl">
            Our Web Applications
          </h1>
          <p className="mt-3 text-xl text-gray-600">
            Explore the high-quality web applications built by our expert teams.
          </p>
        </header>

        {/* Featured Projects Section (Web only) */}
        {featuredProjects.length > 0 && (
          <>
            <h2 className="text-3xl font-bold text-sky-600 mb-6 border-b pb-2">
              ⭐ Featured Web Projects
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
              {featuredProjects.map((project) => (
                <ProjectCard key={project._id} project={project} showType={true} />
              ))}
            </div>
          </>
        )}

        {/* All Projects Section (Web + App + Both) */}
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
          <p className="text-gray-500 text-center mt-6">No projects found.</p>
        )}
      </div>
    </div>
  );
}

// Reusable Project Card
const ProjectCard = ({ project, showType }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl transform hover:-translate-y-1">
    {/* Image */}
    <div className="h-48 bg-gray-200">
      <img
        src={project.image || "https://via.placeholder.com/600x400?text=Web+Preview"}
        alt={project.title}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Details */}
    <div className="p-5">
      <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>

      {/* Show Type Badge only in Featured */}
      {showType && (
        <span className="inline-block mt-1 px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
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

      {/* Optional Live Link */}
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
