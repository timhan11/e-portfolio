import React from 'react'
import {FaHtml5, FaCss3Alt, FaReact, FaPython} from "react-icons/fa";;
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss, SiFirebase } from "react-icons/si";
import { DiNpm } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";
const Skills = () => {
  return (
    <div id='skills' className=" w-full text-blue-800 bg-white h-auto py-20 opacity-80 mx-auto">



    <div className=" text-center  ">

        <h1 className=" md:text-4xl sm:text-2xl text-4xl mb-4"> My Technology Stack </h1>

        <h1 className="W-1/4 mx-auto mb-10 shadow-4xl"> </h1>
    </div>
    <div className="flex justify-between pt-6  w-full ">
            <FaHtml5 className="cursor-pointer mr-2 ml-16 hover:scale-110  " size={40} />
            <FaCss3Alt className="cursor-pointer mr-2 hover:scale-110 " size={40} />
            <IoLogoJavascript className="cursor-pointer mr-2 hover:scale-110" size={40} />
            <FaReact className="cursor-pointer mr-2 hover:scale-110" size={40} />
            <SiTailwindcss className="cursor-pointer mr-2 hover:scale-110" size={40} />
            <SiFirebase className="cursor-pointer mr-2 hover:scale-110" size={40} />
            <FaPython className="cursor-pointer mr-2 hover:scale-110" size={40} />
            <DiNpm className="cursor-pointer mr-2 hover:scale-110" size={40} />
            <AiFillGithub className="cursor-pointer mr-14 hover:scale-110" size={40} />

          </div>




</div>
  )
}

export default Skills