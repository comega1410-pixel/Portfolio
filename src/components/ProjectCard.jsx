import React from "react";
import { ExternalLink, CheckCircle2, Info } from "lucide-react";
import { GithubIcon } from "./BrandIcons";

const ProjectCard = ({ project, onSelectProject }) => {
  return (
    <div
      className="glass-card"
      style={{
        padding: "1.75rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        position: "relative"
      }}
    >
      <div>
        {/* Header Badges */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "1rem"
          }}
        >
          <span className="badge badge-emerald">{project.badge}</span>
          <span
            style={{
              fontSize: "0.78rem",
              color: "var(--accent-cyan)",
              background: "var(--accent-cyan-light)",
              padding: "0.2rem 0.55rem",
              borderRadius: "4px",
              fontWeight: "600"
            }}
          >
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: "1.35rem",
            fontWeight: "800",
            color: "var(--text-primary)",
            marginBottom: "0.75rem"
          }}
        >
          {project.title}
        </h3>

        {/* Summary Description */}
        <p
          style={{
            fontSize: "0.95rem",
            color: "var(--text-secondary)",
            lineHeight: "1.65",
            marginBottom: "1.25rem"
          }}
        >
          {project.summary}
        </p>

        {/* Feature Highlights List */}
        <div style={{ marginBottom: "1.25rem" }}>
          <h4
            style={{
              fontSize: "0.82rem",
              fontWeight: "700",
              color: "var(--text-muted)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: "0.5rem"
            }}
          >
            Key Highlights & Features:
          </h4>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.45rem" }}>
            {project.features.slice(0, 4).map((feat, i) => (
              <li
                key={i}
                style={{
                  fontSize: "0.86rem",
                  color: "var(--text-primary)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.45rem"
                }}
              >
                <CheckCircle2 size={15} style={{ color: "var(--accent-emerald)", shrink: 0, marginTop: "2px" }} />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Badges */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.5rem" }}>
          {project.technologies.map((tech) => (
            <span
              key={tech}
              style={{
                fontSize: "0.75rem",
                fontWeight: "600",
                color: "var(--accent-cyan)",
                background: "var(--accent-cyan-light)",
                padding: "0.2rem 0.55rem",
                borderRadius: "4px",
                border: "1px solid rgba(6, 182, 212, 0.2)"
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div
        style={{
          borderTop: "1px solid var(--border-color)",
          paddingTop: "1.25rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem"
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem" }}>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ padding: "0.55rem 0.75rem", fontSize: "0.82rem" }}
            title={`Live Demo: ${project.liveUrlLabel}`}
          >
            Live Demo <ExternalLink size={14} />
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ padding: "0.55rem 0.75rem", fontSize: "0.82rem" }}
            title={`Source Code: ${project.githubUrlLabel}`}
          >
            View Code <GithubIcon size={14} />
          </a>
        </div>

        <button
          onClick={() => onSelectProject(project)}
          className="btn btn-outline"
          style={{ width: "100%", padding: "0.5rem", fontSize: "0.82rem" }}
        >
          View Architecture & Details <Info size={14} />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
