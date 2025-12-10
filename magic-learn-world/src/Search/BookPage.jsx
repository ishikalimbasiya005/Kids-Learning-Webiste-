import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const booksData = {
  English: {
    Verbs: [
      { name: "Run", image: "/images/run.png", sound: "/sounds/run.mp3" },
      { name: "Eat", image: "/images/eat.png", sound: "/sounds/eat.mp3" },
    ],
    Alphabets: [{ name: "A", image: "/images/a.png", sound: "/sounds/a.mp3" }],
  },
  Science: {
    Planets: [
      { name: "Earth", image: "/images/earth.png", sound: "/sounds/earth.mp3" },
    ],
  },
};

const BookPage = () => {
  const { subject, book } = useParams();
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const subjectData = booksData[subject];
    let chapterList = [];

    if (subjectData && subjectData[book]) {
      chapterList = subjectData[book]; 
    }

    // 2. state update
    setTimeout(() => {
      setChapters(chapterList);
      setLoading(false);
    }, 500);
  }, [subject, book]);

  const playSound = (src) => {
    if (!src) return;
    const audio = new Audio(src);
    audio
      .play()
      .catch((err) => console.warn("Playback blocked by browser:", err));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>
        {subject} - {book}
      </h2>
      <h4>Chapters:</h4>

      {loading ? (
        <p>Loading chapters...</p>
      ) : chapters.length > 0 ? (
        <ul>
          {chapters.map((c, i) => (
            <li key={i} style={{ marginBottom: "10px" }}>
              <strong>{c.name}</strong>
              {c.image && (
                <img
                  src={c.image}
                  alt={c.name}
                  width={50}
                  style={{ marginLeft: "10px", cursor: "pointer" }}
                  onClick={() => playSound(c.sound)}
                  onMouseEnter={() => playSound(c.sound)}
                />
              )}
              <button
                style={{ marginLeft: "10px" }}
                onClick={() => playSound(c.sound)}
              >
                🔊 Play
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No chapters added yet.</p>
      )}
    </div>
  );
};

export default BookPage;
