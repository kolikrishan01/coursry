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

  
  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    let timer;


    const handleScroll = () => {

      if (window.scrollY > 0 && !showModal && popupCount < 2) {

        if (popupCount === 0) {
          timer = setTimeout(() => {
            setShowModal(true);
            setPopupCount((prevCount) => prevCount + 1); 
          }, 15000); 
        } else if (popupCount === 1) {
          
          timer = setTimeout(() => {
            setShowModal(true);
            setPopupCount((prevCount) => prevCount + 1); 
          }, 15000); 
        }
      }
    };

    
    window.addEventListener("scroll", handleScroll);

    
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
