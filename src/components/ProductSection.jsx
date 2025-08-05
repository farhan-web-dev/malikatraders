import CategoryFilter from "./CategoryFilter";
import ProductCard from "./ProductCard";
import "../styles/ProductsSection.css";

export default function ProductsSection({
  categories,
  selected,
  onSelect,
  products,
}) {
  const filtered = selected
    ? products.filter((p) => p.category === selected)
    : products;

  return (
    <section className="main">
      <CategoryFilter categories={categories} onSelect={onSelect} />

      <div id="products" className="section-header">
        <div className="title">Our Products</div>
        {/* optional subtitle or action could go here */}
      </div>
      <div className="products">
        {filtered.map((p, i) => (
          <ProductCard key={p.id} product={p} index={i} />
        ))}
      </div>
    </section>
  );
}
