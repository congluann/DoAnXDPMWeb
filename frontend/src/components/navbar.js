import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "15px 40px",
        background: "#0d6efd",
        color: "white",
        position: "relative"
      }}
    >
      {/* LOGO */}
      <h2 style={{ margin: 0 }}>HP Shop</h2>

      {/* MENU CENTER */}
      <div
        style={{
          display: "flex",
          gap: "50px",
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)"
        }}
      >
        <NavLink to="/" style={linkStyle}>HOME</NavLink>
        <NavLink to="/blog" style={linkStyle}>BLOG</NavLink>
        <NavLink to="/about" style={linkStyle}>ABOUT</NavLink>
        <NavLink to="/contact" style={linkStyle}>CONTACT</NavLink>
        <NavLink to="/cart" style={linkStyle}>CART</NavLink>
        <NavLink to="/login" style={linkStyle}>LOGIN</NavLink>
      </div>

      {/* RIGHT */}
      <div style={{ width: 100 }}></div>
    </div>
  );
}

const linkStyle = ({ isActive }) => ({
  color: isActive ? "#ffd700" : "white",
  textDecoration: "none",
  fontSize: "16px",        // 👈 chữ to
  fontWeight: "600",       // 👈 đậm
  letterSpacing: "1px",    // 👈 giãn chữ
  transition: "0.3s"
});

export default Navbar;