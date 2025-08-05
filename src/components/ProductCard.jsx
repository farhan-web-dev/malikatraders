import { useRef, useEffect, useState } from "react";
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

  return (
    <div
      ref={ref}
      className={`product-card ${visible ? "visible" : ""}`}
      style={{ "--delay": `${index * 100}ms` }}
    >
      <div className="image-wrap">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <div className="info">
        <h4>{product.name}</h4>
        {product.price && (
          <div className="price">
            {typeof product.price === "number"
              ? `₹${product.price}`
              : product.price}
          </div>
        )}

        <div className={`detail ${showDetails ? "open" : ""}`}>
          <p>{product.description}</p>
        </div>

        <button className="btn" onClick={toggleDetails}>
          {showDetails ? "Hide Details" : "View Details"}
        </button>
      </div>
    </div>
  );
}
