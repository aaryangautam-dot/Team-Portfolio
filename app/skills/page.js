import { skillCategories } from "@/data/skills";
import SkillCard from "@/components/SkillCard";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "Skills — DevTeam",
  description:
    "Explore our technical expertise across frontend, backend, databases, and tools. We use modern technologies to build production-ready applications.",
};

export default function SkillsPage() {
  return (
    <div className="page-enter">
      <div className="page-header">
        <div className="container">
          <h1>
            Our <span className="gradient-text">Skills</span>
          </h1>
          <p>
            A comprehensive toolkit of modern technologies we use to build
            scalable, performant applications.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            {skillCategories.map((category, i) => (
              <SkillCard key={category.category} category={category} delay={i * 120} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
