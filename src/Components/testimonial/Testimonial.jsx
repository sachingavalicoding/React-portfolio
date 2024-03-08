import React from "react";
import "./testimonial.css";
import Avatar1 from "../../assets/assets/avatar1.jpg";
import Avatar2 from "../../assets/assets/avatar2.jpg";
import Avatar3 from "../../assets/assets/avatar3.jpg";
import Avatar4 from "../../assets/assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

const data = [
  {
    avatar: Avatar1,
    name: "Tina Snow",
    review:
      "Working with Sachin Gavali was a pleasure! Great communication, strong expertise, and delivered results beyond my expectations.",
  },

  {
    avatar: Avatar2,
    name: "Shatta wale ",
    review:
      " Sachin Gavali has solid skills but could enhance communication for smoother collaboration. Overall, a positive experience with room for improvement.",
  },

  {
    avatar: Avatar3,
    name: "Kwame Desite",
    review:
      " Highly recommend Sachin Gavali! Excellent work ethic, attention to detail, and a valuable asset to any project",
  },

  {
    avatar: Avatar4,
    name: "luaa decay",
    review:
      "Sachin Gavali exceeded my expectations. Their dedication, skills, and professionalism made the collaboration a success. Very satisfied!",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonial___container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review, index }) => {
          return (
            <SwiperSlide key={name} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5> {name} </h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
