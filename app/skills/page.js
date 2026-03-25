import { skillCategories } from "@/data/skills";
import { team } from "@/data/team";
import * as SiIcons from "react-icons/si";
import SkillCard from "@/components/SkillCard";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "Skills — DevTeam",
  description:
    "Explore our technical expertise across frontend, backend, databases, and tools. We use modern technologies to build production-ready applications.",
};

export default function SkillsPage() {
  const teamSkills = [...new Set(team.flatMap((member) => member.skills))];

  const iconByName = new Map(
    skillCategories
      .flatMap((category) => category.skills)
      .map((skill) => [skill.name.toLowerCase(), skill.icon])
  );

  const skillFallbackIcon = {
    "react": "SiReact",
    "next.js": "SiNextdotjs",
    "next": "SiNextdotjs",
    "node.js": "SiNodedotjs",
    "node": "SiNodedotjs",
    "python": "SiPython",
    "mongodb": "SiMongodb",
    "tailwind css": "SiTailwindcss",
    "tailwind": "SiTailwindcss",
    "docker": "SiDocker",
    "git": "SiGit",
    "javascript": "SiJavascript",
    "html": "SiHtml5",
    "css": "SiCss3",
    "jquery": "SiJquery",
    "wordpress": "SiWordpress",
    "plasmic studio": "SiPlasmic",
    "webflow": "SiWebflow",
    "sass": "SiSass",
    "bootstrap": "SiBootstrap",
    "divi builder": "SiWordpress",
    "figma": "SiFigma",
    "adobe xd": "SiAdobexd",
    "framer motion": "SiFramer",
    "typescript": "SiTypescript",
    "aws": "SiAmazonaws",
    "microsoft teams": "SiMicrosoftteams",
    "jira": "SiJira",
    "confluence": "SiConfluence",
    "tableau": "SiTableau",
    "looker": "SiLooker",
    "google analytics": "SiGoogleanalytics",
    "power bi": "SiPowerbi",
    "excel": "SiMicrosoftexcel",
    "business intelligence": "SiDatabricks",
    "data analysis": "SiDatadog",
    "data visualization": "SiTableau",
    "requirement gathering": "SiJira",
    "user stories": "SiJira",
    "stakeholder management": "SiCode",
    "business process modeling": "SiCode",
    "webpack": "SiWebpack",
    "vite": "SiVite",
    "storybook": "SiStorybook",
    "tableau": "SiTableau",
    "looker": "SiLooker",
    "jira": "SiJira",
    "confluence": "SiConfluence",
    "google analytics": "SiGoogleanalytics",
    "excel": "SiMicrosoftexcel",
    "sql": "SiMysql",
    "power bi": "SiPowerbi",
    "business intelligence": "SiDatabricks",
    "data analysis": "SiDatadog",
    "data visualization": "SiTableau",
    "analytics": "SiGoogleanalytics",
    "requirement gathering": "SiJira",
    "user stories": "SiJira",
    "business process modeling": "SiLucidchart",
    "api": "SiPostman",
  };

  const getIconKey = (skillName) => {
    if (!skillName) return null;
    const key = skillName.toLowerCase();
    const mapped = iconByName.get(key) || skillFallbackIcon[key] || "SiCode";
    return mapped;
  };

  const categoriesToShow = skillCategories.map((category) => ({
    ...category,
    skills: [...new Set(category.skills.map((skill) => skill.name))].map((name) => ({
      name,
      icon: getIconKey(name) || "",
    })),
  }));

  const toolsCategory = categoriesToShow.find((c) => c.category === "Tools & Platforms");

  const classifySkill = (skillName) => {
    const value = skillName.toLowerCase();
    const frontendTerms = [
      "react",
      "next",
      "tailwind",
      "sass",
      "bootstrap",
      "jquery",
      "webflow",
      "wordpress",
      "plasmic",
      "figma",
      "adobe",
      "framer",
      "webpack",
      "vite",
      "storybook",
      "javascript",
      "html",
      "css",
    ];
    const backendTerms = ["node", "express", "python", "server", "api"];
    const databaseTerms = ["mongo", "mysql", "sql", "power bi", "tableau", "looker", "analytics", "database", "excel"];

    if (frontendTerms.some((term) => value.includes(term))) return "Frontend";
    if (backendTerms.some((term) => value.includes(term))) return "Backend";
    if (databaseTerms.some((term) => value.includes(term))) return "Databases";
    return "Tools & Platforms";
  };

  teamSkills.forEach((teamSkill) => {
    const isPresent = categoriesToShow.some((category) =>
      category.skills.some((skill) => skill.name.toLowerCase() === teamSkill.toLowerCase())
    );

    if (!isPresent) {
      const targetCategoryName = classifySkill(teamSkill);
      const targetCategory = categoriesToShow.find((c) => c.category === targetCategoryName) || toolsCategory;

      if (targetCategory) {
        targetCategory.skills.push({
          name: teamSkill,
          icon: getIconKey(teamSkill) || "",
        });
      }
    }
  });

  categoriesToShow.forEach((category) => {
    category.skills = [...new Map(category.skills.map((skill) => [skill.name.toLowerCase(), skill])).values()];
  });

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
            {categoriesToShow.map((category, i) => (
              <SkillCard key={category.category} category={category} delay={i * 120} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
