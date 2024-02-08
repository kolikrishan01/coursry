import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


import {Autoplay } from 'swiper/modules';
const KnowledgePartnersArray = [
  {
    img:"https://coursry.com/assets/alumnus/548613.jpg"
  },
  {
    img:"https://coursry.com/assets/alumnus/874778.png"
  },
  {
    img:"https://coursry.com/assets/alumnus/861978.png"
  },
  {
    img:"https://coursry.com/assets/alumnus/818497.png"
  },
  {
    img:"https://coursry.com/assets/alumnus/711032.png"
  },
  {
    img:"https://coursry.com/assets/alumnus/387511.png"
  },
  {
    img:"https://coursry.com/assets/alumnus/725617.png"
  },
  {
    img:"https://coursry.com/assets/alumnus/303956.jpg"
  },
  {
    img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1280px-Infosys_logo.svg.png"
  }
];
export default function TopRecruiters() {
  return (
    <>
    
    <div className=' w-full flex items-center justify-center h-[150px]'>
  <h1 className='text-[3rem] max-sm:text-3xl max-md:text-4xl font-semibold uppercase text-[#10125c]'>Our Top Re<span className='bg-gradient-to-r from-[#10125c] to-[#ff6e02] text-transparent bg-clip-text'>cruiters</span></h1>
</div>
      <Swiper
        slidesPerView={6}
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
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
       {
        KnowledgePartnersArray?.map((item,index)=>{
          return(
            <SwiperSlide key={index} className=' w-auto'>
              <div className=' flex items-center justify-center h-[300px]'>
              <img src={item?.img} alt="" className='h-[150px] w-[150px] object-contain'/>
              </div>
            </SwiperSlide>
          )
        })
       }
     

      </Swiper>
    </>
  );
}