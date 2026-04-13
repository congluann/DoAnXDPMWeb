  import React, { useEffect, useState } from "react";
  import api from "../api";
  import Popup from "../components/Popup";
import { Link } from "react-router-dom";
  function Home() {
    const [products, setProducts] = useState([]);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
      api.get("/products")
        .then((res) => setProducts(res.data))
        .catch((err) => console.log(err));
    }, []);

    const addToCart = (product_id) => {
      api.post("/cart/add", {
        product_id,
        quantity: 1
      })
      .then(() => setShowPopup(true))
      .catch((err) => console.log(err));
    };

   return (
  <div style={{ padding: 30 }}>
    <h1 style={{ textAlign: "center" }}>Product List</h1>

    {showPopup && (
      <Popup
        message="Thêm vào giỏ hàng thành công 🎉"
        onClose={() => setShowPopup(false)}
      />
    )}

    {/* <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {products.map((product) => (

        <div
          key={product.product_id}
          style={{
             width: "calc(25% - 30px)",
margin: "15px",
            border: "1px solid #ddd",
            borderRadius: 10,
            
            padding: 15,
            textAlign: "center",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
          }}
        > */}
          <div
  style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "flex-start",
  }}
>
  {products.map((product) => (
    <div
      key={product.product_id}
      style={{
        width: "22%",
        border: "1px solid #ddd",
        borderRadius: 10,
        padding: 15,
        textAlign: "center",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        boxSizing: "border-box",
      }}
    >

          {/* CLICK VÀO ẢNH + TÊN → sang trang chi tiết */}
          <Link
            to={`/product/${product.product_id}`}
            style={{ textDecoration: "none", color: "black" }}
          >

            <img
              src={`http://localhost:8000/${product.image_url}`}
              alt={product.name}
              style={{ width: "100%", height: 250, objectFit: "cover", cursor: "pointer" }}
            />

            <h3 style={{ marginTop: 10 }}>{product.name}</h3>

          </Link>

          {/* DESCRIPTION */}
          <p style={{ fontSize: 14, color: "#555" }}>
            {product.description}
          </p>

          {/* PRICE */}
          <p style={{ fontWeight: "bold", color: "red", fontSize: 18 }}>
            ${product.price}
          </p>

          {/* BUTTON (không chuyển trang) */}
          <button
            onClick={() => addToCart(product.product_id)}
            style={{
              padding: "10px 20px",
              background: "#0d6efd",
              color: "white",
              border: "none",
              borderRadius: 6,
              cursor: "pointer"
            }}
          >
            Add to Cart
          </button>

        </div>

      ))}
    </div>
  </div>
);
  }

  export default Home;