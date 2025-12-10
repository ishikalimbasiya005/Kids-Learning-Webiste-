import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import '../Css/Habits.css';
const Habits = () => {
    useEffect(() => {
                window.scrollTo(0, 0);
                }, []);
    return(
        <>
             <div className="habits-banner">
                <img src="assets\Habits-banner.jpg" alt="habits-book-card" className="habits-banner-img"/>
                <h2 className="habits-title">Good Habits</h2>
            </div>

            <div className="habits-outer">
                <div className="container">
                    <div className="habits-inner">
                        <div className="habits-block">
                            <div className="habits-card">
                                <img src="assets/habit-img1.jpg" alt="habit-img" />
                            </div>

                            <div className="habits-card">
                                <img src="assets/habit-img2.jpg" alt="habit-img" />
                            </div>

                            <div className="habits-card">
                                <img src="assets/habit-img3.jpg" alt="habit-img" />
                            </div>

                            <div className="habits-card">
                                <img src="assets/habit-img4.jpg" alt="habit-img" />
                            </div>

                            <div className="habits-card">
                                <img src="assets/habit-img5.jpg" alt="habit-img" />
                            </div>

                            <div className="habits-card">
                                <img src="assets/habit-img6.jpg" alt="habit-img" />
                            </div>

                            <div className="habits-card">
                                <img src="assets/habit-img7.jpg" alt="habit-img" />
                            </div>

                            <div className="habits-card">
                                <img src="assets/habit-img8.jpg" alt="habit-img" />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

            <Link to="/SkillBook" className="back-btn-skill">BACK</Link>
        </>
    )
}

export default Habits;