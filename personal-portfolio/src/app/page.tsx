//import Image from "next/image";
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';

export default function Home() {
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
          <h1 className="text-6xl font-extrabold text-gray-900 dark:text-white">Adrian Yu</h1>
          <p className="text-2xl mt-4 text-gray-700 dark:text-gray-300">
            Computer Engineering Student
          </p>
      </section>
      {/* About Section */}
      <AboutSection />

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex flex-col justify-center items-center">
        {/* Project cards */}
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex flex-col justify-center items-center">
        {/* Contact info */}
      </section>
    </main>
  );
}
