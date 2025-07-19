 import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen pt-24 bg-gray-950 text-white flex flex-col items-center justify-center text-center px-4"
    >
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
        Hi, I'm <span className="text-teal-400">Ahmed Hiis</span>
      </h1>
      
        {/* A Passionate Web Developer | I Build Beautiful & Functional Websites */}
        <p className="text-lg md:text-xl max-w-xl mb-8">A Passionate Web Developer | I Build Beautiful & Functional Websites</p>

      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="#projects"
          className="bg-teal-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-teal-300 transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="border border-teal-400 text-white px-6 py-2 rounded-full hover:bg-teal-400 hover:text-black transition"
        >
          Hire Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
