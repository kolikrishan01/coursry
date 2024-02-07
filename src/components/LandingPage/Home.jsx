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

const Home = () => {
  return (
    <>
      <Banner />
      <KnowledgePartners />
      <DemandCourses />
      <Workflow />
      <TopRecruiters />
      <Webinars />
      <Testimonials />
      <Awards />
      <Mentors />
    </>
  );
};

export default Home;
