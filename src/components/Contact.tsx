import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

interface ContactusProps {
  title: string;
  description: string;
  phoneNumber: string;
  whatsappNumber: string;
  imageUrl: string;
}

const Contactus: React.FC<ContactusProps> = ({
  title,
  description,
  phoneNumber,
  whatsappNumber,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto">
      {/* Left Side Content */}
      <div className="md:w-1/2 text-center md:text-left mb-4 md:mb-0">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-center md:justify-start space-x-4">
          <a href={`tel:${phoneNumber}`} className="bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-pink-500">
            <FaPhoneAlt /> Call
          </a>
          <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-600">
            <FaWhatsapp /> WhatsApp
          </a>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="md:w-1/2">
        <img src={imageUrl} alt="Guidance" className="w-full h-auto rounded-lg" />
      </div>
    </div>
  );
};

export default Contactus;
