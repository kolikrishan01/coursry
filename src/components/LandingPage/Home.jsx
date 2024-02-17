import React from "react";
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
import Instructor from "./Instructor";
import ContactForm from "./ContactForm";

const Home = () => {
  return (
    <>
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
      <Instructor/>
      <ContactForm/>
    </>
  );
};

export default Home;
