import axios from 'axios';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const Instructor = () => {
    const [mentorData, setMentorData] = useState({
        name:"",
        email:"",
        contact:"",
        collegeName:"",
        city:"",
        address:"",
        domain:"",
    });

    const hadleChange = (e) =>{
        const {name, value} = e.target;
       
        setMentorData((prev)=>(
            {...prev, [name]:value}
        ))
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();

        if(!mentorData?.name?.trim()){
            toast.error(
                "Please enter name",
                {
                  position: "top-right",
                }
              )
              return;
        }else if(!mentorData?.email?.trim()){
            toast.error(
                "Please enter email",
                {
                  position: "top-right",
                }
              )
              return;
        }else if(!mentorData?.contact?.trim()){
            toast.error(
                "Please enter contact number",
                {
                  position: "top-right",
                }
              )
              return;
        }else if(!mentorData?.collegeName?.trim()){
            toast.error(
                "Please enter college name",
                {
                  position: "top-right",
                }
              )
              return;
        }else if(!mentorData?.city?.trim()){
            toast.error(
                "Please enter city",
                {
                  position: "top-right",
                }
              )
              return;
        }else if(!mentorData?.address?.trim()){
            toast.error(
                "Please enter address",
                {
                  position: "top-right",
                }
              )
              return;
        }else if(!mentorData?.domain?.trim()){
            toast.error(
                "Please choos domain",
                {
                  position: "top-right",
                }
              )
              return;
        }


    try {
       const res =  await axios.post("https://busy-teal-barracuda-garb.cyclic.app/api/mentor/createMentor", mentorData,{
        
        headers: {
          'Content-Type': 'application/json',
        },
    }
       )
      console.log(res);
    } catch (error) {
        console.log(error);
    } 
    setMentorData({
        name:"",
        email:"",
        contact:"",
        collegeName:"",
        city:"",
        address:"",
        domain:"",
    })     
    }
  return (
    <>
    <ToastContainer />
    <form onSubmit={handleSubmit}>
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
                                <input type="text" name='name' value={mentorData.name} onChange={hadleChange} className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="John"/>
                            </div>
                        </div>
                        {/* <div className="w-1/2 px-3 mb-5">
                            <label for=""className="text-xs font-semibold px-1">Last name</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input type="text" name='l-name' className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Smith"/>
                            </div>
                        </div> */}
                    </div>
                    <div className="flex -mx-2">
                        <div className="w-full px-3 mb-5">
                            <label for="" className="text-xs font-semibold px-1">Email</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                <input type="email" name='email' value={mentorData.email} onChange={hadleChange} className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex -mx-2">
                        <div className="w-full px-3 mb-5">
                            <label for="" className="text-xs font-semibold px-1">Contact No.</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                <input type="text" name='contact' value={mentorData.contact} onChange={hadleChange} className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Contact No."/>
                            </div>
                        </div>
                    </div>
                    <div className="flex -mx-2">
                        <div className="w-full px-3 mb-5">
                            <label for="" className="text-xs font-semibold px-1">College Name</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                <input type="text" name='collegeName' value={mentorData.collegeName} onChange={hadleChange} className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="College Name"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex -mx-2">
                        <div className="w-full px-3 mb-5">
                            <label for="" className="text-xs font-semibold px-1">City</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                <input type="text" name='city' value={mentorData.city} onChange={hadleChange} class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="City"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex -mx-2">
                        <div className="w-full px-3 mb-5">
                            <label for="" className="text-xs font-semibold px-1">Address</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                <input type="text" name='address' value={mentorData.address} onChange={hadleChange} class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Address"/>
                            </div>
                        </div>
                    </div>
                    {/* <div className="flex -mx-2">
                        <div className="w-full px-3 mb-5">
                            <label for="resume" className="text-xs font-semibold px-1">Resume (PDF only)</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                <input type="file" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" name="resume" accept='.pdg'/>
                            </div>
                        </div>
                    </div> */}
                    <div className="flex -mx-2">
                        <div className="w-full px-3 mb-5">
                            <label for="" className="text-xs font-semibold px-1">Domain</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                <select type="text" name='domain' value={mentorData.domain} onChange={hadleChange} className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Domain">
                                <option value="" disabled selected>Select Option</option>
                                <option value="Data Science">Data Science</option>
                                <option value="Devops">Devops</option>
                                <option value="Fullstack Development">Fullstack Development</option>
                                <option value="Cloud Computing">Cloud Computing</option>
                               
                                </select>
                                
                            </div>
                        </div>
                    </div>
                    <div class="flex -mx-2">
                        <div class="w-full px-3 mb-5">
                            <button type='submit' class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">REGISTER NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</form>
</>
  )
}

export default Instructor
