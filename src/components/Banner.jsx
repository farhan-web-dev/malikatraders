import { useState, useEffect, useRef } from "react";
import "../styles/Banner.css";

const slides = [
  {
    src: "/boiler-service-banner.png",
    alt: "Boiler Operation & Maintenance Services",
    title: "Boiler O&M Services",
    subtitle: "Safe, Certified & Uninterrupted Steam Solutions by Malik Arshman Traders",
  },
  {
    src: "/boiler-fuel-banner.png",
    alt: "Premium Industrial Boiler Fuel Supply",
    title: "Industrial Boiler Fuel Supply",
    subtitle: "Reliable, High-Efficiency Solid & Biomass Fuel Supply Across Pakistan",
  },
  {
    src: "/belt-banner.png",
    alt: "Belt banner",
    title: "Industrial Belts",
    subtitle: "Durable power transmission solutions",
  },
  {
    src: "/electrical.png",
    alt: "Electrical banner",
    title: "Electrical Supplies",
    subtitle: "Reliable components for every system",
  },
  {
    src: "/chemicals.png",
    alt: "Chemicals banner",
    title: "Chemical Products",
    subtitle: "Quality reagents for manufacturing",
  },
  {
    src: "/import.png",
    alt: "Import banner",
    title: "Imported Goods",
    subtitle: "Curated global products you can trust",
  },
  {
    src: "/printing.png",
    alt: "Printing banner",
    title: "Printing Solutions",
    subtitle: "Professional branding & print services",
  },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 5000;

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      delay
    );
    return () => resetTimeout();
  }, [current]);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);
  const goTo = (idx) => setCurrent(idx);

  return (
    <section className="carousel">
      <div
        className="slides"
        onMouseEnter={resetTimeout}
        onMouseLeave={() => {
          timeoutRef.current = setTimeout(
            () => setCurrent((prev) => (prev + 1) % slides.length),
            delay
          );
        }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`slide ${i === current ? "active" : ""}`}
            aria-hidden={i !== current}
          >
            <img src={slide.src} alt={slide.alt} loading="lazy" />
            <div className="overlay-text">
              <div className="text-inner">
                <h2>{slide.title}</h2>
                <p>{slide.subtitle}</p>
              </div>
            </div>
          </div>
        ))}

        <button
          className="arrow left"
          aria-label="Previous slide"
          onClick={prev}
        >
          ‹
        </button>
        <button className="arrow right" aria-label="Next slide" onClick={next}>
          ›
        </button>

        <div className="dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === current ? "active" : ""}`}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
