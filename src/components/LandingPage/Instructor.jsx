import React from 'react'

const Instructor = () => {
  return (
    <>
      <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
    <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden">
        <div className="md:flex w-full">
            <div className="hidden md:block w-1/2 py-10 px-10">
            <img className="object-cover object-center w-full h-full rounded-md" src="https://coursry.com/assets/img/close-up-smiley-people-working-together.jpg"/>
                
            </div>
            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                <div className="text-center mb-10">
                    <h1 className="font-bold text-3xl text-gray-900">BECOME AN INSTRUCTOR</h1>
                    <p>Enter your information to register</p>
                </div>
                <div>
                    <div className="flex -mx-3">
                        <div className="w-1/2 px-3 mb-5">
                            <label for="" className="text-xs font-semibold px-1">First name</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="John"/>
                            </div>
                        </div>
                        <div className="w-1/2 px-3 mb-5">
                            <label for=""className="text-xs font-semibold px-1">Last name</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Smith"/>
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
                            <label for="" className="text-xs font-semibold px-1">Contact No.</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                <input type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Contact No."/>
                            </div>
                        </div>
                    </div>
                    <div className="flex -mx-2">
                        <div className="w-full px-3 mb-5">
                            <label for="" className="text-xs font-semibold px-1">College Name</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                <input type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="College Name"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex -mx-2">
                        <div className="w-full px-3 mb-5">
                            <label for="" className="text-xs font-semibold px-1">City</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                <input type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="City"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex -mx-2">
                        <div className="w-full px-3 mb-5">
                            <label for="" className="text-xs font-semibold px-1">Address</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                <input type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Address"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex -mx-2">
                        <div className="w-full px-3 mb-5">
                            <label for="resume" className="text-xs font-semibold px-1">Resume (PDF only)</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                <input type="file" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" name="resume" accept='.pdg'/>
                            </div>
                        </div>
                    </div>
                    <div className="flex -mx-2">
                        <div className="w-full px-3 mb-5">
                            <label for="" className="text-xs font-semibold px-1">Domain</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                <select type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Domain">
                                <option value="" disabled selected>Select Option</option>
                                <option value="Option-1">Data Science</option>
                                <option value="Option-2">Devops</option>
                                <option value="Option-2">Fullstack Development</option>
                                <option value="Option-2">Cloud Computing</option>
                               
                                </select>
                                
                            </div>
                        </div>
                    </div>
                    <div class="flex -mx-2">
                        <div class="w-full px-3 mb-5">
                            <button class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">REGISTER NOW</button>
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

export default Instructor
