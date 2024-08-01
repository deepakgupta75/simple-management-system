import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("https://simple-management-system-b9g5u6e83.vercel.app/api/products");
      setProducts(res.data);
    };

    fetchProducts();
  }, []);

  const handleRemove = async (id) => {
    await axios.delete(`https://simple-management-system-b9g5u6e83.vercel.app/api/products/${id}`);
    setProducts(products.filter((product) => product._id !== id));
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
          onRemove={handleRemove}
        />
      ))}
    </div>
  );
};

export default ProductList;
