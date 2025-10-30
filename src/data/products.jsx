import React, { useEffect, useState } from "react";
import Filters from "../components/Filters"
import ProductCard from "../components/ProductCard";
import "./Products.css";

const Products = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const updated = data.map((item) => ({ ...item, isLiked: false }));
        setItems(updated);
      });
  }, []);

  const toggleWishlist = (index) => {
    const newItems = [...items];
    newItems[index].isLiked = !newItems[index].isLiked;
    setItems(newItems);
  };

  return (
    <div className="products-page">
      <div className="filters-section">
        <Filters />
      </div>

      <div className="products-content">
        <h2>DISCOVER OUR PRODUCTS</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Integer scelerisque nibh nunc
          et elementum dolor.
        </p>

        <div className="product-grid">
          {items.map((item, index) => (
            <ProductCard
              key={index}
              product={item}
              toggleWishlist={() => toggleWishlist(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
