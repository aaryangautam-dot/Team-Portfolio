import { team } from "@/data/team";
import TeamCard from "@/components/TeamCard";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "About — DevTeam",
  description:
    "Meet the three developers behind DevTeam. Learn about our skills, experience, and passion for building exceptional web applications.",
};

export default function AboutPage() {
  return (
    <div className="page-enter">
      <div className="page-header">
        <div className="container">
          <h1>
            About <span className="gradient-text">Our Team</span>
          </h1>
          <p>
            Three developers united by a shared passion for building
            exceptional software. Get to know us below.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Meet the Developers"
            subtitle="Each member brings unique skills and perspectives to every project."
          />
          <div className="grid-3">
            {team.map((member, i) => (
              <TeamCard key={member.id} member={member} delay={i * 150} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
