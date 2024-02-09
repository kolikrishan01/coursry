import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import img1 from "../assets/partners/276139.png";
import img2 from "../assets/partners/302571.jpg";
import img3 from "../assets/partners/584111.jpg";
import img4 from "../assets/partners/672656.jpg";
import img5 from "../assets/partners/861420.jpg";
// import img6 from "../assets/partners/940475.jpg"

import { Autoplay } from "swiper/modules";
const KnowledgePartnersArray = [
  {
    img: img1,
  },
  {
    img: img2,
  },
  {
    img: img3,
  },
  {
    img: img4,
  },
  {
    img: img5,
  },
  // {
  //   img:img6
  // },
];
export default function KnowledgePartners() {
  return (
    <>
      <div className="h-[150px] flex items-center justify-center">
        <h1 className="text-[3rem] max-sm:text-3xl max-md:text-4xl font-semibold uppercase text-[#10125c]">
          Our Knowledge Pa
          <span className="bg-gradient-to-r from-[#10125c] to-[#ff6e02] text-transparent bg-clip-text">
            rtners
          </span>
        </h1>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          425: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {KnowledgePartnersArray?.map((item, index) => {
          return (
            <SwiperSlide key={index} className=" w-auto">
              <div className=" flex items-center justify-center h-[200px]">
                <img
                  src={item?.img}
                  alt=""
                  className="h-[150px] w-[150px] object-contain"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
