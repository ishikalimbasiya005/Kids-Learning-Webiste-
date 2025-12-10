import React, { useEffect } from 'react';
import '../Css/Manner.css';

import { Link } from "react-router-dom";

const Manner = () => {
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
            <div className="manner-banner">
                <img src="assets/manner-banner.jpg" alt="manners-banner-img" className='manner-banner-img' />
            </div>

            <div className="manner-outer">
                <div className="container">
                    <div className="manner-inner">
                        <div className="manner-block">
                            <div className="manner-card">
                                <img src="assets/manner-img1.jpg" alt="manner-image" onMouseEnter={() => speakNature("greeting others")}/>
                            </div>

                            <div className="manner-card">
                                <img src="assets/manner-img2.jpg" alt="manner-image" onMouseEnter={() => speakNature("raising your hand")}/>
                            </div>

                            <div className="manner-card">
                                <img src="assets/manner-img3.jpg" alt="manner-image" onMouseEnter={() => speakNature("being quiet")}/>
                            </div>

                            <div className="manner-card">
                                <img src="assets/manner-img4.jpg" alt="manner-image" onMouseEnter={() => speakNature("listening well")}/>
                            </div>

                            <div className="manner-card">
                                <img src="assets/manner-img5.jpg" alt="manner-image" onMouseEnter={() => speakNature("saying please and thank you")}/>
                            </div>

                            <div className="manner-card">
                                <img src="assets/manner-img6.jpg" alt="manner-image" onMouseEnter={() => speakNature("cleaning up")}/>
                            </div>

                            <div className="manner-card">
                                <img src="assets/manner-img7.jpg" alt="manner-image" onMouseEnter={() => speakNature("being kind")}/>
                            </div>

                            <div className="manner-card">
                                <img src="assets/manner-img8.jpg" alt="manner-image" onMouseEnter={() => speakNature("apologizing")}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Link to="/SkillBook" className="back-btn-skill">BACK</Link>
        </>
    )
}

export default Manner;