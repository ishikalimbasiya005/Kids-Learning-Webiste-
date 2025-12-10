import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Css/SkillBook.css";

const SkillBook = () => {
    const [chapters, setChapters] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);

        // Fetch Skills chapters from MongoDB
        axios
            .get("http://localhost:5000/books")
            .then((res) => {
                const skills = res.data.find((s) => s.subject === "Skills");
                if (skills?.chapters) {
                    // Filter out static chapters
                    const filtered = skills.chapters.filter(
                        (c) => !["Habits", "Manner", "Discipline"].includes(c.name)
                    );
                    setChapters(filtered);
                }
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <>
            <div className="skill-banner">
                <img src="assets/skill-banner.jpg" alt="Skill-Banner" className="skill-banner-img"/>
            </div>

            <div className="skill-outer">
                <div className="container">
                    <div className="skill-inner">
                        <div className="skill-block">

                            {/* 🔹 Static Books */}
                            <div className="skill-card">
                                <div className="skill-image">
                                    <img src="assets/habits.jpg" alt="Habits-card" className="skill-img"/>
                                </div>
                                <div className="skill-content">
                                    <h4 className="skill-title">🙏 Good Habits</h4>
                                    <p className="skill-contents">
                                        Good habits help us become better every day. Children who follow good habits are always happy and loved by everyone.
                                    </p>
                                    <button className="skill-button"><Link to="/Habits">Learn Habits</Link></button>
                                </div>
                            </div>

                            <div className="skill-card">
                                <div className="skill-image">
                                    <img src="assets/Manners.jpg" alt="Manners-card" className="skill-img"/>
                                </div>
                                <div className="skill-content">
                                    <h4 className="skill-title">✨ Learn Manners</h4>
                                    <p className="skill-contents">
                                        Manners are like magic keys that open the doors of friendship, respect, and love.
                                    </p>
                                    <button className="skill-button"><Link to="/Manner">Show Manners</Link></button>
                                </div>
                            </div>

                            <div className="skill-card">
                                <div className="skill-image">
                                    <img src="assets/Discipline.jpg" alt="Discipline-card" className="skill-img"/>
                                </div>
                                <div className="skill-content">
                                    <h4 className="skill-title">⏰ Follow the Rules</h4>
                                    <p className="skill-contents">
                                        Discipline means doing the right thing at the right time. It helps us become strong, responsible, and successful.
                                    </p>
                                    <button className="skill-button"><Link to="/Discipline">Stay Disciplined</Link></button>
                                </div>
                            </div>

                            {/* 🔹 Dynamic Chapters from DB */}
                            {chapters.map((chapter) => (
                                <div className="skill-card" key={chapter._id}>
                                    <div className="skill-image">
                                        <img src={chapter.img || "assets/default.jpg"} alt={chapter.name} className="skill-img"/>
                                    </div>
                                    <div className="skill-content">
                                        <h4 className="skill-title">{chapter.name}</h4>
                                        <p className="skill-contents">{chapter.description || "New chapter available!"}</p>
                                        <button className="skill-button">
                                            <Link to={chapter.link}>{chapter.buttonName || "Open Book"}</Link>
                                        </button>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>

            <Link to="/Books" className="back-btn-skill">BACK</Link>
        </>
    );
};

export default SkillBook;
