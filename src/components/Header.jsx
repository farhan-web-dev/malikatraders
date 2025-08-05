import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Header.css";

const NAV_ITEMS = [
  { label: "Mission", href: "#mission" },
  { label: "Categories", href: "#categories" },
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#footer" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="inner">
        {/* Logo and Title */}
        <div className="brand">
          <img src="/logo.png" alt="Malik Arshman Traders" className="logo" />
          <div className="title-wrap">
            <h1 className="animated-title">Malik Arshman Traders</h1>
            <span className="subtitle">
              Your Trusted Industrial & Surgical Supplier
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className={`main-nav ${menuOpen ? "open" : ""}`}>
          <ul>
            {NAV_ITEMS.map((item, i) => (
              <li key={item.href} style={{ "--delay": `${i * 120}ms` }}>
                <a href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger Icon (Always on Right) */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}
