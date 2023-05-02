import React from "react";
import background from "../assets/background.jpg";

const Education = () => {
  return (
    //w-full h-screen object-cover object-left scale-x-[1]
    //original max-w-[1040px] m-auto md:pl-20 p-4 py-16

    <div
      id="education"
      className="max-w-[1040px] m-auto md:pl-20 p-4 py-16     bg-blue opacity-80"
    >
      <h1 className=" opacity-90 text-4xl font-bold text-center text-white mb-2">
        Education
      </h1>
      <ol className="flex flex-col md:flex-row relative border-l border-stone-200">
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-white rounded-full mt-1.5 -left-1.5 border-white" />
          <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
            <span className="inline-block px-2 py-1 font-bold text-white bg-[#001b5e] rounded-md ">
              2021-Current
            </span>
            <span className="text-lg font-bold text-white pl-2 opacity-90">
              Southern New Hampshire University
            </span>
            <span className="my-1 text-sm font-normal leading-none text-stone-400"></span>
          </p>
          <p className="my-2 text-base font-bold text-white opacity-90">
            Pursuing a bachelors degree in computer science <br></br>
            3.8 GPA<br></br>
            Dean's List Spring 2022<br></br>
            Honor Roll Spring 2022 <br />
            <br />
          <div>
            <h3 className="text-2xl">Relevant Courswork:</h3> <br />
            <span>Software Engineering</span> <br />
            <span>Information and Security Systems</span> <br />
            <span>Data Structures and Algorithms</span> <br />
            <span>Operating Systems</span> <br />
            <span>System Design</span>
          </div>
          </p>
        </li>
      </ol>
    </div>
  );
};

export default Education;
