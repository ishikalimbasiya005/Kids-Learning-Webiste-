import React from "react";

import '../Css/Our.css';
const Our = () => {
    return(
        <>
            <div className="about-outer">
                <div className="about-inner">
                     <div className="about-our">
                <div className="about-title">
                    <h3>Meet Our Team</h3>
                    <p>We are a passionate team working together to bring ideas to life.</p>
                </div>
            <img src="assets\our-doremon-removebg-preview.png" alt="our-doremon-image" className="our-d" />
                <div className="about-card">
                    <div className="our-page">
                        <div className="out-image">
                            <img src="assets/first.jpg" alt="Ishika" />
                        </div>
                        <div className="our-text">
                            <p>Ishika Limbasiya</p>
                        </div>
                    </div>

                    <div className="our-page">
                        <div className="out-image">
                            <img src="assets/second.jpg" alt="Ishika" />
                        </div>
                        <div className="our-text">
                            <p>Dixita Kanani</p>
                        </div>
                    </div>

                    <div className="our-page">
                        <div className="out-image">
                            <img src="assets/third.jpg" alt="Ishika" />
                        </div>
                        <div className="our-text">
                            <p>Sejal Pal</p>
                        </div>
                    </div>
                </div>
            </div>
                </div>
            </div>
        </>
    )
}

export default Our;