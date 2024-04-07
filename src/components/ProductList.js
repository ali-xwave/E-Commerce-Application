import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import for routing

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error fetching products: {error.message}</p>;
  }

  return (
    <div className="product-list">
      <h2 className="text-center">Products</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <div key={product.id} className="product-item">
            <Link to={`/products/${product.id}`} className="text-decoration-none">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="img-fluid px-2"
              />
              <h3>{product.title}</h3>
              <span>${product.price}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
