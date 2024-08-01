import React from "react";
import AddProduct from "./AddProduct";
import ProductList from "./ProductList";

const AdminPanel = () => (
  <div className="admin-panel">
    <h1>Admin Panel</h1>
    <AddProduct />
    <ProductList />
  </div>
);

export default AdminPanel;
