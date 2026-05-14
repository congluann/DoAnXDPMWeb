import { useState, useEffect } from "react";
import { createBlog, updateBlog } from "../../../api/blogApi";

function BlogForm({ blog, onClose, onSuccess }) {
  const [form, setForm] = useState({
    title: "",
    content: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (blog) {
      setForm({
        title: blog.title,
        content: blog.content,
        image: null,
      });

      setPreview(`http://localhost:8000/storage/${blog.image}`);
    }
  }, [blog]);

  const handleChange = (e) => {
    if (e.target.name === "image") {
      const file = e.target.files[0];
      setForm({ ...form, image: file });

      if (file) {
        setPreview(URL.createObjectURL(file));
      }
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async () => {
    const data = new FormData();

    Object.keys(form).forEach(key => {
      if (form[key]) data.append(key, form[key]);
    });

    if (blog) {
      await updateBlog(blog.id, data);
    } else {
      await createBlog(data);
    }

    onSuccess();
    onClose();
  };

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.5)"
    }}>
      <div style={{
        width: 500,
        background: "#fff",
        margin: "80px auto",
        padding: 20
      }}>
        <h3>{blog ? "Edit" : "Add"} Blog</h3>

        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
        />

        <textarea
          name="content"
          placeholder="Content"
          value={form.content}
          onChange={handleChange}
          rows={5}
        />

        <input
          type="file"
          name="image"
          onChange={handleChange}
        />

        {preview && (
          <img src={preview} width="100%" alt="" />
        )}

        <br />

        <button onClick={handleSubmit}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default BlogForm;