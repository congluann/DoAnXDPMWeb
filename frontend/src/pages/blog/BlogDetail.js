import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../api";

function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(`/blogs/${id}`);
      setBlog(res.data);
    };
    fetch();
  }, [id]);

  return (
    <div style={{ padding: 30 }}>
      <h1>{blog.title}</h1>

      <img
        src={`http://localhost:8000/storage/${blog.image}`}
        width="100%"
        alt=""
      />

      <p style={{ color: "#888" }}>
        By {blog.author} - {blog.category}
      </p>

      <p><b>{blog.description}</b></p>

      <div>
        {blog.content}
      </div>
    </div>
  );
}

export default BlogDetail;