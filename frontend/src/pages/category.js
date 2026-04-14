import { useEffect, useState } from "react";
import api from "../api";

function AdminCategory() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");

  // GET danh sách
  const fetchCategories = () => {
    api.get("/categories")
      .then(res => setCategories(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // ADD
  const handleAdd = () => {
    if (!name) return alert("Nhập tên category");

    api.post("/categories", { name })
      .then(() => {
        setName("");
        fetchCategories();
      })
      .catch(err => console.log(err));
  };

  // DELETE
  const handleDelete = (id) => {
    if (!window.confirm("Xóa category này?")) return;

    api.delete(`/categories/${id}`)
      .then(() => fetchCategories())
      .catch(err => console.log(err));
  };

  return (
    <div style={{ padding: 30 }}>
      <h1>📂 Category Management</h1>

      {/* ADD FORM */}
      <div style={{ marginBottom: 20 }}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Tên category"
          style={{ padding: 10, marginRight: 10 }}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      {/* TABLE */}
      <table border="1" cellPadding="10" width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {categories.map((c) => (
            <tr key={c.category_id}>
              <td>{c.category_id}</td>
              <td>{c.name}</td>
              <td>
                <button onClick={() => handleDelete(c.category_id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminCategory;