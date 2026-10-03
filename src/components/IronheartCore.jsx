import React from "react";

const IronheartCore = ({ size = 40, className = "" }) => {
  return (
    <div
      className={`ironheart-container ${className}`}
      style={{
        width: size,
        height: size,
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, rgba(15, 23, 42, 0.95) 70%)",
        boxShadow: "0 0 15px rgba(6, 182, 212, 0.5), inset 0 0 10px rgba(6, 182, 212, 0.4)",
        border: "1.5px solid var(--accent-cyan)",
        overflow: "hidden"
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "100%" }}
      >
        <defs>
          <radialGradient id="ironheartGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="1" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
            <stop offset="85%" stopColor="#10b981" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0b132b" stopOpacity="0" />
          </radialGradient>

          <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Ring Segmented Frame */}
        <circle cx="50" cy="50" r="45" stroke="var(--accent-cyan)" strokeWidth="2.5" strokeDasharray="18 6" opacity="0.85" />
        <circle cx="50" cy="50" r="39" stroke="var(--accent-emerald)" strokeWidth="1" strokeDasharray="8 4" opacity="0.7" />

        {/* Rotating Outer Tech Ring */}
        <g style={{ transformOrigin: "50px 50px", animation: "ironheartSpin 12s linear infinite" }}>
          <circle cx="50" cy="50" r="34" stroke="rgba(56, 189, 248, 0.6)" strokeWidth="1.5" strokeDasharray="12 12" />
          <path d="M50 16 L50 20 M50 80 L50 84 M16 50 L20 50 M80 50 L84 50" stroke="var(--accent-cyan)" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Outer Hexagon / Triangle Arc Structure */}
        <polygon
          points="50,22 74,36 74,64 50,78 26,64 26,36"
          stroke="var(--accent-cyan)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.8"
        />

        {/* Inner Counter-Rotating Triangular Core Structure */}
        <g style={{ transformOrigin: "50px 50px", animation: "ironheartReverseSpin 8s linear infinite" }}>
          <polygon
            points="50,27 70,62 30,62"
            stroke="var(--accent-emerald)"
            strokeWidth="2"
            fill="rgba(16, 185, 129, 0.15)"
            filter="url(#neonGlow)"
          />
          <polygon
            points="50,73 30,38 70,38"
            stroke="var(--accent-cyan)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.6"
          />
        </g>

        {/* Central Core Arc Power Cell */}
        <circle cx="50" cy="50" r="13" fill="url(#ironheartGlow)" />
        <circle cx="50" cy="50" r="7" fill="#ffffff" filter="url(#neonGlow)">
          <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
        </circle>

        {/* Core Radiating Energy Rays */}
        <path
          d="M50 37 L50 43 M50 57 L50 63 M37 50 L43 50 M57 50 L63 50"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      <style>{`
        @keyframes ironheartSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes ironheartReverseSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
      `}</style>
    </div>
  );
};

export default IronheartCore;
