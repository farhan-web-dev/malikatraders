import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { products, categories } from "./data/products";
import "./index.css";
import Banner from "./components/Banner";
import ProductsSection from "./components/ProductSection";
import OurMission from "./components/OurMission";
import WhatsAppButton from "./components/Whatsapp";

function App() {
  const [selected, setSelected] = useState("Boiler Fuel Supply");

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
      <WhatsAppButton />
    </div>
  );
}

export default App;
