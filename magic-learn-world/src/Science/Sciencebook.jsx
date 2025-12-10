import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Css/Sciencebook.css";

const Sciencebook = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Fetch Science books from MongoDB
    axios
      .get("http://localhost:5000/books")
      .then((res) => {
        const science = res.data.find((s) => s.subject === "Science");
        if (science?.chapters) {
          const filtered = science.chapters.filter(
            (c) => !["Planets", "Weather", "Nature"].includes(c.name)
          );
          setBooks(filtered);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="science-banner">
        <img
          src="assets/Science-book-banner.jpg"
          alt="Science-Banner"
          className="science-banner-image"
        />
      </div>

      <div className="science-outer">
        <div className="container">
          <div className="science-inner">
            <div className="science-block">
              {/* 🔹 Static Books */}
              <div className="science-card">
                <div className="science-image">
                  <img
                    src="assets/solar-system.jpg"
                    alt="Solar-system-card"
                    className="science-img"
                  />
                </div>
                <div className="science-content">
                  <h4 className="science-title">🪐 Planets in Space</h4>
                  <p className="science-contents">
                    Learn science in a fun way! The Solar System book makes
                    space easy for kids with pictures and sounds.
                  </p>
                  <button className="science-button">
                    <Link to="/Planets">Go to Space</Link>
                  </button>
                </div>
              </div>

              <div className="science-card">
                <div className="science-image">
                  <img
                    src="assets/weather-card.jpg"
                    alt="Weather-card"
                    className="science-img"
                  />
                </div>
                <div className="science-content">
                  <h4 className="science-title">🌨️ Weather World</h4>
                  <p className="science-contents">
                    There are many types of weather like sunny, rainy, cloudy,
                    and windy. Each type of weather is special.
                  </p>
                  <button className="science-button">
                    <Link to="/Weather">Sky Watch</Link>
                  </button>
                </div>
              </div>

              <div className="science-card">
                <div className="science-image">
                  <img
                    src="assets/nature-card.jpg"
                    alt="Nature-card"
                    className="science-img"
                  />
                </div>
                <div className="science-content">
                  <h4 className="science-title">🍃 Colors of Nature</h4>
                  <p className="science-contents">
                    Learn about forests, mountains, seas, oceans, rivers and the
                    wonders of nature.
                  </p>
                  <button className="science-button">
                    <Link to="/Nature">Dive Into Nature</Link>
                  </button>
                </div>
              </div>

              {/* 🔹 Dynamic Books from DB */}
              {books.map((chapter, index) => (
                <div className="science-card" key={index}>
                  <div className="science-image">
                    <img
                      src={chapter.img || "assets/default.jpg"}
                      alt={chapter.name}
                      className="science-img"
                    />
                  </div>
                  <div className="science-content">
                    <h4 className="science-title">{chapter.name}</h4>
                    <p className="science-contents">
                      {chapter.description || "New book available!"}
                    </p>
                    <button className="science-button">
                      <Link to={chapter.link}>
                        {chapter.buttonName || "Open Book"}
                      </Link>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Link to="/Books" className="back-btn-science">
        BACK
      </Link>
    </>
  );
};

export default Sciencebook;
