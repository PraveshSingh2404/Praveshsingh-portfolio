import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
// Import the tech logos from react-icons
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaSass, FaGitAlt, FaFigma } from 'react-icons/fa';
import { SiJavascript, SiNextdotjs, SiExpress, SiMongodb, SiFramer } from 'react-icons/si';

// Updated to include the logo components and their brand colors
const skillsList = [
  { name: "JavaScript", icon: <SiJavascript className="text-4xl mb-3 text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-4xl mb-3 text-blue-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-4xl mb-3 text-white" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-4xl mb-3 text-green-500" /> },
  { name: "Express", icon: <SiExpress className="text-4xl mb-3 text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-4xl mb-3 text-green-600" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-4xl mb-3 text-purple-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-4xl mb-3 text-blue-500" /> },
  { name: "SASS", icon: <FaSass className="text-4xl mb-3 text-pink-500" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-4xl mb-3 text-orange-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-4xl mb-3 text-red-500" /> },
  { name: "Figma", icon: <FaFigma className="text-4xl mb-3 text-pink-400" /> }
];

const Skills = () => {
  // 1. Reference the section to track when it enters and leaves the screen
  const targetRef = useRef(null);

  // 2. Track the scroll progress for this specific section
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  // 3. Map the scroll progress to our 3D effects
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.7, 1, 1, 0.7]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);

  return (
    <section ref={targetRef} className="min-h-screen py-20 px-10 md:px-24 flex flex-col justify-center overflow-hidden relative">
      
      {/* TEXT CONTENT */}
      <motion.div 
        style={{ scale, opacity, y }}
        className="origin-bottom-left"
      >
        <h2 className="text-4xl font-bold mb-6 text-white">Skills & Experience</h2>
        <p className="max-w-2xl mb-10 text-gray-300">
          I specialize in crafting engaging and high-quality client-side web applications. 
          My experience includes HTML, CSS, and JavaScript, building full-stack projects with React and Node, 
          developing custom features, and coding interactive layouts.
        </p>
      </motion.div>
      
      {/* GRID CONTAINER: Tech Stack Logos/Boxes */}
      <motion.div 
        style={{ scale, opacity, y }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 origin-top"
      >
        {skillsList.map((skill, index) => (
          // Added 'group' class to control hover states for inner elements
          <div 
            key={index} 
            className="group border border-white/10 p-6 flex flex-col items-center justify-center hover:bg-white transition-all duration-300 cursor-pointer rounded-sm shadow-lg"
          >
            {/* The Logo */}
            {/* group-hover forces the icon to turn black when the box turns white */}
            <div className="group-hover:text-black transition-colors duration-300 group-hover:[&>*]:text-black">
              {skill.icon}
            </div>
            
            {/* The Text */}
            <span className="font-medium tracking-wider text-gray-400 group-hover:text-black transition-colors duration-300">
              {skill.name}
            </span>
          </div>
        ))}
      </motion.div>

    </section>
  );
};

export default Skills;