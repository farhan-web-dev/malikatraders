import "../styles/Header.css";

export default function Header() {
  return (
    <header className="site-header">
      <div className="inner">
        <div className="brand">
          <img src="/logo.png" alt="Malik Arshman Traders" className="logo" />
          <h1 className="animated-title">
            Malik Arshman Traders
            <span className="subtitle">
              Your Trusted Industrial & Surgical Supplier
            </span>
          </h1>
        </div>
        <div className="cta">
          <a href="#contact" className="contact-btn">
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
}
