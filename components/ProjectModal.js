"use client";
import { useEffect } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCode } from "react-icons/fa";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-image">
          <FaCode />
          <button className="modal-close" onClick={onClose} aria-label="Close">
            <FaTimes />
          </button>
        </div>
        <div className="modal-body">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <div className="modal-tech">
            {project.tech.map((t) => (
              <span key={t} className="tech-badge">
                {t}
              </span>
            ))}
          </div>
          <div className="modal-links">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <FaGithub /> View Source
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
