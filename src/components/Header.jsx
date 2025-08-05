import "../styles/Header.css";

const NAV_ITEMS = [
  { label: "Mission", href: "#mission" },
  { label: "Categories", href: "#categories" },
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#footer" },
];

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
        <nav className="main-nav">
          <ul>
            {NAV_ITEMS.map((item, i) => (
              <li key={item.href} style={{ "--delay": `${i * 120}ms` }}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
