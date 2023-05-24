import React from "react";
import background from "../assets/background.jpg";
import { TypeAnimation } from "react-type-animation";
import { AiFillGithub, AiFillLinkedin, AiOutlineFilePdf } from "react-icons/ai";
import resume from "../assets/TimHansenResume.png"
const Main = () => {
  return (
    <div id="main">
     <img className="w-full h-screen object-cover object-left scale-x-[1] opacity-0" src={background} alt="/" /> 
  
      <div className="w-full h-screen absolute top-0 left-0">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center ">
          <h1 className="sm:text-5xl text-4xl font-bold text-white">
            Tim Hansen
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-s-800 text-white">
            
            <TypeAnimation
              sequence={[
                "Software Engineer", // Types 'One'
                1000, // Waits 1s
                "Seeking New Opportunities", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                "👇About Me👇",
                3000, // Types 'Three' without deleting 'Two'
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
            />
            <div></div>
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
           <a target="blank" href="https://github.com/timhan11"> <AiFillGithub className="cursor-pointer bg-white rounded-xl hover:scale-110" size={40} /></a>
           <a target="blank" href="https://www.linkedin.com/in/tim-hansen-b22751266/"> <AiFillLinkedin className="cursor-pointer bg-white rounded-xl hover:scale-110" size={40} /> </a>
           <a target="blank" href={resume}> <AiOutlineFilePdf className="cursor-pointer bg-white rounded-xl hover:scale-110" size={40} /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
