import type React from 'react';
import { useState, useEffect } from 'react';
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isMenuClick = target.closest('[data-menu-container]');
      const isMenuButton = target.closest('[data-menu-button]');

      if (isMenuOpen && !isMenuClick && !isMenuButton) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className={`sticky top-0 z-50 py-3 md:py-4 px-4 md:px-6 lg:px-8 transition-colors duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
       

        {/* Logo for mobile */}
        <div className="md:hidden">
        <div className='flex items-center'>
            <img src="./images/logo.png" alt="Logo" className="h-14 w-auto" />
            <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-purple-700'>CampusKhojo</h1>
            </div>
        </div>

        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} absolute top-full left-0 w-full bg-white shadow-lg z-50 flex-col py-2 md:py-0 md:shadow-none md:static md:flex md:flex-row md:w-auto md:bg-transparent`}
          data-menu-container
        >
          {/* Logo for desktop */}
          <div className="hidden md:block mr-8 ">
            <div className='flex items-center'>
            <img src="./images/logo.png" alt="Logo" className="h-28 w-auto" />
            <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-purple-700'>CampusKhojo</h1>
            </div>
          </div>
        </nav>

        {/* Icons Section */}
        <div className="flex items-center space-x-2 md:space-x-4">
        <div className="flex items-center space-x-2 md:space-x-4">
      {/* Call Button */}
      <a
        href="tel:+916239180723"
        className="p-2 rounded-full transition-colors hover:scale-110"
        aria-label="Call"
      >
        <FaPhoneAlt className="h-5 w-5 text-white" />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/916239180723"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full transition-colors hover:scale-110"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="h-5 w-5 text-white" />
      </a>
    </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
