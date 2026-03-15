"use client";
import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import SectionHeading from "@/components/SectionHeading";

const filters = [
  { key: "all", label: "All Projects" },
  { key: "fullstack", label: "Full Stack" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="page-enter">
      <div className="page-header">
        <div className="container">
          <h1>
            Our <span className="gradient-text">Projects</span>
          </h1>
          <p>
            Browse our portfolio of web applications, APIs, and developer tools
            built with modern technologies.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="filter-bar">
            {filters.map((f) => (
              <button
                key={f.key}
                className={`filter-btn ${activeFilter === f.key ? "active" : ""}`}
                onClick={() => setActiveFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="grid-3">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={setSelectedProject}
                delay={i * 80}
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "60px 0", color: "var(--text-tertiary)" }}>
              <p>No projects found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
