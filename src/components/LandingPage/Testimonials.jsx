import React from "react";

const Testimonials = () => {
  return (
    <div>
      {/* Swiper */}
      <>
        <h1 className="flex justify-center font-bold text-5xl text-[#10125c]">
          Reviews
          <span className="bg-gradient-to-r from-[#10125c] to-[#ff6e02] text-transparent bg-clip-text">
            : A Testimony from Our Alumni
          </span>
        </h1>{" "}
        <h3 className="flex justify-center font-semibold text-2xl text-[#10125c] mt-2">
          V
          <span className="bg-gradient-to-r from-[#10125c] to-[#ff6e02] text-transparent bg-clip-text">
            iew the comments made by our students regarding us.
          </span>
        </h3>{" "}
        <hr />
      </>
    </div>
  );
};

export default Testimonials;
