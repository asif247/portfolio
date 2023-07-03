import React from "react";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-4 lgl:gap-0 justify-between">
      <a href="Ashikur Rahman Asif resume.pdf"
      download="Ashikur Rahman Asif resume.pdf"
        className="relative w-full flex justify-center sm:w-1/2 sm:mx-auto md:mx-0 md:px-6 px-6 py-3 bg-#FF014F text-#c4cfde border-2 border-#FF014F rounded-md overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
      <button
      
      
    >
      Download Resume
      <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-30"></span>
    </button>
     </a>
      {/* <a
        href="#"
        className="relative w-full sm:w-1/2 sm:mx-auto md:mx-0 px-6 py-3 bg-#FF014F text-#c4cfde border-2 border-#FF014F rounded-md overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
      >
        Download Resume
        <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-30"></span>
      </a> */}
    </div>
  );
};

export default Media;
