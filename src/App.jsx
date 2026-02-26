import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Header from './components/Header';
import SideNav from './components/SideNav';

function App() {
  return (
    <div className=" min-h-screen text-white relative">     
      <Header />
      <SideNav />
      
      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <Projects />
      </main>
      
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;