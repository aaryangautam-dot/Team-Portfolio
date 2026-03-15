import { FaGithub, FaLinkedin, FaEnvelope, FaGraduationCap } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";

export default function TeamCard({ member, delay = 0 }) {
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <ScrollReveal delay={delay}>
      <div className="team-card">
        <div className="team-avatar">{initials}</div>
        <h3 className="team-name">{member.name}</h3>
        <p className="team-role">{member.role}</p>
        <p className="team-bio">{member.bio}</p>
        <div className="team-education">
          <FaGraduationCap />
          {member.education}
        </div>
        <div className="team-skills">
          {member.skills.map((skill) => (
            <span key={skill} className="tech-badge">
              {skill}
            </span>
          ))}
        </div>
        <div className="team-social">
          <a
            href={member.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} GitHub`}
          >
            <FaGithub />
          </a>
          <a
            href={member.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} LinkedIn`}
          >
            <FaLinkedin />
          </a>
          <a
            href={`mailto:${member.social.email}`}
            aria-label={`${member.name} Email`}
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </ScrollReveal>
  );
}
