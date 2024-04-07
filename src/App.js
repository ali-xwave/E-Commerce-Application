import React from "react";
import "./App.css";
import "../src/assets/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Title from "./components/Title";
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Title />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
