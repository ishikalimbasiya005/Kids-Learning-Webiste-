import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import '../Css/Addition.css';

const Addition = () => {

    useEffect(() => {
            window.scrollTo(0, 0);
            }, []);
    
     const speakAddition = (name) => {
    const speech = new SpeechSynthesisUtterance(name);
    speech.lang = "en-US";   
    speech.pitch = 1;        
    speech.rate = 1;        
    window.speechSynthesis.speak(speech);
    }
    return(
        <>
            <div className="addition-banner">
                <img src="assets\Addition-banner.jpg" alt="addition-banner-image" className="addition-banner-img" />
            </div>

            <div className="addition-outer">
                <div className="addition-inner">
                    <div className="addition-block">

                        <div className="addition-cards">
                           <div className="addition-images">
                                <img src="assets/Addition-1.jpg" alt="block-image-1" className="img-1"/>
                                <h4 className="plus-sign">+</h4>
                           </div>
                           <div className="additon-images2">
                               <img src="assets/Addition-1.jpg" alt="block-image-1" className="img-2"/>
                                <h4 className="equal-sign">=</h4>
                           </div>
                           <div className="addition-output">
                                <img src="assets/output.jpg" alt="block-image-1" className="output-1" onMouseEnter={() => speakAddition("four")}/>
                           </div>
                        </div>

                        <div className="addition-cards">
                           <div className="addition-images">
                                <img src="assets/Addition-2.jpg" alt="block-image-1" className="img-1"/>
                                <h4 className="plus-sign">+</h4>
                           </div>
                           <div className="additon-images2">
                               <img src="assets/Addition-02.jpg" alt="block-image-1" className="img-2"/>
                                <h4 className="equal-sign">=</h4>
                           </div>
                           <div className="addition-output">
                                <img src="assets/output.jpg" alt="block-image-1" className="output-2" onMouseEnter={() => speakAddition("five")}/>
                           </div>
                        </div>

                        <div className="addition-cards">
                           <div className="addition-images">
                                <img src="assets/Addition-3.jpg" alt="block-image-1" className="img-1"/>
                                <h4 className="plus-sign">+</h4>
                           </div>
                           <div className="additon-images2">
                               <img src="assets/Addition-03.jpg" alt="block-image-1" className="img-2"/>
                                <h4 className="equal-sign">=</h4>
                           </div>
                           <div className="addition-output">
                                <img src="assets/output.jpg" alt="block-image-1" className="output-3" onMouseEnter={() => speakAddition("nine")}/>
                           </div>
                        </div>

                        <div className="addition-cards">
                           <div className="addition-images">
                                <img src="assets/Addition-4.jpg" alt="block-image-1" className="img-1"/>
                                <h4 className="plus-sign">+</h4>
                           </div>
                           <div className="additon-images2">
                               <img src="assets/Addition-4.jpg" alt="block-image-1" className="img-2"/>
                                <h4 className="equal-sign">=</h4>
                           </div>
                           <div className="addition-output">
                                <img src="assets/output.jpg" alt="block-image-1" className="output-4" onMouseEnter={() => speakAddition("six")}/>
                           </div>
                        </div>

                        <div className="addition-cards">
                           <div className="addition-images">
                                <img src="assets/Addition-5.jpg" alt="block-image-1" className="img-1"/>
                                <h4 className="plus-sign">+</h4>
                           </div>
                           <div className="additon-images2">
                               <img src="assets/Addition-05.jpg" alt="block-image-1" className="img-2"/>
                                <h4 className="equal-sign">=</h4>
                           </div>
                           <div className="addition-output">
                                <img src="assets/output.jpg" alt="block-image-1" className="output-5" onMouseEnter={() => speakAddition("eight")}/>
                           </div>
                        </div>

                        <div className="addition-cards">
                           <div className="addition-images">
                                <img src="assets/Addition-6.jpg" alt="block-image-1" className="img-1"/>
                                <h4 className="plus-sign">+</h4>
                           </div>
                           <div className="additon-images2">
                               <img src="assets/Addition-06.jpg" alt="block-image-1" className="img-2"/>
                                <h4 className="equal-sign">=</h4>
                           </div>
                           <div className="addition-output">
                                <img src="assets/output.jpg" alt="block-image-1" className="output-6" onMouseEnter={() => speakAddition("seven")}/>
                           </div>
                        </div>
                    </div>
                </div>
            </div>

            <Link to="/Mathbook" className="back-btn-Addition">BACK</Link>

        </>
    )
}

export default Addition;