import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Css/Admin.css";

const Admin = () => {

   useEffect(() => {
        window.scrollTo(0, 0);
        }, []);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/admin/login",
        { username, password },
        { withCredentials: true } // important for session
      );

      alert(res.data.message);
      navigate("/dashboard"); // React Router redirect
    } catch (err) {
      alert(" Invalid credentials");
    }
  };

  return (
    <div className="admin-outer">
      <div className="container">
        <div className="admin-inner">
          <div className="admin-title">
            <h2 className="admin-title-name">🛠️ Secure Admin Login</h2>
          </div>
          

          <form onSubmit={handleLogin}>
            <label htmlFor="username">Admin Name:</label>
            <input
              type="text"
              placeholder="📧 Enter Admin Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              placeholder="🔒 Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit" className="contact-submit">
              Login
            </button>
          </form>
          <button className="back-btn1" onClick={() => navigate("/")} >⬅ Back </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
