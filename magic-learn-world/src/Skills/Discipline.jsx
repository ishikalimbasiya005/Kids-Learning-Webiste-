import React, { useEffect } from "react";

import '../Css/Discipline.css';
import { Link } from "react-router-dom";

const Discipline = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const speakNature = (name) => {
    const speech = new SpeechSynthesisUtterance(name);
    speech.lang = "en-US";   
    speech.pitch = 1;        
    speech.rate = 1;        
    window.speechSynthesis.speak(speech);
    }

    return(
        <>
            <div className="Discipline-banner">
                <img src="assets/discipline-banner.jpg" alt="Discipline-banner-img" className="discipline-banner-img" />
            </div>

            <div className="discipline-outer">
                <div className="container">
                    <div className="discipline-inner">
                        <div className="discipline-block">
                            <div className="discipline-card">
                                <img src="assets/discipline-img1.jpg" alt="discipline-img" onMouseEnter={() => speakNature("stay calm and patient")}/>
                            </div>
                            <div className="discipline-card">
                                <img src="assets/discipline-img2.jpg" alt="discipline-img" onMouseEnter={() => speakNature("set clear boundaries")}/>
                            </div>

                            <div className="discipline-card">
                                <img src="assets/discipline-img3.jpg" alt="discipline-img" onMouseEnter={() => speakNature("use positive reinforcrement")}/>
                            </div>

                            <div className="discipline-card">
                                <img src="assets/discipline-img4.jpg" alt="discipline-img" onMouseEnter={() => speakNature("offer choice")}/>
                            </div>

                            <div className="discipline-card">
                                <img src="assets/discipline-img5.jpg" alt="discipline-img" onMouseEnter={() => speakNature("be consistent")}/>
                            </div>

                            <div className="discipline-card">
                                <img src="assets/discipline-img6.jpg" alt="discipline-img" onMouseEnter={() => speakNature("explain consequences")}/>
                            </div>

                            <div className="discipline-card">
                                <img src="assets/discipline-img7.jpg" alt="discipline-img" onMouseEnter={() => speakNature("model good behavior")}/>
                            </div>

                            <div className="discipline-card">
                                <img src="assets/discipline-img8.jpg" alt="discipline-img" onMouseEnter={() => speakNature("praise good behavior")}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Link to="/SkillBook" className="back-btn-skill">BACK</Link>
        </>
    )
}

export default Discipline;