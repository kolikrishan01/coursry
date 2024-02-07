import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import About from "../AboutPage/About";
import Jobs from "../JobsPage/Jobs";
import Contest from "../ContestsPage/Contest";
import Login from "../Authentication/Login/Login";
import MediaNews from "../MorePage/MediaNews";
import Career from "../MorePage/Career";
import Resources from "../MorePage/Resources";
import InterviewGuidance from "../MorePage/InterviewGuidance";
import Business from "../MorePage/Business";
import CloudComputing from "../CoursesPage/CloudComputing";
import DataScience from "../CoursesPage/DataScience";
import CyberSecurity from "../CoursesPage/CyberSecurity";
import SoftwareTesting from "../CoursesPage/SoftwareTesting";
import ElectricVehicles from "../CoursesPage/ElectricVehicles";
import InvestmentBanking from "../CoursesPage/InvestmentBanking";
import FullStackDevelopment from "../CoursesPage/FullStackDevelopment";
import JobGuarantee from "../CoursesPage/JobGuarantee";
import DigitalMarketing from "../CoursesPage/DigitalMarketing";
import NotFound from "../404NotFound/NotFound";
import SignUp from "../Authentication/SignUp/SignUp";
import Home from "../LandingPage/Home";

const Layout = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Courses Routes */}
        <Route path="/cloud-computing" element={<CloudComputing />} />
        <Route path="/data-science" element={<DataScience />} />
        <Route path="/cyber-security" element={<CyberSecurity />} />
        <Route path="/software-testing" element={<SoftwareTesting />} />
        <Route path="/electric-vehicles" element={<ElectricVehicles />} />
        <Route path="/investment-banking" element={<InvestmentBanking />} />
        <Route
          path="/full-stack-web-development"
          element={<FullStackDevelopment />}
        />
        <Route path="/job-guarantee-bootcamp" element={<JobGuarantee />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />

        <Route path="/jobs" element={<Jobs />} />
        <Route path="/contests" element={<Contest />} />

        {/* Authentication Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />

        {/* More Routes */}
        <Route path="/media-news" element={<MediaNews />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/interview-guidance" element={<InterviewGuidance />} />
        <Route path="/coursry-business" element={<Business />} />
        <Route path="/career" element={<Career />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Layout;
