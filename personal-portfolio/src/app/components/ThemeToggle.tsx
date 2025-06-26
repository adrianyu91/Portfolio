'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Default to dark if no theme is set
    const savedTheme = localStorage.getItem('theme');
    if (
      savedTheme === 'dark' ||
      (!savedTheme && !window.matchMedia('(prefers-color-scheme: light)').matches)
    ) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'dark') {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  };

  // Prevent hydration mismatch
  if (!mounted || !theme) return null;

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Dark Mode"
      className="p-2 rounded-md border border-gray-500 dark:border-gray-300"
    >
      {theme === 'dark' ? '🌞' : '🌙'}
    </button>
  );
}