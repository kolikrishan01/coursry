import React from "react";
import { Link } from "react-router-dom";

import "./Banner.css"
const Banner = () => {
  return (
    <>
      <div class="relative w-full banner h-[86vh]">
        <nav class="fixed z-10 w-full bg-white md:absolute md:bg-transparent">
          <div class="container m-auto px-2 md:px-12 lg:px-7"></div>
        </nav>
        <div class="relative ">
          <div class="container m-auto px-6 pt-32 md:px-12 lg:pt-[4.8rem] lg:px-7">
            <div class="flex items-center flex-wrap px-2 md:px-0">
              <div class="relative lg:w-6/12 lg:py-24 xl:py-32">
                {/* <h1 class="font-bold text-4xl text-white md:text-5xl lg:w-10/12">
                  Your favorite dishes, right at your door
                </h1> */}
                {/* <form action="" class="w-full mt-12">
                  <div class="relative flex p-1 rounded-full bg-white border border-yellow-200 shadow-md md:p-2">
                    <input
                      placeholder="Search Courses"
                      class="w-full p-4 rounded-full"
                      type="text"
                    />
                    <button
                      type="button"
                      title="Start buying"
                      class="ml-auto py-3 px-6 rounded-full text-center transition bg-gradient-to-b from-yellow-200 to-yellow-300 hover:to-red-300 active:from-yellow-400 focus:from-red-400 md:px-12"
                    >
                      <span class="hidden text-yellow-900 font-semibold md:block">
                        Search
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-5 mx-auto bi bi-search text-yellow-900 md:hidden"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                      </svg>
                    </button>
                  </div>
                </form> */}
                {/* <p class="mt-8 text-white lg:w-10/12">
                  Sit amet consectetur adipisicing elit.{" "}
                  <Link to="/" class="text-yellow-700">
                    connection
                  </Link>{" "}
                  tenetur nihil quaerat suscipit, sunt dignissimos.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
