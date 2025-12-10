import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import '../Css/Numbers.css';

const Numbers = () => {
    useEffect(() => {
         window.scrollTo(0, 0);
     }, []);


    const speakNumbers = (name) => {
    const speech = new SpeechSynthesisUtterance(name);
    speech.lang = "en-US";   
    speech.pitch = 1;        
    speech.rate = 1;        
    window.speechSynthesis.speak(speech);
    }

    return(
        <>
        <div className="number-banner">
            <img src="assets\number-banner.jpg" alt="Number-banner" className="number-banner-image" />
        </div>

        <div className="number-outer">
            <div className="container">
                <div className="number-inner">
                    <div className="number-block">
                        <div className="number-card">
                            <img src="assets\one.jpg" alt="one-image"  onMouseEnter={() => speakNumbers('one')} />
                        </div>

                        <div className="number-card">
                            <img src="assets\two.jpg" alt="two-image" onMouseEnter={() => speakNumbers('two')}/>
                        </div>

                         <div className="number-card">
                            <img src="assets\three.jpg" alt="three-image" onMouseEnter={() => speakNumbers('three')}/>
                        </div>

                        <div className="number-card">
                            <img src="assets\four.jpg" alt="four-image" onMouseEnter={() => speakNumbers('four')}/>
                        </div>

                        <div className="number-card">
                            <img src="assets\five.jpg" alt="five-image" onMouseEnter={() => speakNumbers('five')}/>
                        </div>

                        <div className="number-card">
                            <img src="assets\six.jpg" alt="six-image" onMouseEnter={() => speakNumbers('six')}/>
                        </div>

                        <div className="number-card">
                            <img src="assets\seven.jpg" alt="seven-image" onMouseEnter={() => speakNumbers('seven')}/>
                        </div>

                        <div className="number-card">
                            <img src="assets\eight.jpg" alt="eight-image" onMouseEnter={() => speakNumbers('eight')}/>
                        </div>

                        <div className="number-card">
                            <img src="assets\nine.jpg" alt="nine-image" onMouseEnter={() => speakNumbers('nine')}/>
                        </div>

                        <div className="number-card">
                            <img src="assets\ten.jpg" alt="ten-image" onMouseEnter={() => speakNumbers('ten')}/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <Link to="/Mathbook" className="back-btn-number">BACK</Link>
            
        </>
    )
}

export default Numbers;