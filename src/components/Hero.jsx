import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import myphoto from "../assets/myphoto.jpeg";

const Hero = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const handleScrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section
      ref={targetRef}
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between px-6 sm:px-10 md:px-20 lg:px-24 py-16 md:py-0 overflow-hidden bg-black"
    >
      {/* LEFT SIDE */}
      <motion.div
        style={{ scale, opacity, y }}
        className="w-full md:w-3/5 flex flex-col justify-center text-center md:text-left z-10"
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-black uppercase tracking-tight leading-tight text-white">
          Pravesh <br className="hidden sm:block" /> Singh
        </h1>

        <h2 className="text-base sm:text-lg md:text-2xl mt-4 text-gray-400 font-light">
          React Developer & Frontend Engineer
        </h2>

        <p className="max-w-md mx-auto md:mx-0 mt-5 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
          I build modern, scalable, and high-performance web applications using
          React, JavaScript, and Tailwind CSS. Passionate about clean UI,
          smooth animations, API integration, and real-world problem solving.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button
            onClick={handleScrollToProjects}
            className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all duration-300"
          >
            View Projects
          </button>

          <a
            href="mailto:praveshsingh2424@gmail.com"
            className="px-6 py-3 border border-white/30 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            Hire Me
          </a>
        </div>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        style={{ scale, opacity, y }}
        className="w-full md:w-2/5 mt-14 md:mt-0 flex justify-center md:justify-end"
      >
        <div className="relative group w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 xl:w-96 xl:h-96">
          <div className="absolute inset-0 bg-purple-600 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>

          <img
            src={myphoto}
            alt="Pravesh Singh"
            className="relative w-full h-full object-cover rounded-full border border-white/10 shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-500 ease-out group-hover:scale-105"
          />
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity: indicatorOpacity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <span className="text-xs sm:text-sm text-gray-400 tracking-widest uppercase">
          Scroll Down
        </span>
      </motion.div>
    </section>
  );
};

export default Hero;