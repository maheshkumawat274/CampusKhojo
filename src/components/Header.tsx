import type React from 'react';
import { useState, useEffect } from 'react';

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
            <h1 className='text-xl font-bold text-blue-700'>CampusKhojo</h1>
            </div>
        </div>

        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} absolute top-full left-0 w-full bg-white shadow-lg z-50 flex-col py-2 md:py-0 md:shadow-none md:static md:flex md:flex-row md:w-auto md:bg-transparent`}
          data-menu-container
        >
          {/* Logo for desktop */}
          <div className="hidden md:block mr-8 ">
            <div className='flex items-center'>
            <img src="./images/logo.png" alt="Logo" className="h-28 w-auto" />
            <h1 className='text-xl font-bold text-blue-700'>CampusKhojo</h1>
            </div>
          </div>
        </nav>

        {/* Icons Section */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors" aria-label="Email">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </button>
          <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors" aria-label="Profile">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
