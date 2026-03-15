import ScrollReveal from "./ScrollReveal";

export default function SectionHeading({ title, subtitle, align = "center" }) {
  return (
    <ScrollReveal>
      <div className={`section-heading ${align}`}>
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
        <div className="section-divider" />
      </div>
    </ScrollReveal>
  );
}
