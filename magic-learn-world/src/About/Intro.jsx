import React, { useEffect } from "react";

import "../Css/About.css";

const Intro = () => {
   useEffect(() => {
        window.scrollTo(0, 0);
        }, []);

  return (
    <>
      <section>
        <div className="about-outer">
          <div className="about-inner">

            <div className="about-banner">
              <img src="assets/about-banner.jpg" alt="about-banner-img" />
            </div>
            <div className="about-text">
              <img
                src="assets\about-text-removebg-preview.png"
                alt="about-text"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
