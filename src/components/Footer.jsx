import React from "react";
import { candidateInfo } from "../data/candidate";
import { Mail, Heart, Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--bg-primary)",
        borderTop: "1px solid var(--border-color)",
        padding: "3rem 0 2rem 0",
        color: "var(--text-secondary)"
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1.5rem",
            paddingBottom: "2rem",
            borderBottom: "1px solid var(--border-color)"
          }}
        >
          {/* Brand Info */}
          <div>
            <a
              href="#hero"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                textDecoration: "none",
                color: "var(--text-primary)",
                fontWeight: "800",
                fontSize: "1.2rem",
                marginBottom: "0.4rem"
              }}
            >
              <Code2 size={20} style={{ color: "var(--accent-emerald)" }} />
              <span>{candidateInfo.fullName}</span>
            </a>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
              {candidateInfo.title} • {candidateInfo.location}
            </p>
          </div>

          {/* Social Quick Links */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
            <a
              href={candidateInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={{
                color: "var(--text-secondary)",
                transition: "color 0.2s ease"
              }}
              title="GitHub Profile"
            >
              <GithubIcon size={22} />
            </a>

            <a
              href={candidateInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{
                color: "var(--text-secondary)",
                transition: "color 0.2s ease"
              }}
              title="LinkedIn Profile"
            >
              <LinkedinIcon size={22} />
            </a>

            <a
              href={`mailto:${candidateInfo.email}`}
              aria-label="Email"
              style={{
                color: "var(--text-secondary)",
                transition: "color 0.2s ease"
              }}
              title="Send Email"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: "1.5rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
            fontSize: "0.85rem",
            color: "var(--text-muted)"
          }}
        >
          <p>© {currentYear} {candidateInfo.fullName}. All rights reserved.</p>
          <p style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
            Built with <span style={{ color: "var(--accent-emerald)", fontWeight: "600" }}>React.js</span> & Vite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
