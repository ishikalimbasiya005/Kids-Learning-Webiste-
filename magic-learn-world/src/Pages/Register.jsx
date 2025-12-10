import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../Css/register.css";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Eye icons

axios.defaults.withCredentials = true;

export default function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // toggle for password
  const [showConfirm, setShowConfirm] = useState(false);   // toggle for confirm password

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!passwordRegex.test(password)) {
      return setMessage(
        "Password must be at least 6 characters and include uppercase, lowercase, number, and special character"
      );
    }

    if (password !== confirm) {
      return setMessage("Passwords do not match");
    }

    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:5000/auth/register",
        { username, email, password },
        { withCredentials: true }
      );

      setLoading(false);
      setMessage("Registration successful! Redirecting to login...");
      setTimeout(() => navigate("/house"), 2000);
    } catch (err) {
      setLoading(false);
      const errMsg = err?.response?.data?.message || "Registration failed";
      setMessage(`${errMsg}`);
    }
  };

  return (
    <div className="register-body">
      <div className="header-logo-register">
        <img src="../assets/logo.png" alt="logo" className="register-logo" />
        <h2 className="register-title">Register</h2>
      </div>

      <form className="register-form" onSubmit={handleSubmit}>
        <div>
          <label className="register-label">Full Name</label>
          <input
            className="register-input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="register-label">Email</label>
          <input
            className="register-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div style={{ position: "relative" }}>
          <label className="register-label">Password</label>
          <input
            className="register-input"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute",
              right: 10,
              top: "60%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              color: "#555",
            }}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <div style={{ position: "relative" }}>
          <label className="register-label">Confirm Password</label>
          <input
            className="register-input"
            type={showConfirm ? "text" : "password"}
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
          />
          <span
            onClick={() => setShowConfirm(!showConfirm)}
            style={{
              position: "absolute",
              right: 10,
              top: "60%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              color: "#555",
            }}
          >
            {showConfirm ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {message && (
          <div
            style={{
              color: message.includes("successful") ? "green" : "red",
              marginBottom: 10,
            }}
          >
            {message}
          </div>
        )}

        <button className="register-button" type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
      </form>

      <p className="register-msg">
        Already registered? <Link to="/">Login here</Link>
      </p>
    </div>
  );
}
