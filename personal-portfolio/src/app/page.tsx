//import Image from "next/image";
'use client';

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import Navbar from './components/Navbar';
import BibleQuote from './components/BibleQuote';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import { useScrollFade } from "./hooks/useScrollFade";

export default function Home() {
  useScrollFade();
  return (
    <main className="scroll-smooth">
      {/* Navbar */}
      <main className="scroll-smooth">
      <Navbar />
    </main>
  
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-gray-900">
        <h1 className="text-6xl font-extrabold text-gray-900 dark:text-white 
                      opacity-0 translate-y-10 animate-fadeInUp">
          Adrian Yu
        </h1>
        <p className="text-2xl mt-4 text-gray-700 dark:text-gray-300 
                      opacity-0 translate-y-10 animate-fadeInUp delay-300">
          Computer Engineering Student
        </p>
         {/* Social Links */}
        <div className="scroll-fade flex gap-6 mt-14">
          <a
            href="mailto:adriancsyu@gmail.com"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            aria-label="Email"
          >
            <FaEnvelope size={28} />
          </a>
          <a
            href="https://github.com/adrianyu91"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            aria-label="GitHub"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/adrian-yu-740509215/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={28} />
          </a>
        </div>
        <div className="scroll-fade flex flex-col items-center gap-4 mt-14">
          <div className="flex gap-6">
            {/* social icons */}
          </div>
          <BibleQuote />
        </div>
      </section>
      {/* About Section */}
      <AboutSection />

      {/* Projects Section */}
      <ProjectsSection/>

      {/* Contact Section */}
      <ContactSection/>
    </main>
  );
}
