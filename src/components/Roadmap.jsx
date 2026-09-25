import React from "react";
import { roadmapData } from "../data/roadmap";
import { Compass, FileCode, CheckSquare, Container, GitBranch, ShieldCheck, Zap, Cloud, AlertCircle } from "lucide-react";

const iconMap = {
  FileCode: FileCode,
  CheckSquare: CheckSquare,
  Container: Container,
  GitBranch: GitBranch,
  ShieldCheck: ShieldCheck,
  Zap: Zap,
  Cloud: Cloud
};

const Roadmap = () => {
  return (
    <section id="roadmap" className="section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Compass size={14} /> Learning Path
          </div>
          <h2 className="section-title">{roadmapData.title}</h2>
          <p className="section-subtitle">{roadmapData.subtitle}</p>
        </div>

        {/* Essential Transparency Disclaimer Banner */}
        <div
          className="glass-card"
          style={{
            background: "rgba(245, 158, 11, 0.08)",
            border: "1px solid rgba(245, 158, 11, 0.3)",
            padding: "1.25rem 1.75rem",
            borderRadius: "var(--radius-md)",
            marginBottom: "3rem",
            display: "flex",
            alignItems: "center",
            gap: "1rem"
          }}
        >
          <AlertCircle size={24} style={{ color: "#f59e0b", shrink: 0 }} />
          <p style={{ fontSize: "0.95rem", color: "var(--text-primary)", fontWeight: "500" }}>
            {roadmapData.resumeNote}
          </p>
        </div>

        {/* Roadmap Grid Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem"
          }}
        >
          {roadmapData.items.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Compass;
            return (
              <div
                key={index}
                className="glass-card"
                style={{
                  padding: "1.5rem",
                  display: "flex",
                  gap: "1.2rem",
                  alignItems: "flex-start"
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    background: "var(--accent-cyan-light)",
                    color: "var(--accent-cyan)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    shrink: 0
                  }}
                >
                  <IconComponent size={22} />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "700",
                      color: "var(--text-primary)",
                      marginBottom: "0.4rem"
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
