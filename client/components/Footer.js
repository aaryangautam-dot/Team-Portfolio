"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
];

const resourceLinks = [
  { href: "/github", label: "GitHub" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="navbar-logo">
              <span className="logo-bracket">&lt;</span>
              DevTeam
              <span className="logo-bracket"> /&gt;</span>
            </Link>
            <p>
              Building modern, scalable web applications with cutting-edge
              technologies. Let&apos;s turn your ideas into reality.
            </p>
            <div className="footer-social">
              <a
                href="https://github.com/devteam"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/company/devteam"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a href="mailto:team@devteam.io" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4>Resources</h4>
            <ul>
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="mailto:team@devteam.io">team@devteam.io</a>
              </li>
              <li>
                <a
                  href="https://github.com/devteam"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Organization
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} DevTeam. All rights reserved.</p>
          <button
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
