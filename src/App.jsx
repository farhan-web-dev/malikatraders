import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import CategoryFilter from "./components/CategoryFilter";
import { products, categories } from "./data/products";
import "./index.css";
import Banner from "./components/Banner";
import ProductsSection from "./components/ProductSection";
import OurMission from "./components/OurMission";

function App() {
  const [selected, setSelected] = useState("Bearing");

  return (
    <div>
      <Header />
      <Banner />
      <OurMission />

      <ProductsSection
        categories={categories}
        selected={selected}
        onSelect={setSelected}
        products={products}
      />

      <Footer />
    </div>
  );
}

export default App;
