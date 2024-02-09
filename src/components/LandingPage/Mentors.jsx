import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import img1 from "../assets/courses/1.png";
import img2 from "../assets/courses/2.png";
import img3 from "../assets/courses/3.png";
import img4 from "../assets/courses/4.jpeg";
import img5 from "../assets/courses/5.png";
import img6 from "../assets/courses/6.png";
import img7 from "../assets/courses/7.png";
import img9 from "../assets/courses/9.png";
// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';
const MentorsArray = [
  {
    img: img1,
    name: "Cloud Computing",
  },
  {
    img: img2,
    name: "Data Science",
  },
  {
    img: img3,
    name: "Cyber Security",
  },
  {
    img: img3,
    name: "Cyber Security",
  },

  {
    img: img4,
    name: "Cyber Security",
  },
  {
    img: img5,
    name: "Cyber Security",
  },
  {
    img: img6,
    name: "Cyber Security",
  },
  {
    img: img7,
    name: "Cyber Security",
  },
  {
    img: img9,
    name: "Cyber Security",
  },
];

export default function Mentors() {
  return (
    <>
     <div className="bg-slate-300 p-[3rem]">
        <div className="w-full h-[200px] flex items-center justify-center">
          <h1 className=" text-5xl font-semibold uppercase text-[#10125c]">
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
      slidesPerView={4}
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
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}>
       {MentorsArray?.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                className=" w-auto flex items-center justify-center"
              >
                <div class="bg-white p-[1rem] rounded-lg shadow-md max-w-md w-full h-[22rem] ">
                  <div class="relative">
                    <img
                      src="https://placekitten.com/500/190"
                      alt="Banner Profile"
                      class="w-full rounded-t-lg"
                    />
                    <img
                      src={item?.img}
                      alt="Profile Picture"
                      class="absolute bottom-0 left-2/4 transform -translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full border-4 border-white"
                    />
                  </div>

                  <div class="flex items-center justify-center mt-[3rem]">
                    <h1 class="text-xl font-bold text-gray-800 ">John Doe</h1>
                  </div>

                  <p class="text-gray-700 mt-[1rem] text-center">
                    {" "}
                    Web Developer | Cat Lover | Coffee Enthusiast{" "}
                  </p>

                  <div class="flex text-center justify-center items-center mt-[2rem] space-x-4">
                    <a href="#" class="text-blue-500 hover:underline">
                      {" "}
                      Twitter{" "}
                    </a>
                    <a href="#" class="text-blue-500 hover:underline">
                      {" "}
                      GitHub{" "}
                    </a>
                    <a href="#" class="text-blue-500 hover:underline">
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
