function Footer() {
  return (
    <div style={{
      marginTop: 50,
      background: "#4a7fce",
      color: "white",
      padding: "40px 20px"
    }}>
      
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        maxWidth: 1200,
        margin: "0 auto"
      }}>

        {/* SHOP INFO */}
        <div style={{ width: "25%", minWidth: 200 }}>
          <h3>📱 HP Shop</h3>
          <p>Chuyên bán điện thoại chính hãng, giá tốt.</p>
          <p>📍 Địa chỉ: HUẾ </p>
          <p>📞 Hotline: 0798617250</p>
          <p>✉️ Email: phucdanghaihoang@gmail.com</p>
        </div>

        {/* DANH MỤC */}
        <div style={{ width: "20%", minWidth: 150 }}>
          <h4>Danh mục</h4>
          <p>iPhone</p>
          <p>Samsung</p>
          <p>Xiaomi</p>
          <p>Oppo</p>
        </div>

        {/* HỖ TRỢ */}
        <div style={{ width: "20%", minWidth: 150 }}>
          <h4>Hỗ trợ</h4>
          <p>Chính sách bảo hành</p>
          <p>Đổi trả</p>
          <p>Giao hàng</p>
          <p>Thanh toán</p>
        </div>

        {/* KẾT NỐI */}
        <div style={{ width: "20%", minWidth: 150 }}>
          <h4>Kết nối</h4>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>TikTok</p>
          <p>YouTube</p>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div style={{
        textAlign: "center",
        marginTop: 10,
        borderTop: "1px solid rgba(255,255,255,0.3)",
        
      }}>
        <p>© 2026 MyShop. All rights reserved.</p>
      </div>

    </div>
  );
}

export default Footer;