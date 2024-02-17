import React from 'react'

const ContactForm = () => {
  return (
    <>
     <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
    <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden">
        <div className="md:flex w-full">
            <div className="hidden md:block w-1/2 py-10 px-10">
            <img className="object-cover object-center w-full   md:h-[65%] md:mt-[7.5rem] 
              rounded-md" src="https://coursry.com/assets/img/top-view-keyboard-desk-with-succulent-plant-sticky-notes.jpg"/>
                
            </div>
            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                <div className="text-center mb-5">
                    <h1 className="font-bold text-3xl text-gray-900 md:mt-[6rem]">Contact Us</h1>
                    
                </div>
                <div>
                    <div className="flex -mx-2">
                        <div className="w-full px-3 mb-5">
                            <label for="" className="text-xs font-semibold px-1">Name</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-name-outline text-gray-400 text-lg"></i></div>
                                <input type="name" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="John"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex -mx-2">
                        <div className="w-full px-3 mb-5">
                            <label for="" className="text-xs font-semibold px-1">Email</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                <input type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex -mx-2">
                        <div className="w-full px-3 mb-5">
                            <label for="" className="text-xs font-semibold px-1">Phone Number</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                <input type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Phone Number"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex -mx-2">
                        <div className="w-full px-3 mb-5">
                            <label for="" className="text-xs font-semibold px-1">Message</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                <textarea type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Message"/>
                            </div>
                        </div>
                    </div>
                    <div class="flex -mx-2">
                        <div class="w-full px-3 mb-5">
                            <button class="block w-auto max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default ContactForm;
