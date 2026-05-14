import React, { useEffect, useState } from "react";
import api from "../api";
import Popup from "../components/Popup";
import { Link } from "react-router-dom";

// FIX PATH
import Navbar from "../components/navbar";
import Header from "../components/header";
import Footer from "../components/footer";

function Home() {
  const [products, setProducts] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  
//   const sortedProducts = [...products].sort((a, b) => {
//   return Number(a.price) - Number(b.price);
// });
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
    <>
      {/* ADD LAYOUT */}
      <Navbar />
      <Header />

      <div style={{ padding: 50 }}>
        <h1 style={{ textAlign: "center" }}>Product List</h1>

        {showPopup && (
          <Popup
            message="Thêm vào giỏ hàng thành công 🎉"
            onClose={() => setShowPopup(false)}
          />
        )}

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
                width: "23%",
                border: "1px solid #ddd",
                borderRadius: 10,
                padding: 15,
                textAlign: "center",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                boxSizing: "border-box",
              }}
            >
              <Link
                to={`/product/${product.product_id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <img
                  src={`http://localhost:8000/${product.image_url}`}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: 300,
                    objectFit: "cover"
                  }}
                />
                <h3 style={{ marginTop: 10 }}>{product.name}</h3>
              </Link>

              <p style={{ fontSize: 14, color: "#555" }}>
                {product.description}
              </p>

              <p style={{ fontWeight: "bold", color: "red", fontSize: 18 }}>
                ${product.price}
              </p>

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

      <Footer />
    </>
  );
}

export default Home;