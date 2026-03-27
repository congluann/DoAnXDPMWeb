// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import OrderDetail from "./pages/OrderDetail";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login"; // <-- Dòng này để gọi file Login.js vào

function App() {
  return (
    <Router>
      <div style={{ padding: "0 20px" }}>
        {/* Thanh điều hướng (Header) */}
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid #ccc" }}>
          <h2 style={{ margin: 0 }}>
             <Link to="/" style={{ color: "blue", textDecoration: "none" }}>Phone Store</Link>
          </h2>
          <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
            <Link to="/cart">🛒 Giỏ hàng</Link>
            <Link to="/orders">📦 Đơn hàng của tôi</Link>
            <Link to="/login">
                <button style={{ padding: "5px 10px", cursor: "pointer" }}>Đăng nhập</button>
            </Link>
          </div>
        </header>

        {/* Cấu hình các đường dẫn */}
        <div style={{ marginTop: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/orders/:id" element={<OrderDetail />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            
            {/* Dòng quan trọng nhất để sửa lỗi trắng trang đây: */}
            <Route path="/login" element={<Login />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;