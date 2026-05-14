import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import OrderDetail from "./pages/OrderDetail";
import ProductDetail from "./pages/ProductDetail";
import BlogList from "./pages/blog/BlogList";
import BlogDetail from "./pages/blog/BlogDetail";


import AdminLayout from "./pages/admin/AdminLayout";
import AdminCategory from "./pages/admin/category/AdminCategory";
import AdminProduct from "./pages/admin/product/AdminProduct";
import AdminBlog from "./pages/admin/blog";
import AdminAbout from "./pages/admin/about";




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

    {/* BLOG USER */}
    <Route path="/blogs" element={<BlogList />} />
    <Route path="/blogs/:id" element={<BlogDetail />} />

    {/* ADMIN */}
    <Route path="/admin" element={<AdminLayout />}>
      <Route path="category" element={<AdminCategory />} />
      <Route path="product" element={<AdminProduct />} />
        <Route path="blog" element={<AdminBlog />} />
          <Route path="about" element={<AdminAbout />} />

        

    </Route>

  </Routes>
</Router>
  );
}

export default App;