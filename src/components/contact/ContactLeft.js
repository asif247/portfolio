import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";
import { Link } from "react-scroll";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Ashikur Rahman Asif</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Passionate MERN stack developer dedicated to creating exceptional web
          applications with expertise in MongoDB, Express.js, React.js, and
          Node.js.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+8801641145180</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">noor.jsdivs@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a
              href="http://facebook.com/ashikurrahman1s9f"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FaFacebookF />
            </a>
          </span>
         
          <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/ashikur-rahman-asif-b8aa7a216/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
