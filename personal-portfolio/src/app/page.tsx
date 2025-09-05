//import Image from "next/image";
'use client';

import Navbar from './components/Navbar';
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
