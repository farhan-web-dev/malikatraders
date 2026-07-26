import { useEffect, useRef } from "react";
import "../styles/OurMission.css";

const MISSION_PARAGRAPH = `Malik Arshman Traders exists to empower Pakistan's industrial sector with turnkey Boiler Operation & Maintenance (O&M) services, premium solid & biomass fuels, and high-caliber industrial and surgical supplies. We take full operational responsibility off our clients' shoulders by deploying 24/7 govt-certified 1st & 2nd Class Boiler Engineers, guaranteeing 100% regulatory compliance, safety audits, and zero downtime steam solutions. In fuel supply, we ensure continuous bulk delivery of high-calorific wood chips, rice husk, bio-briquettes, and premium imported and local coal engineered for maximum thermal efficiency. Grounded in transparency and long-term partnership, we carefully source all equipment and materials to meet global benchmarks while maintaining cost efficiency. By combining trusted international imports with local technical insight, we drive industrial reliability across textiles, pharmaceuticals, food, and sugar mills nation-wide. Integrity guides every audit and supply line, empowering our partners with the confidence, safety, and performance needed for uninterrupted growth.`;

export default function OurMission() {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const wrapper = containerRef.current;
          if (wrapper && !wrapper.classList.contains("visible")) {
            wrapper.classList.add("visible");
            const spans = wrapper.querySelectorAll(".mission-sentence");
            spans.forEach((el, i) => {
              el.style.setProperty("--delay", `${i * 250}ms`); // slower stagger: 250ms
              void el.offsetWidth;
              el.classList.add("enter");
            });
          }
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const sentences = MISSION_PARAGRAPH.trim()
    .split(/\. +/) // split on period + space
    .filter(Boolean)
    .map((s) => (s.endsWith(".") ? s : s + "."));

  return (
    <section id="mission" className="mission-section">
      <div className="wrapper">
        <div className="heading-row">
          <div className="title-mission">Our Mission</div>
        </div>
        <div className="paragraph" ref={containerRef}>
          {sentences.map((sentence, i) => (
            <span key={i} className="mission-sentence">
              {sentence + (i < sentences.length - 1 ? " " : "")}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
