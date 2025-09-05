'use client';

import React, { useState, useEffect } from 'react';

const quotes = [
  "Philippians 4:13 – I can do all things through Christ who strengthens me.",
  "Jeremiah 29:11 – For I know the plans I have for you, declares the Lord.",
  "Psalm 23:1 – The Lord is my shepherd; I shall not want.",
  "Romans 12:12 – Be joyful in hope, patient in affliction, faithful in prayer.",
  "Isaiah 41:10 – Fear not, for I am with you; be not dismayed, for I am your God.",
  "Proverbs 3:5-6 – Trust in the Lord with all your heart, and lean not on your own understanding.",
  "Matthew 5:16 – Let your light shine before others, that they may see your good deeds.",
  "Psalm 46:1 – God is our refuge and strength, an ever-present help in trouble.",
  "1 Corinthians 16:14 – Let all that you do be done in love.",
  "Psalm 37:4 – Delight yourself in the Lord, and He will give you the desires of your heart.",
  "Ephesians 2:10 – For we are God’s handiwork, created in Christ Jesus to do good works.",
];

export default function BibleQuote() {
  const [quoteIndex, setQuoteIndex] = useState(
    Math.floor(Math.random() * quotes.length) //Randomly select a quote on initial load
  );
  const [displayedText, setDisplayedText] = useState('');
  const [typing, setTyping] = useState(true);

  // Typing effect
  useEffect(() => {
    if (!typing) return;

    const currentQuote = quotes[quoteIndex];
    let charIndex = 0;

    const interval = setInterval(() => {
      setDisplayedText(currentQuote.slice(0, charIndex + 1));
      charIndex++;

      if (charIndex === currentQuote.length) {
        clearInterval(interval);
        setTyping(false);
      }
    }, 75); // typing speed (ms per character)

    return () => clearInterval(interval);
  }, [typing, quoteIndex]);

  // Wait a bit, then move to next quote
  useEffect(() => {
    if (typing) return;

    const timeout = setTimeout(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
      setDisplayedText('');
      setTyping(true);
    }, 2500); // pause between quotes

    return () => clearTimeout(timeout);
  }, [typing]);

  return (
    <p className="text-center text-gray-600 dark:text-gray-300 max-w-xl mt-4 font-serif italic min-h-[3rem]">
      {displayedText}
      <span className="animate-blink">|</span>
    </p>
  );
}
