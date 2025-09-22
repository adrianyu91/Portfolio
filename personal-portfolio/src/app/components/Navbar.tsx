'use client';

import { useTheme } from 'next-themes';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <nav
      className={`sticky top-0 z-50 shadow-sm transition-colors duration-500 ${
        isDark ? 'bg-[#0f172a] text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Name */}
        <div className="text-xl font-bold">Adrian Yu</div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 items-center font-medium">
          {['home', 'about', 'projects', 'contact'].map((section) => (
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
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              Resume
            </a>
          </li>
          <li><ThemeToggle /></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
