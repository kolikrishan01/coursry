import React from 'react'
import howItWorks from "../assets/img/how-it-works.png"
const Workflow = () => {
  return (
<>
<div className=' w-full flex items-center justify-center h-[150px]'>
  <h1 className='text-[3rem] max-sm:text-3xl max-md:text-4xl font-semibold uppercase text-[#10125c]'>How It <span className='bg-gradient-to-r from-[#10125c] to-[#ff6e02] text-transparent bg-clip-text'>Works</span></h1>
</div>
<div className="py-16 bg-white">  
  <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div className="space-y-4 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div className="md:5/12 lg:w-5/12">
          <img src={howItWorks} alt="image" loading="lazy" width="" height=""/>
        </div>
        <div className="md:7/12 lg:w-6/12">
        <ul className=' flex items-start gap-3 flex-col list-disc text-[1.3rem] text-black'>
          <li>The student enrolls in our program of choice for the Pay after Placement Plan.</li>
          <li>The student covers the enrollment cost.</li>
          <li>The student will receive extensive job training, resume creation, and LinkedIn profile optimization.</li>
          <li>Interviews will be scheduled for the chosen job description.</li>
          <li>Upon shortlisting, the student will receive an offer letter.</li>
          <li>The student is only required to pay the program cost only after receiving the offer letter.</li>
        </ul>
        </div>
      </div>
  </div>
</div>
</>
  )
}

export default Workflow
