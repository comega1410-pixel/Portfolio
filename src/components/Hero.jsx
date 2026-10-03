import React from "react";
import { candidateInfo } from "../data/candidate";
import { ArrowRight, Download, Mail, Terminal, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const Hero = () => {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "6.5rem",
        paddingBottom: "4rem",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* High-Tech Background Mesh & Radial Gradients */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "2%",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, rgba(0,0,0,0) 70%)",
          filter: "blur(60px)",
          pointerEvents: "none"
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          right: "2%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, rgba(0,0,0,0) 70%)",
          filter: "blur(70px)",
          pointerEvents: "none"
        }}
      ></div>

      <div className="container" style={{ position: "relative", zIndex: 10 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "3.5rem",
            alignItems: "center"
          }}
        >
          {/* Hero Left Content */}
          <div>
            <div
              className="section-tag"
              style={{
                background: "var(--accent-emerald-light)",
                color: "var(--accent-emerald)",
                border: "1px solid var(--border-accent)"
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "var(--accent-emerald)",
                  display: "inline-block"
                }}
              ></span>
              Available for IT Company & Enterprise Engineering Roles
            </div>

            <h1
              style={{
                fontSize: "clamp(2.5rem, 5.2vw, 4rem)",
                fontWeight: "800",
                lineHeight: "1.12",
                letterSpacing: "-0.03em",
                marginBottom: "1.25rem",
                color: "var(--text-primary)"
              }}
            >
              Hi, I’m <span style={{ color: "var(--accent-cyan)" }}>Arpit</span> —<br />
              <span
                style={{
                  background: "linear-gradient(135deg, #06b6d4 0%, #10b981 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                MERN Stack Developer
              </span>
            </h1>

            <p
              style={{
                fontSize: "clamp(1rem, 2vw, 1.15rem)",
                color: "var(--text-secondary)",
                lineHeight: "1.7",
                marginBottom: "2.25rem",
                maxWidth: "560px"
              }}
            >
              {candidateInfo.tagline} Building enterprise-grade React interfaces, secure Node REST microservices, and high-performance MongoDB data layers.
            </p>

            {/* CTA Action Buttons */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                alignItems: "center",
                marginBottom: "2.5rem"
              }}
            >
              <a href="#projects" className="btn btn-primary">
                View Projects <ArrowRight size={18} />
              </a>

              <a
                href={candidateInfo.resumeUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                title="Download Candidate Resume PDF"
              >
                Download Resume <Download size={18} />
              </a>

              <a href="#contact" className="btn btn-outline">
                Contact Me <Mail size={18} />
              </a>
            </div>

            {/* Social Links & Verification Notice */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                paddingTop: "1.5rem",
                borderTop: "1px solid var(--border-color)",
                flexWrap: "wrap"
              }}
            >
              <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: "600" }}>
                Developer Profiles:
              </span>

              <div style={{ display: "flex", gap: "1.25rem" }}>
                <a
                  href={candidateInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  title={`GitHub: ${candidateInfo.githubHandle}`}
                  style={{
                    color: "var(--text-secondary)",
                    transition: "color 0.2s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.45rem",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    fontWeight: "500"
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-cyan)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                >
                  <GithubIcon size={20} />
                  <span>GitHub</span>
                </a>

                <a
                  href={candidateInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  title={`LinkedIn: ${candidateInfo.linkedinHandle}`}
                  style={{
                    color: "var(--text-secondary)",
                    transition: "color 0.2s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.45rem",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    fontWeight: "500"
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#0A66C2")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                >
                  <LinkedinIcon size={20} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Hero Right Interactive Code Terminal Window */}
          <div>
            <div
              className="glass-card"
              style={{
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                border: "1px solid var(--border-accent)"
              }}
            >
              {/* Terminal Window Header Bar */}
              <div
                style={{
                  background: "var(--bg-secondary)",
                  padding: "0.85rem 1.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid var(--border-color)"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ef4444" }}></span>
                  <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#f59e0b" }}></span>
                  <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#10b981" }}></span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontSize: "0.82rem",
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-code)"
                  }}
                >
                  <Terminal size={14} />
                  <span>arpit-engineer.js</span>
                </div>
                <div style={{ width: "36px" }}></div>
              </div>

              {/* Terminal Body Code Editor */}
              <div
                style={{
                  padding: "1.75rem",
                  fontFamily: "var(--font-code)",
                  fontSize: "0.88rem",
                  lineHeight: "1.8",
                  color: "var(--text-primary)",
                  backgroundColor: "rgba(6, 11, 24, 0.92)",
                  overflowX: "auto"
                }}
              >
                <p>
                  <span style={{ color: "#c678dd" }}>const</span>{" "}
                  <span style={{ color: "#e5c07b" }}>candidate</span> = &#123;
                </p>
                <p style={{ paddingLeft: "1.5rem" }}>
                  <span style={{ color: "#e06c75" }}>name</span>:{" "}
                  <span style={{ color: "#98c379" }}>"{candidateInfo.fullName}"</span>,
                </p>
                <p style={{ paddingLeft: "1.5rem" }}>
                  <span style={{ color: "#e06c75" }}>role</span>:{" "}
                  <span style={{ color: "#98c379" }}>"Full-Stack MERN Developer"</span>,
                </p>
                <p style={{ paddingLeft: "1.5rem" }}>
                  <span style={{ color: "#e06c75" }}>location</span>:{" "}
                  <span style={{ color: "#98c379" }}>"{candidateInfo.location}"</span>,
                </p>
                <p style={{ paddingLeft: "1.5rem" }}>
                  <span style={{ color: "#e06c75" }}>academics</span>: &#123;
                </p>
                <p style={{ paddingLeft: "3rem" }}>
                  <span style={{ color: "#e06c75" }}>degree</span>:{" "}
                  <span style={{ color: "#98c379" }}>"{candidateInfo.degree}"</span>,
                </p>
                <p style={{ paddingLeft: "3rem" }}>
                  <span style={{ color: "#e06c75" }}>cgpa</span>:{" "}
                  <span style={{ color: "#d19a66" }}>9.5</span>
                </p>
                <p style={{ paddingLeft: "1.5rem" }}>&#125;,</p>
                <p style={{ paddingLeft: "1.5rem" }}>
                  <span style={{ color: "#e06c75" }}>stack</span>: [
                  <span style={{ color: "#98c379" }}>"MongoDB"</span>,{" "}
                  <span style={{ color: "#98c379" }}>"Express.js"</span>,{" "}
                  <span style={{ color: "#98c379" }}>"React.js"</span>,{" "}
                  <span style={{ color: "#98c379" }}>"Node.js"</span>]
                </p>
                <p>&#125;;</p>
                <br />
                <p>
                  <span style={{ color: "#5c6370", fontStyle: "italic" }}>
                    // Verified: REST API, Modular UI, Clean Architecture
                  </span>
                </p>
                <p style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "0.5rem" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--accent-emerald)" }} />
                  <span style={{ color: "var(--accent-emerald)", fontWeight: "600" }}>
                    Enterprise IT Ready • High Code Quality
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
