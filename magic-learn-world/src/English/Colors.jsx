import React, { useEffect } from 'react';

import '../Css/Colors.css'; 
import { Link } from "react-router-dom";

const Colors = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        }, []);

    return(
        <>
            <div className="color-img">
                <img src="assets\color-removebg-preview.png" alt="color-banner-image" />
            </div>
            <div className="color-outer">
                <div className="container">
                    <div className="color-inner">
                        <div className="colors-image-card">
                            <div className="color-card">
                                <img src="assets\Orange.jpg" alt="Orange-card" className='orange' onMouseEnter={() => new Audio("/Sound/orange.mp3").play()}/>
                            </div>

                             <div className="color-card">
                                <img src="assets\green.jpg" alt="green-card" className='green' onMouseEnter={() => new Audio("/Sound/green.mp3").play()}/>
                            </div>

                             <div className="color-card">
                                <img src="assets\purple.jpg" alt="Orange-card" className='purple' onMouseEnter={() => new Audio("/Sound/purple.mp3").play()}/>
                            </div>

                            <div className="color-card">
                                <img src="assets\blue.jpg" alt="blue-card" className='blue' onMouseEnter={() => new Audio("/Sound/blue.mp3").play()}/>
                            </div>

                            <div className="color-card">
                                <img src="assets\white.jpg" alt="white-card" className='white' onMouseEnter={() => new Audio("/Sound/white.mp3").play()}/>
                            </div>

                            <div className="color-card">
                                <img src="assets\yellow.jpg" alt="yellow-card" className='yellow' onMouseEnter={() => new Audio("/Sound/yellow.mp3").play()}/>
                            </div>

                            <div className="color-card">
                                <img src="assets\pink.jpg" alt="pink-card" className='pink' onMouseEnter={() => new Audio("/Sound/pink.mp3").play()}/>
                            </div>

                            <div className="color-card">
                                <img src="assets\brown.jpg" alt="brown-card" className='brown' onMouseEnter={() => new Audio("/Sound/brown.mp3").play()}/>
                            </div>

                            <div className="color-card">
                                <img src="assets\grey.jpg" alt="grey-card" className='grey' onMouseEnter={() => new Audio("/Sound/grey.mp3").play()}/>
                            </div>

                            <div className="color-card">
                                <img src="assets\black.jpg" alt="black-card" className='black' onMouseEnter={() => new Audio("/Sound/black.mp3").play()}/>
                            </div>

                        <img src="\assets\doremon-colors-removebg-preview.png" alt="doremon-image" className='doremon-color' />
                        </div><Link to="/Englishbooks" className="back-btn-colors">BACK</Link>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Colors;

