import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [mainImage, setMainImage] = useState("");
  const [selectedStorage, setSelectedStorage] = useState("");
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  // =============================
  // LOAD PRODUCT
  // =============================
  useEffect(() => {
    axios.get(`http://localhost:8000/api/product/${id}`)
      .then(res => {
        setProduct(res.data);
        setMainImage(`http://localhost:8000/${res.data.image_url}`);
      });
  }, [id]);

  // =============================
  // ADD TO CART
  // =============================
  const addToCart = () => {

    if (!selectedVariant) {
      alert("Vui lòng chọn dung lượng và màu");
      return;
    }

    axios.post("http://localhost:8000/api/cart/add", {
      variant_id: selectedVariant.variant_id,
      quantity: 1
    })
    .then(() => {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000);
    })
    .catch(err => console.log(err));
  };

  return (
    <div style={{ padding: 40 }}>

      {/* POPUP */}
      {showPopup && (
        <div style={{
          position: "fixed",
          top: 20,
          right: 20,
          background: "green",
          color: "white",
          padding: 15,
          borderRadius: 10
        }}>
          Thêm vào giỏ hàng thành công 🎉
        </div>
      )}

      <div style={{ display: "flex", gap: 40 }}>

        {/* LEFT IMAGE */}
        <div style={{ width: "40%" }}>
          <img
            src={mainImage}
            style={{ width: "100%", borderRadius: 10 }}
          />

          <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
            {product.images?.map((img, index) => (
              <img
                key={index}
                src={`http://localhost:8000/${img.image_url}`}
                style={{
                  width: 80,
                  cursor: "pointer",
                  borderRadius: 8,
                  border: "1px solid #ddd"
                }}
                onClick={() =>
                  setMainImage(`http://localhost:8000/${img.image_url}`)
                }
              />
            ))}
          </div>
        </div>

        {/* RIGHT INFO */}
        <div style={{ width: "60%" }}>

          <h1>{product.name}</h1>

          {/* PRICE */}
          <h2 style={{ color: "red" }}>
            {selectedVariant
              ? selectedVariant.price.toLocaleString() + " đ"
              : "Vui lòng chọn phiên bản"}
          </h2>

          {/* STORAGE */}
          <h3>Chọn dung lượng</h3>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {[...new Set(product.variants?.map(v => v.storage))].map((storage, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedStorage(storage);
                  setSelectedVariant(null); // reset variant khi đổi dung lượng
                }}
                style={{
                  padding: "12px 22px",
                  border: selectedStorage === storage ? "2px solid red" : "1px solid #ccc",
                  borderRadius: 10,
                  cursor: "pointer",
                  fontWeight: 500,
                  background: selectedStorage === storage ? "#fff5f5" : "#fff"
                }}
              >
                {storage}
              </div>
            ))}
          </div>

          {/* COLOR */}
          {selectedStorage && (
            <>
              <h3 style={{ marginTop: 25 }}>Chọn màu</h3>

              <div style={{ display: "flex", gap: 15, flexWrap: "wrap" }}>
                {product.variants
                  ?.filter(v => v.storage === selectedStorage)
                  .map((variant, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        setSelectedVariant(variant);
                        setMainImage(`http://localhost:8000/${variant.image_url}`);
                      }}
                      style={{
                        width: 240,
                        padding: 12,
                        border:
                          selectedVariant?.variant_id === variant.variant_id
                            ? "2px solid red"
                            : "1px solid #ddd",
                        borderRadius: 14,
                        cursor: "pointer",
                        background:
                          selectedVariant?.variant_id === variant.variant_id
                            ? "#fff5f5"
                            : "#fff",
                        display: "flex",
                        alignItems: "center",
                        gap: 12
                      }}
                    >

                      <img
                        src={`http://localhost:8000/${variant.image_url}`}
                        style={{
                          width: 60,
                          height: 60,
                          objectFit: "contain",
                          borderRadius: 8
                        }}
                      />

                      <div>
                        <p style={{ margin: 0, fontWeight: 600 }}>
                          {variant.color}
                        </p>

                        <p style={{ margin: "4px 0", color: "red", fontWeight: 600 }}>
                          {variant.price.toLocaleString()} đ
                        </p>

                        <p style={{ margin: 0, fontSize: 13, color: "#666" }}>
                          Còn {variant.stock} sản phẩm
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </>
          )}

          {/* STOCK */}
          {selectedVariant && (
            <p style={{ marginTop: 20 }}>
              Còn lại: <b>{selectedVariant.stock}</b> sản phẩm
            </p>
          )}

          {/* BUTTON */}
          <button
            onClick={addToCart}
            style={{
              marginTop: 20,
              padding: "15px 30px",
              background: "red",
              color: "white",
              border: "none",
              borderRadius: 10,
              fontSize: 18,
              cursor: "pointer"
            }}
          >
            Thêm vào giỏ hàng
          </button>

          {/* DESCRIPTION */}
          <h3 style={{ marginTop: 40 }}>Mô tả sản phẩm</h3>
          <p>{product.description}</p>

        </div>
      </div>
    </div>
  );
}

export default ProductDetail;