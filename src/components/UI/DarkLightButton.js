import React, { useState } from 'react'
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
const DarkLightButton = () => {
    const  [isDark, setIsDark] = useState(false)
  return (
    <div>
    {
        isDark ?<MdOutlineLightMode size={25} onClick={()=>setIsDark(!isDark)}/> : <MdDarkMode  size={25} onClick={()=>setIsDark(!isDark)}/> 
    }
      
 
    </div>
  )
}

export default DarkLightButton
