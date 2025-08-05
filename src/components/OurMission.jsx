import { useEffect, useRef } from "react";
import "../styles/OurMission.css";

const MISSION_PARAGRAPH = `Malik Arshman Traders exists to deliver industrial and surgical supplies of unquestionable quality, grounded in transparency and long-term partnership. We carefully source products that meet global benchmarks while keeping value accessible to our clients. By blending trusted international imports with local insight, we empower businesses with solutions that drive efficiency and confidence. Our customer experience is proactive and personalized—built to listen, advise, and respond. Logistics are refined continuously so orders arrive reliably and on time. Integrity guides every decision, and ethical sourcing underscores our commitment to sustainability. We equip clients with knowledge, helping them make informed choices that protect their operations and reputation. Our team is fueled by ownership, excellence, and a shared vision of growth that never sacrifices consistency. As we expand our reach, we remain rooted in quality, becoming the dependable bridge between global supply and regional industry.`;

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
