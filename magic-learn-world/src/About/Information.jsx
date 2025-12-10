import React from "react";

import "../Css/Information.css";
const Information = () => {
  return (
    <>
      <div className="about-outer">
        <div className="container">
          <div className="about-inner">
            <div className="about-information">
              <div className="about-info-text">
                <h4>
                  {" "}
                  Our mission is to make learning exciting and enjoyable by
                  combining education with imagination. We offer colorful
                  visuals, and interactive activities that inspire young minds.
                </h4>
              </div>
              <div className="about-info-image">
                <img
                  src="assets\kids-removebg-preview.png"
                  alt="information-block-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
