import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from "../assets/courses/1.png";
import img2 from "../assets/courses/2.png";
import img3 from "../assets/courses/3.png";

// import './styles.css';

// import required modules
import { Pagination, HashNavigation } from "swiper/modules";

const DemandCoursesArray = [
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
];

export default function DemandCourses() {
  return (
    <div className="bg-slate-300 ">
      <div className="w-full h-[200px] flex items-center justify-center">
        <h1 className=" text-5xl font-semibold uppercase text-[#10125c]">
          Our IN-
          <span className="bg-gradient-to-r from-[#10125c] to-[#ff6e02] text-transparent bg-clip-text">DEMAND </span> COURSES
        </h1>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={1}
        hashNavigation={{
          watchState: false,
        }}
        pagination={{
          clickable: true,
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
        modules={[Pagination, HashNavigation]}
        className="mySwiper"
      >
        {DemandCoursesArray?.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              className="w-auto flex items-center justify-center"
            >
              <div className="relative flex w-full max-w-[30rem] h-[28rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                  <img src={item?.img} alt="ui/ux review check" />
                  <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                      {item?.name}
                    </h5>
                  </div>

                  <div className="group mt-8 inline-flex flex-wrap items-center gap-3"></div>
                </div>
                <div className="p-6 pt-3">
                  <button
                    className="block w-full select-none rounded-lg bg-blue-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    Reserve
                  </button>
                </div>
              </div>

              <div className="w-full pt-5 px-4 mb-8 mx-auto "></div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
