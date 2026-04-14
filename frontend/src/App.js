import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import OrderDetail from "./pages/OrderDetail";
import ProductDetail from "./pages/ProductDetail";

import AdminLayout from "./pages/AdminLayout";
import AdminCategory from "./pages/AdminCategory";
import AdminProduct from "./pages/AdminProduct";


function App() {
  return (
    <Router>
      <Routes>

        {/* USER ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/:id" element={<OrderDetail />} />
        <Route path="/product/:id" element={<ProductDetail />} />

        {/* ADMIN ROUTES */}
       <Route path="/admin" element={<AdminLayout />}>
  <Route path="category" element={<AdminCategory />} />
  <Route path="product" element={<AdminProduct />} /> {/* 👈 THÊM */}
</Route>

      </Routes>
    </Router>
  );
}

export default App;