import React from "react";
import "./Header.css";
const Header = ({ query, setQuery, sortBy, setSortBy }) => {
  return (
    <header className="header">
      <h1>Products</h1>
      <div className="controls">
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="default">Sort</option>
          <option value="price-asc">Price — low to high</option>
          <option value="price-desc">Price — high to low</option>
          <option value="title-asc">Title — A to Z</option>
          <option value="title-desc">Title — Z to A</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
