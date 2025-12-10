import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Css/Books.css"; 

const Books = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="our-books-outer">
        <div className="our-books-inner">
          <img
            className="lerning-banner"
            src="assets/learning-banner.jpg"
            alt="learning-banner"
          />
          <img
            className="belt-img"
            src="assets/belt-removebg-preview.png"
            alt="belt"
          />
          <h2 className="our-title">Our Learning Library</h2>

          {/* 🔹 Subject Index Section */}
          <div className="subject-index">
            <h3 className="subject-index-title">Explore Subjects:</h3>
            <div className="subject-buttons">
              <Link to="/Englishbooks" className="subject-btn">📘 English</Link>
              <Link to="/Sciencebook" className="subject-btn">🔬 Science</Link>
              <Link to="/MathBook" className="subject-btn">🔢 Math</Link>
              <Link to="/SkillBook" className="subject-btn">🌟 Skills</Link>
            </div>
          </div>

          <div className="our-books-card">
            <div className="our-book">
              <div className="our-book-img">
                <img src="assets/English-book.jpg" alt="English Book" />
              </div>
              <div className="our-book-content">
                <h3 className="our-book-title">
                  <Link to="/Englishbooks" className="book-link">
                    English Learning Zone
                  </Link>
                </h3>
                <p className="our-book-text">
                  "This book helps kids explore the alphabet, bright colors,
                  sizes like big and small, and amazing animals — all with
                  pictures and sounds. Listen, read, and enjoy learning every
                  day!"
                </p>
              </div>
            </div>

            <div className="our-book">
              <img
                className="doremon-work"
                src="assets/doremon-removebg-preview.png"
                alt="doremon-img"
              />
              <div className="our-book-img">
                <img src="assets/Science-book.jpg" alt="Science Book" />
              </div>
              <div className="our-book-content">
                <h3 className="our-book-title">
                  <Link to="/Sciencebook" className="book-link">
                    Science Learning Zone
                  </Link>
                </h3>
                <p className="our-book-text">
                  "This book takes kids on a journey to learn about planets,
                  body parts, and many amazing facts of our world. With colorful
                  pictures and easy words, science becomes exciting and simple
                  to understand!"
                </p>
              </div>
            </div>

            <div className="our-book">
              <div className="our-book-img">
                <img src="assets/Math-book.jpg" alt="Math Book" />
              </div>
              <div className="our-book-content">
                <h3 className="our-book-title">
                  <Link to="/MathBook" className="book-link">
                    Math Learning Zone
                  </Link>
                </h3>
                <p className="our-book-text">
                  "This book helps kids learn numbers, shapes, counting, and
                  simple sums in a playful way. With colorful pictures and easy
                  activities, maths becomes exciting and enjoyable for young
                  learners!"
                </p>
              </div>
            </div>

            <div className="our-book">
              <div className="our-book-img">
                <img src="assets/skillBook.jpg" alt="skill-book-card" />
              </div>
              <div className="our-book-content">
                <h3 className="our-book-title">
                  <Link to="/SkillBook" className="book-link">
                    Explore Life Skills
                  </Link>
                </h3>
                <p className="our-book-text">
                  "Life Skills are the basic values and habits that help
                  children grow into responsible, confident, and kind human
                  beings.These skills will help them in school, at home, and
                  everywhere they go in the future."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Books;
