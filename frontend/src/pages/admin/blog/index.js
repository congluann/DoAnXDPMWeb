import { useEffect, useState } from "react";
import { getBlogs, deleteBlog } from "../../../api/blogApi";
import BlogForm from "./BlogForm";

function BlogAdmin() {
  const [blogs, setBlogs] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);

  const fetchBlogs = async () => {
    const res = await getBlogs();
    setBlogs(res.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Xóa bài viết?")) {
      await deleteBlog(id);
      fetchBlogs();
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Blog Management</h2>

      <button onClick={() => {
        setEditing(null);
        setShowForm(true);
      }}>
        + Add Blog
      </button>

      <table border="1" cellPadding="10" style={{ width: "100%", marginTop: 20 }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {blogs.map(b => (
            <tr key={b.id}>
              <td>{b.id}</td>

              <td>
                <img
                  src={`http://localhost:8000/storage/${b.image}`}
                  width="80"
                  alt=""
                />
              </td>

              <td>{b.title}</td>

              <td>
                <button onClick={() => {
                  setEditing(b);
                  setShowForm(true);
                }}>
                  Edit
                </button>

                <button onClick={() => handleDelete(b.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForm && (
        <BlogForm
          blog={editing}
          onClose={() => setShowForm(false)}
          onSuccess={fetchBlogs}
        />
      )}
    </div>
  );
}

export default BlogAdmin;