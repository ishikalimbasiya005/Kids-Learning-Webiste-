import React, { useEffect } from "react";

import '../Css/Trees.css';
import { Link } from "react-router-dom";

const Trees = () => {
    
    useEffect(() => {
            window.scrollTo(0, 0);
            }, []);
    
        const speakTrees = (name) => {
        const speech = new SpeechSynthesisUtterance(name);
        speech.lang = "en-US";   
        speech.pitch = 2;      
        speech.rate = 1;        
        window.speechSynthesis.speak(speech);
      };

    return(
        <>
        <div className="trees-banner">
            <img src="assets\Trees-banner.jpg" alt="" className="trees-banner-img" />
        </div>

        <div className="trees-outer">
            <div className="container">
                <div className="trees-inner">
                    <div className="trees-block">
                        <div className="trees-card">
                            <div className="trees-img">
                                <img src="assets\pomegranate.jpg" alt="pomegranate" onMouseEnter={() => speakTrees("pomegranate")}/>
                            </div>
                            <div className="trees-content">
                                <h4 className="trees-name">Pomegranate</h4>
                            </div>
                        </div>

                         <div className="trees-card">
                            <div className="trees-img">
                                <img src="assets\peepal.jpg" alt="peepal" onMouseEnter={() => speakTrees("peepal")}/>
                            </div>
                            <div className="trees-content">
                                <h4 className="trees-name">Peepal</h4>
                            </div>
                        </div>

                        <div className="trees-card">
                            <div className="trees-img">
                                <img src="assets\Oak.jpg" alt="Oak" onMouseEnter={() => speakTrees("\oak")}/>
                            </div>
                            <div className="trees-content">
                                <h4 className="trees-name">Oak</h4>
                            </div>
                        </div>

                         <div className="trees-card">
                            <div className="trees-img">
                                <img src="assets\Neem.jpg" alt="Neem" onMouseEnter={() => speakTrees("neem")}/>
                            </div>
                            <div className="trees-content">
                                <h4 className="trees-name">Neem</h4>
                            </div>
                        </div>

                         <div className="trees-card">
                            <div className="trees-img">
                                <img src="assets\Guava.jpg" alt="Guava" onMouseEnter={() => speakTrees("guava")}/>
                            </div>
                            <div className="trees-content">
                                <h4 className="trees-name">Guava</h4>
                            </div>
                        </div>

                         <div className="trees-card">
                            <div className="trees-img">
                                <img src="assets\Mango.jpg" alt="Mango" onMouseEnter={() => speakTrees("mango")}/>
                            </div>
                            <div className="trees-content">
                                <h4 className="trees-name">Mango</h4>
                            </div>
                        </div>

                         <div className="trees-card">
                            <div className="trees-img">
                                <img src="assets\Coconut.jpg" alt="Coconut" onMouseEnter={() => speakTrees("coconut")}/>
                            </div>
                            <div className="trees-content">
                                <h4 className="trees-name">Coconut</h4>
                            </div>
                        </div>

                         <div className="trees-card">
                            <div className="trees-img">
                                <img src="assets\Banyan.jpg" alt="Banyan" onMouseEnter={() => speakTrees("banyan")}/>
                            </div>
                            <div className="trees-content">
                                <h4 className="trees-name">Banyan</h4>
                            </div>
                        </div>

                        <div className="trees-card">
                            <div className="trees-img">
                                <img src="assets\Banana.jpg" alt="Banana" onMouseEnter={() => speakTrees("banana")}/>
                            </div>
                            <div className="trees-content">
                                <h4 className="trees-name">Banana</h4>
                            </div>
                        </div>

                        <div className="trees-card">
                            <div className="trees-img">
                                <img src="assets\Bamboo.jpg" alt="Bamboo" onMouseEnter={() => speakTrees("bamboo")}/>
                            </div>
                            <div className="trees-content">
                                <h4 className="trees-name">Bamboo</h4>
                            </div>
                        </div>

                        <div className="trees-card">
                            <div className="trees-img">
                                <img src="assets\Babul.jpg" alt="Babul" onMouseEnter={() => speakTrees("babul")}/>
                            </div>
                            <div className="trees-content">
                                <h4 className="trees-name">Babul</h4>
                            </div>
                        </div>

                        <div className="trees-card">
                            <div className="trees-img">
                                <img src="assets\Pomegranate-1.jpg" alt="Pomegranate-1" onMouseEnter={() => speakTrees("Pomegranate")}/>
                            </div>
                            <div className="trees-content">
                                <h4 className="trees-name">Pomegranate</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img src="assets\d-tree-removebg-preview.png" alt="d-tree-image" className="d-tree-image" />
        <Link to="/Sciencebook" className="back-btn-Trees">BACK</Link>
        </>
    )
}

export default Trees;