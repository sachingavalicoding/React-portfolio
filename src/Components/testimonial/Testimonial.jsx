import React from 'react'
import './testimonial.css'
import Avatar1 from '../../assets/assets/avatar1.jpg'
import Avatar2 from '../../assets/assets/avatar2.jpg'
import Avatar3 from '../../assets/assets/avatar3.jpg'
import Avatar4 from '../../assets/assets/avatar4.jpg'

// import Swiper core and required modules
import {  Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';



const data = [


  {
    avatar:Avatar1,
    name:'Tina Snow',
    review:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aspernatur provident cupiditate atque, totam quos magni molestiae nostrum laudantium accusantium!'
  },

  {
    avatar:Avatar2,
    name:'Shatta wale ',
    review:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aspernatur provident cupiditate atque, totam quos magni molestiae nostrum laudantium accusantium!'
  },

  {
    avatar:Avatar3,
    name:'Kwame Desite',
    review:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aspernatur provident cupiditate atque, totam quos magni molestiae nostrum laudantium accusantium!'
  },

  {
    avatar:Avatar4,
    name:'luaa decay',
    review:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aspernatur provident cupiditate atque, totam quos magni molestiae nostrum laudantium accusantium!'
  },
]






const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonial___container"
       modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      
      pagination={{ clickable: true }}

        >
       {
        data.map(({avatar,name,review ,index}) =>{
            return(
              <SwiperSlide key={index} className='testimonial'>
          <div className="client__avatar">
            <img src={avatar} alt="" />
          </div>
            <h5>  {name}  </h5>
            <small className='client__review'>
              {review}
            </small>
        </SwiperSlide>

            )
        })

       }
      </Swiper>
    </section>
  )
}

export default Testimonial


