import react, { useEffect } from "react";

import { Link } from "react-router-dom";
import '../Css/Verb.css';

const Verb = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        }, []);
    return(
        <>
            <div className="verb-banner">
                <img src="assets/verb-banner.jpg" alt="Verb-banner-image" className="verb-image"/>
            </div>

            <div className="verb-outer">
                <div className="container">
                    <div className="verb-inner">
                        <div className="verb-block">
                            <div className="verb-card">
                                <img src="assets\play.jpg" alt="play-image" className="play" onMouseEnter={() => new Audio("/Sound/1755611064381191383yl9nywhf-voicemaker.in-speech.mp3").play()}/>
                            </div>

                             <div className="verb-card">
                                <img src="assets\wash.jpg" alt="wash-image" className="wash" onMouseEnter={() => new Audio("/Sound/17556111262018961988l96fe1-voicemaker.in-speech.mp3").play()}/>
                            </div>

                             <div className="verb-card">
                                <img src="assets\dance.jpg" alt="dance-image" className="dance" onMouseEnter={() => new Audio("/Sound/1755611318319474572nph45rge-voicemaker.in-speech.mp3").play()}/>
                            </div>

                             <div className="verb-card">
                                <img src="assets\hold.jpg" alt="hold-image" className="hold" onMouseEnter={() => new Audio("/Sound/1755611372783459854qd985qgg-voicemaker.in-speech.mp3").play()}/>
                            </div>

                             <div className="verb-card">
                                <img src="assets\cook.jpg" alt="cook-image" className="cook" onMouseEnter={() => new Audio("/Sound/1755611413448652559y9ury1vk-voicemaker.in-speech.mp3").play()}/>
                            </div>

                             <div className="verb-card">
                                <img src="assets\eat.jpg" alt="eat-image" className="eat" onMouseEnter={() => new Audio("/Sound/17556114795695282163tmzqhwe-voicemaker.in-speech.mp3").play()}/>
                            </div>

                             <div className="verb-card">
                                <img src="assets\listen.jpg" alt="listen-image" className="listen" onMouseEnter={() => new Audio("/Sound/1755611523303904522ierly0yd-voicemaker.in-speech.mp3").play()}/>
                            </div>

                             <div className="verb-card">
                                <img src="assets\bounce.jpg" alt="bounce-image" className="bounce" onMouseEnter={() => new Audio("/Sound/17556115680973081194wtv594p-voicemaker.in-speech.mp3").play()}/>
                            </div>

                            <div className="verb-card">
                                <img src="assets\night.jpg" alt="night-image" className="night" onMouseEnter={() => new Audio("/Sound/1755611764372175484h8ft61j-voicemaker.in-speech.mp3").play()}/>
                            </div>

                            <div className="verb-card">
                                <img src="assets\morning.jpg" alt="morning-image" className="morning" onMouseEnter={() => new Audio("/Sound/17556118097616578328xzhr0u8-voicemaker.in-speech.mp3").play()}/>
                            </div>

                            <div className="verb-card">
                                <img src="assets\carry.jpg" alt="carry-image" className="carry" onMouseEnter={() => new Audio("/Sound/1755611851322605908rocx8q4l-voicemaker.in-speech.mp3").play()}/>
                            </div>

                            <div className="verb-card">
                                <img src="assets\cry.jpg" alt="cry-image" className="cry" onMouseEnter={() => new Audio("/Sound/cry.mp3").play()}/>
                            </div>

                            <Link to="/Englishbooks" className="back-btn-verb">BACK</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Verb;