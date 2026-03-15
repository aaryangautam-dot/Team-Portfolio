"use client";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";

export default function ProjectCard({ project, onClick, delay = 0 }) {
  return (
    <ScrollReveal delay={delay}>
      <div className="project-card" onClick={() => onClick && onClick(project)}>
        <div className="project-card-image">
          <FaCode className="project-card-image-icon" />
        </div>
        <div className="project-card-body">
          <h3 className="project-card-title">{project.title}</h3>
          <p className="project-card-desc">{project.description}</p>
          <div className="project-card-tech">
            {project.tech.map((t) => (
              <span key={t} className="tech-badge">
                {t}
              </span>
            ))}
          </div>
          <div className="project-card-links">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <FaGithub /> GitHub
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <FaExternalLinkAlt /> Demo
            </a>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
