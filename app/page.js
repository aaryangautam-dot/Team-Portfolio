"use client";
import Link from "next/link";
import { FaArrowRight, FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import TestimonialCard from "@/components/TestimonialCard";
import ServiceCard from "@/components/ServiceCard";
import { projects } from "@/data/projects";
import { team } from "@/data/team";
import { testimonials } from "@/data/testimonials";
import { services } from "@/data/services";
import { workflow } from "@/data/workflow";
import { skillCategories } from "@/data/skills";
import { useState } from "react";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 6);

  const allSkillItems = skillCategories.flatMap((category) => category.skills);
  const uniqueSkillMap = new Map(allSkillItems.map((skill) => [skill.name, skill]));
  const displayedSkills = Array.from(uniqueSkillMap.values()).slice(0, 12);
  const teamRoles = [...new Set(team.map((member) => member.role))];

  return (
    <div className="page-enter">
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-bg-orb" />
          <div className="hero-bg-orb" />
          <div className="hero-bg-orb" />
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <ScrollReveal>
                <div className="hero-badge">
                  <FaCode /> Developer Team
                </div>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="hero-title">
                  Building{" "}
                  <span className="gradient-text">Modern & Scalable</span>{" "}
                  Web Applications
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="hero-description">
                  We are a team of three passionate developers specializing in
                  full-stack web development. From concept to deployment, we
                  craft exceptional digital experiences.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div className="hero-buttons">
                  <Link href="/projects" className="btn btn-primary">
                    View Projects <FaArrowRight />
                  </Link>
                  <Link href="/contact" className="btn btn-secondary">
                    Contact Us
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            <div className="hero-visual">
              <ScrollReveal delay={400}>
                <div className="hero-code-block">
                  <div className="code-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="code-line">
                    <span className="code-comment">
                      {"// Welcome to Loop Org"}
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="code-keyword">const</span>{" "}
                    <span className="code-function">team</span>{" "}
                    <span className="code-bracket">=</span>{" "}
                    <span className="code-bracket">{"{"}</span>
                  </div>
                  <div className="code-line">
                    &nbsp;&nbsp;
                    <span className="code-function">developers</span>:{" "}
                    <span className="code-string">3</span>,
                  </div>
                  <div className="code-line">
                    &nbsp;&nbsp;
                    <span className="code-function">passion</span>:{" "}
                    <span className="code-string">
                      &quot;unlimited&quot;
                    </span>
                    ,
                  </div>
                  <div className="code-line">
                    &nbsp;&nbsp;
                    <span className="code-function">coffee</span>:{" "}
                    <span className="code-string">Infinity</span>,
                  </div>
                  <div className="code-line">
                    <span className="code-bracket">{"}"}</span>;
                  </div>
                  <div className="code-line">&nbsp;</div>
                  <div className="code-line">
                    <span className="code-keyword">export default</span>{" "}
                    <span className="code-function">buildAmazingThings</span>
                    <span className="code-bracket">()</span>;
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section className="section">
        <div className="container">
          <div className="about-preview-grid">
            <div className="about-preview-text">
              <SectionHeading
                title="Who We Are"
                subtitle="A dedicated team turning ideas into impactful software."
                align="left"
              />
              <p>
                We are a trio of developers who believe in writing clean,
                maintainable code while delivering stunning user experiences.
                With combined expertise across the full stack, we tackle
                projects of any scale.
              </p>
              <div className="about-preview-stats">
                <div className="stat-item">
                  <div className="stat-number">3</div>
                  <div className="stat-label">Developers</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">20+</div>
                  <div className="stat-label">Projects</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Technologies</div>
                </div>
              </div>
              <Link href="/about" className="btn btn-primary">
                Meet the Team <FaArrowRight />
              </Link>
            </div>
            <div className="about-preview-visual">
              <div className="about-avatar-group">
                {team.map((m) => (
                  <div key={m.id} className="about-avatar-item">
                    {m.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SKILLS PREVIEW ===== */}
      <section className="section-alt">
        <div className="container">
          <SectionHeading
            title="Our Tech Stack"
            subtitle="The modern technologies we use to build powerful applications."
          />
          <div className="skills-preview-grid">
            {displayedSkills.map((skill, i) => {
              const Icon = SiIcons[skill.icon];
              return (
                <ScrollReveal key={skill.name} delay={i * 60}>
                  <div className="skills-preview-item">
                    {Icon && <Icon />}
                    {skill.name}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
          <div className="roles-preview" style={{ marginTop: "24px" }}>
            <h4>Team Roles</h4>
            <div className="roles-grid">
              {teamRoles.map((role) => (
                <span key={role} className="role-pill">
                  {role}
                </span>
              ))}
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="/skills" className="btn btn-secondary">
              View All Skills <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FEATURED PROJECTS ===== */}
      <section className="section">
        <div className="container">
          <SectionHeading
            title="Featured Projects"
            subtitle="A selection of our best work showcasing our capabilities."
          />
          <div className="grid-3">
            {featuredProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={setSelectedProject}
                delay={i * 100}
              />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <Link href="/projects" className="btn btn-primary">
              View All Projects <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="section-alt">
        <div className="container">
          <SectionHeading
            title="What We Build"
            subtitle="End-to-end solutions tailored to your needs."
          />
          <div className="grid-4">
            {services.map((service, i) => (
              <ServiceCard key={service.title} service={service} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW WE WORK ===== */}
      <section className="section">
        <div className="container">
          <SectionHeading
            title="How We Work"
            subtitle="Our proven process for delivering exceptional results."
          />
          <div className="workflow-grid">
            {workflow.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 120}>
                <div className="workflow-step">
                  <div className="workflow-number">{step.step}</div>
                  <div className="workflow-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section-alt">
        <div className="container">
          <SectionHeading
            title="What People Say"
            subtitle="Feedback from our clients, professors, and collaborators."
          />
          <div className="grid-2">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta-section">
        <div className="container cta-content">
          <ScrollReveal>
            <h2>Have an idea or project?</h2>
            <p>Let&apos;s build it together. Reach out and let&apos;s discuss how we can help.</p>
            <Link href="/contact" className="btn">
              Contact Us <FaArrowRight />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
