import React from "react";
import { candidateInfo } from "../data/candidate";
import { GraduationCap, Award, MapPin, Code, CheckCircle, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} /> About Me
          </div>
          <h2 className="section-title">Background & Overview</h2>
          <p className="section-subtitle">
            Passionate software developer focusing on modern web standards, scalable APIs, and clean UI engineering.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem",
            alignItems: "stretch"
          }}
        >
          {/* Left Column: Honest Professional Summary */}
          <div className="glass-card" style={{ padding: "2rem" }}>
            <h3
              style={{
                fontSize: "1.35rem",
                fontWeight: "700",
                color: "var(--text-primary)",
                marginBottom: "1.25rem",
                display: "flex",
                alignItems: "center",
                gap: "0.6rem"
              }}
            >
              <Code size={22} style={{ color: "var(--accent-emerald)" }} />
              Professional Summary
            </h3>

            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--text-secondary)",
                lineHeight: "1.8",
                marginBottom: "1.5rem"
              }}
            >
              {candidateInfo.aboutSummary}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.95rem" }}>
                <CheckCircle size={18} style={{ color: "var(--accent-emerald)", shrink: 0 }} />
                <span>Hands-on MERN stack development & API architecture</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.95rem" }}>
                <CheckCircle size={18} style={{ color: "var(--accent-emerald)", shrink: 0 }} />
                <span>JWT Authentication & bcrypt security integration</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.95rem" }}>
                <CheckCircle size={18} style={{ color: "var(--accent-emerald)", shrink: 0 }} />
                <span>Responsive frontend design with React Router & Context API</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.95rem" }}>
                <CheckCircle size={18} style={{ color: "var(--accent-emerald)", shrink: 0 }} />
                <span>Cloud deployment experience on Render with Postman API testing</span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Highlights Cards Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
            {/* Highlight 1: Degree */}
            <div className="glass-card" style={{ padding: "1.5rem" }}>
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "10px",
                  background: "var(--accent-emerald-light)",
                  color: "var(--accent-emerald)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem"
                }}
              >
                <GraduationCap size={24} />
              </div>
              <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.3rem" }}>Degree</h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "0.2rem" }}>
                B.E. Computer Engineering
              </p>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                {candidateInfo.college}
              </span>
            </div>

            {/* Highlight 2: Academic Rank */}
            <div className="glass-card" style={{ padding: "1.5rem" }}>
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "10px",
                  background: "var(--accent-cyan-light)",
                  color: "var(--accent-cyan)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem"
                }}
              >
                <Award size={24} />
              </div>
              <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.3rem" }}>Academic Rank</h4>
              <p
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "800",
                  color: "var(--accent-emerald)",
                  marginBottom: "0.2rem"
                }}
              >
                CGPA 9.5 / 10
              </p>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Graduation: 2028</span>
            </div>

            {/* Highlight 3: Location */}
            <div className="glass-card" style={{ padding: "1.5rem" }}>
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "10px",
                  background: "var(--accent-cyan-light)",
                  color: "var(--accent-cyan)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem"
                }}
              >
                <MapPin size={24} />
              </div>
              <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.3rem" }}>Location</h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "0.2rem" }}>
                Surat, Gujarat, India
              </p>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Open to Remote & Onsite</span>
            </div>

            {/* Highlight 4: Core Focus */}
            <div className="glass-card" style={{ padding: "1.5rem" }}>
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "10px",
                  background: "var(--accent-emerald-light)",
                  color: "var(--accent-emerald)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem"
                }}
              >
                <Code size={24} />
              </div>
              <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.3rem" }}>Core Focus</h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "0.2rem" }}>
                MERN Stack Web Dev
              </p>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>REST APIs & React UI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
