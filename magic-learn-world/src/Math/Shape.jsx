import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import '../Css/Shape.css';
const Shape = () => {

    useEffect(() => {
             window.scrollTo(0, 0);
         }, []);    

         
    return(
        <>
            <div className="shap-banner">
                <img src="assets\shape-banner.jpg" alt="shape-banner-image"  className="shap-img-banner"/>
            </div>
            <h3 className="note">Click on the shapes to hear their names! 🎵</h3>
            <div className="shape-outer">
                <div className="container">
                    <div className="shape-inner">
                        <div className="shape-block">
                            <div className="shape-card">
                                <img src="assets/circle.jpg" alt="circle-image" onClick={() => new Audio("/Sound/circle.mp3").play()}/>
                            </div>

                            <div className="shape-card">
                                <img src="assets/triangle.jpg" alt="triangle-image" onClick={() => new Audio("/Sound/triangle.mp3").play()}/>
                            </div>

                             <div className="shape-card">
                                <img src="assets/square.jpg" alt="square-image" onClick={() => new Audio("/Sound/square.mp3").play()}/>
                            </div>

                            <div className="shape-card">
                                <img src="assets/rectangle.jpg" alt="rectangle-image" onClick={() => new Audio("/Sound/rectangle.mp3").play()}/>
                            </div>

                            <div className="shape-card">
                                <img src="assets/semi-circle.jpg" alt="semi-circle-image" onClick={() => new Audio("/Sound/semi circle.mp3").play()}/>
                            </div>

                            <div className="shape-card">
                                <img src="assets/oval.jpg" alt="oval-image" onClick={() => new Audio("/Sound/oval.mp3").play()}/>
                            </div>

                            <div className="shape-card">
                                <img src="assets/diamond.jpg" alt="diamond-image" onClick={() => new Audio("/Sound/diamond.mp3").play()}/>
                            </div>

                             <div className="shape-card">
                                <img src="assets/parallelogram.jpg" alt="parallelogram-image" onClick={() => new Audio("/Sound/parallelogram.mp3").play()}/>
                            </div>

                             <div className="shape-card">
                                <img src="assets/trapezoid.jpg" alt="trapezoid-image" onClick={() => new Audio("/Sound/trapezoid.mp3").play()}/>
                            </div>

                             <div className="shape-card">
                                <img src="assets/hexagone.jpg" alt="hexagone-image" onClick={() => new Audio("/Sound/hexagon.mp3").play()}/>
                            </div>

                             <div className="shape-card">
                                <img src="assets/octagone.jpg" alt="octagone-image" onClick={() => new Audio("/Sound/octagon.mp3").play()}/>
                            </div>

                             <div className="shape-card">
                                <img src="assets/pentagone.jpg" alt="pentagone-image" onClick={() => new Audio("/Sound/pentagon.mp3").play()}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Link to="/Mathbook" className="back-btn-shape">BACK</Link>
            
        </>
    )
}

export default Shape;