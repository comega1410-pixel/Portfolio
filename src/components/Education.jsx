import React from "react";
import { educationData, trainingData } from "../data/educationTraining";
import { GraduationCap, BookOpen, Calendar, CheckCircle2 } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="section-padding" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} /> Qualification & Training
          </div>
          <h2 className="section-title">Education & Credentials</h2>
          <p className="section-subtitle">
            Academic achievements and specialized full-stack software development training programs.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem"
          }}
        >
          {/* Education Column */}
          <div>
            <h3
              style={{
                fontSize: "1.35rem",
                fontWeight: "700",
                color: "var(--text-primary)",
                marginBottom: "1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "0.6rem"
              }}
            >
              <GraduationCap size={24} style={{ color: "var(--accent-emerald)" }} />
              Academic Degree
            </h3>

            {educationData.map((edu) => (
              <div
                key={edu.id}
                className="glass-card"
                style={{ padding: "1.75rem", borderLeft: "4px solid var(--accent-emerald)" }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                  <h4 style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--text-primary)" }}>
                    {edu.degree}
                  </h4>
                  <span
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: "600",
                      background: "var(--accent-emerald-light)",
                      color: "var(--accent-emerald)",
                      padding: "0.25rem 0.65rem",
                      borderRadius: "50px",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.3rem"
                    }}
                  >
                    <Calendar size={12} /> {edu.period}
                  </span>
                </div>

                <p style={{ fontSize: "1rem", fontWeight: "600", color: "var(--accent-cyan)", marginBottom: "0.5rem" }}>
                  {edu.institution}
                </p>

                <div
                  style={{
                    display: "inline-block",
                    background: "rgba(16, 185, 129, 0.15)",
                    border: "1px solid var(--border-accent)",
                    padding: "0.4rem 0.9rem",
                    borderRadius: "6px",
                    fontSize: "0.95rem",
                    fontWeight: "800",
                    color: "var(--accent-emerald)",
                    marginBottom: "1.25rem"
                  }}
                >
                  CGPA: {edu.cgpa}
                </div>

                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {edu.highlights.map((item, i) => (
                    <li key={i} style={{ fontSize: "0.9rem", color: "var(--text-secondary)", display: "flex", gap: "0.5rem" }}>
                      <CheckCircle2 size={16} style={{ color: "var(--accent-emerald)", shrink: 0, marginTop: "2px" }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Specialized Training Column */}
          <div>
            <h3
              style={{
                fontSize: "1.35rem",
                fontWeight: "700",
                color: "var(--text-primary)",
                marginBottom: "1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "0.6rem"
              }}
            >
              <BookOpen size={24} style={{ color: "var(--accent-cyan)" }} />
              Software Training
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {trainingData.map((train) => (
                <div
                  key={train.id}
                  className="glass-card"
                  style={{ padding: "1.5rem", borderLeft: "4px solid var(--accent-cyan)" }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                    <h4 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--text-primary)" }}>
                      {train.title}
                    </h4>
                    <span style={{ fontSize: "0.78rem", color: "var(--accent-cyan)", fontWeight: "600" }}>
                      {train.period}
                    </span>
                  </div>

                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "0.75rem" }}>
                    {train.issuer}
                  </p>

                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "1rem" }}>
                    {train.description}
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {train.skillsAcquired.map((skill) => (
                      <span
                        key={skill}
                        style={{
                          fontSize: "0.75rem",
                          background: "var(--bg-secondary)",
                          color: "var(--text-primary)",
                          padding: "0.2rem 0.55rem",
                          borderRadius: "4px",
                          border: "1px solid var(--border-color)"
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
