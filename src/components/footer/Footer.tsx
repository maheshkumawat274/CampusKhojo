import type React from 'react';
import { Link } from 'react-router-dom';
import { CiYoutube } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 mt-10 mb-10 px-2 sm:px-6">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          

          <div className="space-y-4">
          <h2 className="text-xl font-bold mb-3">About CampusKhojo</h2>
          <p className="text-gray-400">
            CampusKhojo is your go-to platform for finding the best educational resources, career guidance, and campus-related updates.
          </p>
          </div>

          <div className="space-y-4">
          <h2 className="text-xl font-bold mb-3">Quick Links</h2>
          <ul className="text-gray-400 space-y-2">
            <li><a className="hover:text-blue-500"><Link to='/'>Home</Link></a></li>
            <li><a className="hover:text-blue-500"><Link to='/about'>About</Link></a></li>
            <li><a className="hover:text-blue-500"><Link to='/contact'>Contact</Link></a></li>
          </ul>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-lg font-bold mb-2 sm:mb-4">Connect With Us</h2>
              <div className="flex space-x-4 mb-2">
                <a className='hover:scale-110' href='href="https://www.youtube.com/@campuskhoj'><CiYoutube size={30}/></a>
                <a href="https://wa.me/916239180723" aria-label="Call" className='hover:scale-110'><FaWhatsapp size={30}/></a>
                <a href="tel:+916239180723" target="_blank" rel="noopener noreferrer"  aria-label="WhatsApp" className='hover:scale-110'><IoIosCall size={30}/></a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium mb-2 sm:mb-4">Newsletter</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-l focus:outline-none"
                />
                <button
                  className="bg-blue-500 hover:bg-blue-600 transition-colors px-4 py-2 text-white rounded-r"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Campuskhojo . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

