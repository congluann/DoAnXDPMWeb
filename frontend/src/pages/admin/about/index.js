import { useEffect, useState } from "react";
import axios from "../../../api";

function AdminAbout() {
  const [about, setAbout] = useState({
    title: "",
    content: "",
    image: null,
  });

  const [id, setId] = useState(null);

  // GET ABOUT
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get("/about");

        if (res.data) {
          setAbout({
            title: res.data.title || "",
            content: res.data.content || "",
            image: null,
          });

          setId(res.data.id);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetch();
  }, []);

  // HANDLE CHANGE
  const handleChange = (e) => {
    setAbout({
      ...about,
      [e.target.name]: e.target.value,
    });
  };

  // FILE CHANGE
  const handleFile = (e) => {
    setAbout({
      ...about,
      image: e.target.files[0],
    });
  };

  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", about.title);
    formData.append("content", about.content);

    if (about.image) {
      formData.append("image", about.image);
    }

    try {
      if (id) {
        await axios.post(`/about/${id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await axios.post("/about", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      alert("Save About success!");
    } catch (err) {
      console.log(err);
      alert("Error!");
    }
  };

  return (
    <div style={{ padding: 30 }}>
      <h2>Admin About</h2>

      <form onSubmit={handleSubmit} style={{ maxWidth: 600 }}>

        {/* TITLE */}
        <div style={{ marginBottom: 10 }}>
          <label>Title</label>
          <input
            name="title"
            value={about.title}
            onChange={handleChange}
            style={{ width: "100%", padding: 10 }}
          />
        </div>

        {/* CONTENT */}
        <div style={{ marginBottom: 10 }}>
          <label>Content</label>
          <textarea
            name="content"
            value={about.content}
            onChange={handleChange}
            style={{ width: "100%", padding: 10, height: 150 }}
          />
        </div>

        {/* IMAGE */}
        <div style={{ marginBottom: 10 }}>
          <label>Image</label>
          <input type="file" onChange={handleFile} />
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            background: "black",
            color: "white",
          }}
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default AdminAbout;