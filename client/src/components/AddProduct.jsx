import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = ({ onAdd }) => {
  const showToastMessage = () => {
    toast.success("After Clicking the product Referesh the page !", {
      // position: toast.POSITION.TOP_RIGHT,
    });
  };

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    stockQuantity: "",
    category: "",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("https://simple-management-system-b9g5u6e83.vercel.app/api/products", product);
    onAdd(res.data);
    setProduct({
      name: "",
      description: "",
      price: "",
      stockQuantity: "",
      category: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={product.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={product.description}
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={product.price}
        onChange={handleChange}
      />
      <input
        type="number"
        name="stockQuantity"
        placeholder="Stock Quantity"
        value={product.stockQuantity}
        onChange={handleChange}
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={product.category}
        onChange={handleChange}
      />
      <button
        className="btn btn-success"
        onClick={showToastMessage}
        type="submit"
      >
        Add Product
      </button>
      <ToastContainer />
    </form>
  );
};

export default AddProduct;
