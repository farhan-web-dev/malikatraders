import { useRef, useEffect, useState } from "react";
import { FaWhatsapp, FaCheckCircle, FaIndustry, FaClipboardList } from "react-icons/fa";
import "../styles/ProductCard.css";

export default function ProductCard({ product, index = 0 }) {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const toggleDetails = () => setShowDetails((v) => !v);

  const whatsappMessage = encodeURIComponent(
    `Hi Malik Arshman Traders, I am interested in: ${product.name}. Please provide a quote and details.`
  );

  return (
    <div
      ref={ref}
      className={`product-card ${visible ? "visible" : ""} ${
        product.isService ? "service-card" : ""
      }`}
      style={{ "--delay": `${index * 80}ms` }}
    >
      <div className="image-wrap">
        <span className="category-badge">{product.category}</span>
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <div className="info">
        <h4>{product.name}</h4>
        {product.subtitle && <p className="card-subtitle">{product.subtitle}</p>}
        {product.price && (
          <div className="price">
            {typeof product.price === "number"
              ? `Rs. ${product.price}`
              : product.price}
          </div>
        )}

        <div className={`detail ${showDetails ? "open" : ""}`}>
          <p className="main-desc">{product.description}</p>

          {(product.whyOutsource || product.whyChooseUs) && (
            <div className="detail-section">
              <h5>
                <FaCheckCircle className="section-icon" /> Why Choose Us?
              </h5>
              <ul>
                {(product.whyOutsource || product.whyChooseUs).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {product.scopeOfServices && (
            <div className="detail-section">
              <h5>
                <FaClipboardList className="section-icon" /> Scope of Services
              </h5>
              <ol>
                {product.scopeOfServices.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ol>
            </div>
          )}

          {product.industriesServed && (
            <div className="detail-section">
              <h5>
                <FaIndustry className="section-icon" /> Industries We Serve
              </h5>
              <div className="industry-tags">
                {product.industriesServed.map((ind, idx) => (
                  <span key={idx} className="ind-tag">
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          )}

          {product.contactInfo && (
            <div className="detail-section contact-subinfo">
              <p>
                <strong>Karachi:</strong> {product.contactInfo.karachi}
              </p>
              <p>
                <strong>Rawalpindi:</strong> {product.contactInfo.rawalpindi}
              </p>
              <p>
                <strong>Email:</strong> {product.contactInfo.email}
              </p>
            </div>
          )}

          <a
            href={`https://wa.me/923215221993?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-quote-btn"
          >
            <FaWhatsapp /> Get Free Quote / WhatsApp
          </a>
        </div>

        <div className="card-actions">
          <button className="btn" onClick={toggleDetails}>
            {showDetails ? "Hide Details" : "View Details & Quote"}
          </button>
        </div>
      </div>
    </div>
  );
}
