import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import myphoto from "../assets/myphoto.jpeg";

const Hero = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const handleScrollToContact = () => {
    // Finds the element with the ID 'contact' and smooth scrolls to it
    const contactSection = document.getElementById('projects');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.7]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section
      ref={targetRef}
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-10 md:px-24 pt-20 md:pt-0 overflow-hidden bg-black"
    >
      {/* LEFT SIDE */}
      <motion.div
        style={{ scale, opacity, y }}
        className="w-full md:w-3/5 flex flex-col justify-center z-10 origin-left"
      >
        <h1 className="text-5xl md:text-7xl xl:text-8xl font-black uppercase tracking-tight leading-none text-white">
          Pravesh <br /> Singh
        </h1>

        <h2 className="text-lg md:text-2xl mt-6 text-gray-400 font-light">
          React Developer & Frontend Engineer
        </h2>

        <p className="max-w-lg mt-6 text-gray-300 text-base md:text-lg">
          I build modern, scalable, and high-performance web applications using
          React, JavaScript, and Tailwind CSS. Passionate about clean UI,
          smooth animations, API integration, and real-world problem solving.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex gap-4">
          <button onClick={handleScrollToContact} className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all duration-300">
            View Projects
          </button>

          <a
          href="mailto:yourgmail@gmail.com" className="px-6 py-3 border border-white/30 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300">
            Hire Me
          </a>
        </div>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        style={{ scale, opacity, y }}
        className="w-full md:w-2/5 mt-16 md:mt-0 flex justify-center md:justify-end relative origin-right"
      >
        <div className="relative group w-64 h-64 md:w-80 md:h-80 xl:w-96 xl:h-96">
          <div className="absolute inset-0 bg-purple-600 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>

          <img
            src={myphoto}
            alt="Pravesh Singh"
            className="relative w-full h-full object-cover rounded-full border-2 border-white/10 shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-500 ease-out group-hover:scale-105"
          />
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        style={{ opacity: indicatorOpacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <span className="text-sm text-gray-400 tracking-widest uppercase">
          Scroll Down
        </span>
      </motion.div>
    </section>
  );
};

export default Hero;