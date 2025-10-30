import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/react.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <p>Free shipping on orders over $50 • 30-day return policy</p>
      </div>
      <div className="navbar-main">
        <div className="navbar-left">
          <button 
            className="hamburger" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <i className={menuOpen ? "fa fa-times" : "fa fa-bars"}></i>
          </button>
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>Shop</li>
          <li>Skills</li>
          <li>Stories</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>

        <div className="nav-icons">
          <i className="fa fa-search"></i>
          <i className="fa fa-heart"></i>
          <i className="fa fa-shopping-bag"></i>
          <i className="fa fa-user"></i>
          <select className="language-selector">
            <option>ENG</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
