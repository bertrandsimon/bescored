'use client'
import Image from 'next/image'
import { motion, AnimatePresence  } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

import Slider from "react-slick";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function Footer() {

  const image = [
    {
    src : '/images/medical-bg.jpg',
  },
  {
    src : '/images/medical-bg2.jpg',
  },
  ]

  
  

  return (
    
      <div>
       <h1>FOOTER</h1>

       <h2> Single Item</h2>

       <Carousel>
                  <div>
                      <img src="/images/medical-bg.jpg" alt="image1"/>
                      <p className="legend">Image 1</p>
  
                  </div>
                  <div>
                      <img src="/images/medical-bg2.jpg" alt="image2" />
                      <p className="legend">Image 2</p>
  
                  </div>
                  <div>
                      <img src="/images/medical-bg.jpg" alt="image3"/>
                      <p className="legend">Image 3</p>
  
                  </div>
                  <div>
                      <img src="/images/medical-bg2.jpg" alt="image4"/>
                      <p className="legend">Image 4</p>
  
                  </div>
                  <div>
                      <img src="/images/medical-bg.jpg" alt="image5"/>
                      <p className="legend">Image 5</p>
  
                  </div>
              </Carousel>


        {/* <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider> */}
       {/* <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          ...
        </Swiper> */}
       {/* <AnimatePresence>
          <motion.img
            key={image.src}
            src={image.src}
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        </AnimatePresence>

       <motion.div 
        className="box"
        animate={{ x: 100 }}
         initial={{ opacity: 0.5 }}
         transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1
        }}
       /> */}

      <h2>end</h2>
      </div>
      
   
  )
}
