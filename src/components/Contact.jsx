import React, { useState } from "react";
import { candidateInfo } from "../data/candidate";
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) {
      newErrors.message = "Message content is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate async API communication with explicit feedback note
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus({
        type: "success",
        message:
          "Thank you for getting in touch! Form validation passed successfully. (Note: Demo simulation mode - connect your backend API endpoint or service like EmailJS to dispatch real emails)."
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} /> Get In Touch
          </div>
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">
            Open for junior MERN Stack Developer, Full-Stack Developer, React Developer, and Node.js Developer opportunities.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem",
            alignItems: "flex-start"
          }}
        >
          {/* Contact Details Cards Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div className="glass-card" style={{ padding: "1.75rem" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "1.25rem", color: "var(--text-primary)" }}>
                Direct Reach Out
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {/* Email */}
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "10px",
                      background: "var(--accent-emerald-light)",
                      color: "var(--accent-emerald)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      shrink: 0
                    }}
                  >
                    <Mail size={22} />
                  </div>
                  <div>
                    <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", display: "block" }}>Email</span>
                    <a
                      href={`mailto:${candidateInfo.email}`}
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: "600",
                        color: "var(--text-primary)",
                        textDecoration: "none"
                      }}
                    >
                      {candidateInfo.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
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
                    <Phone size={22} />
                  </div>
                  <div>
                    <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", display: "block" }}>Phone / WhatsApp</span>
                    <a
                      href={`tel:${candidateInfo.phone}`}
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: "600",
                        color: "var(--text-primary)",
                        textDecoration: "none"
                      }}
                    >
                      {candidateInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "10px",
                      background: "var(--accent-emerald-light)",
                      color: "var(--accent-emerald)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      shrink: 0
                    }}
                  >
                    <MapPin size={22} />
                  </div>
                  <div>
                    <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", display: "block" }}>Location</span>
                    <span style={{ fontSize: "0.95rem", fontWeight: "600", color: "var(--text-primary)" }}>
                      {candidateInfo.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Note box */}
            <div
              className="glass-card"
              style={{
                padding: "1.25rem",
                fontSize: "0.85rem",
                color: "var(--text-secondary)",
                lineHeight: "1.6"
              }}
            >
              <p style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "var(--accent-emerald)", fontWeight: "600", marginBottom: "0.3rem" }}>
                <CheckCircle size={16} /> Quick Response Promise
              </p>
              I am actively monitoring inquiries for technical interviews, coding assessments, and software developer positions.
            </div>
          </div>

          {/* Interactive Form Column */}
          <div className="glass-card" style={{ padding: "2rem" }}>
            <h3 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "1.25rem", color: "var(--text-primary)" }}>
              Send a Message
            </h3>

            {submitStatus && (
              <div
                style={{
                  padding: "1rem",
                  borderRadius: "8px",
                  marginBottom: "1.5rem",
                  background: submitStatus.type === "success" ? "var(--accent-emerald-light)" : "rgba(239, 68, 68, 0.15)",
                  border: `1px solid ${submitStatus.type === "success" ? "var(--border-accent)" : "rgba(239, 68, 68, 0.3)"}`,
                  color: submitStatus.type === "success" ? "var(--accent-emerald)" : "#ef4444",
                  fontSize: "0.88rem",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.6rem"
                }}
              >
                <CheckCircle size={18} style={{ shrink: 0, marginTop: "2px" }} />
                <span>{submitStatus.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {/* Name */}
              <div>
                <label style={{ display: "block", fontSize: "0.88rem", fontWeight: "600", marginBottom: "0.4rem", color: "var(--text-primary)" }}>
                  Your Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "var(--radius-sm)",
                    background: "var(--bg-secondary)",
                    border: `1px solid ${errors.name ? "#ef4444" : "var(--border-color)"}`,
                    color: "var(--text-primary)",
                    fontSize: "0.95rem",
                    outline: "none"
                  }}
                />
                {errors.name && <span style={{ fontSize: "0.78rem", color: "#ef4444", marginTop: "0.25rem", display: "block" }}>{errors.name}</span>}
              </div>

              {/* Email */}
              <div>
                <label style={{ display: "block", fontSize: "0.88rem", fontWeight: "600", marginBottom: "0.4rem", color: "var(--text-primary)" }}>
                  Your Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. rahul@example.com"
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "var(--radius-sm)",
                    background: "var(--bg-secondary)",
                    border: `1px solid ${errors.email ? "#ef4444" : "var(--border-color)"}`,
                    color: "var(--text-primary)",
                    fontSize: "0.95rem",
                    outline: "none"
                  }}
                />
                {errors.email && <span style={{ fontSize: "0.78rem", color: "#ef4444", marginTop: "0.25rem", display: "block" }}>{errors.email}</span>}
              </div>

              {/* Subject */}
              <div>
                <label style={{ display: "block", fontSize: "0.88rem", fontWeight: "600", marginBottom: "0.4rem", color: "var(--text-primary)" }}>
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. MERN Developer Role Opportunity"
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "var(--radius-sm)",
                    background: "var(--bg-secondary)",
                    border: `1px solid ${errors.subject ? "#ef4444" : "var(--border-color)"}`,
                    color: "var(--text-primary)",
                    fontSize: "0.95rem",
                    outline: "none"
                  }}
                />
                {errors.subject && <span style={{ fontSize: "0.78rem", color: "#ef4444", marginTop: "0.25rem", display: "block" }}>{errors.subject}</span>}
              </div>

              {/* Message */}
              <div>
                <label style={{ display: "block", fontSize: "0.88rem", fontWeight: "600", marginBottom: "0.4rem", color: "var(--text-primary)" }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your team or project requirements..."
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "var(--radius-sm)",
                    background: "var(--bg-secondary)",
                    border: `1px solid ${errors.message ? "#ef4444" : "var(--border-color)"}`,
                    color: "var(--text-primary)",
                    fontSize: "0.95rem",
                    outline: "none",
                    resize: "vertical"
                  }}
                ></textarea>
                {errors.message && <span style={{ fontSize: "0.78rem", color: "#ef4444", marginTop: "0.25rem", display: "block" }}>{errors.message}</span>}
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
                style={{ width: "100%", padding: "0.85rem" }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="spin" style={{ animation: "spin 1s linear infinite" }} /> Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>

              <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", textAlign: "center" }}>
                * Messages are validated client-side and simulated cleanly.
              </p>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Contact;
