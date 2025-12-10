import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Css/English-book.css";
import { Link } from "react-router-dom";

const Englishbooks = () => {
  const [dynamicChapters, setDynamicChapters] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchChapters = async () => {
      try {
        const res = await axios.get("http://localhost:5000/books");
        const english = res.data.find((s) => s.subject === "English");
        if (english?.chapters) {
          // Filter out static chapters
          const filtered = english.chapters.filter(
            (c) => !["Alphabets", "Colors", "Animals"].includes(c.name)
          );
          setDynamicChapters(filtered);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchChapters();
  }, []);

  return (
    <>
      <div className="english-banner-img">
        <img src="assets/English-book-banner.jpg" alt="EnglishWorld-Banner" />
      </div>

      <div className="english-outer">
        <div className="container">
          <div className="english-inner">
            <div className="english-book-block">

              {/* STATIC CHAPTERS */}
              <div className="english-books">
                <div className="english-book-image">
                  <img src="assets/AtoZ.jpg" alt="AToZ-book" />
                </div>
                <div className="english-book-content">
                  <h4 className="english-book-title">🌍Alphabet Adventure</h4>
                  <p className="english-book-description">
                    Discover the world of A to Z with fun letters, pictures, and sounds for kids.
                  </p>
                  <button className="book-button">
                    <Link to="/Alphabets">Begin Now</Link>
                  </button>
                </div>
              </div>

              <div className="english-books">
                <div className="english-book-image">
                  <img src="assets/Colors.jpg" alt="Color-book" />
                </div>
                <div className="english-book-content">
                  <h4 className="english-book-title">🌈Magic of Colour</h4>
                  <p className="english-book-description">
                    Discover the world of red, blue, green, and more in a playful way.
                  </p>
                  <button className="book-button">
                    <Link to="/Colors">Explore Colors</Link>
                  </button>
                </div>
              </div>

              <div className="english-books">
                <div className="english-book-image">
                  <img src="assets/Animals.jpg" alt="Animal-book" />
                </div>
                <div className="english-book-content">
                  <h4 className="english-book-title">🐯 Jungle Friends</h4>
                  <p className="english-book-description">
                    A fun and easy way for kids to know their animal friends.
                  </p>
                  <button className="book-button">
                    <Link to="/Animals">Meet the Animals</Link>
                  </button>
                </div>
              </div>

              {/* DYNAMIC CHAPTERS */}
              {dynamicChapters.map((chapter) => (
                <div className="english-books" key={chapter._id}>
                  <div className="english-book-image">
                    <img src={chapter.img || "assets/default.jpg"} alt={chapter.name} />
                  </div>
                  <div className="english-book-content">
                    <h4 className="english-book-title">{chapter.name}</h4>
                    <p className="english-book-description">
                      {chapter.description || "New chapter available!"}
                    </p>
                    <button className="book-button">
                      <Link to={chapter.link}>{chapter.buttonName || "Open Chapter"}</Link>
                    </button>
                  </div>
                </div>
              ))}

              <Link to="/Books" className="back-btn-englishbook">BACK</Link>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Englishbooks;
