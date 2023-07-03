import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";
import { FaGlobe } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
          <div className="w-full h-[80%] overflow-hidden rounded-lg">
            <img
              className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
              src={projectOne}
              alt="src"
            />
          </div>
          <div className="w-full mt-5 flex flex-col  gap-6">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-base uppercase text-designColor font-normal">
                  Monster (Job Finding Application)
                </h3>
                <div className="flex gap-2">
                  <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                    <a
                      href="https://github.com/asif247/Monster-9"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <BsGithub />
                    </a>
                  </span>
                  <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                    <a href="https://asif247stately-naiad-f1d6ac.netlify.app/" target="_blank" rel="noopener noreferrer"><FaGlobe /></a>
                    
                  </span>
                </div>
              </div>
              <p className="text-sm font-semibold tracking-wide mt-3 hover:text-gray-100 duration-300">
                Technology: React JS, Tailwind CSS, DaisyUi, Local-Storage
              </p>
              <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
                <li>Quick and Easily finding job post, See the job Posts</li>
                <li>Salary and Location</li>
                <li>
                  Job seekers should have access to a section listing the jobs
                  they've applied
                </li>
                <li>User can find remote/onsite job</li>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
          <div className="w-full h-[80%] overflow-hidden rounded-lg">
            <img
              className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
              src={projectTwo}
              alt="src"
            />
          </div>
          <div className="w-full mt-5 flex flex-col  gap-6">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-base uppercase text-designColor font-normal">
                  Chief Hunter (Chief Service Application)
                </h3>
                <div className="flex gap-2">
                  <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                    <a
                      href="https://github.com/asif247/chef-recipe-hunter-client"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <BsGithub />
                    </a>
                  </span>
                  <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                    <a href="https://becipe-client-auth.web.app/" target="_blank" rel="noopener noreferrer"><FaGlobe /></a>
                    
                  </span>
                </div>
              </div>
              <p className="text-sm font-semibold tracking-wide mt-3 hover:text-gray-100 duration-300">
                Technology: React JS, Tailwind CSS, DaisyUi, Firebase, Express
                js, MongoDB
              </p>
              <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
                <li>Chiefs List</li>
                <li>
                  Recipe list (but you cannot see the recipe without login)
                </li>
                <li>Registration via email and password / Google / GitHub</li>
                <li>Mark as favorite Button</li>
              </p>
            </div>
          </div>
        </div>


        <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
          <div className="w-full h-[80%] overflow-hidden rounded-lg">
            <img
              className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
              src={projectThree}
              alt="src"
            />
          </div>
          <div className="w-full mt-5 flex flex-col  gap-6">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-base uppercase text-designColor font-normal">
                Sports Fever (Sports Learning Platform)
                </h3>
                <div className="flex gap-2">
                  <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                    <a
                      href="https://github.com/asif247/summer-camp-sports-server"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <BsGithub />
                    </a>
                  </span>
                  <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                    <a href="https://ass-12-3d2ab.web.app/" target="_blank" rel="noopener noreferrer"><FaGlobe /></a>
                    
                  </span>
                </div>
              </div>
              <p className="text-sm font-semibold tracking-wide mt-3 hover:text-gray-100 duration-300">
              Technology: React JS, Tailwind CSS, DaisyUi, Firebase, Express js, MongoDB, Stripe
              </p>
              <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
                <li>Anyone can register on the platform and become a student</li>
                <li>
                Only instructors have the privilege to post course classes
                </li>
                <li>Admin manages student and instructor accounts, user roles, resolves account</li>
                <li>Students can purchases course</li>
              </p>
            </div>
          </div>
        </div>



      </div>
    </section>
  );
};

export default Projects;
