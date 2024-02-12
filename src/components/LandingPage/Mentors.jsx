import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import img1 from "../assets/img/yash.png";
import img2 from "../assets/img/Ranjeet Singh.png";
import img3 from "../assets/img/Rishabh Gulati.png";
import imgbg from "../assets/img/linkdin background.png"
// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';
const MentorsArray = [
  {
    image:imgbg,
    img: img1,
    name: "Yash",
    linkedin:"https://www.linkedin.com/in/yash-baghel-%F0%9F%87%AE%F0%9F%87%B3-425883191?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
  },
  {
    image:imgbg,
    img: img2,
    name: "Ranjeet Singh",
    linkedin:"https://www.linkedin.com/in/ranjeetsingh7890?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
  },
  {
    image:imgbg,
    img: img3,
    name: "Rishabh Gulati",
    linkedin:"https://www.linkedin.com/in/rishabh-gulati7/"
  },
];

export default function Mentors() {
  return (
    <>
     <div className=" p-[3rem]">
        <div className=' w-full flex items-center justify-center h-[150px]'>
          <h1 className='text-[3rem] max-sm:text-3xl max-md:text-4xl font-semibold uppercase text-[#10125c]'>
            OUR ME
            <span className="bg-gradient-to-r from-[#10125c] to-[#ff6e02] text-transparent bg-clip-text">
              NTORS
            </span>
          </h1>
        </div>
      <Swiper 
      navigation={true} 
      modules={[Navigation]} 
      className="mySwiper"
      slidesPerView={3}
      spaceBetween={35}
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
      }}>
       {MentorsArray?.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                className=" w-auto flex items-center justify-center pb-6"
              >
                <div className="bg-white p-[1rem] rounded-lg shadow-md max-w-md w-full h-[100%]">
                  <div className="relative">
                    <img
                      src={item?.image}
                      alt="Banner Profile"
                      className="w-full rounded-t-lg"
                    />
                    <img
                      src={item?.img}
                      alt="Profile Picture"
                      className="absolute bottom-[2.5rem] left-2/4 transform -translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full border-2 border-white"
                    />
                  </div>

                  <div className="flex items-center justify-center mt-[1rem]">
                    <h1 className="text-xl font-bold text-gray-800 ">{item?.name}</h1>
                  </div>

                  <p className="font-bold text-gray-700 mt-[1rem] text-center">
                    {" "}
                    Web Developer{" "}
                  </p>

                  <div className="flex text-center justify-center items-center  space-x-4 mt-2">
                    <a href={item?.linkedin} className="text-blue-500 hover:underline">
                      {" "}
                      LinkedIn{" "}
                     </a>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          
      </Swiper>
      </div>
    </>
  );
}
