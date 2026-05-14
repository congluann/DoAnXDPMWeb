import { useEffect, useState } from "react";
import axios from "../../api"; // ✅ FIX
import { Link } from "react-router-dom";

import Navbar from "../../components/navbar";
import Header from "../../components/header";
import Footer from "../../components/footer";

function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get("/blogs");
        console.log(res.data); // DEBUG
        setBlogs(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);

  return (
    <>
      <Navbar />
      <Header />

      <section style={{ padding: 40 }}>
        <div style={{ display: "flex", gap: 20 }}>

          {/* LEFT */}
          <div style={{ width: "75%" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>

              {blogs.length === 0 && <p>Không có bài viết</p>}

              {blogs.map((b) => (
                <div key={b.id} style={{
                  width: "48%",
                  border: "1px solid #ddd",
                  borderRadius: 10,
                  overflow: "hidden"
                }}>

                  <Link to={`/blogs/${b.id}`}>
                    <div
                      style={{
                        height: 200,
                        backgroundImage: `url(http://localhost:8000/storage/${b.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                      }}
                    />
                  </Link>

                  <div style={{ padding: 15 }}>
                    <h4>
                      <Link to={`/blogs/${b.id}`}>
                        {b.title}
                      </Link>
                    </h4>

                    <p style={{ color: "#888", fontSize: 14 }}>
                      By {b.author} - {b.category}
                    </p>

                    <p>{b.description}</p>
                  </div>

                </div>
              ))}

            </div>
          </div>

          {/* RIGHT */}
          <div style={{ width: "25%" }}>
            <input placeholder="Search..." style={{ width: "100%", padding: 10 }} />

            <h4 style={{ marginTop: 20 }}>Categories</h4>
            <ul>
              <li>Công nghệ</li>
              <li>Review</li>
              <li>Điện thoại</li>
            </ul>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default BlogList;