import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import '../Css/Honest.css';

const Honest = () => {
    useEffect(() => {
            window.scrollTo(0, 0);
        }, []);

    return(
        <>
             <div className="honest-banner">
                <img src="assets/honest-banner.jpg" alt="honest-banner-img" className="honest-banner-img" />
            </div>

             <div className="honest-outer">
                <div className="container">
                    <div className="honest-inner">
                        <div className="honest-block">
                            <div className="honest-card">
                                <img src="assets/honest-img1.jpg" alt="honest-img" />
                            </div>
                            <div className="honest-card">
                                <img src="assets/honest-img2.jpg" alt="honest-img" />
                            </div>

                            <div className="honest-card">
                                <img src="assets/honest-img3.jpg" alt="honest-img" />
                            </div>

                            <div className="honest-card">
                                <img src="assets/honest-img4.jpg" alt="honest-img" />
                            </div>

                            <div className="honest-card">
                                <img src="assets/honest-img5.jpg" alt="honest-img" />
                            </div>

                            <div className="honest-card">
                                <img src="assets/honest-img6.jpg" alt="honest-img" />
                            </div>

                            <div className="honest-card">
                                <img src="assets/honest-img7.jpg" alt="honest-img" />
                            </div>

                            <div className="honest-card">
                                <img src="assets/honest-img8.jpg" alt="honest-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Link to="/SkillBook" className="back-btn-skill">BACK</Link>

        </>
    )
}

export default Honest;