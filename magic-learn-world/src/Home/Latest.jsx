import React from "react";
import { Link } from "react-router-dom";

const Latest = () => {
    return(
        <>
        <div className="latest-outer">
            <div className="container">
                <div className="latest-inner">
                    <img className="doremon-emoji" src="assets\doremon-emoji-removebg-preview(1).png" alt="doremon-emoji" />
                    <h2>📖 Sample Book's</h2>
                    <div className="latest-books">
                        <div className="latest-first">
                            <div className="latest-img">
                                <img src="assets\English-learn.jpg" alt="English Book" />
                            </div>
                            <div className="latest-content">
                                <p><Link to="/Alphabets" className="English-Alphabets">Alphabet Adventure 🚀</Link></p>
                            </div>
                        </div>

                         <div className="latest-first">
                            <div className="latest-img">
                                <img src="assets\Science-learn.jpg" alt="English Book" />
                            </div>
                            <div className="latest-content">
                                <p><Link to="/Planets" className="English-Alphabets">Exploring Planets 🪐</Link></p>
                            </div>
                        </div>


                        <div className="latest-first">
                            <div className="latest-img">
                                <img src="assets\Math-learn.jpg" alt="English Book" />
                            </div>
                            <div className="latest-content">
                                <p><Link to="/Numbers" className="English-Alphabets">Counting Playground 🛝</Link></p>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default Latest;