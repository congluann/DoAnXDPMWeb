import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [mainImage, setMainImage] = useState("");
  const [selectedVariant, setSelectedVariant] = useState(null);

  const [selectedRam, setSelectedRam] = useState("");
  const [selectedStorage, setSelectedStorage] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/product/${id}`)
      .then(res => {
        setProduct(res.data);
        setMainImage(`http://localhost:8000/${res.data.image_url}`);
      });
  }, [id]);

  // lấy danh sách RAM duy nhất
  const rams = [...new Set(product.variants?.map(v => v.ram))];

  // lấy storage theo RAM đã chọn
  const storages = product.variants
    ?.filter(v => v.ram === selectedRam)
    .map(v => v.storage);

  const uniqueStorages = [...new Set(storages)];

  // lấy color theo RAM + Storage
  const colors = product.variants
    ?.filter(v => v.ram === selectedRam && v.storage === selectedStorage)
    .map(v => v.color);

  const uniqueColors = [...new Set(colors)];

  // tìm variant đã chọn
  useEffect(() => {
    const variant = product.variants?.find(v =>
      v.ram === selectedRam &&
      v.storage === selectedStorage &&
      v.color === selectedColor
    );

    setSelectedVariant(variant);
  }, [selectedRam, selectedStorage, selectedColor, product]);

  const addToCart = () => {
    if (!selectedVariant) {
      alert("Vui lòng chọn phiên bản");
      return;
    }

    axios.post("http://localhost:8000/api/cart/add", {
      variant_id: selectedVariant.variant_id,
      quantity: 1
    }).then(() => {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000);
    });
  };

  return (
    <div style={{ padding: 40 }}>

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

        {/* LEFT - IMAGE */}
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

        {/* RIGHT - INFO */}
        <div style={{ width: "60%" }}>

          <h1>{product.name}</h1>

          {/* PRICE */}
          <h2 style={{ color: "red" }}>
            {selectedVariant
              ? selectedVariant.price.toLocaleString()
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
        setSelectedColor("");   // reset màu khi đổi dung lượng
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

{/* COLOR + PRICE */}
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

            {/* ẢNH NHỎ NẰM BÊN TRÁI */}
            <img
              src={`http://localhost:8000/${variant.image_url}`}
              style={{
                width: 60,
                height: 60,
                objectFit: "contain",
                borderRadius: 8
              }}
            />

            {/* TEXT BÊN PHẢI */}
            <div>
              <p style={{ margin: 0, fontWeight: 600 }}>
                {variant.color}
              </p>

              <p
                style={{
                  margin: "4px 0",
                  color: "red",
                  fontWeight: 600
                }}
              >
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

          {/* SPECIFICATIONS */}
<div style={{
  marginTop: 40,
  background: "#fff",
  padding: 20,
  borderRadius: 12,
  boxShadow: "0 2px 10px rgba(0,0,0,0.08)"
}}>
  <h2 style={{ marginBottom: 20 }}>Thông số kỹ thuật</h2>

  <table style={{
    width: "100%",
    borderCollapse: "collapse",
    fontSize: 15
  }}>
    <tbody>
      
      {product.specifications && product.specifications.length > 0 ? (
        product.specifications.map((spec, index) => (
          <tr
          
            key={index}
            style={{
              background: index % 2 === 0 ? "#f9f9f9" : "#fff"
            }}
          >
            <td style={{
              padding: 12,
              width: "30%",
              fontWeight: 500,
              color: "#333"
            }}>
              {spec.spec_name}
            </td>

            <td style={{
              padding: 12,
              color: "#555"
            }}>
              {spec.spec_value}
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td style={{ padding: 15 }}>Chưa có thông số kỹ thuật</td>
        </tr>
      )}
    </tbody>
  </table>
</div>

        </div>
      </div>
    </div>
  );
}

export default ProductDetail;