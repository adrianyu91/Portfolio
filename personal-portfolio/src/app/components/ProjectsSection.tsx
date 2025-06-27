'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { IconType } from 'react-icons';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';
import {SiTypescript, SiPython, SiReact, SiNextdotjs, SiNodedotjs, SiExpress } from 'react-icons/si';

type TechItem = {
  icon?: IconType;      // for SI components
  color?: string;     // for colored icons
  imgSrc?: string;      // for image-based logos
  name: string;         // for alt/title
};

type Project = {
  title: string;
  description: string;
  github: string;
  images: string[];
  tech?: TechItem[];
};

const projects: Project[] = [
  {
    title: 'HoopLab',
    description: 'A basketball workout tracker that logs drills, times, and effort using React + Azure Cosmos DB + Entra External ID.',
    github: 'https://github.com/adrianyu91/HoopLab',
    images: [
      '/hooplab/HoopLab_workouts.png',
      '/hooplab/HoopLab_plans.png',
    ],
    tech: [
      { icon: SiReact, color: "#61DAFB", name: 'React' },
      { icon: SiTypescript, color: '#3178C6', name: 'TypeScript' },
      { icon: SiExpress, color: '#000000', name: 'Express' },
      { icon: SiNodedotjs, color: '#339933', name: 'Node.js' },
      { imgSrc: '/azure-2.svg', name: 'Azure' },
    ],
  },
  {
    title: 'The Reading Room',
    description: 'This is a JavaFX bookstore application that allows users to browse, search and purchase books. The application has been developed using the NetBeans IDE and Scene Builder.',
    github: 'https://github.com/adrianyu91/Bookstore-Application',
    images: [
      '/reading_room/bookstore_1.png',
      '/reading_room/bookstore_2.png',
      '/reading_room/bookstore_3.png',
    ],
    tech: [
      { imgSrc: '/java-4.svg', name: 'Java' },
    ]
  },
  {
    title: 'Ai Code Sentinel',
    description: 'AI Debugger is a Python-based debugging assistant that integrates with VS Code. It monitors changes to Python scripts, runs them automatically, and provides AI-powered suggestions for error fixes using the Gemini API.',
    github: 'https://github.com/adrianyu91/AI-Code-Sentinel',
    images: ['/ai_code_sentinel/Ai_Code_Sentinel.png'],
    tech: [
      { icon: SiPython, color: '#3776AB', name: 'Python' },
      //{ imgSrc: '/logos/gemini.svg', name: 'Gemini API' }, // custom
    ],
  },
  {
    title: 'Sync Budget',
    description: 'Application to connect all your bank accounts to track spending and budgeting.',
    github: 'https://github.com/adrianyu91',// sync-budget is in progress
    images: ['/in_progress.png'],
    tech: [
      { icon: SiNextdotjs, color: '#000000', name: 'Next.js' },
      { icon: SiReact, color: '#61DAFB', name: 'React' },
      { icon: SiTypescript, color: '#3178C6', name: 'TypeScript' },
      { imgSrc: '/azure-2.svg', name: 'Azure' },
    ],
  },
  {
    title: 'Fake News Detector',
    description: 'NLP project to detect misleading news information using TF-IDF and Random Forest.',
    github: 'https://github.com/yourusername',// in progress
    images: ['/in_progress.png'],
    tech: [
      { icon: SiPython, color: '#3776AB', name: 'Python' },
    ],
    
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
    >
      <h2 className="text-4xl font-semibold mb-8">Projects</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        className="w-full max-w-10xl"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.title}>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 p-12 min-h-[32rem]">
              {/* Left: Image(s) */}
              <div className="w-full md:w-1/2">
                {project.images.length > 1 ? (
                  <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={10}
                    className="rounded-lg"
                  >
                    {project.images.map((src, idx) => (
                      <SwiperSlide key={idx}>
                        <Image
                          src={src}
                          alt={`${project.title} screenshot ${idx + 1}`}
                          width={800}
                          height={500}
                          className="rounded-lg shadow-md object-cover w-full h-auto"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    width={800}
                    height={500}
                    className="rounded-lg shadow-md object-cover w-full h-auto"
                  />
                )}
              </div>

              {/* Right: Text */}
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                {project.tech && (
                  <div className="flex flex-wrap items-center gap-3 mt-2">
                    {project.tech.map((techItem, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-200 dark:bg-gray-800 rounded-full p-2 flex items-center justify-center shadow"
                        title={techItem.name}
                      >
                        {techItem.icon ? (
                          <techItem.icon
                            size={28}
                            color={techItem.color || 'currentColor'}
                          />
                        ) : techItem.imgSrc ? (
                          <Image
                            src={techItem.imgSrc}
                            alt={techItem.name}
                            width={28}
                            height={28}
                            className="object-contain"
                          />
                        ) : null}
                      </div>
                    ))}
                  </div>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View on GitHub →
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
