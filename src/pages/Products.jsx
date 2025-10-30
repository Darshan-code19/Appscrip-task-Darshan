import React, { useState, useMemo } from "react";
import data from "../data/products";
import HeroBanner from "../components/HeroBanner";
import Filters from "../components/Filters";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import "./Products.css";

const Products = () => {
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [activeCategories, setActiveCategories] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 9;

  const categories = useMemo(
    () => Array.from(new Set(data.map((p) => p.category))),
    []
  );

  const filtered = useMemo(() => {
    let list = data.slice();

    if (query) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    if (activeCategories.length > 0) {
      list = list.filter((p) => activeCategories.includes(p.category));
    }

    if (sortBy === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sortBy === "title-asc") list.sort((a, b) => a.title.localeCompare(b.title));
    if (sortBy === "title-desc") list.sort((a, b) => b.title.localeCompare(a.title));

    return list;
  }, [query, sortBy, activeCategories]);

  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  const toggleCategory = (cat) => {
    setActiveCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  return (
    <main className="plp-page">
      <HeroBanner />

      <div className="products-header">
        <p>3425 ITEMS</p>
        <div className="sort-bar">
          <input
            type="text"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="default">RECOMMENDED</option>
            <option value="price-asc">Price — Low to High</option>
            <option value="price-desc">Price — High to Low</option>
            <option value="title-asc">Title — A to Z</option>
            <option value="title-desc">Title — Z to A</option>
          </select>
        </div>
      </div>

      <div className="plp-content">
        <Filters
          categories={categories}
          activeCategories={activeCategories}
          onToggle={toggleCategory}
        />
        <section className="plp-grid">
          {paginated.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </section>
      </div>

      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </main>
  );
};

export default Products;
