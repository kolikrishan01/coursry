import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Cookies from "js-cookie";
export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Please enter a valid email address", {
        position: "top-right",
      });
      return;
    }
    if (!formData.password.trim()) {
      toast.error("Please enter a valid password!", { position: "top-right" });
      return;
    }

    // console.log("Form submitted with data:", formData);
    // Here you can perform further actions like sending data to a server

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/user/login",
        formData
      );
      console.log(response);

      // Check if the request was successful
      if (response.status >= 200 && response.status < 300) {
        // Extract token from response data
        const token = response.data.token;
        console.log(token);
        // Set token in a cookie with expiration date
        Cookies.set("token", token, { expires: 7 });
        // Reset form fields
        setFormData({
          email: "",
          password: "",
        });
        // Cookies.set("token", response?.data?.token, { expires: 7 });

        console.log(response);
        // Show success toast
        toast.success("Login successful!", { position: "top-right" });

        // Redirect to another page, for example, the dashboard
      } else {
        // Handle unsuccessful response (status code not in the 2xx range)
        throw new Error(
          "Failed to submit form data. Server returned status code: " +
            response.status
        );
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
      toast.error("Failed to login. Please try again later.", {
        position: "top-right",
      });
    }
  };
  return (
    <>
      <ToastContainer />
      <div class="bg-white relative">
        <div
          class="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-[-20px] mr-auto mb-0 ml-auto max-w-7xl
      xl:px-5 lg:flex-row"
        >
          <div class="flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row">
            <div class="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
              <div class="flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
                <img
                  src="https://res.cloudinary.com/macxenon/image/upload/v1631570592/Run_-_Health_qcghbu.png"
                  className="h-[450px] w-[450px] rounded"
                />
              </div>
            </div>
            <div class="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
              <div
                class="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl
            relative z-10"
              >
                <p class="w-full text-3xl font-medium text-center leading-snug font-serif">
                  Welcome! Sign-up or Login
                </p>
                <div class="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
                  <form onSubmit={handleSubmit}>
                    <div class="relative">
                      <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                        Email
                      </p>
                      <input
                        placeholder="123@ex.com"
                        type="email"
                        className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div class="relative">
                      <p
                        class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute"
                      >
                        Password
                      </p>

                      <input
                        placeholder="Password"
                        type="password"
                        className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-3 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                    </div>

                    <div class="relative">
                      <button
                        type="submit"
                        className="w-full inline-block pt-4 pr-5 pb-4 pl-5 mt-3 text-xl font-medium text-center text-white bg-[#2563eb] rounded-lg transition duration-200 hover:bg-indigo-600 ease"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                  <div className="text-sm w-full flex items-center justify-center">
                    <Link
                      to="/forgot-password"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </Link>
                  </div>
                </div>
                <div className=" flex items-center justify-center w-full">
                  <p className="mt-4 text-center text-sm text-gray-500">
                    Create a New Account ?{" "}
                    <Link
                      to="/sign-up"
                      className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                    >
                      SignUp
                    </Link>
                  </p>
                </div>
              </div>
              <svg
                viewbox="0 0 91 91"
                class="absolute top-0 left-0 z-0 w-32 h-32 -mt-12 -ml-12 text-yellow-300
            fill-current"
              >
                <g stroke="none" strokewidth="1" fillrule="evenodd">
                  <g fillrule="nonzero">
                    <g>
                      <g>
                        <circle cx="3.261" cy="3.445" r="2.72" />
                        <circle cx="15.296" cy="3.445" r="2.719" />
                        <circle cx="27.333" cy="3.445" r="2.72" />
                        <circle cx="39.369" cy="3.445" r="2.72" />
                        <circle cx="51.405" cy="3.445" r="2.72" />
                        <circle cx="63.441" cy="3.445" r="2.72" />
                        <circle cx="75.479" cy="3.445" r="2.72" />
                        <circle cx="87.514" cy="3.445" r="2.719" />
                      </g>
                      <g transform="translate(0 12)">
                        <circle cx="3.261" cy="3.525" r="2.72" />
                        <circle cx="15.296" cy="3.525" r="2.719" />
                        <circle cx="27.333" cy="3.525" r="2.72" />
                        <circle cx="39.369" cy="3.525" r="2.72" />
                        <circle cx="51.405" cy="3.525" r="2.72" />
                        <circle cx="63.441" cy="3.525" r="2.72" />
                        <circle cx="75.479" cy="3.525" r="2.72" />
                        <circle cx="87.514" cy="3.525" r="2.719" />
                      </g>
                      <g transform="translate(0 24)">
                        <circle cx="3.261" cy="3.605" r="2.72" />
                        <circle cx="15.296" cy="3.605" r="2.719" />
                        <circle cx="27.333" cy="3.605" r="2.72" />
                        <circle cx="39.369" cy="3.605" r="2.72" />
                        <circle cx="51.405" cy="3.605" r="2.72" />
                        <circle cx="63.441" cy="3.605" r="2.72" />
                        <circle cx="75.479" cy="3.605" r="2.72" />
                        <circle cx="87.514" cy="3.605" r="2.719" />
                      </g>
                      <g transform="translate(0 36)">
                        <circle cx="3.261" cy="3.686" r="2.72" />
                        <circle cx="15.296" cy="3.686" r="2.719" />
                        <circle cx="27.333" cy="3.686" r="2.72" />
                        <circle cx="39.369" cy="3.686" r="2.72" />
                        <circle cx="51.405" cy="3.686" r="2.72" />
                        <circle cx="63.441" cy="3.686" r="2.72" />
                        <circle cx="75.479" cy="3.686" r="2.72" />
                        <circle cx="87.514" cy="3.686" r="2.719" />
                      </g>
                      <g transform="translate(0 49)">
                        <circle cx="3.261" cy="2.767" r="2.72" />
                        <circle cx="15.296" cy="2.767" r="2.719" />
                        <circle cx="27.333" cy="2.767" r="2.72" />
                        <circle cx="39.369" cy="2.767" r="2.72" />
                        <circle cx="51.405" cy="2.767" r="2.72" />
                        <circle cx="63.441" cy="2.767" r="2.72" />
                        <circle cx="75.479" cy="2.767" r="2.72" />
                        <circle cx="87.514" cy="2.767" r="2.719" />
                      </g>
                      <g transform="translate(0 61)">
                        <circle cx="3.261" cy="2.846" r="2.72" />
                        <circle cx="15.296" cy="2.846" r="2.719" />
                        <circle cx="27.333" cy="2.846" r="2.72" />
                        <circle cx="39.369" cy="2.846" r="2.72" />
                        <circle cx="51.405" cy="2.846" r="2.72" />
                        <circle cx="63.441" cy="2.846" r="2.72" />
                        <circle cx="75.479" cy="2.846" r="2.72" />
                        <circle cx="87.514" cy="2.846" r="2.719" />
                      </g>
                      <g transform="translate(0 73)">
                        <circle cx="3.261" cy="2.926" r="2.72" />
                        <circle cx="15.296" cy="2.926" r="2.719" />
                        <circle cx="27.333" cy="2.926" r="2.72" />
                        <circle cx="39.369" cy="2.926" r="2.72" />
                        <circle cx="51.405" cy="2.926" r="2.72" />
                        <circle cx="63.441" cy="2.926" r="2.72" />
                        <circle cx="75.479" cy="2.926" r="2.72" />
                        <circle cx="87.514" cy="2.926" r="2.719" />
                      </g>
                      <g transform="translate(0 85)">
                        <circle cx="3.261" cy="3.006" r="2.72" />
                        <circle cx="15.296" cy="3.006" r="2.719" />
                        <circle cx="27.333" cy="3.006" r="2.72" />
                        <circle cx="39.369" cy="3.006" r="2.72" />
                        <circle cx="51.405" cy="3.006" r="2.72" />
                        <circle cx="63.441" cy="3.006" r="2.72" />
                        <circle cx="75.479" cy="3.006" r="2.72" />
                        <circle cx="87.514" cy="3.006" r="2.719" />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <svg
                viewbox="0 0 91 91"
                class="absolute bottom-0 right-0 z-0 w-32 h-32 -mb-12 -mr-12 text-indigo-500
            fill-current"
              >
                <g stroke="none" strokewidth="1" fillrule="evenodd">
                  <g fillrule="nonzero">
                    <g>
                      <g>
                        <circle cx="3.261" cy="3.445" r="2.72" />
                        <circle cx="15.296" cy="3.445" r="2.719" />
                        <circle cx="27.333" cy="3.445" r="2.72" />
                        <circle cx="39.369" cy="3.445" r="2.72" />
                        <circle cx="51.405" cy="3.445" r="2.72" />
                        <circle cx="63.441" cy="3.445" r="2.72" />
                        <circle cx="75.479" cy="3.445" r="2.72" />
                        <circle cx="87.514" cy="3.445" r="2.719" />
                      </g>
                      <g transform="translate(0 12)">
                        <circle cx="3.261" cy="3.525" r="2.72" />
                        <circle cx="15.296" cy="3.525" r="2.719" />
                        <circle cx="27.333" cy="3.525" r="2.72" />
                        <circle cx="39.369" cy="3.525" r="2.72" />
                        <circle cx="51.405" cy="3.525" r="2.72" />
                        <circle cx="63.441" cy="3.525" r="2.72" />
                        <circle cx="75.479" cy="3.525" r="2.72" />
                        <circle cx="87.514" cy="3.525" r="2.719" />
                      </g>
                      <g transform="translate(0 24)">
                        <circle cx="3.261" cy="3.605" r="2.72" />
                        <circle cx="15.296" cy="3.605" r="2.719" />
                        <circle cx="27.333" cy="3.605" r="2.72" />
                        <circle cx="39.369" cy="3.605" r="2.72" />
                        <circle cx="51.405" cy="3.605" r="2.72" />
                        <circle cx="63.441" cy="3.605" r="2.72" />
                        <circle cx="75.479" cy="3.605" r="2.72" />
                        <circle cx="87.514" cy="3.605" r="2.719" />
                      </g>
                      <g transform="translate(0 36)">
                        <circle cx="3.261" cy="3.686" r="2.72" />
                        <circle cx="15.296" cy="3.686" r="2.719" />
                        <circle cx="27.333" cy="3.686" r="2.72" />
                        <circle cx="39.369" cy="3.686" r="2.72" />
                        <circle cx="51.405" cy="3.686" r="2.72" />
                        <circle cx="63.441" cy="3.686" r="2.72" />
                        <circle cx="75.479" cy="3.686" r="2.72" />
                        <circle cx="87.514" cy="3.686" r="2.719" />
                      </g>
                      <g transform="translate(0 49)">
                        <circle cx="3.261" cy="2.767" r="2.72" />
                        <circle cx="15.296" cy="2.767" r="2.719" />
                        <circle cx="27.333" cy="2.767" r="2.72" />
                        <circle cx="39.369" cy="2.767" r="2.72" />
                        <circle cx="51.405" cy="2.767" r="2.72" />
                        <circle cx="63.441" cy="2.767" r="2.72" />
                        <circle cx="75.479" cy="2.767" r="2.72" />
                        <circle cx="87.514" cy="2.767" r="2.719" />
                      </g>
                      <g transform="translate(0 61)">
                        <circle cx="3.261" cy="2.846" r="2.72" />
                        <circle cx="15.296" cy="2.846" r="2.719" />
                        <circle cx="27.333" cy="2.846" r="2.72" />
                        <circle cx="39.369" cy="2.846" r="2.72" />
                        <circle cx="51.405" cy="2.846" r="2.72" />
                        <circle cx="63.441" cy="2.846" r="2.72" />
                        <circle cx="75.479" cy="2.846" r="2.72" />
                        <circle cx="87.514" cy="2.846" r="2.719" />
                      </g>
                      <g transform="translate(0 73)">
                        <circle cx="3.261" cy="2.926" r="2.72" />
                        <circle cx="15.296" cy="2.926" r="2.719" />
                        <circle cx="27.333" cy="2.926" r="2.72" />
                        <circle cx="39.369" cy="2.926" r="2.72" />
                        <circle cx="51.405" cy="2.926" r="2.72" />
                        <circle cx="63.441" cy="2.926" r="2.72" />
                        <circle cx="75.479" cy="2.926" r="2.72" />
                        <circle cx="87.514" cy="2.926" r="2.719" />
                      </g>
                      <g transform="translate(0 85)">
                        <circle cx="3.261" cy="3.006" r="2.72" />
                        <circle cx="15.296" cy="3.006" r="2.719" />
                        <circle cx="27.333" cy="3.006" r="2.72" />
                        <circle cx="39.369" cy="3.006" r="2.72" />
                        <circle cx="51.405" cy="3.006" r="2.72" />
                        <circle cx="63.441" cy="3.006" r="2.72" />
                        <circle cx="75.479" cy="3.006" r="2.72" />
                        <circle cx="87.514" cy="3.006" r="2.719" />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
