'use client';

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import Navbar from './components/Navbar';
import BibleQuote from './components/BibleQuote';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import { useScrollFade } from "./hooks/useScrollFade";
import { useTheme } from 'next-themes';

export default function Home() {
  const { theme } = useTheme();
  useScrollFade();

  return (
    <main className="scroll-smooth overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className={`flex flex-col justify-center items-center
                    min-h-[80vh] sm:min-h-[90vh] px-4 sm:px-6 md:px-8
                    transition-colors duration-500
                    ${theme === 'dark' ? 'bg-[#0f172a] text-white' : 'bg-white text-black'}`}
      >
        <h1 className="text-4xl sm:text-6xl font-extrabold opacity-0 translate-y-10 animate-fadeInUp text-center leading-tight sm:leading-snug max-w-full">
          Adrian Yu
        </h1>

        <p className="text-lg sm:text-2xl mt-4 sm:mt-6 opacity-0 translate-y-10 animate-fadeInUp delay-300 text-center max-w-xs sm:max-w-md">
          Computer Engineering Student
        </p>

        {/* Social Links */}
        <div className="scroll-fade flex gap-4 sm:gap-6 mt-16 sm:mt-14 flex-wrap justify-center">
          <a
            href="mailto:adriancsyu@gmail.com"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            aria-label="Email"
          >
            <FaEnvelope className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>
          <a
            href="https://github.com/adrianyu91"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            aria-label="GitHub"
          >
            <FaGithub className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>
          <a
            href="https://www.linkedin.com/in/adrian-yu-740509215/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>
        </div>

        {/* Bible Quote */}
        <div className="mt-8 sm:mt-12 w-full max-w-xs sm:max-w-xl text-center">
          <BibleQuote />
        </div>
    </section>

      {/* About Section */}
      <section className={`py-16 sm:py-24 transition-colors duration-500 ${theme === 'dark' ? 'bg-[#0f172a] text-white' : 'bg-white text-black'}`}>
          <AboutSection />
      </section>

      {/* Projects Section */}
      <section className={`py-16 sm:py-24 transition-colors duration-500 ${theme === 'dark' ? 'bg-[#0f172a] text-white' : 'bg-gray-100 text-black'}`}>
        <ProjectsSection />
      </section>

      {/* Contact Section */}
      <section className={`py-16 sm:py4 transition-colors duration-500 ${theme === 'dark' ? 'bg-gray-950 text-white' : 'bg-gray-100 text-black'}`}>
          <ContactSection />
      </section>
    </main>
  );
}
