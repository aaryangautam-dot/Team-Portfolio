import {
  HiGlobeAlt,
  HiCode,
  HiTemplate,
  HiCloud,
} from "react-icons/hi";
import ScrollReveal from "./ScrollReveal";

const iconMap = {
  HiGlobeAlt: HiGlobeAlt,
  HiCode: HiCode,
  HiTemplate: HiTemplate,
  HiCloud: HiCloud,
};

export default function ServiceCard({ service, delay = 0 }) {
  const Icon = iconMap[service.icon] || HiCode;

  return (
    <ScrollReveal delay={delay}>
      <div className="service-card">
        <div className="service-icon">
          <Icon />
        </div>
        <h3 className="service-title">{service.title}</h3>
        <p className="service-desc">{service.description}</p>
      </div>
    </ScrollReveal>
  );
}
