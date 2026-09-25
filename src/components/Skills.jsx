import React, { useState } from "react";
import { skillCategories } from "../data/skills";
import { Code2, Layout, Server, Database, Wrench, Layers } from "lucide-react";

const iconMap = {
  Code2: Code2,
  Layout: Layout,
  Server: Server,
  Database: Database,
  Wrench: Wrench
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredCategories =
    activeTab === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Layers size={14} /> Technical Stack
          </div>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Categorized overview of technical capabilities across frontend UI, backend REST API development, databases, and deployment tooling.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "0.75rem",
            marginBottom: "3rem"
          }}
        >
          <button
            onClick={() => setActiveTab("all")}
            className={`btn ${activeTab === "all" ? "btn-primary" : "btn-secondary"}`}
            style={{ padding: "0.45rem 1.25rem", fontSize: "0.85rem" }}
          >
            All Categories
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`btn ${activeTab === cat.id ? "btn-primary" : "btn-secondary"}`}
              style={{ padding: "0.45rem 1.25rem", fontSize: "0.85rem" }}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.75rem"
          }}
        >
          {filteredCategories.map((category) => {
            const IconComponent = iconMap[category.icon] || Code2;
            return (
              <div
                key={category.id}
                className="glass-card"
                style={{
                  padding: "1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.8rem",
                      marginBottom: "1.25rem",
                      borderBottom: "1px solid var(--border-color)",
                      paddingBottom: "0.85rem"
                    }}
                  >
                    <div
                      style={{
                        width: "38px",
                        height: "38px",
                        borderRadius: "8px",
                        background: "var(--accent-emerald-light)",
                        color: "var(--accent-emerald)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <IconComponent size={20} />
                    </div>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--text-primary)" }}>
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Badges Grid */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.6rem"
                    }}
                  >
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        style={{
                          background: "var(--bg-secondary)",
                          color: "var(--text-primary)",
                          border: "1px solid var(--border-color)",
                          borderRadius: "var(--radius-sm)",
                          padding: "0.4rem 0.85rem",
                          fontSize: "0.88rem",
                          fontWeight: "500",
                          transition: "all 0.2s ease"
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = "var(--accent-emerald)";
                          e.currentTarget.style.color = "var(--accent-emerald)";
                          e.currentTarget.style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "var(--border-color)";
                          e.currentTarget.style.color = "var(--text-primary)";
                          e.currentTarget.style.transform = "translateY(0)";
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    marginTop: "1.5rem",
                    paddingTop: "0.75rem",
                    borderTop: "1px dashed var(--border-color)",
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }}
                >
                  <span>Verified Competency</span>
                  <span style={{ color: "var(--accent-emerald)", fontWeight: "600" }}>
                    {category.skills.length} Technologies
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
