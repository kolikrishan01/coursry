import React from 'react'
import logo from "../assets/coursry logo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
const Footer = () => {
  return (
    <footer class=" bg-[#F8F9F9]">
    <div class="container p-6 mx-auto">
        <div class="lg:flex">
            <div class="w-full -mx-6 lg:w-2/5">
                <div class="px-6">
                    <a href="#">
                        <img class="w-auto h-20" src={logo} alt=""/>
                    </a>

                    <p class="max-w-sm mt-2 text-gray-500 dark:text-gray-400">Join 31,000+ other and never miss out on new tips, tutorials, and more.</p>

                    <div class="flex items-center gap-5 mt-6 -mx-2 max-sm:-mx-0 max-sm:flex-wrap">
                    <span className=' h-[50px] w-[50px] rounded-full flex items-center justify-center bg-white hover:bg-[#3a9dd3] hover:text-white text-[#3a9dd3] transition ease-in-out delay-150'>
                      <FaLinkedin />
                    </span>
                    <span className=' h-[50px] w-[50px] rounded-full flex items-center justify-center bg-white hover:bg-[#3a9dd3] hover:text-white text-[#3a9dd3] transition ease-in-out delay-150'>
                      <FaInstagram />
                    </span>
                    <span className=' h-[50px] w-[50px] rounded-full flex items-center justify-center bg-white hover:bg-[#3a9dd3] hover:text-white text-[#3a9dd3] transition ease-in-out delay-150'>
                      <FaYoutube />
                    </span>
                    <span className=' h-[50px] w-[50px] rounded-full flex items-center justify-center bg-white hover:bg-[#3a9dd3] hover:text-white text-[#3a9dd3] transition ease-in-out delay-150'>
                    <FaFacebook/>
                    </span>
                    <span className=' h-[50px] w-[50px] rounded-full flex items-center justify-center bg-white hover:bg-[#3a9dd3] hover:text-white text-[#3a9dd3] transition ease-in-out delay-150'>
                      <IoLogoTwitter />
                    </span>
                    </div>
                </div>
            </div>

            <div class="mt-6 lg:mt-0 lg:flex-1">
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div>
                        <h3 class="text-gray-700 uppercase dark:text-black text-xl">Company</h3>
                        <a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">About Us</a>
                        <a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Terms & Conditions</a>
                        <a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Privacy Policy</a>
                        <a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Return Policy</a>
                        <a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Job Guarantee Policy</a>
                        <a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Careers</a>
                        <a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Media & Blog</a>
                        <a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Contact Us</a>
                        <a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">FAQs</a>
                    </div>

                    <div>
                        <h3 class="text-gray-700 uppercase dark:text-black text-xl">Discover</h3>
                        <a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Free Courses</a>
                        <a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Resources</a>
                        <a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Discount & Coupons</a>
                    </div>

                    <div>
                        <h3 class="text-gray-700 uppercase dark:text-black text-xl">Work With Us</h3>
                        <a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Become Instructor</a>
                    </div>

                    <div>
                        <h3 class="text-gray-700 uppercase dark:text-black text-xl">For Business</h3>
                        <span class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Corporate Training.</span>
                        <span class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Partners.</span>
                    </div>
                </div>
            </div>
        </div>

        <hr class="h-px my-6 bg-gray-200 border-none dark:bg-gray-700"/>

        <div>
            <p class="text-center text-gray-500 dark:text-gray-400">© Copyright @ 2024 By <span className=' text-[#3a9dd3]'>Bharti Edutech</span> | All Rights Reserved!</p>
        </div>
    </div>
</footer>
  )
}

export default Footer
