import React, { useState } from "react";
import { candidateInfo } from "../data/candidate";
import { Mail, Phone, User, X, Copy, Check, Bot } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const RobotAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "1.75rem",
        right: "1.75rem",
        zIndex: 999,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end"
      }}
    >
      {/* Dialog Box */}
      {isOpen && (
        <div
          className="robot-dialog-box"
          style={{
            width: "320px",
            background: "var(--bg-card)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid var(--accent-cyan)",
            borderRadius: "var(--radius-lg)",
            padding: "1.25rem",
            boxShadow: "0 12px 32px rgba(0, 0, 0, 0.4), 0 0 20px rgba(6, 182, 212, 0.3)",
            marginBottom: "1rem",
            animation: "fadeIn 0.25s ease-out forwards"
          }}
          onMouseLeave={() => setIsOpen(false)}
        >
          {/* Dialog Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid var(--border-color)",
              paddingBottom: "0.75rem",
              marginBottom: "0.85rem"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "2px solid var(--accent-cyan)",
                  background: "#000"
                }}
              >
                <img
                  src="/robot-avatar.png"
                  alt="Robot Assistant"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div>
                <h4 style={{ fontSize: "0.95rem", fontWeight: "700", color: "var(--text-primary)" }}>
                  Arpit's AI Bot
                </h4>
                <span
                  style={{
                    fontSize: "0.72rem",
                    color: "var(--accent-emerald)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.3rem"
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: "var(--accent-emerald)",
                      display: "inline-block"
                    }}
                  ></span>
                  Online • Quick Info
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: "transparent",
                border: "none",
                color: "var(--text-secondary)",
                cursor: "pointer",
                padding: "0.2rem"
              }}
              aria-label="Close Assistant"
            >
              <X size={18} />
            </button>
          </div>

          {/* Details List */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem", fontSize: "0.85rem" }}>
            {/* Name */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <User size={16} style={{ color: "var(--accent-cyan)", shrink: 0 }} />
              <div style={{ flex: 1, overflow: "hidden" }}>
                <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", display: "block" }}>Name</span>
                <strong style={{ color: "var(--text-primary)", fontSize: "0.85rem" }}>
                  {candidateInfo.fullName}
                </strong>
              </div>
            </div>

            {/* Email */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <Mail size={16} style={{ color: "var(--accent-emerald)", shrink: 0 }} />
              <div style={{ flex: 1, overflow: "hidden" }}>
                <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", display: "block" }}>Email</span>
                <a
                  href={`mailto:${candidateInfo.email}`}
                  style={{
                    color: "var(--text-primary)",
                    textDecoration: "none",
                    wordBreak: "break-all",
                    fontSize: "0.8rem",
                    fontWeight: "500"
                  }}
                >
                  {candidateInfo.email}
                </a>
              </div>
              <button
                onClick={() => handleCopy(candidateInfo.email, "email")}
                title="Copy Email"
                style={{
                  background: "var(--accent-emerald-light)",
                  border: "none",
                  color: "var(--accent-emerald)",
                  borderRadius: "4px",
                  padding: "0.3rem",
                  cursor: "pointer"
                }}
              >
                {copiedField === "email" ? <Check size={14} /> : <Copy size={14} />}
              </button>
            </div>

            {/* Mobile */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <Phone size={16} style={{ color: "var(--accent-cyan)", shrink: 0 }} />
              <div style={{ flex: 1, overflow: "hidden" }}>
                <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", display: "block" }}>Mobile</span>
                <a
                  href={`tel:${candidateInfo.phone}`}
                  style={{ color: "var(--text-primary)", textDecoration: "none", fontWeight: "500" }}
                >
                  {candidateInfo.phone}
                </a>
              </div>
              <button
                onClick={() => handleCopy(candidateInfo.phone, "phone")}
                title="Copy Phone"
                style={{
                  background: "var(--accent-cyan-light)",
                  border: "none",
                  color: "var(--accent-cyan)",
                  borderRadius: "4px",
                  padding: "0.3rem",
                  cursor: "pointer"
                }}
              >
                {copiedField === "phone" ? <Check size={14} /> : <Copy size={14} />}
              </button>
            </div>

            {/* LinkedIn */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <LinkedinIcon size={16} color="#0A66C2" />
              <div style={{ flex: 1, overflow: "hidden" }}>
                <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", display: "block" }}>LinkedIn</span>
                <a
                  href={candidateInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--accent-cyan)",
                    textDecoration: "none",
                    fontWeight: "600",
                    fontSize: "0.8rem",
                    display: "inline-block",
                    maxWidth: "200px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                  }}
                  title={candidateInfo.linkedin}
                >
                  {candidateInfo.linkedinHandle || "LinkedIn Profile"}
                </a>
              </div>
            </div>

            {/* GitHub */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <GithubIcon size={16} color="var(--text-primary)" />
              <div style={{ flex: 1, overflow: "hidden" }}>
                <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", display: "block" }}>GitHub</span>
                <a
                  href={candidateInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--accent-emerald)",
                    textDecoration: "none",
                    fontWeight: "600",
                    fontSize: "0.8rem",
                    display: "inline-block",
                    maxWidth: "200px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                  }}
                  title={candidateInfo.github}
                >
                  {candidateInfo.githubHandle || "GitHub Profile"}
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: "0.85rem",
              paddingTop: "0.5rem",
              borderTop: "1px solid var(--border-color)",
              fontSize: "0.7rem",
              color: "var(--text-muted)",
              textAlign: "center"
            }}
          >
            Hover or click to switch info card
          </div>
        </div>
      )}

      {/* Floating Robot Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        aria-label="Toggle Candidate Robot Assistant Info"
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #0f172a 0%, #1c2541 100%)",
          border: "2px solid var(--accent-cyan)",
          padding: "3px",
          cursor: "pointer",
          boxShadow: "0 0 20px rgba(6, 182, 212, 0.4), 0 8px 24px rgba(0,0,0,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
          position: "relative"
        }}
        className="floating"
      >
        <img
          src="/robot-avatar.png"
          alt="Robot Assistant Avatar"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            objectFit: "cover"
          }}
        />

        {/* Glowing Status Ring Dot */}
        <span
          style={{
            position: "absolute",
            top: "2px",
            right: "2px",
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            background: "var(--accent-emerald)",
            border: "2px solid var(--bg-primary)",
            boxShadow: "0 0 8px var(--accent-emerald)"
          }}
        ></span>
      </button>
    </div>
  );
};

export default RobotAssistant;
