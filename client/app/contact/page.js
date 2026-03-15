"use client";
import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, integrate with an email service or API endpoint
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="page-enter">
      <div className="page-header">
        <div className="container">
          <h1>
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p>
            Have a project idea, question, or just want to say hello? We&apos;d
            love to hear from you.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <ScrollReveal>
              <form className="contact-form" onSubmit={handleSubmit}>
                <SectionHeading
                  title="Send a Message"
                  subtitle="Fill out the form and we'll get back to you shortly."
                  align="left"
                />

                {submitted && (
                  <div className="form-success">
                    ✅ Message sent successfully! We&apos;ll get back to you soon.
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="contact-name">Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or idea..."
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  <FaPaperPlane /> Send Message
                </button>
              </form>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="contact-info">
                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="contact-info-label">Email</p>
                    <p className="contact-info-value">team@devteam.io</p>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <FaGithub />
                  </div>
                  <div>
                    <p className="contact-info-label">GitHub</p>
                    <a
                      href="https://github.com/devteam"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-info-value"
                      style={{ color: "var(--accent-primary)" }}
                    >
                      github.com/devteam
                    </a>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <FaLinkedin />
                  </div>
                  <div>
                    <p className="contact-info-label">LinkedIn</p>
                    <a
                      href="https://linkedin.com/company/devteam"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-info-value"
                      style={{ color: "var(--accent-primary)" }}
                    >
                      linkedin.com/company/devteam
                    </a>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="contact-info-label">Location</p>
                    <p className="contact-info-value">Remote — Worldwide</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
