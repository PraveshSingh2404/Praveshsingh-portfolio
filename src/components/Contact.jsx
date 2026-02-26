import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <footer
      id="contact"
      className="relative py-24 px-10 md:px-24 bg-black text-center flex flex-col items-center justify-center min-h-[70vh]"
    >
      {/* Subtle Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl opacity-30 pointer-events-none" />

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold max-w-3xl mb-8 leading-tight text-white relative z-10"
      >
        Let’s Build Something Amazing Together
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl relative z-10"
      >
        Open for internships, freelance projects, and full-time opportunities.
        If you have an idea or opportunity in mind, let's connect.
      </motion.p>

      {/* Email Display */}
      <a
        href="mailto:praveshsingh2424@gmail.com"
        className="my-6 text-lg md:text-xl font-mono text-gray-400 hover:text-green-300 transition-colors"
      >
        praveshsingh2424@gmail.com
      </a>
      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-6 relative z-10">
        <a
          href="mailto:praveshsingh2424@gmail.com"
          className="px-8 py-4 bg-white text-black font-semibold  hover:bg-gray-200 transition-all duration-300"
        >
          Send Email
        </a>

       
      </div>

    </footer>
  );
};

export default Contact;