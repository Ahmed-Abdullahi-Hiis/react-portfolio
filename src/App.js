//  // src/App.js
// import React from 'react';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';

// function App() {
//   return (
//     <>
//       <Navbar />
//       <main className="bg-[#0a0c1b] text-white pt-24">
//         <Hero />

//         {/* About Section */}
//         <section id="about" className="px-6 py-16 bg-[#0e111f]">
//           <div className="max-w-4xl mx-auto">
//             <h2 className="text-4xl font-bold text-cyan-400 mb-6">About Me</h2>
//             <p className="text-lg leading-relaxed text-gray-300">
//               I’m Ahmed Hiis, a passionate and detail-oriented web developer with a strong focus on front-end technologies.
//               I enjoy crafting clean, responsive, and user-friendly websites. With a background in both design and coding,
//               I aim to deliver seamless digital experiences. When I’m not coding, I explore UI/UX trends and build side projects.
//             </p>
//           </div>
//         </section>

//         {/* Skills Section */}
//         <section id="skills" className="px-6 py-16 bg-[#101327]">
//           <div className="max-w-4xl mx-auto">
//             <h2 className="text-4xl font-bold text-cyan-400 mb-6">Skills</h2>
//             <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-lg text-gray-300">
//               <li>HTML5</li>
//               <li>CSS3</li>
//               <li>JavaScript</li>
//               <li>React</li>
//               <li>Tailwind CSS</li>
//               <li>Node.js</li>
//               <li>Express.js</li>
//               <li>MySQL</li>
//               <li>Git & GitHub</li>
//             </ul>
//           </div>
//         </section>

//         {/* Projects Section */}
//         <section id="projects" className="px-6 py-16 bg-[#0e111f]">
//           <div className="max-w-4xl mx-auto">
//             <h2 className="text-4xl font-bold text-cyan-400 mb-6">Projects</h2>
//             <div className="grid gap-6 md:grid-cols-2">
//               <div className="bg-[#141827] p-6 rounded-lg shadow-lg hover:shadow-cyan-500/30 transition">
//                 <h3 className="text-2xl font-semibold mb-2">Portfolio Website</h3>
//                 <p className="text-gray-400">A responsive personal portfolio built with React and Tailwind CSS to showcase my skills and projects.</p>
//               </div>
//               <div className="bg-[#141827] p-6 rounded-lg shadow-lg hover:shadow-cyan-500/30 transition">
//                 <h3 className="text-2xl font-semibold mb-2">Student Management App</h3>
//                 <p className="text-gray-400">A full-stack CRUD app using Node.js, Express, React, and MySQL for managing student records.</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Contact Section */}
//         <section id="contact" className="px-6 py-16 bg-[#101327]">
//           <div className="max-w-2xl mx-auto">
//             <h2 className="text-4xl font-bold text-cyan-400 mb-6">Contact</h2>
//             <p className="text-lg text-gray-300 mb-6">
//               Have a question or want to work together? Reach out via email or connect with me on social media.
//             </p>
//             <div className="space-y-2 text-gray-400">
//               <p><span className="font-semibold text-white">Email:</span> ahmedabdullahihiis@gmail.com</p>
//               <p><span className="font-semibold text-white">Location:</span> Nairobi, Kenya</p>
//             </div>
//           </div>
//         </section>
//       </main>

//       <footer className="bg-[#0a0c1b] text-center py-4 text-gray-400 text-sm">
//         © {new Date().getFullYear()} Ahmed Hiis. All rights reserved.
//       </footer>
//     </>
//   );
// }

// export default App;




















// src/App.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Navbar />
      <main className="bg-[#0a0c1b] text-white pt-24">
        <Hero />

        {/* About Section */}
        <section id="about" className="px-6 py-16 bg-[#0e111f]" data-aos="fade-up">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-cyan-400 mb-6">About Me</h2>
            <p className="text-lg leading-relaxed text-gray-300">
              I’m Ahmed Hiis, a passionate and detail-oriented web developer with a strong focus on front-end technologies.
              I enjoy crafting clean, responsive, and user-friendly websites. With a background in both design and coding,
              I aim to deliver seamless digital experiences. When I’m not coding, I explore UI/UX trends and build side projects.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="px-6 py-16 bg-[#101327]" data-aos="fade-up">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-cyan-400 mb-6">Skills</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-lg text-gray-300">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MySQL</li>
              <li>Git & GitHub</li>
            </ul>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="px-6 py-16 bg-[#0e111f]" data-aos="fade-up">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-cyan-400 mb-6">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-[#141827] p-6 rounded-lg shadow-lg hover:shadow-cyan-500/30 transition">
                <h3 className="text-2xl font-semibold mb-2">Portfolio Website</h3>
                <p className="text-gray-400">A responsive personal portfolio built with React and Tailwind CSS to showcase my skills and projects.</p>
              </div>
              <div className="bg-[#141827] p-6 rounded-lg shadow-lg hover:shadow-cyan-500/30 transition">
                <h3 className="text-2xl font-semibold mb-2">Student Management App</h3>
                <p className="text-gray-400">A full-stack CRUD app using Node.js, Express, React, and MySQL for managing student records.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="px-6 py-16 bg-[#101327]" data-aos="fade-up">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-cyan-400 mb-6">Contact</h2>
            <p className="text-lg text-gray-300 mb-6">
              Have a question or want to work together? Reach out via email or connect with me on social media.
            </p>
            {/* <div className="space-y-2 text-gray-400"> */}
              {/* <p><span className="font-semibold text-white">Email:</span> <a href="mailto:ahmedabdullahihiis@gmail.com" className="text-cyan-400 hover:underline">ahmedabdullahihiis@gmail.com</a></p> */}
             <div class="text-sm text-gray-300">
      Contact me at: 
      <a href="mailto:ahmedabdullahihiis@gmail.com" class="underline hover:text-white transition-colors duration-300 animate-pulse text-orange-500">
        ahmedabdullahihiis@gmail.com
      </a>
              <p><span className="font-semibold text-white">Location:</span> Nairobi, Kenya</p>
            </div>
            

               <a href="Ahmed_Abdullahi_Hiis_CV.docx" class="mt-6 inline-block bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition">
              Download Resume
            </a>
            
          </div>
        </section>
      </main>

      <footer className="bg-[#0a0c1b] text-center py-4 text-gray-400 text-sm">
        © {new Date().getFullYear()} Ahmed Hiis. All rights reserved.
      </footer>
    </>
  );
}

export default App;

