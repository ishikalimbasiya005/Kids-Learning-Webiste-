import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../Css/Login.css";

axios.defaults.withCredentials = true;

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/auth/login",
        { email, password },
        { withCredentials: true }
      );

      setLoading(false);
      setMessage(" Login successful! Redirecting...");

      // Redirect to dashboard after 1.5s
      setTimeout(() => {
        navigate("/house");
      }, 1500);
    } catch (err) {
      setLoading(false);
      const errMsg = err?.response?.data?.message || "Login failed";
      setMessage(` ${errMsg}`);
    }
  };

  return (
    <div className="body">
      <div class="header">
        <div className="header-logo">
          <img src="../assets/logo.png" alt="logo" className="login-logo" />
        </div>

        <Link to="/Admin" className="login-admin-link" target="_blank">
          <button className="admin-btn">Admin Login</button>
        </Link>
      </div>

      <h2 className="login-title">Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div>
          <label className="label">Email</label>
          <input
            className="login-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="label">Password</label>
          <input
            className="login-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {message && (
          <div
            style={{
              color: message.startsWith("") ? "green" : "red",
              marginBottom: 10,
            }}
          >
            {message}
          </div>
        )}

        <button className="login-button" type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <p className="login-msg">
        New Member? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
}
