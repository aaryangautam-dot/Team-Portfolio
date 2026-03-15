import ScrollReveal from "./ScrollReveal";

export default function TestimonialCard({ testimonial, delay = 0 }) {
  const initials = testimonial.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <ScrollReveal delay={delay}>
      <div className="testimonial-card">
        <p className="testimonial-quote">&ldquo;{testimonial.quote}&rdquo;</p>
        <div className="testimonial-author">
          <div className="testimonial-avatar">{initials}</div>
          <div>
            <p className="testimonial-name">{testimonial.name}</p>
            <p className="testimonial-role">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
