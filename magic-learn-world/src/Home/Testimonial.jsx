import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonial = () => {
  return (
    <>
      <h2 className="testimonials">Read Client Reviews</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 1000 }}
        loop={true}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
          641: {
            sliderperview: 2,
          },
          420: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
      >
        <SwiperSlide>
          <img className="img" src="assets\Person-1.jpg" alt="person-1" />
          <h3 className="testimonial-h3">Ms Himali Singh</h3>
          <h4 className="testimonial-h4">Software Engineer</h4>
          <p className="testimonial-text">
            "This platform has completely changed the way I learn. The lessons
            are interactive and fun!"
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img className="img" src="assets\Person-2.jpg" alt="person-2" />
          <h3 className="testimonial-h3">Mr. Devang Trivedi</h3>
          <h4 className="testimonial-h4">Teacher</h4>
          <p className="testimonial-text">
            "As an educator, I’ve found the resources here incredibly useful for
            my students."
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img className="img" src="assets\Person-3.jpg" alt="person-3" />
          <h3 className="testimonial-h3">shweta Roy</h3>
          <h4 className="testimonial-h4">Director of Cardinal Group</h4>
          <p className="testimonial-text">
            {" "}
            "Learning here feels like playing a game, but with real knowledge
            gain."
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img className="img" src="assets\Person-4.jpg" alt="person-4" />
          <h3 className="testimonial-h3">Raj Chaudhri</h3>
          <h4 className="testimonial-h4">Chairman</h4>
          <p className="testimonial-text">
            "The design and UI are so intuitive. I enjoy spending time exploring
            content."
          </p>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Testimonial;
