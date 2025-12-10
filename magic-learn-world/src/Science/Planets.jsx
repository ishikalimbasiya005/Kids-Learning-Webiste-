import React, { useEffect } from "react";
import '../Css/planet.css'
import { Link } from "react-router-dom";

const Planets = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
    }, []);

    const speakPlanet = (name) => {
    const speech = new SpeechSynthesisUtterance(name);
    speech.lang = "en-US";   
    speech.pitch = 1;        
    speech.rate = 1;        
    window.speechSynthesis.speak(speech);
  };

    return(
        <>
            <div className="planets-banner">
                <img src="assets\planet-banner.jpg" alt="planets-banner" className="planet" />
            </div>

            <div className="planet-outer">
                <div className="planet-inner">
                    <div className="planet-block">
                        
                         <div className="planet-cards">
                            <div className="planet-img">
                                <img src="assets\sun-removebg-preview(1).png" alt="Sun-image" className="sun" onMouseEnter={() => speakPlanet("Sun")}/>
                            </div>
                            <div className="planet-text">
                                <h4 className="sun-name">Sun</h4>
                                <p className="planet-desc">The Sun is the center of our Solar System. It gives us heat, light, and energy to live.</p>
                            </div>
                        </div>

                         <div className="planet-cards">
                            <div className="planet-img">
                                <img src="assets\planet-removebg-preview.png" alt="mercury-image" className="mercury " onMouseEnter={() => speakPlanet("Mercury")}/>
                            </div>
                            <div className="planet-text">
                                <h4 className="mercury-name">Mercury</h4>
                                 <p className="planet-desc">The smallest planet and closest to the Sun. It is very hot during the day and freezing at night.</p>
                            </div>
                        </div>

                        <div className="planet-cards">
                            <div className="planet-img">
                                <img src="assets\venus-removebg-preview.png" alt="venus-image" className="venus" onMouseEnter={() => speakPlanet("venus")}/>
                            </div>
                            <div className="planet-text">
                                <h4 className="venus-name">Venus</h4>
                                <p className="planet-desc">The hottest planet with thick yellow clouds. It’s sometimes called Earth’s twin.</p>
                            </div>
                        </div>

                        <div className="planet-cards">
                            <div className="planet-img">
                                <img src="assets\earth-removebg-preview.png" alt="earth-image" className="earth" onMouseEnter={() => speakPlanet("earth")}/>
                            </div>
                            <div className="planet-text">
                                <h4 className="earth-name">Earth</h4>
                                <p className="planet-desc">Our home planet! It has air, water, and life.</p>
                            </div>
                        </div>

                        <div className="planet-cards">
                            <div className="planet-img">
                                <img src="assets\mars-removebg-preview.png" alt="mars-image" className="mars" onMouseEnter={() => speakPlanet("mars")}/>
                            </div>
                            <div className="planet-text">
                                <h4 className="mars-name">Mars</h4>
                                <p className="planet-desc">Known as the Red Planet. Scientists think it may have had water once.</p>
                            </div>
                        </div>

                        <div className="planet-cards">
                            <div className="planet-img">
                                <img src="assets\jupiter-removebg-preview.png" alt="jupiter-image" className="jupiter" onMouseEnter={() => speakPlanet("jupiter")}/>
                            </div>
                            <div className="planet-text">
                                <h4 className="jupiter-name">Jupiter</h4>
                                <p className="planet-desc"> The largest planet with a big red storm. It has more than 70 moons.</p>
                            </div>
                        </div>

                        <div className="planet-cards">
                            <div className="planet-img">
                                <img src="assets\saturn-removebg-preview.png" alt="saturn-image" className="saturn" onMouseEnter={() => speakPlanet("saturn")}/>
                            </div>
                            <div className="planet-text">
                                <h4 className="saturn-name">Saturn</h4>
                                <p className="planet-desc">Famous for its beautiful rings made of ice and rock.</p>
                            </div>
                        </div>

                        <div className="planet-cards">
                            <div className="planet-img">
                                <img src="assets\uranus-removebg-preview.png" alt="uranus-image" className="uranus" onMouseEnter={() => speakPlanet("uranus")}/>
                            </div>
                            <div className="planet-text">
                                <h4 className="uranus-name">Uranus</h4>
                                <p className="planet-desc"> A blue-green planet that spins on its side.</p>
                            </div>
                        </div>

                        <div className="planet-cards">
                            <div className="planet-img">
                                <img src="assets\neptune-removebg-preview.png" alt="neptune-image" className="neptune" onMouseEnter={() => speakPlanet("neptune")}/>
                            </div>
                            <div className="planet-text">
                                <h4 className="neptune-name">Neptune</h4>
                                <p className="planet-desc">The farthest planet with strong winds and a deep blue color.</p>
                            </div>
                        </div>

                        <div className="planet-cards">
                            <div className="planet-img">
                                <img src="assets\pluto-removebg-preview.png" alt="pluto-image" className="pluto" onMouseEnter={() => speakPlanet("pluto")}/>
                            </div>
                            <div className="planet-text">
                                <h4 className="pluto-name">Pluto</h4>
                                <p className="planet-desc">A dwarf planet, very small and very far away.</p>
                            </div>
                        </div>

                        <div className="planet-cards">
                            <div className="planet-img">
                                <img src="assets\moon-removebg-preview.png" alt="moon-image" className="moon" onMouseEnter={() => speakPlanet("moon")}/>
                            </div>
                            <div className="planet-text">
                                <h4 className="moon-name">Moon</h4>
                                <p className="planet-desc">Earth’s only natural satellite. It controls tides in the ocean and shines at night.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Link to="/Sciencebook" className="back-btn-planets">BACK</Link>

        </>
    )
}

export default Planets;