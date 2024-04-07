import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/${productId}`
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [productId]);

  if (loading) {
    return <p>Loading product details...</p>;
  }

  if (error) {
    return <p>Error fetching product details: {error.message}</p>;
  }

  return (
    <div className="text-center">
      <h2>{product.title}</h2>
      <img src={product.images[0]} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {product.discountPercentage && (
        <p>Discount: {product.discountPercentage}%</p>
      )}
      <p>Rating: {product.rating}</p>
      <p>Brand: {product.brand}</p>
      <p>Category: {product.category}</p>
    </div>
  );
};

export default ProductDetails;
