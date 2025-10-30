import React from "react";
import Navbar from "./components/Navbar";
import Products from "./data/products";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Products />
      <Footer />
    </>
  );
};

export default App;
