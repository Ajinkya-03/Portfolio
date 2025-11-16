import React from 'react';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';
import resumePDF from "../assets/Ajinkya Patil Resume(1).pdf";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="flex items-center justify-center min-h-screen bg-black transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center h-full text-center">
        <div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="animate-fade-in-up inline-block">Hi, I'm </span>
            <span className="text-blue-400inline-block animate-name-reveal"> Ajinkya Patil</span>
          </h1>

          <p
            className="py-7 text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: '0.5s', animationFillMode: 'both' }}
          >
            I am a Frontend Engineer passionate about building clean, responsive, and user-friendly web applications. With expertise in React, Tailwind CSS, and modern web technologies, I focus on creating seamless digital experiences that blend performance with design.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up"
            style={{ animationDelay: '1s', animationFillMode: 'both' }}
          >
            <a
              href={resumePDF}
              download="Ajinkya Patil Resume(1).pdf"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </a>

            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/Ajinkya-03"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/ajinkyapatil3001/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:patilajink2005@gmail.com"
                className="p-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce text-gray-300 hover:text-blue-400 transition-colors duration-300"
            style={{ animationDelay: '1.5s', animationFillMode: 'both' }}
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;