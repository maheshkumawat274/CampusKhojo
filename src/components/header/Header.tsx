import type React from 'react';
import { useState, useEffect } from 'react';
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';

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
    <header className={`sticky top-0 z-50   px-4 md:px-6 lg:px-8 transition-colors duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
      <button
          className="block md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          data-menu-button
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Logo for mobile */}
        <div className="md:hidden">
        <div className='flex items-center'>
            <img src="./images/logo.png" alt="Logo" className="h-14 w-auto" />
            <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-black'>Campus<span className='text-gray-600'>Khojo</span></h1>
            </div>
        </div>

        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} absolute top-full left-0 w-full bg-white shadow-lg z-50 flex-col py-2 md:py-0 md:shadow-none md:static md:flex md:flex-row md:w-auto md:bg-transparent`}
          data-menu-container
        >
          {/* Logo for desktop */}
          <div className="hidden md:block mr-8 ">
            <div className='flex items-center'>
            <img src="./images/logo.png" alt="Logo" className="h-28 w-auto" />
            <h1 className='text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-gray-700'>Campus<span className='text-gray-400'>Khojo</span></h1>
            </div>
          </div>
          <ul className="flex flex-col md:flex-row pt-9">
            <li className="py-2 px-6 md:px-4 border-b border-gray-100 md:border-none">
              <Link to='/'>
              <a className="block text-blue-500 font-medium border-b-2 hover:border-blue-500 pb-1">HOME</a>
              </Link>
            </li>
            <li className="py-2 px-6 md:px-4 border-b border-gray-100 md:border-none">
              <Link to='/about'>
              <a className="block text-blue-500 font-medium border-b-2 hover:border-blue-500 pb-1">ABOUT</a>
              </Link>
            </li>
            <li className="py-2 px-6 md:px-4">
              <Link to='/contact'>
              <p className="block text-blue-500 transition-colors border-b-2 hover:border-blue-500 pb-1">CONTACT US</p>
              </Link>
            </li>
          </ul>
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
        <FaPhoneAlt className="h-5 w-5 text-black" />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/916239180723"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full transition-colors hover:scale-110"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="h-5 w-5 text-black" />
      </a>
    </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
