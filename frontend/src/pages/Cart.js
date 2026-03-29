import React, { useEffect, useState } from "react";
import api from "../api";

function Cart() {
  const [cartItems, setCartItems] = useState([
    // Fake data để test
    {
      cart_item_id: 21,
      name: "iPhone 14",
      color: "Black",
      storage: "128GB",
      price: "999.99",
      image_url: "images/products/iphone14_1.jpg",
      quantity: 2,
      total: "1999.98"
    }
  ]);
  const [loading, setLoading] = useState(false); // set false vì fake data đã sẵn

  // =========================
  // LẤY GIỎ HÀNG THẬT (API)
  // =========================
  const getCart = () => {
    setLoading(true);
    api.get("/cart")
      .then((res) => {
        if (res.data && res.data.length) {
          setCartItems(res.data);
        }
      })
      .catch((err) => {
        console.log("Lỗi lấy giỏ hàng:", err);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    // Comment dòng này nếu muốn dùng fake data test
    // getCart();
  }, []);

  // =========================
  // TĂNG / GIẢM SỐ LƯỢNG
  // =========================
  const updateQty = (id, newQty) => {
    setCartItems(prev =>
      prev.map(item =>
        item.cart_item_id === id ? { ...item, quantity: newQty } : item
      )
    );
    api.put("/cart/update", { cart_item_id: id, quantity: newQty })
      .catch(err => console.log("Lỗi update:", err));
  };

  const increaseQty = (id, qty) => updateQty(id, qty + 1);
  const decreaseQty = (id, qty) => {
    if (qty <= 1) return;
    updateQty(id, qty - 1);
  };

  // =========================
  // XOÁ SẢN PHẨM
  // =========================
  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.cart_item_id !== id));
    api.delete(`/cart/${id}`).catch(err => console.log("Lỗi xóa:", err));
  };

  // =========================
  // TỔNG TIỀN
  // =========================
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + Number(item.price) * Number(item.quantity),
    0
  );

  // =========================
  // CHECKOUT
  // =========================
  const checkout = () => {
    api.post("/cart/checkout")
      .then(() => {
        alert("Đặt hàng thành công 🎉");
        setCartItems([]); // reset giỏ hàng
      })
      .catch((err) => console.log("Lỗi checkout:", err));
  };

  // =========================
  // LOADING
  // =========================
  if (loading) {
    return <h2 style={{ padding: 40 }}>Đang tải giỏ hàng...</h2>;
  }

  return (
    <div style={{ padding: 40, background: "#f5f5f5", minHeight: "100vh" }}>
      <h1 style={{ marginBottom: 30 }}>Giỏ hàng của bạn</h1>

      {cartItems.length === 0 ? (
        <div style={{
          background: "#fff",
          padding: 30,
          borderRadius: 12,
          textAlign: "center"
        }}>
          Giỏ hàng đang trống
        </div>
      ) : (
        <div style={{ display: "flex", gap: 30, alignItems: "flex-start" }}>

          {/* DANH SÁCH SẢN PHẨM */}
          <div style={{ flex: 2 }}>
            {cartItems.map(item => (
              <div key={item.cart_item_id} style={{
                background: "#fff",
                borderRadius: 12,
                padding: 20,
                marginBottom: 20,
                display: "flex",
                gap: 20,
                alignItems: "center"
              }}>
                {/* ẢNH SẢN PHẨM */}
                <img
                  src={`http://localhost:8000/${item.image_url}`}
                  alt={item.name}
                  style={{
                    width: 110,
                    height: 110,
                    objectFit: "contain",
                    borderRadius: 10,
                    background: "#f9f9f9"
                  }}
                />

                {/* THÔNG TIN */}
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: 0 }}>{item.name}</h3>
                  <p style={{ margin: "5px 0", color: "#666" }}>
                    Màu: {item.color} | Dung lượng: {item.storage}
                  </p>
                  <p style={{ margin: "5px 0", color: "red", fontWeight: 600 }}>
                    {Number(item.price).toLocaleString()} đ
                  </p>

                  {/* QUANTITY */}
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginTop: 10
                  }}>
                    <button
                      onClick={() => decreaseQty(item.cart_item_id, item.quantity)}
                      disabled={item.quantity <= 1}
                      style={{
                        width: 35,
                        height: 35,
                        borderRadius: 8,
                        border: "1px solid #ccc",
                        cursor: item.quantity <= 1 ? "not-allowed" : "pointer",
                        background: item.quantity <= 1 ? "#eee" : "#fff"
                      }}
                    >
                      -
                    </button>

                    <span style={{ fontWeight: 600 }}>{item.quantity}</span>

                    <button
                      onClick={() => increaseQty(item.cart_item_id, item.quantity)}
                      style={{
                        width: 35,
                        height: 35,
                        borderRadius: 8,
                        border: "1px solid #ccc",
                        cursor: "pointer"
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* TỔNG TIỀN 1 SẢN PHẨM */}
                <div style={{ textAlign: "right" }}>
                  <p style={{
                    color: "red",
                    fontWeight: 700,
                    fontSize: 18,
                    margin: 0
                  }}>
                    {(Number(item.price) * Number(item.quantity)).toLocaleString()} đ
                  </p>

                  <button
                    onClick={() => removeItem(item.cart_item_id)}
                    style={{
                      marginTop: 10,
                      border: "none",
                      background: "transparent",
                      color: "red",
                      cursor: "pointer"
                    }}
                  >
                    Xoá
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* BOX TỔNG TIỀN */}
          <div style={{
            flex: 1,
            background: "#fff",
            padding: 25,
            borderRadius: 12,
            height: "fit-content"
          }}>
            <h3>Tóm tắt đơn hàng</h3>
            <hr />
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 10
            }}>
              <span>Tạm tính</span>
              <span>{totalPrice.toLocaleString()} đ</span>
            </div>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              fontWeight: 700,
              fontSize: 18
            }}>
              <span>Tổng tiền</span>
              <span style={{ color: "red" }}>{totalPrice.toLocaleString()} đ</span>
            </div>
            <button
              onClick={checkout}
              style={{
                marginTop: 20,
                width: "100%",
                padding: 15,
                background: "red",
                color: "#fff",
                border: "none",
                borderRadius: 10,
                fontSize: 16,
                cursor: "pointer"
              }}
            >
              Đặt hàng ngay
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;