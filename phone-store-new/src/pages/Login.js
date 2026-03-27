// src/pages/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api"; // Import file cấu hình axios của bạn

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError(""); // Xóa lỗi cũ nếu có

    // Gọi API Đăng nhập sang Laravel
    api.post("/auth/login", {
      username: username,
      password: password
    })
    .then((res) => {
      // Nếu thành công, lưu Token vào localStorage
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      localStorage.setItem("username", username);
      
      alert("Đăng nhập thành công! 🎉");
      navigate("/"); // Chuyển hướng về trang chủ
      window.location.reload(); // Reset lại web để nhận diện trạng thái đã đăng nhập
    })
    .catch((err) => {
      console.log(err);
      setError("Tài khoản hoặc mật khẩu không chính xác!");
    });
  };

  return (
    <div style={{ maxWidth: 400, margin: "50px auto", padding: 30, border: "1px solid #ddd", borderRadius: 8, boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
      <h2 style={{ textAlign: "center", marginBottom: 20 }}>Đăng nhập</h2>
      
      {error && <p style={{ color: "red", textAlign: "center", fontWeight: "bold" }}>{error}</p>}

      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: 15 }}>
        <div>
          <label style={{ fontWeight: "bold" }}>Tên đăng nhập:</label>
          <input 
            type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ width: "100%", padding: 10, marginTop: 5, boxSizing: "border-box", borderRadius: 4, border: "1px solid #ccc" }}
          />
        </div>

        <div>
          <label style={{ fontWeight: "bold" }}>Mật khẩu:</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", padding: 10, marginTop: 5, boxSizing: "border-box", borderRadius: 4, border: "1px solid #ccc" }}
          />
        </div>

        <button 
          type="submit" 
          style={{ padding: 12, background: "#0d6efd", color: "white", border: "none", borderRadius: 4, cursor: "pointer", fontWeight: "bold", fontSize: 16 }}
        >
          Đăng nhập
        </button>
      </form>
    </div>
  );
}

export default Login;