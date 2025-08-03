import "../styles/Header.css";

export default function Header() {
  return (
    <header className="site-header">
      <div className="inner">
        <div className="brand">
          <img src="/logo.png" alt="Malik Arshman Traders" className="logo" />
          <div className="title-wrap">
            <h1 className="animated-title">Malik Arshman Traders</h1>
            <span className="subtitle">
              Your Trusted Industrial & Surgical Supplier
            </span>
          </div>
        </div>
        <div className="cta">
          <a href="#footer" className="contact-btn">
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
}
