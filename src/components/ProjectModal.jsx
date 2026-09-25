import React, { useEffect } from "react";
import { X, ExternalLink, CheckCircle2, AlertCircle, Layers, Server, Database, Lock, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./BrandIcons";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const { details } = project;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
        backgroundColor: "rgba(11, 19, 43, 0.85)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem"
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          width: "100%",
          maxWidth: "850px",
          maxHeight: "90vh",
          overflowY: "auto",
          background: "var(--bg-primary)",
          border: "1px solid var(--border-accent)",
          borderRadius: "var(--radius-lg)",
          padding: "2rem",
          position: "relative",
          boxShadow: "var(--shadow-lg)"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            borderBottom: "1px solid var(--border-color)",
            paddingBottom: "1rem",
            marginBottom: "1.5rem"
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
              <span className="badge badge-emerald">{project.badge}</span>
              <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>{project.category}</span>
            </div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: "800", color: "var(--text-primary)" }}>
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-color)",
              color: "var(--text-primary)",
              borderRadius: "50%",
              width: "36px",
              height: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.2s ease"
            }}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Content Sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
          {/* Objective */}
          <div>
            <h4
              style={{
                fontSize: "1.05rem",
                fontWeight: "700",
                color: "var(--accent-emerald)",
                marginBottom: "0.5rem",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem"
              }}
            >
              Project Objective
            </h4>
            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
              {details.objective}
            </p>
          </div>

          {/* Core Technologies Used */}
          <div>
            <h4 style={{ fontSize: "1rem", fontWeight: "700", marginBottom: "0.5rem" }}>
              Technology Stack
            </h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  style={{
                    background: "var(--bg-secondary)",
                    color: "var(--text-primary)",
                    padding: "0.3rem 0.75rem",
                    borderRadius: "4px",
                    fontSize: "0.82rem",
                    border: "1px solid var(--border-color)"
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Architecture Breakdown Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.25rem"
            }}
          >
            {/* Frontend Architecture */}
            <div
              style={{
                background: "var(--bg-card)",
                padding: "1.25rem",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-color)"
              }}
            >
              <h4
                style={{
                  fontSize: "0.95rem",
                  fontWeight: "700",
                  color: "var(--text-primary)",
                  marginBottom: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem"
                }}
              >
                <Layers size={18} style={{ color: "var(--accent-cyan)" }} /> Frontend Architecture
              </h4>
              <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                {details.frontendArch}
              </p>
            </div>

            {/* Backend Architecture */}
            <div
              style={{
                background: "var(--bg-card)",
                padding: "1.25rem",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-color)"
              }}
            >
              <h4
                style={{
                  fontSize: "0.95rem",
                  fontWeight: "700",
                  color: "var(--text-primary)",
                  marginBottom: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem"
                }}
              >
                <Server size={18} style={{ color: "var(--accent-emerald)" }} /> Backend Architecture
              </h4>
              <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                {details.backendArch}
              </p>
            </div>
          </div>

          {/* Database Schema & Auth Flow */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.25rem"
            }}
          >
            {/* Database Schema */}
            <div
              style={{
                background: "var(--bg-card)",
                padding: "1.25rem",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-color)"
              }}
            >
              <h4
                style={{
                  fontSize: "0.95rem",
                  fontWeight: "700",
                  color: "var(--text-primary)",
                  marginBottom: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem"
                }}
              >
                <Database size={18} style={{ color: "var(--accent-cyan)" }} /> Database Schema Overview
              </h4>
              <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                {details.databaseSchema}
              </p>
            </div>

            {/* Auth Flow */}
            <div
              style={{
                background: "var(--bg-card)",
                padding: "1.25rem",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-color)"
              }}
            >
              <h4
                style={{
                  fontSize: "0.95rem",
                  fontWeight: "700",
                  color: "var(--text-primary)",
                  marginBottom: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem"
                }}
              >
                <Lock size={18} style={{ color: "var(--accent-emerald)" }} /> Authentication Flow
              </h4>
              <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                {details.authFlow}
              </p>
            </div>
          </div>

          {/* API Endpoints */}
          <div>
            <h4 style={{ fontSize: "1rem", fontWeight: "700", marginBottom: "0.75rem" }}>
              Key REST API Endpoints
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {details.apiEndpoints.map((ep, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "0.5rem 0.85rem",
                    background: "var(--bg-secondary)",
                    borderRadius: "6px",
                    fontFamily: "var(--font-code)",
                    fontSize: "0.82rem"
                  }}
                >
                  <span
                    style={{
                      fontWeight: "700",
                      padding: "0.15rem 0.45rem",
                      borderRadius: "4px",
                      background:
                        ep.method === "GET"
                          ? "rgba(16, 185, 129, 0.2)"
                          : ep.method === "POST"
                          ? "rgba(6, 182, 212, 0.2)"
                          : ep.method === "PUT"
                          ? "rgba(245, 158, 11, 0.2)"
                          : "rgba(239, 68, 68, 0.2)",
                      color:
                        ep.method === "GET"
                          ? "var(--accent-emerald)"
                          : ep.method === "POST"
                          ? "var(--accent-cyan)"
                          : ep.method === "PUT"
                          ? "#f59e0b"
                          : "#ef4444"
                    }}
                  >
                    {ep.method}
                  </span>
                  <span style={{ color: "var(--text-primary)", fontWeight: "600" }}>{ep.route}</span>
                  <span style={{ color: "var(--text-muted)", marginLeft: "auto" }}>{ep.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Problems Encountered & Solved */}
          <div>
            <h4 style={{ fontSize: "1rem", fontWeight: "700", marginBottom: "0.75rem" }}>
              Problems Encountered & Solutions
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {details.problemsAndSolutions.map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: "var(--bg-card)",
                    padding: "1rem",
                    borderRadius: "8px",
                    borderLeft: "3px solid var(--accent-emerald)"
                  }}
                >
                  <p style={{ fontSize: "0.88rem", fontWeight: "600", color: "#f59e0b", marginBottom: "0.3rem" }}>
                    Challenge: {item.problem}
                  </p>
                  <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)" }}>
                    Solution: {item.solution}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Future Improvements */}
          <div>
            <h4 style={{ fontSize: "1rem", fontWeight: "700", marginBottom: "0.5rem" }}>
              Future Improvements & Planned Features
            </h4>
            <ul style={{ paddingLeft: "1.2rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              {details.futureImprovements.map((imp, i) => (
                <li key={i} style={{ fontSize: "0.88rem", color: "var(--text-secondary)" }}>
                  {imp}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer Link Buttons */}
        <div
          style={{
            marginTop: "2rem",
            paddingTop: "1.25rem",
            borderTop: "1px solid var(--border-color)",
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ padding: "0.6rem 1.25rem", fontSize: "0.88rem" }}
              title={`Live Demo URL: ${project.liveUrlLabel}`}
            >
              View Live Demo <ExternalLink size={16} />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ padding: "0.6rem 1.25rem", fontSize: "0.88rem" }}
              title={`GitHub Repository URL: ${project.githubUrlLabel}`}
            >
              View Source Code <GithubIcon size={16} />
            </a>
          </div>

          <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
            * Note: Live & Source code links labeled for user replacement
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
