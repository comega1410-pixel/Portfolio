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
      {/* Background Decorative Gradient Blobs */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "5%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, rgba(0,0,0,0) 70%)",
          filter: "blur(40px)",
          pointerEvents: "none"
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, rgba(0,0,0,0) 70%)",
          filter: "blur(50px)",
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
              Available for Junior Full-Stack Roles
            </div>

            <h1
              style={{
                fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                fontWeight: "800",
                lineHeight: "1.15",
                marginBottom: "1.25rem",
                color: "var(--text-primary)"
              }}
            >
              Hi, I’m <span style={{ color: "var(--accent-emerald)" }}>Arpit</span> —<br />
              <span
                style={{
                  background: "linear-gradient(135deg, var(--accent-emerald) 0%, var(--accent-cyan) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                MERN Stack Developer
              </span>
            </h1>

            <p
              style={{
                fontSize: "1.15rem",
                color: "var(--text-secondary)",
                lineHeight: "1.65",
                marginBottom: "2rem",
                maxWidth: "540px"
              }}
            >
              {candidateInfo.tagline}
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
                paddingTop: "1.25rem",
                borderTop: "1px solid var(--border-color)"
              }}
            >
              <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: "500" }}>
                Connect Profiles:
              </span>

              <div style={{ display: "flex", gap: "1rem" }}>
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
                    gap: "0.4rem",
                    textDecoration: "none",
                    fontSize: "0.9rem"
                  }}
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
                    gap: "0.4rem",
                    textDecoration: "none",
                    fontSize: "0.9rem"
                  }}
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
                  padding: "0.75rem 1.25rem",
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
                    fontSize: "0.8rem",
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-code)"
                  }}
                >
                  <Terminal size={14} />
                  <span>developer.js</span>
                </div>
                <div style={{ width: "36px" }}></div>
              </div>

              {/* Terminal Body Code Editor */}
              <div
                style={{
                  padding: "1.5rem",
                  fontFamily: "var(--font-code)",
                  fontSize: "0.9rem",
                  lineHeight: "1.8",
                  color: "var(--text-primary)",
                  backgroundColor: "rgba(11, 19, 43, 0.85)"
                }}
              >
                <p>
                  <span style={{ color: "#c678dd" }}>const</span>{" "}
                  <span style={{ color: "#e5c07b" }}>developer</span> = &#123;
                </p>
                <p style={{ paddingLeft: "1.5rem" }}>
                  <span style={{ color: "#e06c75" }}>name</span>:{" "}
                  <span style={{ color: "#98c379" }}>"{candidateInfo.fullName}"</span>,
                </p>
                <p style={{ paddingLeft: "1.5rem" }}>
                  <span style={{ color: "#e06c75" }}>role</span>:{" "}
                  <span style={{ color: "#98c379" }}>"MERN Stack Developer"</span>,
                </p>
                <p style={{ paddingLeft: "1.5rem" }}>
                  <span style={{ color: "#e06c75" }}>location</span>:{" "}
                  <span style={{ color: "#98c379" }}>"{candidateInfo.location}"</span>,
                </p>
                <p style={{ paddingLeft: "1.5rem" }}>
                  <span style={{ color: "#e06c75" }}>education</span>: &#123;
                </p>
                <p style={{ paddingLeft: "3rem" }}>
                  <span style={{ color: "#e06c75" }}>degree</span>:{" "}
                  <span style={{ color: "#98c379" }}>"{candidateInfo.degree}"</span>,
                </p>
                <p style={{ paddingLeft: "3rem" }}>
                  <span style={{ color: "#e06c75" }}>institution</span>:{" "}
                  <span style={{ color: "#98c379" }}>"{candidateInfo.college}"</span>,
                </p>
                <p style={{ paddingLeft: "3rem" }}>
                  <span style={{ color: "#e06c75" }}>cgpa</span>:{" "}
                  <span style={{ color: "#d19a66" }}>9.5</span>
                </p>
                <p style={{ paddingLeft: "1.5rem" }}>&#125;,</p>
                <p style={{ paddingLeft: "1.5rem" }}>
                  <span style={{ color: "#e06c75" }}>techStack</span>: [
                  <span style={{ color: "#98c379" }}>"MongoDB"</span>,{" "}
                  <span style={{ color: "#98c379" }}>"Express"</span>,{" "}
                  <span style={{ color: "#98c379" }}>"React"</span>,{" "}
                  <span style={{ color: "#98c379" }}>"Node"</span>]
                </p>
                <p>&#125;;</p>
                <br />
                <p>
                  <span style={{ color: "#5c6370", fontStyle: "italic" }}>
                    // Status: Ready for engineering opportunities
                  </span>
                </p>
                <p style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "0.5rem" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--accent-emerald)" }} />
                  <span style={{ color: "var(--accent-emerald)" }}>Full-Stack CRUD & REST APIs Verified</span>
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
