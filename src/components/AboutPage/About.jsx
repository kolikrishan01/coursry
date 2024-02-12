import React, { useState, useEffect } from "react";
import bgImage from "../assets/bg.jpg";
import image from "../assets/icon/Amazon-Inspector.avif";

const About = () => {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        id="banner"
        className="bg-cover bg-fixed bg-center text-white h-screen flex justify-center items-center flex-col"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPositionY: `-${scrollPos / 4}px`,
        }}
      >
        <div
          id="bannertext"
          className="w-96 border-2 border-black p-8 opacity-100 md:opacity-75 text-center"
          style={{
            opacity: 1 - scrollPos / 250,
          }}
        >
          <h1 className="text-4xl font-bold text-black">ABOUT US</h1>
          <p className="text-2xl font-bold text-black">
            Finest webdesign since 1870
          </p>
        </div>
      </div>

      <div id="content" className="max-w-screen-md mx-auto text-justify py-8">
        <h2 className="text-4xl font-bold mx-auto flex justify-center">
          About us
        </h2>
        <p>
          Welcome To Coursry, Your Trusted Partner In The Journey Of Learning.
          Founded Back In 2019, We Are Committed To Empowering Learners Of All
          Ages And Background To Unlock Their Full Potential Through Quality
          Education And Accessible Resources.
        </p>
        <br />
        <p>
          Ut urna urna, rhoncus eget, vestibulum tempus, venenatis non, nunc.
          Nunc consequat quam in nulla. Praesent feugiat posuere orci. Sed ac
          ante. Mauris pellentesque massa vitae ante mattis bibendum. Quisque
          dapibus lectus eu eros. Nulla facilisi. Praesent hendrerit egestas
          erat. Suspendisse at velit. Quisque mollis feugiat est. Curabitur ut
          leo. Cras auctor semper augue. Pellentesque leo pede, tempus sed,
          ornare in, venenatis sed, nisl. Quisque est velit, eleifend vitae,
          mollis ac, adipiscing at, eros. Mauris velit. Etiam nec lorem.
          Vestibulum pellentesque ligula a velit. Maecenas felis metus, suscipit
          et, eleifend vel, accumsan vitae, magna. Phasellus ut justo vel magna
          congue laoreet.
        </p>
      </div>

      {/*  */}

      <main class="relative h-screen overflow-hidden bg-white dark:bg-gray-800">
        <div class="relative z-20 flex items-center overflow-hidden bg-white dark:bg-gray-800">
          <div class="container relative flex px-6 py-16 mx-auto">
            <div class="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
              {/* <span class="w-20 h-2 mb-12 bg-gray-800 dark:bg-white"></span> */}
              <h1 class="flex flex-col text-4xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-5xl dark:text-white">
                Our
                <span class="text-4xl sm:text-6xl">Story</span>
              </h1>
              <p class="text-sm text-gray-700 sm:text-base dark:text-white mt-2">
                Coursry Is Worlds #1 Community Driven Ed-Tech Company That Focus
                On Bridging The Gaps Of Skills. We Believe That Our Customers
                Should Be Able To Understand What They Are Learning, So We Make
                It Simple, Smooth, And Entire. We Conduct A 360-Degree
                Evaluation Of The Candidate Needs Before Providing An E-Learning
                Solution By Involving Our Self In Each Root Level Definite
                Conversation To The Greatest Extent Feasible. Following, The
                Quality Examination Procedure Determined That The Learning
                Modules Are Up To Date With The Current Norms And Requirements.
                <br />
                <br />
                Our Clients Benefit From Our Efforts By Receiving The Greatest
                Rewards And Staying Ahead Of The Competition.
                <br />
                <br />
                We Offer Standard Quality Training In Disciplines Like Cloud
                Computing, Data Science, Cyber Security, Digital Marketing And
                Others.
                <br />
                <br />
                Based In San Jose, California And Noida, India, We Have Up
                Skilled More Than 1, 00, 000+ Candidates By Achieving Their
                Desired Goals.
              </p>
            </div>
            <div class="relative hidden sm:block sm:w-1/3 lg:w-3/5">
              <img src={image} class="max-w-xs m-auto md:max-w-sm" />
            </div>
          </div>
        </div>
      </main>
      <main class="relative h-screen overflow-hidden bg-white dark:bg-gray-800">
        <div class="relative z-20 flex items-center overflow-hidden bg-white dark:bg-gray-800">
          <div class="container relative flex px-6 py-16 mx-auto">
            <div class="relative hidden sm:block sm:w-1/3 lg:w-3/5">
              <img src={image} class="max-w-xs m-auto md:max-w-sm" />
            </div>
            <div class="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
              {/* <span class="w-20 h-2 mb-12 bg-gray-800 dark:bg-white"></span> */}

              <p class="text-sm text-gray-700 sm:text-base dark:text-white mt-2">
                Coursry Is Worlds #1 Community Driven Ed-Tech Company That Focus
                On Bridging The Gaps Of Skills. We Believe That Our Customers
                Should Be Able To Understand What They Are Learning, So We Make
                It Simple, Smooth, And Entire. We Conduct A 360-Degree
                Evaluation Of The Candidate Needs Before Providing An E-Learning
                Solution By Involving Our Self In Each Root Level Definite
                Conversation To The Greatest Extent Feasible. Following, The
                Quality Examination Procedure Determined That The Learning
                Modules Are Up To Date With The Current Norms And Requirements.
                <br />
                <br />
                Our Clients Benefit From Our Efforts By Receiving The Greatest
                Rewards And Staying Ahead Of The Competition.
                <br />
                <br />
                We Offer Standard Quality Training In Disciplines Like Cloud
                Computing, Data Science, Cyber Security, Digital Marketing And
                Others.
                <br />
                <br />
                Based In San Jose, California And Noida, India, We Have Up
                Skilled More Than 1, 00, 000+ Candidates By Achieving Their
                Desired Goals.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
