import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const Modal = ({ onClose }) => {
  const [loading, setLoading] = useState(false); // State for loading indicator
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
    contact: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // Lead Generation
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation checks
    if (!formData.name.trim()) {
      toast.error("Please enter a name", { position: "top-right" });
      return;
    }

    if (!formData.contact) {
      toast.error("Please enter a valid phone number with country code", {
        position: "top-right",
      });
      return;
    }

    try {
      setLoading(true); // Show loader

      const response = await axios.post(
        "http://127.0.0.1:8000/api/lead/postdata",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status >= 200 && response.status < 300) {
        toast.success("Form submitted successfully!", {
          position: "top-right",
        });

        // Reset form data
        setFormData({
          name: "",
          email: "",
          password: "",
          contact: "",
        });

        // Close the modal
        onClose();
      } else {
        throw new Error(
          "Failed to submit form data. Server returned status code: " +
            response.status
        );
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
      toast.error("Failed to submit form data. Please try again later.", {
        position: "top-right",
      });
    } finally {
      setLoading(false); // Hide loader
    }
  };

  // Function to check if all required fields are filled
  const isFormValid = () => {
    return formData.name.trim() && formData.contact.trim();
  };
  return (
    <>
      <ToastContainer />
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}
      <div className="fixed inset-0 flex justify-center items-center z-50 bg-black opacity-100">
        <button
          className="absolute top-0 right-0 p-2 m-2 rounded-full bg-black text-white"
          onClick={onClose}
        >
          X
        </button>
        <div className="relative bg-white rounded-lg p-8 max-w-sm w-full">
          <form onSubmit={handleSubmit}>
            <h3 className="text-3xl font-semibold text-center mb-4">
              Get a Callback
            </h3>

            <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
              <div className="relative">
                <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                  Name
                </p>
                <input
                  placeholder="John"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                />
              </div>
              <div className="relative flex w-full">
                {/* Dropdown for selecting country code */}
                <div className="w-1/2">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="absolute left-0 top-1 pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border border-gray-300 rounded-md w-1/3"
                  >
                    {countryCodes.map((country) => (
                      <option key={country.value} value={country.value}>
                        {country.label}
                      </option>
                    ))}
                  </select>
                </div>
                <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                  Phone Number
                </p>
                <div>
                  <input
                    placeholder="XXXX-9891-90"
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    className="border placeholder-gray-400 focus:outline-none focus:border-black pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 text-base block bg-white border-gray-300 rounded-md "
                  />
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-light text-black">
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
              <div className="relative">
                <button
                  type="submit"
                  disabled={!isFormValid()} // Disable the button if the form is not valid
                  className={`w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-[#2563eb] rounded-lg transition duration-200 hover:bg-indigo-600 ease ${
                    !isFormValid() && "opacity-50 cursor-not-allowed" // Change opacity and cursor if form is not valid
                  }`}
                >
                  Get a CallBack
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
