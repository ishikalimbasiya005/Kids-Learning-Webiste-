import React, { useEffect } from "react";

import '../Css/Sign.css';
import { Link } from "react-router-dom";


const Sign = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        }, []);

    const speakPlanet = (name) => {
    const speech = new SpeechSynthesisUtterance(name);
    speech.lang = "en-US";   
    speech.pitch = 2;        
    speech.rate = 1;         
    window.speechSynthesis.speak(speech);
    }

    return(
        <>
            <div className="Sign-banner">
                <img src="assets\sign-banner.jpg" alt="Sign-banner-image" className="sign-banner" />
            </div>

            <div className="sign-outer">
                <div className="container">
                    <div className="sign-inner">
                        <div className="sign-block">
                            <div className="sign-cards">
                                <div className="sign-img">
                                    <img src="assets\plus-removebg-preview.png" alt="plus-sign" onMouseEnter={() => speakPlanet("plus")}/>
                                </div>
                            </div>

                            <div className="sign-cards">
                                <div className="sign-img">
                                    <img src="assets\minus-removebg-preview.png" alt="minus-sign" onMouseEnter={() => speakPlanet("minus")}/>
                                </div>
                            </div>

                            <div className="sign-cards">
                                <div className="sign-img">
                                    <img src="assets\multiplication-removebg-preview.png" alt="Multiplication-sign" onMouseEnter={() => speakPlanet("Multiplication")}/>
                                </div>
                            </div>

                            <div className="sign-cards">
                                <div className="sign-img">
                                    <img src="assets\division-removebg-preview.png" alt="division-sign" onMouseEnter={() => speakPlanet("division")}/>
                                </div>
                            </div>

                            <div className="sign-cards">
                                <div className="sign-img">
                                    <img src="assets\less_than-removebg-preview.png" alt="less_than-sign" onMouseEnter={() => speakPlanet("lessthan")}/>
                                </div>
                            </div>

                            <div className="sign-cards">
                                <div className="sign-img">
                                    <img src="assets\greater_than-removebg-preview.png" alt="greater_than-sign" onMouseEnter={() => speakPlanet("greaterthan")}/>
                                </div>
                            </div>

                            <div className="sign-cards">
                                <div className="sign-img">
                                    <img src="assets\no_less_than-removebg-preview.png" alt="no_less_than-sign" onMouseEnter={() => speakPlanet("no less than")}/>
                                </div>
                            </div>

                            <div className="sign-cards">
                                <div className="sign-img">
                                    <img src="assets\no_more_than-removebg-preview.png" alt="no_more_than-sign" onMouseEnter={() => speakPlanet("no more than")}/>
                                </div>
                            </div>

                            <div className="sign-cards">
                                <div className="sign-img">
                                    <img src="assets\equalto-removebg-preview.png" alt="equalto-sign" className="equal_to" onMouseEnter={() => speakPlanet("equal to")}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src="assets\sign-removebg-preview.png" alt="sign-img" className="sign-footer-img" />
            <Link to="/Mathbook" className="back-btn-sign">BACK</Link>

        </>
    )
}

export default Sign;