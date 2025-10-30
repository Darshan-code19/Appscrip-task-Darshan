import React from "react";
import "./ProductCard.css";
import Heart from "../assets/icons/heart.svg";
import RedHeart from "../assets/icons/redHeart.svg";

const ProductCard = ({ product, toggleWishlist }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-img" />

      <div className="product-info">
        <h4>{product.title}</h4>
        <p>{product.category}</p>
        <p className="product-price">₹{product.price}</p>
      </div>

      <div className="wishlist-section">
        <p>
          <a href="/">Sign in</a> or Create an account to see pricing
        </p>
        <img
          src={product.isLiked ? RedHeart : Heart}
          alt="wishlist"
          onClick={toggleWishlist}
          className="wishlist-icon"
        />
      </div>
    </div>
  );
};

export default ProductCard;
