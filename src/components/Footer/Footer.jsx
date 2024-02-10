import React from "react";
import logo from "../assets/coursry logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import facebook from "../assets/facebook_5968764.png";
import instagram from "../assets/instagram_2111463.png";
import linkedin from "../assets/linkedin_145807.png";
import twitter from "../assets/twitter_5969020.png";
import youtube from "../assets/youtube_1384060.png";
const Footer = () => {
  return (
    <>
    <footer class=" bg-[#F8F9F9]">
      <div class="container p-6 mx-auto">
        <div class="lg:flex">
          <div class="w-full -mx-6 lg:w-2/5">
            <div class="px-6">
              <Link to="/">
                <img class="w-auto h-20" src={logo} alt="" />
              </Link>

              <div class="flex items-center gap-5 mt-6 -mx-2 max-sm:-mx-0 max-sm:flex-wrap">
                <span className=" h-[50px] w-[50px] rounded-full flex items-center justify-center bg-white hover:bg-[#3a9dd3] hover:text-white text-[#3a9dd3] transition ease-in-out delay-150">
                  {/* <FaLinkedin /> */}
                  <Link
                    to="https://www.linkedin.com/company/coursry-future-techies/about/"
                    target="_blank"
                  >
                    <img className="w-auto h-7" src={linkedin} alt="FB" />
                  </Link>
                </span>
                <span className=" h-[50px] w-[50px] rounded-full flex items-center justify-center bg-white hover:bg-[#D34E60] hover:text-white text-[#3a9dd3] transition ease-in-out delay-150">
                  {/* <FaInstagram /> */}
                  <Link
                    to="https://www.instagram.com/coursry_edu/"
                    target="_blank"
                  >
                    <img className="w-auto h-7" src={instagram} alt="FB" />
                  </Link>
                </span>
                <span className=" h-[50px] w-[50px] rounded-full flex items-center justify-center bg-white hover:bg-[#FF0100] hover:text-white text-[#3a9dd3] transition ease-in-out delay-150">
                  {/* <FaYoutube /> */}
                  <Link
                    to="https://www.youtube.com/channel/UC1tXjw1PLxdxmZKqVZAuK2w"
                    target="_blank"
                  >
                    <img className="w-auto h-7" src={youtube} alt="FB" />
                  </Link>
                </span>
                <span className=" h-[50px] w-[50px] rounded-full flex items-center justify-center bg-white hover:bg-[#1779F3] hover:text-white text-[#3a9dd3] transition ease-in-out delay-150">
                  {/* <FaFacebook /> */}
                  <Link to="https://www.facebook.com/coursry/" target="_blank">
                    <img className="w-auto h-7" src={facebook} alt="FB" />
                  </Link>
                </span>
                <span className=" h-[50px] w-[50px] rounded-full flex items-center justify-center bg-white hover:bg-[#3a9dd3] hover:text-white text-[#3a9dd3] transition ease-in-out delay-150">
                  {/* <IoLogoTwitter /> */}
                  <Link to="https://twitter.com/coursry" target="_blank">
                    <img className="w-auto h-7" src={twitter} alt="FB" />
                  </Link>
                </span>
              </div>
              <h3 className="text-2xl font-bold ">Our Presence</h3>
              <p class="max-w-sm mt-2 text-black dark:text-black">
                B-24, Sector 1, Gautam Buddha Nagar – 201301
                <br />
                +91 - 9999999999 , 18008969999
              </p>
            </div>
          </div>

          <div class="mt-6 lg:mt-0 lg:flex-1">
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div>
                <h3 class="text-gray-700 uppercase dark:text-black text-xl font-bold">
                  Company
                </h3>
                <Link
                  to="#"
                  class="block mt-2 text-sm text-black dark:text-black hover:underline"
                >
                  About Us
                </Link>
                <Link
                  to="#"
                  class="block mt-2 text-sm text-black dark:text-black hover:underline"
                >
                  Terms & Conditions
                </Link>
                <Link
                  to="#"
                  class="block mt-2 text-sm text-black dark:text-black hover:underline"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="#"
                  class="block mt-2 text-sm text-black dark:text-black hover:underline"
                >
                  Return Policy
                </Link>
                <Link
                  to="#"
                  class="block mt-2 text-sm text-black dark:text-black hover:underline"
                >
                  Job Guarantee Policy
                </Link>
                <Link
                  to="#"
                  class="block mt-2 text-sm text-black dark:text-black hover:underline"
                >
                  Careers
                </Link>
                <Link
                  to="#"
                  class="block mt-2 text-sm text-black dark:text-black hover:underline"
                >
                  Media & Blog
                </Link>
                <Link
                  to="#"
                  class="block mt-2 text-sm text-black dark:text-black hover:underline"
                >
                  Contact Us
                </Link>
                <Link
                  to="#"
                  class="block mt-2 text-sm text-black dark:text-black hover:underline"
                >
                  FAQs
                </Link>
              </div>

              <div>
                <h3 class="text-gray-700 uppercase dark:text-black text-xl font-bold">
                  Discover
                </h3>
                <Link
                  to="#"
                  class="block mt-2 text-sm text-black dark:text-black hover:underline"
                >
                  Free Courses
                </Link>
                <Link
                  to="#"
                  class="block mt-2 text-sm text-black dark:text-black hover:underline"
                >
                  Resources
                </Link>
                <Link
                  to="#"
                  class="block mt-2 text-sm text-black dark:text-black hover:underline"
                >
                  Discount & Coupons
                </Link>
              </div>

              <div>
                <h3 class="text-gray-700 uppercase dark:text-black text-xl font-bold">
                  Work With Us
                </h3>
                <Link
                  to="#"
                  class="block mt-2 text-sm text-black dark:text-black hover:underline"
                >
                  Become Instructor
                </Link>
              </div>

              <div>
                <h3 class="text-gray-700 uppercase dark:text-black text-xl font-bold">
                  For Business
                </h3>
                <span class="block mt-2 text-sm text-black dark:text-black hover:underline cursor-pointer ">
                  Corporate Training.
                </span>
                <span class="block mt-2 text-sm text-black dark:text-black hover:underline cursor-pointer">
                  Partners.
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr class="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

        <div>
          <p class="text-center text-gray-500 dark:text-black">
            © Copyright @ 2024 By{" "}
            <Link to="/" className="text-[#3a9dd3] font-bold">
              Bharti Edutech
            </Link>{" "}
            | All Rights Reserved!
          </p>
        </div>
      </div>
    </footer>
    <div className=" w-full py-1 sticky bottom-0 bg-[#2C3E50] text-white z-50 flex items-center justify-evenly flex-wrap max-sm:gap-2 max-sm:h-[90px]">
    <div className=" flex items-center justify-center gap-8">
     <span className=" flex items-center justify-center gap-2">
     <FaPhoneAlt />
      <p>Request a Callback</p>
     </span>
                <Link className="-mx-3 block rounded-lg px-6  text-base font-semibold leading-7 bg-blue-600 text-center text-white">
                  Call
                </Link>
    </div>
    <div>
    <p>For Career Assistance- Callus on-(+91-XXXX-9890-87)</p>
    </div>
    </div>
    </>
  );
};

export default Footer;
