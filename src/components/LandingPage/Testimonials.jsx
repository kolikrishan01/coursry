import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';




import { Navigation } from 'swiper/modules';

const testimonialsArray = [
  {
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente aliasmolestiae. Numquam corrupti in laborum sed rerum et corporis.",
    name:"Name-1",
    img:""
  },
  {
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente aliasmolestiae. Numquam corrupti in laborum sed rerum et corporis.",
    name:"Name-2",
    img:""
  },
  {
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente aliasmolestiae. Numquam corrupti in laborum sed rerum et corporis.",
    name:"Name-3",
    img:""
  },
  {
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente aliasmolestiae. Numquam corrupti in laborum sed rerum et corporis.",
    name:"Name-4",
    img:""
  },
  {
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente aliasmolestiae. Numquam corrupti in laborum sed rerum et corporis.",
    name:"Name-5",
    img:""
  },
  {
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente aliasmolestiae. Numquam corrupti in laborum sed rerum et corporis.",
    name:"Name-6",
    img:""
  }
]
const Testimonials = () => {
  return (
    <>
    <div className=' w-full flex items-center justify-center flex-col h-[200px]'>
        <h1 className="text-[3rem] text-center max-sm:text-3xl max-md:text-4xl font-semibold uppercase text-[#10125c]">
          Reviews
          <span className="bg-gradient-to-r from-[#10125c] to-[#ff6e02] text-transparent bg-clip-text">
            : A Testimony from Our Alumni
          </span>
        </h1>{" "}
        <h3 className="flex justify-center font-semibold text-[1.5rem] max-sm:text-[.9rem] max-md:text-[1.2rem] text-[#10125c] mt-2">
          V
          <span className="bg-gradient-to-r from-[#10125c] to-[#ff6e02] text-transparent bg-clip-text">
            iew the comments made by our students regarding us.
          </span>
        </h3>{" "}
    </div>
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
    {
      testimonialsArray?.map((item, index)=>{
        return(
          <SwiperSlide key={index}>
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
      <img
              className="mx-auto h-20 w-20 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
            {item?.description}
            </p>
          </blockquote>
          <figcaption className="mt-10">
           
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">{item?.name}</div>
              <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                {/* <circle cx={1} cy={1} r={1} /> */}
              </svg>
              {/* <div className="text-gray-600">CEO of Workcation</div> */}
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
    </SwiperSlide>
        )
      })
    }
   
  </Swiper>

  </>
  );
};

export default Testimonials;
