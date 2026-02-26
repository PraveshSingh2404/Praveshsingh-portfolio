import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.7, 1, 1, 0.7]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);

  return (
    <section
      ref={targetRef}
      className="min-h-screen py-20 px-10 md:px-24 flex flex-col md:flex-row gap-12 items-center overflow-hidden relative bg-black"
    >
      {/* LEFT SIDE */}
      <motion.div
        style={{ scale, opacity, y }}
        className="md:w-1/2 origin-left"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          About Me
        </h2>

        <h3 className="text-2xl mb-4 text-blue-400">
          Hi, I'm Pravesh Singh
        </h3>

        <h4 className="text-xl mb-6 font-semibold text-gray-200">
          React Developer | Frontend Engineer | Problem Solver
        </h4>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        style={{ scale, opacity, y }}
        className="md:w-1/2 space-y-6 text-gray-300 origin-right text-base md:text-lg"
      >
        <p>
          I am a passionate frontend developer specializing in building
          responsive, scalable, and interactive web applications using React,
          JavaScript, and modern UI frameworks like Tailwind CSS.
        </p>

        <p>
          I enjoy transforming ideas into real-world digital products. From
          designing clean user interfaces to integrating APIs and managing
          application state, I focus on writing clean, maintainable, and
          efficient code.
        </p>

        <p>
          I continuously improve my skills by building real projects,
          exploring advanced JavaScript concepts, and understanding how
          full-stack systems work together.
        </p>

        <blockquote className="border-l-4 border-blue-500 pl-4 italic mt-8 text-white">
          "Consistency and continuous learning build great developers."
        </blockquote>
      </motion.div>
    </section>
  );
};

export default About;