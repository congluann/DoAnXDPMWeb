import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Redirect to the search results page with the search query
      navigate(`/search?q=${searchQuery}`);
    }
  };

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "15px 20px",
        background: "#0d6efd",
        color: "white",
        position: "relative",
        flexWrap: "wrap",
      }}
    >
      {/* LOGO */}
      <h2 style={{ margin: 0, fontSize: "1.5rem", flexGrow: 1 }}>HP Shop</h2>

      {/* MENU CENTER */}
      <div
        style={{
          display: "flex",
          gap: "30px",
          flexGrow: 2, // This ensures the menu items take the remaining space
          justifyContent: "center",
        }}
      >
        <NavLink to="/" style={linkStyle}>HOME</NavLink>
        <NavLink to="/blogs" style={linkStyle}>BLOG</NavLink>
        <NavLink to="/about" style={linkStyle}>ABOUT</NavLink>
        <NavLink to="/contact" style={linkStyle}>CONTACT</NavLink>
        <NavLink to="/cart" style={linkStyle}>CART</NavLink>
      </div>

      {/* SEARCH BAR */}
      <form
        onSubmit={handleSearch}
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: "30px",
          padding: "5px 15px",
          width: "auto",
          position: "relative",
          flexShrink: 0, // Prevent search bar from shrinking
        }}
      >
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={(e) => e.target.style.width = "250px"} // Expand on focus
          onBlur={(e) => e.target.style.width = "200px"} // Shrink on blur
          style={{
            border: "none",
            outline: "none",
            fontSize: "14px",
            padding: "8px 12px",
            borderRadius: "20px",
            width: "200px",
            transition: "width 0.3s",
            marginRight: "10px",
          }}
        />
        {searchQuery && (
          <button
            type="button"
            onClick={handleClearSearch}
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "#0d6efd",
              fontSize: "16px",
              cursor: "pointer",
              padding: "5px",
              fontWeight: "bold",
            }}
          >
            X
          </button>
        )}
        <button
          type="submit"
          style={{
            backgroundColor: "#ffd700",
            border: "none",
            padding: "8px 16px",
            borderRadius: "20px",
            cursor: "pointer",
            color: "#0d6efd",
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          Search
        </button>
      </form>
  <div
        style={{
          display: "flex",
          gap: "30px",
          flexGrow: 2, // This ensures the menu items take the remaining space
          justifyContent: "center",
        }}
      >
      {/* LOGIN LINK */}
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
  fontSize: "16px",
  fontWeight: "600",
  letterSpacing: "1px",
  transition: "0.3s",
});

export default Navbar;