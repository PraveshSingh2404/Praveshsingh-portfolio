import React from 'react';

function Header() {
  const handleScrollToContact = () => {
    // Finds the element with the ID 'contact' and smooth scrolls to it
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between px-8 md:px-12 py-8 bg-transparent z-50">
      
      {/* Logo Styling */}
      <h1 className="text-2xl md:text-3xl font-bold text-white tracking-[0.15em] m-0">
        PS
      </h1>
      
      {/* Contact Button Styling */}
      <button 
        onClick={handleScrollToContact}
        className="bg-transparent text-white border border-white/50 px-6 py-2.5 rounded text-base font-semibold transition-all duration-300 hover:bg-white hover:text-black cursor-pointer"
      >
        Contact
      </button>

    </header>
  );
}

export default Header;