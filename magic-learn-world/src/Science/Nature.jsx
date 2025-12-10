import React, { useEffect } from "react";  

import { Link } from "react-router-dom";

import '../Css/Nature.css';
const Nature = () => {
    
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
        <div className="nature-img-banner">
            <img src="assets\Nature-banner.jpg" alt="Nature-banner" className="nature-banner" />
        </div>

        <div className="nature-outer">
            <div className="container">
                <div className="nature-inner">
                    <div className="nature-block">
                        <div className="nature-cards">
                            <div className="nature-img">
                                <img src="assets\lake.jpg" alt="lake" onMouseEnter={() => speakNature("lake")}/>
                            </div>
                        </div>

                        <div className="nature-cards">
                            <div className="nature-img">
                                <img src="assets\cave.jpg" alt="cave" onMouseEnter={() => speakNature("cave")}/>
                            </div>
                        </div>

                        <div className="nature-cards">
                            <div className="nature-img">
                                <img src="assets\wave.jpg" alt="wave" onMouseEnter={() => speakNature("wave")}/>
                            </div>
                        </div>

                        <div className="nature-cards">
                            <div className="nature-img">
                                <img src="assets\desert.jpg" alt="desert" onMouseEnter={() => speakNature("desert")}/>
                            </div>
                        </div>

                        <div className="nature-cards">
                            <div className="nature-img">
                                <img src="assets\sea.jpg" alt="sea" onMouseEnter={() => speakNature("sea")}/>
                            </div>
                        </div>

                         <div className="nature-cards">
                            <div className="nature-img">
                                <img src="assets\path.jpg" alt="path" onMouseEnter={() => speakNature("path")}/>
                            </div>
                        </div>

                        <div className="nature-cards">
                            <div className="nature-img">
                                <img src="assets\hill.jpg" alt="hill" onMouseEnter={() => speakNature("hill")}/>
                            </div>
                        </div>

                         <div className="nature-cards">
                            <div className="nature-img">
                                <img src="assets\sky.jpg" alt="sky" onMouseEnter={() => speakNature("sky")}/>
                            </div>
                        </div>

                        <div className="nature-cards">
                            <div className="nature-img">
                                <img src="assets\pond.jpg" alt="pond" onMouseEnter={() => speakNature("pond")}/>
                            </div>
                        </div>

                         <div className="nature-cards">
                            <div className="nature-img">
                                <img src="assets\beach.jpg" alt="beach" onMouseEnter={() => speakNature("beach")}/>
                            </div>
                        </div>

                         <div className="nature-cards">
                            <div className="nature-img">
                                <img src="assets\field.jpg" alt="filed" onMouseEnter={() => speakNature("filed")}/>
                            </div>
                        </div>

                         <div className="nature-cards">
                            <div className="nature-img">
                                <img src="assets\forest.jpg" alt="forest" onMouseEnter={() => speakNature("forest")}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <img src="assets\d-nature-removebg-preview.png" alt="doremon-nature-image" className="d-nature"/>

            <Link to="/Sciencebook" className="back-btn-nature">BACK</Link>
        </>
    )
}

export default Nature;