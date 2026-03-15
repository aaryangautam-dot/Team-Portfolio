"use client";
import * as SiIcons from "react-icons/si";
import ScrollReveal from "./ScrollReveal";

export default function SkillCard({ category, delay = 0 }) {
  return (
    <ScrollReveal delay={delay}>
      <div className="skill-category">
        <div className="skill-category-header">
          <div
            className="skill-category-dot"
            style={{ backgroundColor: category.color }}
          />
          <h3 className="skill-category-name">{category.category}</h3>
        </div>
        <div className="skills-grid-inner">
          {category.skills.map((skill) => {
            const Icon = SiIcons[skill.icon];
            return (
              <div key={skill.name} className="skill-item">
                {Icon && (
                  <span className="skill-item-icon">
                    <Icon />
                  </span>
                )}
                <span>{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </ScrollReveal>
  );
}
