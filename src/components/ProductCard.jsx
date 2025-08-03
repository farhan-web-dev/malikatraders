import { useRef, useEffect, useState } from "react";
import "../styles/ProductCard.css";

export default function ProductCard({ product, index = 0 }) {
  const [visible, setVisible] = useState(false);
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
        <button className="btn">View Details</button>
      </div>
    </div>
  );
}
