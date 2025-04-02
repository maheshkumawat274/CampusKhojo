import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";



const Contactus: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white rounded-lg p-6 max-w-4xl mx-auto">
      {/* Left Side Content */}
      <div className="md:w-1/2 text-center md:text-left mb-4 md:mb-0">
        <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2">Free Guidance Call</h2>
        <p className="text-gray-600 mb-4">Get expert advice on your admission process. Contact us now!</p>
        <div className="flex justify-center md:justify-start space-x-4">
          <a href='tel:+916239180723'className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600">
            <FaPhoneAlt /> Call
          </a>
          <a href="https://wa.me/916239180723" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-600">
            <FaWhatsapp /> WhatsApp
          </a>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="md:w-1/2">
        <img src='./images/49053.jpg' alt="Guidance" className="w-full h-auto rounded-lg" />
      </div>
    </div>
  );
};

export default Contactus;
