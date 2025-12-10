import React from "react";
import "./Css/Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-section about">
          <h3 className="footer-title">About Magic Learning World</h3>
          <p className="footer-text">
            Making learning fun, interactive, and safe for kids everywhere.
          </p>
        </div>

        <div className="footer-section-block">
          <div className="footer-section">
            <h3 className="links">Quick Links</h3>
            <ul>
              <li>
                <a href="/">🏡Home</a>
              </li>
              <li>
                <a href="/books">💡Learn</a>
              </li>
              <li>
                <a href="/Abouts">🤝About us</a>
              </li>
              <li>
                <a href="/Contact">📇Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-section contact">
            <h3 className="content">Contact Us</h3>
            <p className="email">📬Email: info@kidslearning.com</p>
            <p className="phone">📱Phone: +91 99999 88888</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-texts">
            © 2025 Magic Learning World | Safe & Fun Education for Kids
          </p>
          <img
            className="Footer-img"
            src="assets\Footer-Block.jpg"
            alt="Footer-img"
          />
        </div>
      </footer>
    </>
  );
};

export default Footer;
