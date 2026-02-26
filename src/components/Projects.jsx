import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const projectData = [
  {
    id: 1,
    title: "Library Management System",
    type: "Full-Stack Application",
    description:
      "A full-stack web application built using Node.js, Express, MongoDB, and React. Features authentication, admin management, secure API handling, and modern UI.",
    tech: "React, Node.js, Express, MongoDB",
    live: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Interactive Proposal Website",
    type: "Creative Frontend Project",
    description:
      "An interactive proposal website built with React and smooth animations. Fully responsive and designed for engagement.",
    tech: "React, Tailwind CSS, Framer Motion",
    live: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Enterprise Dashboard UI",
    type: "SaaS Dashboard",
    description:
      "A modern dark-themed dashboard with dynamic stats, modular structure, and advanced state management.",
    tech: "React, TypeScript, Tailwind, Zustand",
    live: "#",
    github: "#",
  },
];

const Projects = () => {
  const targetRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  // 🔥 FIXED OFFSET (Starts at middle of screen)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "end center"],
  });

  // 🔥 Smooth delayed horizontal animation
  const x = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "-80%"]);

  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.85, 1, 1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <>
      <section ref={targetRef} className="relative h-[500vh]" id="projects">
        <motion.div
          style={{ scale, opacity }}
          className="sticky top-0 h-screen flex items-center overflow-hidden bg-[#121212]"
        >
          <motion.div style={{ x }} className="flex w-[500vw]">

            {/* Intro Slide */}
            <div className="w-screen h-screen flex flex-col items-center justify-center px-10">
              <span className="text-blue-400 font-mono tracking-widest text-sm uppercase mb-4">
                Selected Work
              </span>
              <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tight text-white">
                Projects
              </h2>
            </div>

            {/* Project Slides */}
            {projectData.map((project, index) => (
              <div
                key={project.id}
                className="w-screen h-screen flex items-center justify-center px-10 md:px-24"
              >
                <div
                  onClick={() => setSelectedProject(project)}
                  className="cursor-pointer max-w-4xl w-full bg-gray-900/50 hover:bg-gray-800/60 transition-all duration-300 p-10 md:p-16 rounded-2xl border border-white/10"
                >
                  <span className="text-blue-400 font-mono tracking-widest text-sm uppercase">
                    0{index + 1} / {project.type}
                  </span>
                  <h3 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-400">Click to view details →</p>
                </div>
              </div>
            ))}

            {/* Final Slide */}
            <div className="w-screen h-screen flex flex-col items-center justify-center px-10">
              <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white">
                Want to see more?
              </h2>
              <button
                onClick={() =>
                  setSelectedProject({
                    title: "More Projects",
                    description:
                      "Visit my GitHub profile to explore more real-world applications and experiments.",
                    tech: "React, Node.js, MongoDB & More",
                    live: "#",
                    github: "#",
                  })
                }
                className="px-8 py-4 bg-white text-black font-bold rounded"
              >
                View More
              </button>
            </div>

          </motion.div>
        </motion.div>
      </section>

      {/* 🔥 POPUP MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-[#1a1a1a] max-w-2xl w-full p-8 rounded-2xl border border-white/10"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-3xl font-bold text-white mb-4">
                {selectedProject.title}
              </h3>

              <p className="text-gray-300 mb-4">
                {selectedProject.description}
              </p>

              <p className="text-blue-400 mb-6">
                Tech Stack: {selectedProject.tech}
              </p>

              <div className="flex gap-4">
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-black rounded-full font-semibold"
                >
                  Live Demo
                </a>

                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-white/30 text-white rounded-full"
                >
                  GitHub
                </a>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="mt-6 text-gray-400 hover:text-white"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;