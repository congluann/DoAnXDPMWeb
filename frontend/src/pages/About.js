import { useEffect, useState } from "react";
import axios from "../api";

function About() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get("/about");
      setAbout(res.data);
    };
    fetch();
  }, []);

  if (!about) return <p>Loading...</p>;

  return (
    <div>

      {/* HERO SECTION */}
      <div
        style={{
          background: "#111",
          color: "#fff",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h1>{about.title}</h1>
        <p>We provide the best smartphone shopping experience</p>
      </div>

      {/* CONTENT SECTION */}
      <div style={{ display: "flex", padding: 40, gap: 30 }}>

        {/* TEXT */}
        <div style={{ flex: 1 }}>
          <h2>About Us</h2>

          <p style={{ lineHeight: 1.8 }}>
            {about.content}
          </p>

          <h3>Why choose us?</h3>
          <ul>
            <li>✔ Official products 100%</li>
            <li>✔ Fast delivery</li>
            <li>✔ Best price guarantee</li>
            <li>✔ 24/7 support</li>
          </ul>
        </div>

        {/* IMAGE */}
        <div style={{ flex: 1 }}>
          {about.image && (
            <img
              src={`http://localhost:8000/storage/${about.image}`}
              alt=""
              style={{
                width: "100%",
                borderRadius: 10,
              }}
            />
          )}
        </div>

      </div>

      {/* STATS SECTION */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          background: "#f5f5f5",
          padding: 40,
          textAlign: "center",
        }}
      >
        <div>
          <h2>10K+</h2>
          <p>Customers</p>
        </div>

        <div>
          <h2>500+</h2>
          <p>Products</p>
        </div>

        <div>
          <h2>24/7</h2>
          <p>Support</p>
        </div>
      </div>

    </div>
  );
}

export default About;