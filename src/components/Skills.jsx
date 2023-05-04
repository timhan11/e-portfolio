import React from 'react'
import {FaHtml5, FaCss3Alt, FaReact, FaPython} from "react-icons/fa";;
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { DiFirebase, DiNpm } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";
import { IoLogoFirebase } from "react-icons/io5";
const Skills = () => {
  return (
<section className="m-4 md:m-8 dark:bg-gray-800 dark:text-gray-100 opacity-90">
	<div className="container mx-auto p-4 my-6 space-y-2 text-center">
		<h2 className="text-5xl font-bold">My Technology Stack</h2>
	
	</div>
	<div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
		<div className="flex flex-col items-center p-4">
<FaHtml5 className="w-8 h-8 dark:text-violet-400 hover:scale-x-110" />
				
			
			<h3 className="my-3 text-3xl font-semibold hover:scale-x-110">HTML</h3>
			
		</div>

    <div className="flex flex-col items-center p-4">
<FaCss3Alt className="w-8 h-8 dark:text-violet-400 hover:scale-x-110"/>
				
			
			<h3 className="my-3 text-3xl font-semibold hover:scale-x-110">CSS</h3>
			
		</div>


    <div className="flex flex-col items-center p-4">
<IoLogoJavascript className="w-8 h-8 dark:text-violet-400 hover:scale-x-110"/>
				
			
			<h3 className="my-3 text-3xl font-semibold hover:scale-x-110">JavaScript</h3>
			
		</div>


    <div className="flex flex-col items-center p-4">
<FaReact className="w-8 h-8 dark:text-violet-400 hover:scale-x-110"/>
				
			
			<h3 className="my-3 text-3xl font-semibold hover:scale-x-110">React</h3>
			
		</div>


    <div className="flex flex-col items-center p-4">
<FaPython className="w-8 h-8 dark:text-violet-400 hover:scale-x-110"/>
				
			
			<h3 className="my-3 text-3xl font-semibold hover:scale-x-110">Python</h3>
			
		</div>


    <div className="flex flex-col items-center p-4">
<IoLogoFirebase className="w-8 h-8 dark:text-violet-400 hover:scale-x-110"/>
				
			
			<h3 className="my-3 text-3xl font-semibold hover:scale-x-110">Firebase</h3>
			
		</div>


    <div className="flex flex-col items-center p-4">
<SiTailwindcss className="w-8 h-8 dark:text-violet-400 hover:scale-x-110"/>
				
			
			<h3 className="my-3 text-3xl font-semibold hover:scale-x-110">Tailwind CSS</h3>
			
		</div>

    <div className="flex flex-col items-center p-4">
<AiFillGithub className="w-8 h-8 dark:text-violet-400 hover:scale-x-110"/>
				
			
			<h3 className="my-3 text-3xl font-semibold hover:scale-x-110">Github</h3>
		
		</div>

    <div className="flex flex-col items-center p-4">
<DiNpm className="w-8 h-8 dark:text-violet-400 hover:scale-x-110"/>
				
			
			<h3 className="my-3 text-3xl font-semibold hover:scale-x-110">NPM</h3>
		
		</div>


   
		

		
	</div>
</section>
  )
}

export default Skills