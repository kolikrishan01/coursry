import React, { useState } from 'react'
import logo from "../assets/coursry logo.png"
import Button from '../UI/Button'
import DarkLightButton from '../UI/DarkLightButton'
import { MdArrowDropDown } from "react-icons/md";
import "./header.css"
const Header = () => {
    const [isActive, setIsActive] = useState(1);
    
  return (
    <header className=' sticky top-0'>
   <div className=' flex justify-between items-center h-[100%] w-[100%]'>
   <div className=' w-full h-[80px] flex item-center justify-center'>
    <img src={logo} alt="" className=' h-full'/>
   </div>  




   <div className=' w-full'>
    <ul className=' flex items-center justify-between font-medium navlink '>
        <span className={`h-[90px] w-[120px] flex items-center justify-center ${isActive === 1 && "active"}`} onClick={()=>setIsActive(1)}><li>Home</li></span>
        <span className={`h-[90px] w-[120px] flex items-center justify-center ${isActive === 2 && "active"}`} onClick={()=>setIsActive(2)}> <li>About</li></span>
        <li className=' flex items-center justify-center course-dropdown-hover'>Course<span><MdArrowDropDown size={25}/></span></li>
        <ul className='course-dropdwon'>
            <li>Course-1</li>
            <li>Course-2</li>
            <li>Course-3</li>
            <li>Course-4</li>
            <li>Course-5</li>
        </ul>
        <span className={`h-[90px] w-[120px] flex items-center justify-center ${isActive === 3 && "active"}`} onClick={()=>setIsActive(3)}> <li>Jobs</li></span>
        <li className=' flex items-center justify-center'>More <span><MdArrowDropDown size={25}/></span></li>
    </ul>
   </div>


   
   <div className='  w-full flex items-center justify-evenly'>
    <Button py={"py-3"} px={"px-8"} bg={"bg-[#fdc04c]"} borderRadius={"rounded"}/>
    <DarkLightButton />
   </div>
   </div>
    </header>
  )
}

export default Header
