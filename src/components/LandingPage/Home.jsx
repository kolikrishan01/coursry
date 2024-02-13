import React, { useState, useEffect } from "react";
import Banner from "./Bannner";
import KnowledgePartners from "./KnowledgePartners";
import DemandCourses from "./DemandCourses";
import Workflow from "./Workflow";
import TopRecruiters from "./TopRecruiters";
import Webinars from "./Webinars";
import Testimonials from "./Testimonials";
import Awards from "./Awards";
import Mentors from "./Mentors";
import WhyChoosUs from "./WhyChoosUs";
import LiveCommunity from "./LiveCommunity";
import Modal from "./PopUp";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [popupCount, setPopupCount] = useState(0);

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    let timer;

    // Function to handle scroll event
    const handleScroll = () => {
      // If the user scrolls more than 5 seconds after landing and popupCount is less than 2
      if (window.scrollY > 0 && !showModal && popupCount < 2) {
        // Show the popup after 5 seconds for the first popup
        if (popupCount === 0) {
          timer = setTimeout(() => {
            setShowModal(true);
            setPopupCount((prevCount) => prevCount + 1); // Increment popup count
          }, 5000); // Change the delay to 5000 milliseconds (5 seconds)
        } else if (popupCount === 1) {
          // Show the popup after 10 seconds for the second popup
          timer = setTimeout(() => {
            setShowModal(true);
            setPopupCount((prevCount) => prevCount + 1); // Increment popup count
          }, 10000); // Change the delay to 10000 milliseconds (10 seconds) for the second popup
        }
      }
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, [popupCount, showModal]);

  return (
    <>
      {showModal && <Modal onClose={handleCloseModal} />}
      <Banner />
      <TopRecruiters />
      <DemandCourses />
      <Workflow />
      <LiveCommunity />
      <WhyChoosUs />
      <KnowledgePartners />
      <Webinars />
      <Testimonials />
      <Awards />
      <Mentors />
    </>
  );
};

export default Home;
