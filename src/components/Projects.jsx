import React, { useState } from "react";
import { projectsData } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { FolderGit2 } from "lucide-react";

const filterOptions = ["All", "React.js", "Node.js", "MongoDB", "Full Stack"];

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = projectsData.filter((project) => {
    if (selectedFilter === "All") return true;
    if (selectedFilter === "Full Stack") return project.category === "Full Stack";
    return project.technologies.includes(selectedFilter);
  });

  return (
    <section id="projects" className="section-padding" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} /> Portfolio Highlights
          </div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Demonstrating practical ability in full-stack architecture, REST API design, authentication, state management, and cloud deployment.
          </p>
        </div>

        {/* Technology Filter Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "0.6rem",
            marginBottom: "3rem"
          }}
        >
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`btn ${selectedFilter === filter ? "btn-primary" : "btn-secondary"}`}
              style={{ padding: "0.45rem 1.2rem", fontSize: "0.85rem" }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))",
            gap: "2rem",
            alignItems: "stretch"
          }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={(p) => setActiveModalProject(p)}
            />
          ))}
        </div>

        {/* Detail Modal Overlay */}
        {activeModalProject && (
          <ProjectModal
            project={activeModalProject}
            onClose={() => setActiveModalProject(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;
