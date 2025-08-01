import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import CategoryFilter from "./components/CategoryFilter";
import { products, categories } from "./data/products";
import "./index.css";
import Banner from "./components/Banner";

function App() {
  const [selected, setSelected] = useState("");

  const filtered = selected
    ? products.filter((p) => p.category === selected)
    : products;

  return (
    <div>
      <Header />
      <Banner />

      <section id="products" className="main">
        <CategoryFilter categories={categories} onSelect={setSelected} />
        <div className="products">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <h3>Contact Us</h3>
        <p>Email: info@malikarshmantraders.com</p>
        <p>Phone: +92 123 4567890</p>
      </section>

      <Footer />
    </div>
  );
}

export default App;
