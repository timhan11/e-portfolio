import React from "react";
import background from "../assets/background.jpg";
const About = () => {
  return (
    <section id="about" class="pt-10 overflow-hidden bg-blue-500 md:pt-0 sm:pt-16 2xl:pt-16 opacity-80">
      <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="grid items-center grid-cols-1 md:grid-cols-2">
          <div>
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl ml-14">
              Hey👋 <br></br>I'm Tim Hansen
            </h2>
            <p class="max-w-lg mt-3 text-xl leading-relaxed text-white md:mt-8 ml-12">
              I'm an aspiring software engineer currently studying computer
              science at Southern New Hampshire University <br />

            </p>
          </div>

          <div class="relative">
            <img
              class="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
              src="/"
              alt=""
            />

            <img
              class="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
              src="/"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
