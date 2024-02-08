import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function SignUp() {
  const countryCodes = [
    { value: "+1", label: "+1 (United States)" },
    { value: "+7", label: "+7 (Russia)" },
    { value: "+20", label: "+20 (Egypt)" },
    { value: "+91", label: "+91 (India)" },
    { value: "+27", label: "+27 (South Africa)" },
    { value: "+30", label: "+30 (Greece)" },
    { value: "+31", label: "+31 (Netherlands)" },
    { value: "+32", label: "+32 (Belgium)" },
    { value: "+33", label: "+33 (France)" },
    { value: "+34", label: "+34 (Spain)" },
    { value: "+36", label: "+36 (Hungary)" },
    { value: "+39", label: "+39 (Italy)" },
    { value: "+40", label: "+40 (Romania)" },
    { value: "+41", label: "+41 (Switzerland)" },
    { value: "+43", label: "+43 (Austria)" },
    { value: "+44", label: "+44 (United Kingdom)" },
    { value: "+45", label: "+45 (Denmark)" },
    { value: "+46", label: "+46 (Sweden)" },
    { value: "+47", label: "+47 (Norway)" },
    { value: "+48", label: "+48 (Poland)" },
    { value: "+49", label: "+49 (Germany)" },
    { value: "+51", label: "+51 (Peru)" },
    { value: "+52", label: "+52 (Mexico)" },
    { value: "+53", label: "+53 (Cuba)" },
    { value: "+54", label: "+54 (Argentina)" },
    { value: "+55", label: "+55 (Brazil)" },
    { value: "+56", label: "+56 (Chile)" },
    { value: "+57", label: "+57 (Colombia)" },
    { value: "+58", label: "+58 (Venezuela)" },
    { value: "+60", label: "+60 (Malaysia)" },
    { value: "+61", label: "+61 (Australia)" },
    { value: "+62", label: "+62 (Indonesia)" },
    { value: "+63", label: "+63 (Philippines)" },
    { value: "+64", label: "+64 (New Zealand)" },
    { value: "+65", label: "+65 (Singapore)" },
    { value: "+66", label: "+66 (Thailand)" },
    { value: "+81", label: "+81 (Japan)" },
    { value: "+82", label: "+82 (South Korea)" },
    { value: "+84", label: "+84 (Vietnam)" },
    { value: "+86", label: "+86 (China)" },
    { value: "+90", label: "+90 (Turkey)" },
    { value: "+92", label: "+92 (Pakistan)" },
    { value: "+93", label: "+93 (Afghanistan)" },
    { value: "+94", label: "+94 (Sri Lanka)" },
    { value: "+95", label: "+95 (Myanmar)" },
    { value: "+98", label: "+98 (Iran)" },
    { value: "+211", label: "+211 (South Sudan)" },
    { value: "+212", label: "+212 (Morocco)" },
    { value: "+213", label: "+213 (Algeria)" },
    { value: "+216", label: "+216 (Tunisia)" },
    { value: "+218", label: "+218 (Libya)" },
    { value: "+220", label: "+220 (Gambia)" },
    { value: "+221", label: "+221 (Senegal)" },
    { value: "+222", label: "+222 (Mauritania)" },
    { value: "+223", label: "+223 (Mali)" },
    { value: "+224", label: "+224 (Guinea)" },
    { value: "+225", label: "+225 (Ivory Coast)" },
    { value: "+226", label: "+226 (Burkina Faso)" },
    { value: "+227", label: "+227 (Niger)" },
    { value: "+228", label: "+228 (Togo)" },
    { value: "+229", label: "+229 (Benin)" },
    { value: "+230", label: "+230 (Mauritius)" },
    { value: "+231", label: "+231 (Liberia)" },
    { value: "+232", label: "+232 (Sierra Leone)" },
    { value: "+233", label: "+233 (Ghana)" },
    { value: "+234", label: "+234 (Nigeria)" },
    { value: "+235", label: "+235 (Chad)" },
    { value: "+236", label: "+236 (Central African Republic)" },
    { value: "+237", label: "+237 (Cameroon)" },
    { value: "+238", label: "+238 (Cape Verde)" },
    { value: "+239", label: "+239 (Sao Tome and Principe)" },
    { value: "+240", label: "+240 (Equatorial Guinea)" },
    { value: "+241", label: "+241 (Gabon)" },
    { value: "+242", label: "+242 (Republic of the Congo)" },
    { value: "+243", label: "+243 (Democratic Republic of the Congo)" },
    { value: "+244", label: "+244 (Angola)" },
    { value: "+245", label: "+245 (Guinea-Bissau)" },
    { value: "+246", label: "+246 (British Indian Ocean Territory)" },
    { value: "+247", label: "+247 (Ascension Island)" },
    { value: "+248", label: "+248 (Seychelles)" },
    { value: "+249", label: "+249 (Sudan)" },
    { value: "+250", label: "+250 (Rwanda)" },
    { value: "+251", label: "+251 (Ethiopia)" },
    { value: "+252", label: "+252 (Somalia)" },
    { value: "+253", label: "+253 (Djibouti)" },
    { value: "+254", label: "+254 (Kenya)" },
    { value: "+255", label: "+255 (Tanzania)" },
    { value: "+256", label: "+256 (Uganda)" },
    { value: "+257", label: "+257 (Burundi)" },
    { value: "+258", label: "+258 (Mozambique)" },
    { value: "+260", label: "+260 (Zambia)" },
    { value: "+261", label: "+261 (Madagascar)" },
    { value: "+262", label: "+262 (Reunion)" },
    { value: "+263", label: "+263 (Zimbabwe)" },
    { value: "+264", label: "+264 (Namibia)" },
    { value: "+265", label: "+265 (Malawi)" },
    { value: "+266", label: "+266 (Lesotho)" },
    { value: "+267", label: "+267 (Botswana)" },
    { value: "+268", label: "+268 (Eswatini)" },
    { value: "+269", label: "+269 (Comoros)" },
    { value: "+290", label: "+290 (Saint Helena)" },
    { value: "+291", label: "+291 (Eritrea)" },
    { value: "+297", label: "+297 (Aruba)" },
    { value: "+298", label: "+298 (Faroe Islands)" },
    { value: "+299", label: "+299 (Greenland)" },
    { value: "+350", label: "+350 (Gibraltar)" },
    { value: "+351", label: "+351 (Portugal)" },
    { value: "+352", label: "+352 (Luxembourg)" },
    { value: "+353", label: "+353 (Ireland)" },
    { value: "+354", label: "+354 (Iceland)" },
    { value: "+355", label: "+355 (Albania)" },
    { value: "+356", label: "+356 (Malta)" },
    { value: "+357", label: "+357 (Cyprus)" },
    { value: "+358", label: "+358 (Finland)" },
    { value: "+359", label: "+359 (Bulgaria)" },
    { value: "+370", label: "+370 (Lithuania)" },
    { value: "+371", label: "+371 (Latvia)" },
    { value: "+372", label: "+372 (Estonia)" },
    { value: "+373", label: "+373 (Moldova)" },
    { value: "+374", label: "+374 (Armenia)" },
    { value: "+375", label: "+375 (Belarus)" },
    { value: "+376", label: "+376 (Andorra)" },
    { value: "+377", label: "+377 (Monaco)" },
    { value: "+378", label: "+378 (San Marino)" },
    { value: "+380", label: "+380 (Ukraine)" },
    { value: "+381", label: "+381 (Serbia)" },
    { value: "+382", label: "+382 (Montenegro)" },
    { value: "+383", label: "+383 (Kosovo)" },
    { value: "+385", label: "+385 (Croatia)" },
    { value: "+386", label: "+386 (Slovenia)" },
    { value: "+387", label: "+387 (Bosnia and Herzegovina)" },
    { value: "+389", label: "+389 (North Macedonia)" },
    { value: "+420", label: "+420 (Czech Republic)" },
    { value: "+421", label: "+421 (Slovakia)" },
    { value: "+423", label: "+423 (Liechtenstein)" },
    { value: "+500", label: "+500 (Falkland Islands)" },
    { value: "+501", label: "+501 (Belize)" },
    { value: "+502", label: "+502 (Guatemala)" },
    { value: "+503", label: "+503 (El Salvador)" },
    { value: "+504", label: "+504 (Honduras)" },
    { value: "+505", label: "+505 (Nicaragua)" },
    { value: "+506", label: "+506 (Costa Rica)" },
    { value: "+507", label: "+507 (Panama)" },
    { value: "+508", label: "+508 (Saint Pierre and Miquelon)" },
    { value: "+509", label: "+509 (Haiti)" },
    { value: "+590", label: "+590 (Guadeloupe)" },
    { value: "+591", label: "+591 (Bolivia)" },
    { value: "+592", label: "+592 (Guyana)" },
    { value: "+593", label: "+593 (Ecuador)" },
    { value: "+594", label: "+594 (French Guiana)" },
    { value: "+595", label: "+595 (Paraguay)" },
    { value: "+596", label: "+596 (Martinique)" },
    { value: "+597", label: "+597 (Suriname)" },
    { value: "+598", label: "+598 (Uruguay)" },
    { value: "+599", label: "+599 (Caribbean Netherlands)" },
    { value: "+670", label: "+670 (East Timor)" },
    { value: "+672", label: "+672 (Norfolk Island)" },
    { value: "+673", label: "+673 (Brunei)" },
    { value: "+674", label: "+674 (Nauru)" },
    { value: "+675", label: "+675 (Papua New Guinea)" },
    { value: "+676", label: "+676 (Tonga)" },
    { value: "+677", label: "+677 (Solomon Islands)" },
    { value: "+678", label: "+678 (Vanuatu)" },
    { value: "+679", label: "+679 (Fiji)" },
    { value: "+680", label: "+680 (Palau)" },
    { value: "+681", label: "+681 (Wallis and Futuna)" },
    { value: "+682", label: "+682 (Cook Islands)" },
    { value: "+683", label: "+683 (Niue)" },
    { value: "+685", label: "+685 (Samoa)" },
    { value: "+686", label: "+686 (Kiribati)" },
    { value: "+687", label: "+687 (New Caledonia)" },
    { value: "+688", label: "+688 (Tuvalu)" },
    { value: "+689", label: "+689 (French Polynesia)" },
    { value: "+690", label: "+690 (Tokelau)" },
    { value: "+691", label: "+691 (Federated States of Micronesia)" },
    { value: "+692", label: "+692 (Marshall Islands)" },
    { value: "+850", label: "+850 (North Korea)" },
    { value: "+852", label: "+852 (Hong Kong)" },
    { value: "+853", label: "+853 (Macau)" },
    { value: "+855", label: "+855 (Cambodia)" },
    { value: "+856", label: "+856 (Laos)" },
    { value: "+880", label: "+880 (Bangladesh)" },
    { value: "+886", label: "+886 (Taiwan)" },
    { value: "+960", label: "+960 (Maldives)" },
    { value: "+961", label: "+961 (Lebanon)" },
    { value: "+962", label: "+962 (Jordan)" },
    { value: "+963", label: "+963 (Syria)" },
    { value: "+964", label: "+964 (Iraq)" },
    { value: "+965", label: "+965 (Kuwait)" },
    { value: "+966", label: "+966 (Saudi Arabia)" },
    { value: "+967", label: "+967 (Yemen)" },
    { value: "+968", label: "+968 (Oman)" },
    { value: "+970", label: "+970 (Palestine)" },
    { value: "+971", label: "+971 (United Arab Emirates)" },
    { value: "+972", label: "+972 (Israel)" },
    { value: "+973", label: "+973 (Bahrain)" },
    { value: "+974", label: "+974 (Qatar)" },
    { value: "+975", label: "+975 (Bhutan)" },
    { value: "+976", label: "+976 (Mongolia)" },
    { value: "+977", label: "+977 (Nepal)" },
    { value: "+992", label: "+992 (Tajikistan)" },
    { value: "+993", label: "+993 (Turkmenistan)" },
    { value: "+994", label: "+994 (Azerbaijan)" },
    { value: "+995", label: "+995 (Georgia)" },
    { value: "+996", label: "+996 (Kyrgyzstan)" },
    { value: "+998", label: "+998 (Uzbekistan)" },
  ];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const validatePassword = (password) => {
    // Password validation regular expression
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,14}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation checks
    if (!formData.name.trim()) {
      toast.error("Please enter a name", { position: "top-right" });
      return;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Please enter a valid email address", {
        position: "top-right",
      });
      return;
    }
    if (!formData.password.trim() || !validatePassword(formData.password)) {
      toast.error(
        "Please enter a valid password (8-14 characters, at least one uppercase letter, one lowercase letter, one digit, and one special character)",
        { position: "top-right" }
      );
      return;
    }
    if (!formData.phoneNumber) {
      toast.error("Please enter a valid phone number with country code", {
        position: "top-right",
      });
      return;
    }

    console.log("Form submitted with data:", formData);
    // Here you can perform further actions like sending data to a server

    // Reset form fields
    setFormData({
      name: "",
      email: "",
      password: "",
      phoneNumber: "",
    });

    // Show success toast
    toast.success("Form submitted successfully!", {
      position: "top-right",
    });
  };

  return (
    <>
      <ToastContainer />
      <div class="bg-white relative ">
        <div
          class="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl
      xl:px-5 lg:flex-row"
        >
          <div class="flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row">
            <div class="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
              <div class="flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
                <img
                  src="https://res.cloudinary.com/macxenon/image/upload/v1631570592/Run_-_Health_qcghbu.png"
                  className="h-[450px] w-[450px] rounded mt-[-200px]"
                />
              </div>
            </div>
            <div class="w-full mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:w-5/12">
              <div
                class="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl
            relative z-10"
              >
                <form onSubmit={handleSubmit}>
                  <p class="w-full text-4xl font-medium text-center leading-snug font-serif">
                    Sign up for an account
                  </p>
                  <div class="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
                    <div class="relative">
                      <p
                        class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute"
                      >
                        Name
                      </p>
                      <input
                        placeholder="John"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        class="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                      />
                    </div>
                    <div class="relative">
                      <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                        Email
                      </p>
                      <input
                        placeholder="123@ex.com"
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        class="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
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
                        placeholder="Pass@123"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        class="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="relative flex">
                      {/* Dropdown for selecting country code */}
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        className="absolute left-0 top-1 pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border border-gray-300 rounded-md w-1/4"
                      >
                        {countryCodes.map((country) => (
                          <option key={country.value} value={country.value}>
                            {country.label}
                          </option>
                        ))}
                      </select>
                      <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                        Phone Number
                      </p>
                      <input
                        placeholder="XXXX-9891-90"
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="border placeholder-gray-400 focus:outline-none focus:border-black  pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-36 text-base block bg-white border-gray-300 rounded-md w-full"
                      />
                    </div>
                    <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input
                          id="terms"
                          aria-describedby="terms"
                          type="checkbox"
                          class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                          required
                        />
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="terms" class="font-light text-black">
                          I accept the{" "}
                          <Link
                            to="#"
                            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                          >
                            Terms and Conditions
                          </Link>
                        </label>
                      </div>
                    </div>
                    <div class="relative">
                      <button
                        type="submit"
                        class="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-[#2563eb] rounded-lg transition duration-200 hover:bg-indigo-600 ease"
                      >
                        Sign up
                      </button>
                    </div>
                    <p class="text-sm font-light text-black">
                      Already have an account?{" "}
                      <Link
                        to="/login"
                        className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                      >
                        Login
                      </Link>
                    </p>
                  </div>
                </form>
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
