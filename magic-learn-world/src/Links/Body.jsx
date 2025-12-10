import React from "react";
import Banner from "../Home/Banner";
import Books from "../Home/Books";
import Notice from "../Home/Notice";
import Latest from "../Home/Latest";
import Testimonial from "../Home/Testimonial";

const Body = () => {
  return (
    <>
      <Banner />
      <Books />
      <Notice/> 
      <Latest />
      <Testimonial />
    </>
  );
};

export default Body;
