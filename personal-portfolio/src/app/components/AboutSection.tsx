'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiC,
  SiHtml5,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiGit,
  SiFlask,
} from 'react-icons/si';

const languages = [
  { icon: <img src="/java-4.svg" alt="Java" className="w-12 h-12 object-contain" />, name: 'Java' },
  { icon: <SiJavascript size={32} color="#f7df1e" />, name: 'JavaScript' },
  { icon: <SiTypescript size={32} color="#3178C6" />, name: 'TypeScript' },
  { icon: <SiPython size={32} color="#3776AB" />, name: 'Python' },
  { icon: <SiC size={32} color="#A8B9CC" />, name: 'C' },
  { icon: <SiHtml5 size={32} color="#E34F26" />, name: 'HTML' },
  { icon: <img src="/css-3.svg" alt="CSS3" className="w-8 h-8 object-contain" />, name: 'CSS' },
  { icon: <img src="/matlab.svg" alt="MATLAB" className="w-8 h-8 object-contain" />, name: 'MATLAB' },
];

const technologies = [
  { icon: <SiReact size={32} color="#61DAFB" />, name: 'React' },
  { icon: <SiNextdotjs size={32} color="#000000" />, name: 'Next.js' },
  { icon: <SiNodedotjs size={32} color="#3C873A" />, name: 'Node.js' },
  { icon: <SiTailwindcss size={32} color="#38BDF8" />, name: 'Tailwind' },
  { icon: <img src="/amazon-web-services-2.svg" alt="AWS" className="w-8 h-8 object-contain" />, name: 'AWS' },
  { icon: <SiGit size={32} color="#F05032" />, name: 'Git' },
  { icon: <img src="/azure-2.svg" alt="Azure" className="w-8 h-8 object-contain" />, name: 'Azure' },
  { icon: <SiFlask size={32} color="#000000" />, name: 'Flask' },
];

export default function AboutSection() {
  const { theme } = useTheme();

  return (
    <section
      id="about"
      className={`py-16 px-4 sm:px-6 md:px-8 transition-colors duration-500
                  ${theme === 'dark' ? 'bg-[#0f172a] text-white' : 'bg-white text-black'}`}
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="scroll-fade text-4xl sm:text-5xl font-semibold mb-6 text-center">
          About Me
        </h2>
        <p className="scroll-fade max-w-2xl text-lg sm:text-xl text-center mb-12">
          I&apos;m passionate about full-stack development and love building clean,
          efficient, and user-friendly applications. I enjoy solving real-world
          problems through code and constantly learning new technologies to level
          up my skills. My journey in Computer Engineering has pushed me to think
          both logically and creatively, and I bring that mindset into every
          project I build.
        </p>

        {/* Languages */}
        <div className="w-full mb-12">
          <h3 className="scroll-fade text-2xl font-semibold mb-4 text-center">Languages</h3>
          <div className="scroll-fade flex flex-wrap justify-center gap-6">
            {languages.map(({ icon, name }) => (
              <div key={name} className="flex flex-col items-center text-center w-20">
                <div className="h-10 flex items-center justify-center">{icon}</div>
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="w-full">
          <h3 className="scroll-fade text-2xl font-semibold mb-4 text-center">Technologies</h3>
          <div className="scroll-fade flex flex-wrap justify-center gap-6">
            {technologies.map(({ icon, name }) => (
              <div key={name} className="flex flex-col items-center text-center w-20">
                <div className="h-10 flex items-center justify-center">{icon}</div>
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
