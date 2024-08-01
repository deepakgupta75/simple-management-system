import React from "react";

const ProductCard = ({ product, onRemove }) => (
  <div className="product-card">
    <h3>{product.name}</h3>
    <p>{product.description}</p>
    <p>Price: ${product.price}</p>
    <p>Stock: {product.stockQuantity}</p>
    <p>Category: {product.category}</p>
    <button onClick={() => onRemove(product._id)}>Remove</button>
  </div>
);

export default ProductCard;
