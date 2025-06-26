'use client';

import {SiJavascript, SiTypescript, SiPython, SiC, SiHtml5, SiReact, SiNextdotjs, SiNodedotjs, SiTailwindcss, SiGit, SiFlask } from 'react-icons/si';

const techClass =
  'flex flex-col items-center justify-center text-center p-4 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-md text-sm';

const languages = [
  {
    icon: <img src="/java-4.svg" alt="Java" className="w-8 h-8" />,
    name: 'Java',
  },
  { icon: <SiJavascript size={24} color="#f7df1e" />, name: 'JavaScript' },    // JS yellow
  { icon: <SiTypescript size={24} color="#3178C6" />, name: 'TypeScript' },    // TS blue
  { icon: <SiPython size={24} color="#3776AB" />, name: 'Python' },            // Python blue
  { icon: <SiC size={24} color="#A8B9CC" />, name: 'C' },                      // C gray-blue
  { icon: (
    <div className="flex space-x-1 items-center">
      <SiHtml5 size={24} color="#E34F26" />
      <img
        src="/css-3.svg"
        alt="CSS3"
        className="w-6 h-6"
      />
    </div>
  ),
  name: 'HTML/CSS',
  }, 
  {
    icon: <img src="matlab.svg" alt="MATLAB" className="w-6 h-6" />,
    name: 'MATLAB',
  }
];

const technologies = [
{ icon: <SiReact size={24} color="#61DAFB" />, name: 'React' },              // React blue
  { icon: <SiNextdotjs size={24} color="#000000" />, name: 'Next.js' },        // Next.js black
  { icon: <SiNodedotjs size={24} color="#3C873A" />, name: 'Node.js' },        // Node green
  { icon: <SiTailwindcss size={24} color="#38BDF8" />, name: 'Tailwind' },     // Tailwind blue
  {
    icon: <img src="amazon-web-services-2.svg" alt="AWS" className="w-6 h-6" />,
    name: 'AWS',
  },
   { icon: <SiGit size={24} color="#F05032" />, name: 'Git' },           // Git red
  {
    icon: <img src="azure-2.svg" alt="Azure" className="w-6 h-6" />,
    name: 'Azure',
  },
{ icon: <SiFlask size={24} color="#000000" />, name: 'Flask' },   
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-4 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100"
    >
      <h2 className="text-4xl font-semibold mb-6">About Me</h2>
      <p className="max-w-2xl text-lg text-center mb-10">
        I'm passionate about full-stack development and love building clean, efficient, and user-friendly applications. I enjoy solving real-world problems through code and constantly learning new technologies to level up my skills. My journey in Computer Engineering has pushed me to think both logically and creatively and I bring that mindset into every project I build.
      </p>

      <div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Languages</h3>
          <div className="grid grid-cols-3 gap-4">
            {languages.map(({ icon, name }) => (
              <div key={name} className={techClass}>
                {icon}
                {name}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Technologies</h3>
          <div className="grid grid-cols-3 gap-4">
            {technologies.map(({ icon, name }) => (
              <div key={name} className={techClass}>
                {icon}
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
