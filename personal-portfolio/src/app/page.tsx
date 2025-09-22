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
    <main className="scroll-smooth">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className={`min-h-screen flex flex-col justify-center items-center
                    transition-colors duration-500
                    ${theme === 'dark' ? 'bg-[#0f172a] text-white' : 'bg-white text-black'}`}
      >
        <h1 className="text-6xl font-extrabold opacity-0 translate-y-10 animate-fadeInUp">
          Adrian Yu
        </h1>
        <p className="text-2xl mt-4 opacity-0 translate-y-10 animate-fadeInUp delay-300">
          Computer Engineering Student
        </p>

        {/* Social Links */}
        <div className="scroll-fade flex gap-6 mt-14">
          <a
            href="mailto:adriancsyu@gmail.com"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            aria-label="Email"
          >
            <FaEnvelope size={28} color="currentColor" />
          </a>
          <a
            href="https://github.com/adrianyu91"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            aria-label="GitHub"
          >
            <FaGithub size={28} color="currentColor" />
          </a>
          <a
            href="https://www.linkedin.com/in/adrian-yu-740509215/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={28} color="currentColor" />
          </a>

        </div>


        <div className="scroll-fade flex flex-col items-center gap-4 mt-14">
          <BibleQuote />
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />

    </main>
  );
}
