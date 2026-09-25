import React, { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { candidateInfo } from "../data/candidate";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Highlight active section based on scroll offset
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 900,
        padding: isScrolled ? "0.85rem 0" : "1.25rem 0",
        background: isScrolled ? "var(--bg-glass)" : "transparent",
        backdropFilter: isScrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(16px)" : "none",
        borderBottom: isScrolled ? "1px solid var(--border-color)" : "1px solid transparent",
        transition: "all 0.3s ease"
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Brand Logo */}
        <a
          href="#hero"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            textDecoration: "none",
            color: "var(--text-primary)",
            fontWeight: "800",
            fontSize: "1.25rem"
          }}
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, var(--accent-emerald) 0%, var(--accent-cyan) 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff"
            }}
          >
            <Code2 size={20} />
          </div>
          <span>
            {candidateInfo.shortName} <span style={{ color: "var(--accent-emerald)" }}>.dev</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.75rem"
          }}
          className="desktop-nav"
        >
          <ul style={{ display: "flex", gap: "1.5rem", listStyle: "none", alignItems: "center" }}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    style={{
                      textDecoration: "none",
                      color: isActive ? "var(--accent-emerald)" : "var(--text-secondary)",
                      fontWeight: isActive ? "600" : "500",
                      fontSize: "0.95rem",
                      transition: "color 0.2s ease"
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <ThemeToggle />
            <a href="#contact" className="btn btn-primary" style={{ padding: "0.5rem 1.1rem", fontSize: "0.85rem" }}>
              Hire Me
            </a>
          </div>
        </nav>

        {/* Mobile Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }} className="mobile-nav-toggle">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: "transparent",
              border: "none",
              color: "var(--text-primary)",
              cursor: "pointer",
              padding: "0.4rem"
            }}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "var(--bg-primary)",
            borderBottom: "1px solid var(--border-color)",
            padding: "1.5rem",
            boxShadow: "var(--shadow-lg)"
          }}
        >
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    textDecoration: "none",
                    color: "var(--text-primary)",
                    fontWeight: "600",
                    fontSize: "1.1rem",
                    display: "block",
                    padding: "0.4rem 0"
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li style={{ paddingTop: "0.5rem" }}>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn btn-primary"
                style={{ width: "100%" }}
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* Responsive Inline CSS */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav-toggle { display: flex !important; }
        }
        @media (min-width: 769px) {
          .mobile-nav-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
