import { useEffect, useState } from "react";
import api from "../../../api";

function AdminProduct() {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    api.get("/products")
      .then(res => {
        console.log("PRODUCT:", res.data);

        const data = res.data.data || res.data;
        setProducts(data);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div style={{ padding: 30 }}>
      <h1> Product Management</h1>

      <table border="1" width="100%" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {products.length > 0 ? (
            products.map((p) => (
              <tr key={p.product_id || p.id}>
                <td>{p.product_id || p.id}</td>
                <td>{p.name}</td>
                <td>
                  <img
  src={`http://localhost:8000/${p.image_url}`}
  alt={p.name}   // 👈 FIX
  width="60"
/>
                </td>
                <td>${p.price}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" align="center">
                Không có dữ liệu
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AdminProduct;