import React, { useState, useEffect } from 'react';

const navItems = [
  { id: 'hero', number: '01' },
  { id: 'about', number: '02' },
  { id: 'skills', number: '03' },
  { id: 'project-1', number: '04' },
  { id: 'project-2', number: '05' },
  { id: 'project-3', number: '06' },
  { id: 'contact', number: '07' },
];

const SideNav = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      let currentId = 'hero';
      
      // 1. Check our main vertical sections
      const verticalSections = ['hero', 'about', 'skills', 'projects', 'contact'];
      
      verticalSections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section has scrolled past the middle of the screen
          if (rect.top <= window.innerHeight / 2) {
            currentId = id;
          }
        }
      });

      // 2. If we are currently trapped inside the horizontal Projects section
      if (currentId === 'projects') {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
          const rect = projectsSection.getBoundingClientRect();
          // Calculate how far down the 500vh container we have scrolled (0 to 1)
          const scrollProgress = Math.abs(rect.top) / (rect.height - window.innerHeight);
          
          // Map that percentage directly to your project slides
          if (scrollProgress < 0.15) currentId = 'skills'; // Still transitioning in
          else if (scrollProgress >= 0.15 && scrollProgress < 0.35) currentId = 'project-1';
          else if (scrollProgress >= 0.35 && scrollProgress < 0.55) currentId = 'project-2';
          else if (scrollProgress >= 0.55) currentId = 'project-3';
        }
      }

      setActiveSection(currentId);
    };

    // Run once on load to catch the initial position, then listen to scrolling
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (id.startsWith('project-')) {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        const startTop = projectsSection.offsetTop;
        const totalScrollable = projectsSection.offsetHeight - window.innerHeight;
        
        let targetProgress = 0;
        if (id === 'project-1') targetProgress = 0.25;
        if (id === 'project-2') targetProgress = 0.45;
        if (id === 'project-3') targetProgress = 0.65;

        window.scrollTo({
          top: startTop + (totalScrollable * targetProgress),
          behavior: 'smooth'
        });
      }
    } else {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50">
      <ul className="flex flex-col gap-6 relative">
        <div className="absolute right-[5px] top-0 h-full w-[1px] bg-white/10 -z-10"></div>

        {navItems.map((item) => (
          <li 
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`cursor-pointer text-xs font-mono tracking-widest transition-all duration-300 ${
              activeSection === item.id 
                ? 'text-white scale-125 font-bold' // Pops out when active
                : 'text-gray-600 hover:text-gray-300' // Dim when inactive
            }`}
          >
            {item.number}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNav;