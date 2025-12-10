import React, { useEffect } from "react";

import '../Css/Weather.css'
import { Link } from "react-router-dom";

const Weather = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        }, []);

    const speakWeather = (name) => {
    const speech = new SpeechSynthesisUtterance(name);
    speech.lang = "en-US";   
    speech.pitch = 1;      
    speech.rate = 1;        
    window.speechSynthesis.speak(speech);
  };
    return(
        <>
            <div className="weather-banner">
                <img src="assets\Weather-banner.jpg" alt="weather-banner-img" className="weather-img-banner"/> 
            </div>

            <div className="weather-outer">
                <div className="container">
                    <div className="weather-inner">
                        <img src="assets\d-rain-removebg-preview.png" alt="doremon-rain-image" className="d-rain" />
                        <div className="weather-block">
                            <div className="weather-card">
                                <div className="weather-img">
                                    <img src="assets\sunny.jpg" alt="sunny" onMouseEnter={() => speakWeather("Sunny")}/>
                                </div>
                                <div className="weather-content">
                                    <h4 className="weather-text">"🌞When the Sun shines brightly with no or very few clouds."</h4>
                                </div>
                            </div>

                            <div className="weather-card">
                                <div className="weather-img">
                                    <img src="assets\rainy.jpg" alt="rainy" onMouseEnter={() => speakWeather("rainy")}/>
                                </div>
                                <div className="weather-content">
                                    <h4 className="weather-text">"☔When condensed water droplets in clouds fall as rain."</h4>
                                </div>
                            </div>

                            <div className="weather-card">
                                <div className="weather-img">
                                    <img src="assets\windy.jpg" alt="Windy" onMouseEnter={() => speakWeather("windy")}/>
                                </div>
                                <div className="weather-content">
                                    <h4 className="weather-text">"🌬️When air moves from high-pressure areas to low-pressure areas."</h4>
                                </div>
                            </div>

                            <div className="weather-card">
                                <div className="weather-img">
                                    <img src="\assets\stormy.jpg" alt="stormy" onMouseEnter={() => speakWeather("stormy")}/>
                                </div>
                                <div className="weather-content">
                                    <h4 className="weather-text">"⛈️When heavy rain, strong winds, thunder, and lightning occur together."</h4>
                                </div>
                            </div>

                            <div className="weather-card">
                                <div className="weather-img">
                                    <img src="\assets\cloudy.jpg" alt="cloudy" onMouseEnter={() => speakWeather("cloudy")}/>
                                </div>
                                <div className="weather-content">
                                    <h4 className="weather-text">"☁️When the sky is mostly covered with clouds of water vapor.”</h4>
                                </div>
                            </div>

                            <div className="weather-card">
                                <div className="weather-img">
                                    <img src="\assets\snowy.jpg" alt="snowy" onMouseEnter={() => speakWeather("snowy")}/>
                                </div>
                                <div className="weather-content">
                                    <h4 className="weather-text">"☃️When frozen water vapor falls as snowflakes on the ground"</h4>
                                </div>
                            </div>

                            <div className="weather-cards">
                                <div className="weather-img">
                                    <img src="\assets\rainbow.jpg" alt="rainbow" onMouseEnter={() => speakWeather("rainbow")}/>
                                </div>
                                <div className="weather-content">
                                    <h4 className="weather-text">"🌈When sunlight passes through raindrops and splits into colors."</h4>
                                </div>
                            </div>

                            <Link to="/Sciencebook" className="back-btn-Weather">BACK</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Weather;