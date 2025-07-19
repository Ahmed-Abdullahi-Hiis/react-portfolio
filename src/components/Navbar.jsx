 import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-gray-900 text-white fixed w-full top-0 z-50 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-teal-400">Hiis</div>
        <ul className="flex space-x-6 text-sm md:text-base">
          <li><a href="#home" className="hover:text-teal-400 transition">Home</a></li>
          <li><a href="#about" className="hover:text-teal-400 transition">About</a></li>
          <li><a href="#skills" className="hover:text-teal-400 transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-teal-400 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-teal-400 transition">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
