import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full border-t border-teal-400 py-16">
      <div className="max-w-7xl mx-auto flex items-center justify-between ">
        <div>
          <h1 className="text-black">
            Created with love by{" "}
            <span className="text-teal-600 underline  italic font-bold ">
              @faisal
            </span>
          </h1>
        </div>
        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <FaFacebook className="text-gray-500 hover:text-gray-900 transition duration-200 ease-in-out text-3xl " />
          <BsTwitterX className="text-gray-500 hover:text-gray-900 transition duration-200 ease-in-out text-3xl " />
          <FaLinkedin className="text-gray-500 hover:text-gray-900 transition duration-200 ease-in-out text-3xl " />
          <IoLogoYoutube className="text-gray-500 hover:text-gray-900 transition duration-200 ease-in-out text-3xl " />
          <FaInstagram className="text-gray-500 hover:text-gray-900 transition duration-200 ease-in-out text-3xl " />
        </div>
      </div>
    </div>
  );
};

export default Footer;
