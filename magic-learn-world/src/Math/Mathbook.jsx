import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../Css/Mathbook.css';

const MathBook = () => {
    const [dynamicBooks, setDynamicBooks] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);

        const fetchBooks = async () => {
            try {
                const res = await axios.get("http://localhost:5000/books");
                const math = res.data.find((s) => s.subject === "Math");
                if (math?.chapters) {
                    // Filter out static books
                    const filtered = math.chapters.filter(
                        (b) => !["Numbers", "Shape", "Sign"].includes(b.name)
                    );
                    setDynamicBooks(filtered);
                }
            } catch (err) {
                console.error(err);
            }
        };

        fetchBooks();
    }, []);

    return (
        <>
            <div className="math-banner">
                <img src="assets/Math-banner.jpg" alt="Math-banner" />
            </div>

            <div className="math-outer">
                <div className="container">
                    <div className="math-inner">
                        <div className="math-block">

                            {/* STATIC BOOKS */}
                            <div className="math-cards">
                                <div className="math-image">
                                    <img src="assets/numbers-label.jpg" alt="Numbers-image" />
                                </div>
                                <div className="math-content">
                                    <h4 className="math-title">🎈Fun with Numbers</h4>
                                    <p className="math-text">Bright and playful numbers to make counting fun!</p>
                                    <Link to='/Numbers' className="math-book">Play & Count</Link>
                                </div>
                            </div>

                            <div className="math-cards">
                                <div className="math-image">
                                    <img src="assets/shap.jpg" alt="Shape-image" />
                                </div>
                                <div className="math-content">
                                    <h4 className="math-title">🔺Colorful Shapes</h4>
                                    <p className="math-text">Learn and enjoy different shapes in a colorful way!</p>
                                    <Link to='/Shape' className="math-book">Explore Shapes</Link>
                                </div>
                            </div>

                            <div className="math-cards">
                                <div className="math-image">
                                    <img src="assets/Sign-card.jpg" alt="Sign-image" />
                                </div>
                                <div className="math-content">
                                    <h4 className="math-title">➕Sign Family Party</h4>
                                    <p className="math-text">Learn Math signs with fun — add, subtract, multiply, and share!</p>
                                    <Link to='/Sign' className="math-book">Learn Signs</Link>
                                </div>
                            </div>

                            {/* DYNAMIC BOOKS */}
                            {dynamicBooks.map((book) => (
                                <div className="math-cards" key={book._id}>
                                    <div className="math-image">
                                        <img src={book.img || "assets/default.jpg"} alt={book.name} />
                                    </div>
                                    <div className="math-content">
                                        <h4 className="math-title">{book.name}</h4>
                                        <p className="math-text">{book.description || "New chapter available!"}</p>
                                        <Link to={book.link} className="math-book">{book.buttonName || "Open Chapter"}</Link>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>

            <Link to="/Books" className="back-btn-math">BACK</Link>
        </>
    );
};

export default MathBook;
