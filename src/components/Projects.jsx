import React from "react";
import ProjectItem from "./ProjectItem";
import background from "../assets/background.jpg";
const Projects = () => {
//w-full h-screen object-cover object-left scale-x-[1]
//original max-w-[1040px] m-auto md:pl-20 p-4 py-16

  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16    bg-blue opacity-90">
      <h1 className="text-4xl opacity-90 font-bold text-center text-white mb-8">Projects</h1>
      <div className="grid sm:grid-cols-2 gap-12">
       <ProjectItem img={background} title="Weather App"/>
       <ProjectItem img={background} title="Weathere App"/>
       <ProjectItem img={background} title="Weathere App"/>
       <ProjectItem img={background} title="Weathere App"/>
      </div>
    </div>
  );
};

export default Projects;
