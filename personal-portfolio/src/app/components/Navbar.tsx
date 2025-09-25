'use client';

import { useState } from 'react';
import { useTheme } from 'next-themes';
import ThemeToggle from './ThemeToggle';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const { theme } = useTheme();
  const textColor = theme === 'dark' ? 'text-white' : 'text-black';
  const bgColor = theme === 'dark' ? 'bg-[#0f172a]' : 'bg-white';
  const [mobileOpen, setMobileOpen] = useState(false);

  const sections = ['home', 'about', 'projects', 'contact'];

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-md transition-colors duration-500 shadow-md ${bgColor} ${textColor}`}
    >

      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Name */}
        <div className="text-xl font-bold">Adrian Yu</div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 items-center font-medium">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className="hover:text-blue-500 transition-colors duration-300"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/Adrian_Yu_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Right side: theme toggle + mobile button */}
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="focus:outline-none"
            >
              {mobileOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className={`md:hidden flex flex-col items-center space-y-4 py-4 transition-all duration-300 ${bgColor} ${textColor}`}
        >
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="text-lg hover:text-blue-500 transition-colors duration-300"
              onClick={() => setMobileOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
          <a
            href="/Adrian_Yu_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-blue-500 transition-colors duration-300"
            onClick={() => setMobileOpen(false)}
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
